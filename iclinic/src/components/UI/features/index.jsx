import React from "react";
import Card from "./card";
import styled from "styled-components";
import data from "./data";
import { Typography } from "@material-ui/core";
import Fade from 'react-reveal';
const FeaturesWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 90px;
  flex-wrap: wrap;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  @media (max-width: 776px) {
    padding: 0px 50px;
  }
`;

const Text = styled(Typography)`
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  &:after {
    content: "______";
    margin-bottom: 10px;
    color: #7d7987;
    font-size: 20px;
  }
`;
const Description = styled(Typography)`
  display: flex;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #7d7987;
  padding: 15px 200px;
  margin-bottom: 10px;
  @media (max-width: 776px) {
    font-size: 12px;
    padding: 10px 16px;
    line-height: 20px;
  }
`;

function Features() {
  return (
    <Fade top>
      <Text id="features" variant="h5" className="tittle">
        {" "}
        Nossos Serviços{" "}
      </Text>
      <Description variant="subtitle2">
        Nós fornecemos a você as melhores escolhas para você. Adapte-o às suas
        necessidades de saúde e certifique-se de que faz um tratamento com os
        nossos médicos altamente qualificados, pode consultar-nos qual o tipo de
        serviço adequado à sua saúde{" "}
      </Description>
      <FeaturesWrapper img={`${process.env.PUBLIC_URL}Vector.svg`}>
        {data.map((item, id) => {
          return (
            <Card
              key={id}
              description={item.description}
              tittle={item.tittle}
              image={`${process.env.PUBLIC_URL + item.img}`}
            />
          );
        })}
      </FeaturesWrapper>
    </Fade>
  );
}

export default Features;
