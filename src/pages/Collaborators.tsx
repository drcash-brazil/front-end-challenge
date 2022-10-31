import Layout from "components/Layout/Layout";
import TableCollaborators from "components/Table/TableCollaborators";
import useFetchFuncionarios from "queries/funcionarios";
import React from "react";
import styled from "styled-components";

const Collaborators: React.FC = () => {
  const { data, isLoading } = useFetchFuncionarios();

  return (
    <Layout>
      <Title>IClinic </Title>
      <Subtitle>Sua rede na palma de sua mão!</Subtitle>

      {!isLoading && <TableCollaborators values={data.funcionarios} />}
    </Layout>
  );
};

export default Collaborators;

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

