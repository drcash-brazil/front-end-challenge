import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import * as S from "./styles";

export default function Checkout() {
  const history = useHistory();

  const [sendValue, setSendValue] = useState(false);

  const [data] = useState(() => {
    return JSON.parse(localStorage.getItem("Infos"));
  });

  const result = Object.values(data);

  async function registerClinic() {
    try {
      const resp = await axios.post(
        `https://6157ba858f7ea600179852ad.mockapi.io/api/v1/iclinic`,
        data
      );

      toast.success(
        "Clínica cadastrada com sucesso. Você será redirecionado para a listagem de clínicas",
        {
          position: "top-center",
        }
      );
      setSendValue(true);
      console.log(resp);
      localStorage.removeItem("Infos");
      setTimeout(function () {
        history.push("/clinics");
      }, 3000);
    } catch (err) {
      toast.error("Não foi possivel cadastrar a clínica", {
        position: "top-center",
      });
      setSendValue(false);
    }
  }

  function goBack() {
    history.push("/address");
  }

  return (
    <S.Container data-aos="zoom-in">
      <S.ContainerHeader>
        <h2>Confirmar Dados</h2>
      </S.ContainerHeader>
      <S.ContainerForm>
        <S.ContainerType>
          <h3>Informações financeiras</h3>
          <S.ContainerFormItemRow>
            <label>Nome:</label>
            <span>{result[0]}</span>
          </S.ContainerFormItemRow>
          <S.ContainerFormItemRow>
            <label>CPF:</label>
            <span>{result[1]}</span>
          </S.ContainerFormItemRow>
          <S.ContainerFormItemRow>
            <label>Capital Social:</label>
            <span>
              {result[2].toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </S.ContainerFormItemRow>
        </S.ContainerType>

        <S.ContainerType>
          <h3>Localidade</h3>
          <S.ContainerFormRow>
            <S.ContainerFormItem>
              <label>CEP:</label>
              <span>{result[3]}</span>
            </S.ContainerFormItem>
            <S.ContainerFormItem>
              <label>Número:</label>
              <span>{result[5]}</span>
            </S.ContainerFormItem>
          </S.ContainerFormRow>
          <S.ContainerFormItemRow>
            <label>Endereço:</label>
            <span>{result[4]}</span>
          </S.ContainerFormItemRow>
          <S.ContainerFormRow>
            <S.ContainerFormItem>
              <label>Complemento:</label>
              <span>{result[6]}</span>
            </S.ContainerFormItem>
            <S.ContainerFormItem>
              <label>Bairro:</label>
              <span>{result[7]}</span>
            </S.ContainerFormItem>
          </S.ContainerFormRow>
          <S.ContainerFormRow>
            <S.ContainerFormItem>
              <label>Cidade:</label>
              <span>{result[8]}</span>
            </S.ContainerFormItem>
            <S.ContainerFormItem>
              <label>Estado:</label>
              <span>{result[9]}</span>
            </S.ContainerFormItem>
          </S.ContainerFormRow>
        </S.ContainerType>

        <S.ContainerSubmit>
          <S.ButtonBack middle onClick={goBack}>
            Retornar
          </S.ButtonBack>
          <S.ButtonAdvanced
            onClick={registerClinic}
            disabled={sendValue === true}
          >
            Cadastrar
          </S.ButtonAdvanced>
        </S.ContainerSubmit>
      </S.ContainerForm>
      {console.log(result)}
    </S.Container>
  );
}
