import React from "react";
import { useHistory } from "react-router-dom";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import * as S from "./styles";

export default function Footer() {
  const history = useHistory();

  function signUp() {
    history.push("/register");
  }

  function navClinics() {
    history.push("/clinics");
  }
  return (
    <S.ContainerFooter>
      <S.ContainerFooterItem>
        <p>Redes Sociais</p>
        <S.ContainerList>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <PinterestIcon />
        </S.ContainerList>
      </S.ContainerFooterItem>
      <S.ContainerFooterCollumn>
        <S.ContainerFooterItemName>
          <p>NOSSA EMPRESA</p>
          <span>Sobre</span>
          <span>Contato</span>
          <span>Missão</span>
        </S.ContainerFooterItemName>
        <S.ContainerFooterItemName>
          <p>TERMOS DE USO</p>
          <span>Política de Privacidade</span>
          <span>Termos e Condições</span>
          <span>FAQs</span>
        </S.ContainerFooterItemName>
        <S.ContainerFooterItemName>
          <p>SERVIÇOS</p>
          <span onClick={signUp}> Cadastro de clínicas</span>
          <span onClick={navClinics}>Listagem de clínicas</span>
        </S.ContainerFooterItemName>
      </S.ContainerFooterCollumn>
    </S.ContainerFooter>
  );
}
