import React from "react";
import operation from "../../assets/operation.jpg";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

export default function Home() {
  const history = useHistory();

  function signUp() {
    history.push("/register");
  }
  return (
    <S.Container>
      <S.Column1 data-aos="fade-up">
        <S.ContainerColumn1Body>
          <h3>Realize o cadastro de suas clínicas</h3>
          <p>
            Mantenha os registros de suas clínicas sempre atualizados. O método
            de cadastro é simples e intuitivo. Finalize em menos de um minuto.
          </p>
          <button onClick={signUp}>COMEÇAR AGORA</button>
        </S.ContainerColumn1Body>
      </S.Column1>
      <S.Column2 data-aos="zoom-in">
        <img src={operation} alt="Crianca vacinando" width="100%"  />
      </S.Column2>
    </S.Container>
  );
}
