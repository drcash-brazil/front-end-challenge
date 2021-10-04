/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputMask from "react-input-mask";
import axios from "axios";
import toast from "react-hot-toast";

import * as S from "./styles";

export default function Address() {
  const history = useHistory();

  const [userData] = useState(() => {
    return JSON.parse(localStorage.getItem("Infos"));
  });

  const [cep, setCep] = useState(userData?.cep || "");
  const [street, setStreet] = useState(userData?.street || "");
  const [addressNumber, setAddressNumber] = useState(
    userData?.addressNumber || ""
  );
  const [complement, setComplement] = useState(userData?.complement || "");
  const [district, setDistrict] = useState(userData?.district || "");
  const [city, setCity] = useState(userData?.city || "");
  const [state, setState] = useState(userData?.state || "");

  async function postB() {
    try {
      const resp = await axios(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(resp);
      if (resp?.data?.erro) {
        toast.error("Cep invalido.");
      } else {
        setStreet(resp.data.logradouro);
        setComplement(resp.data.complemento);
        setDistrict(resp.data.bairro);
        setCity(resp.data.localidade);
        setState(resp.data.uf);
        toast.success("Endereço encontrado");
      }
    } catch (err) {}
  }

  function handleSubmit() {
    if (
      cep === "" ||
      street === "" ||
      addressNumber === "" ||
      complement === "" ||
      district === "" ||
      city === "" ||
      state === ""
    )
      return toast.error("Por favor, preencher todos os campos.");

    localStorage.setItem(
      "Infos",
      JSON.stringify({
        ...userData,
        cep,
        street,
        addressNumber,
        complement,
        district,
        city,
        state,
      })
    );
    history.push("/checkout");
  }

  function goBack() {
    history.push("/register");
  }

  return (
    <S.Container data-aos="zoom-in">
      <S.ContainerHeader>
        <h2>Endereço da Clínica</h2>
      </S.ContainerHeader>
      <S.ContainerForm>
        <S.ContainerFormRow>
          <S.ContainerFormItem>
            <label>CEP</label>
            <InputMask
              type="text"
              mask="99999-999"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              maskChar=""
              required
              onBlur={postB}
            ></InputMask>
          </S.ContainerFormItem>
          <S.ContainerFormItem>
            <label>Número</label>
            <input
              type="text"
              value={addressNumber}
              required
              onChange={(e) => setAddressNumber(e.target.value)}
            />
          </S.ContainerFormItem>
        </S.ContainerFormRow>
        <S.ContainerFormItemAddress>
          <label>Endereço</label>
          <input
            type="text"
            value={street}
            required
            onChange={(e) => setStreet(e.target.value)}
          />
        </S.ContainerFormItemAddress>
        <S.ContainerFormRow>
          <S.ContainerFormItem>
            <label>Complemento</label>
            <input
              type="text"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
            />
          </S.ContainerFormItem>
          <S.ContainerFormItem>
            <label>Bairro</label>
            <input
              type="text"
              value={district}
              required
              onChange={(e) => setDistrict(e.target.value)}
            />
          </S.ContainerFormItem>
        </S.ContainerFormRow>
        <S.ContainerFormRow>
          <S.ContainerFormItem>
            <label>Cidade</label>
            <input
              type="text"
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </S.ContainerFormItem>
          <S.ContainerFormItem>
            <label>Estado</label>
            <input
              type="text"
              value={state}
              required
              onChange={(e) => setState(e.target.value)}
            />
          </S.ContainerFormItem>
        </S.ContainerFormRow>
        <S.ContainerSubmit>
          <S.ButtonBack middle onClick={goBack}>
            Retornar
          </S.ButtonBack>
          <S.ButtonAdvanced onClick={handleSubmit}>Avançar</S.ButtonAdvanced>
        </S.ContainerSubmit>
      </S.ContainerForm>
    </S.Container>
  );
}
