import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import InputMask from "react-input-mask";
import toast from "react-hot-toast";

import * as S from "./styles";

export default function Register() {
  const history = useHistory();

  const [userData] = useState(() => {
    return JSON.parse(localStorage.getItem("Infos"));
  });

  const [name, setName] = useState(userData?.name || "");
  const [cpf, setCpf] = useState(userData?.cpf || "");
  const [capital, setCapital] = useState(userData?.valueNumber || "");

  function handleSubmit() {
    let valueNumber = Number(capital);
    if (name === "" || cpf === "" || capital === "")
      return toast.error("Por favor, preencher todos os campos.");
    localStorage.setItem(
      "Infos",
      JSON.stringify({ ...userData, name, cpf, valueNumber })
    );
    history.push("/address");
  }

  return (
    <S.Container data-aos="zoom-in">
      <S.ContainerHeader>
        <h2>Dados Financeiros da Clínica</h2>
      </S.ContainerHeader>
      <S.ContainerForm>
        <S.ContainerFormItem>
          <label>Nome da clínica</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </S.ContainerFormItem>
        <S.ContainerFormItem>
          <label>CPF do responsável</label>

          <InputMask
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            mask={"999.999.999-99"}
            maskChar=""
          ></InputMask>
        </S.ContainerFormItem>
        <S.ContainerFormItem>
          <label>Capital social da Clínica</label>
          <input
            type="number"
            value={capital}
            onChange={(e) => setCapital(e.target.value)}
          />
        </S.ContainerFormItem>
        <S.ContainerSubmit>
          <button onClick={handleSubmit}>Avançar</button>
        </S.ContainerSubmit>
      </S.ContainerForm>
    </S.Container>
  );
}
