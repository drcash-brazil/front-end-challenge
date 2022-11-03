import Layout from "components/Layout/Layout";
import React from "react";
import styled from "styled-components";
import ImageHome from "assets/imageHome.png";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Title>IClinic </Title>
      <Subtitle>Sua plataforma de gerenciamento!</Subtitle>

      <HomeContainer>
        <img
          src={ImageHome}
          alt="Pessoa segurando uma lampada em cima de uma prancheta"
        />

        <Button onClick={() => navigate("redes")}>Ir para Redes</Button>
        <Button onClick={() => navigate("clinicas")}>Ir para Clínicas</Button>
        <Button onClick={() => navigate("funcionarios")}>
          Ir para Funcionários
        </Button>
      </HomeContainer>
    </Layout>
  );
};

export default Home;

const Title = styled.h1`
  color: rgb(0, 56, 75);
  font-size: 40px;
  font-family: "Montserrat";
  font-weight: bold;
  margin-bottom: 5px;
`;

const Subtitle = styled.h2`
  color: rgb(0, 56, 75);
  font-size: 18px;
`;

const HomeContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 350px;
  }

  button {
    margin: 5px;
    font-weight: bold;
  }
`;

