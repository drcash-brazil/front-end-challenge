import React from "react";
import Card from "./card";
import styled from "styled-components";
import data from "./data";
import Typography from "@material-ui/core/Typography";

const SomeArticlesWrapper = styled.section`
  display: flex;
  width: 85%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-top: 60px;
  background: #ffffff;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  @media (max-width: 776px) {
    flex-direction: column;
    justify-content:space-between;
  }
`;
const Text = styled(Typography)`
  margin-top: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-style: normal;

  font-size: 35px;

  color: #000000;
  &:after {
    content: "___";
  }
`;
function SomeArticles() {
  return (
    <>
      <Text variant="h4" className="title">
        Alguns Artigos
      </Text>
      <SomeArticlesWrapper>
        {data.map((item, id) => {
          return (
            <Card
              key={id}
              image={item.img}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </SomeArticlesWrapper>
    </>
  );
}

export default SomeArticles;
