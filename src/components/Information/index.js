import React from "react";
import Monitoring from "../../assets/monitoring.jpg";
import Security from "../../assets/security.svg";
import Logic from "../../assets/logic.svg";
import Mobile_Chat from "../../assets/mobile_chat.svg";
import { useHistory } from "react-router-dom";

import * as S from "./styles";

export default function Home() {
  const history = useHistory();

  function navClinics() {
    history.push("/clinics");
  }

  return (
    <S.Container>
      <S.ContainerRow data-aos="fade-up">
        <h2>Monitore as sua clínicas</h2>
        <p>Os registros de suas clínicas estão sempre disponíveis para você</p>
      </S.ContainerRow>
      <S.ContainerColumn>
        <S.Column1>
          <S.Column1Item data-aos="fade-up">
            <S.Column1ItemImage>
              <img src={Security} alt="Carteira" width="100%" />
            </S.Column1ItemImage>
            <S.Column1ItemColumn>
              <span>Seguro</span>
              <small>
                Os dados inseridos no IClinic estão sempre seguros para a sua
                maior segurança.
              </small>
            </S.Column1ItemColumn>
          </S.Column1Item>
          <S.Column1Item data-aos="fade-up">
            <S.Column1ItemImage>
              <img src={Logic} alt="Carteira" width="100%" />
            </S.Column1ItemImage>
            <S.Column1ItemColumn>
              <span>Inteligente</span>
              <small>
                Sempre que uma nova clínica é inserida no sistema, um e-mail de
                confirmação chegará ate você.
              </small>
            </S.Column1ItemColumn>
          </S.Column1Item>
          <S.Column1Item data-aos="fade-up">
            <S.Column1ItemImage>
              <img src={Mobile_Chat} alt="Carteira" width="100%" />
            </S.Column1ItemImage>
            <S.Column1ItemColumn>
              <span>Sempre em dia</span>
              <small>
                Os dados estão sempre disponiveis para você em qualquer dia e
                horário.
              </small>
            </S.Column1ItemColumn>
          </S.Column1Item>
        </S.Column1>
        <S.Column2 data-aos="zoom-in">
          <img src={Monitoring} alt="Carteira" width="100%" />
        </S.Column2>
      </S.ContainerColumn>
      <S.ContainerList data-aos="fade-up">
        <button onClick={navClinics}>Exibir Clínicas</button>
      </S.ContainerList>
    </S.Container>
  );
}
