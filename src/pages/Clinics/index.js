import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import * as S from "./styles";

export default function Clinics() {
  const [data, setDate] = useState([]);

  useEffect(() => {
    listClinics();
  }, []);

  async function listClinics() {
    try {
      const resp = await axios(
        `https://6157ba858f7ea600179852ad.mockapi.io/api/v1/iclinic`
      );
      if (resp.data.length > 0) {
        setDate(resp.data);
      }
      console.log(resp);
    } catch (err) {}
  }

  async function deleteClinic(id) {
    try {
      const resp = await axios.delete(
        `https://6157ba858f7ea600179852ad.mockapi.io/api/v1/iclinic/${id}`
      );
      if (resp) {
        toast.success("Clínica excluída com sucesso.", {
          position: "top-center",
        });
        listClinics();
      } else {
        toast.error("Não foi possível excluir a clínica", {
          position: "top-center",
        });
      }
      console.log(resp);
    } catch (err) {}
  }

  return (
    <S.Container>
      <S.ContainerHeader>
        <h2>Clínicas Cadastradas</h2>
      </S.ContainerHeader>
      {data && (
        <S.ContainerBody>
          {data?.map((index) => (
            <S.ContainerBodyItens data-aos="fade-up">
              <S.ContainerBodyItensArea data-aos="fade-up">
                <h3>{index?.name}</h3>
                <span>
                  <b>CPF:</b> {index?.cpf}
                </span>
                <span>
                  <b> Capital Social: </b>
                  {index?.valueNumber.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </S.ContainerBodyItensArea>
              <S.ContainerBodyItensAddress data-aos="fade-up">
                <h3>Localidade</h3>
                <span>
                  <b>Endereço:</b> {index?.street}
                </span>
                <span>
                  <b>Número:</b> {index?.addressNumber}
                </span>
                <span>
                  <b>Complemento:</b> {index?.complement}
                </span>
                <span>
                  <b>CEP: </b>
                  {index?.cep}
                </span>
                <span>
                  <b>Bairro:</b> {index?.district}
                </span>
                <span>
                  <b>Cidade:</b> {index?.city}
                </span>
                <span>
                  <b>Estado:</b> {index?.state}
                </span>
              </S.ContainerBodyItensAddress>
              <S.ContainerBodyItensButtons>
                <S.ButtonDelete onClick={() => deleteClinic(index?.id)}>
                  Excluir
                </S.ButtonDelete>
                <S.ButtonEdit>Atualizar</S.ButtonEdit>
              </S.ContainerBodyItensButtons>
            </S.ContainerBodyItens>
          ))}
        </S.ContainerBody>
      )}
    </S.Container>
  );
}
