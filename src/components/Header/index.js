import React from "react";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

export default function Header() {
  const history = useHistory();

  function signUp() {
    history.push("/register");
  }

  function navClinics() {
    history.push("/clinics");
  }

  function Home() {
    history.push("/");
  }

  return (
    <S.Container>
      <S.Column>
        <S.ContainerIconLogo>
          <span onClick={Home}>IClinic</span>
        </S.ContainerIconLogo>
      </S.Column>
      <S.Column middle>
        <S.ContainerIconSelectGreen>
          <span onClick={signUp}>Cadastrar Clínicas</span>
        </S.ContainerIconSelectGreen>
        <S.ContainerIconSelect>
          <span onClick={navClinics}>Exibir Clinicas</span>
        </S.ContainerIconSelect>
        <S.ContainerButton>
          <button>Sobre</button>
        </S.ContainerButton>
        <S.ContainerButton users>
          <button>Usuários</button>
        </S.ContainerButton>
      </S.Column>
    </S.Container>
  );
}
