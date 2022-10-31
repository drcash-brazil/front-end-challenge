import Layout from "components/Layout/Layout";
import TableNetworks from "components/Table/TableNetworks";
import useFetchRedes from "queries/redes";
import React from "react";
import styled from "styled-components";

const Network: React.FC = () => {
  const { data, isLoading } = useFetchRedes();

  return (
    <Layout>
      <Title>IClinic </Title>
      <Subtitle>Sua rede na palma de sua mão!</Subtitle>

      {!isLoading && <TableNetworks values={data.redes} />}
    </Layout>
  );
};

export default Network;

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

