import Layout from "components/Layout/Layout";
import Spinner from "components/Spinner/Spinner";
import GenericTable from "components/Table/GenericTable";
import useFetchFuncionarios, { deleteFuncionario } from "queries/funcionarios";
import React from "react";
import styled from "styled-components";

const Collaborators: React.FC = () => {
  const { data, isLoading, isError } = useFetchFuncionarios();

  const deleteFuncionarioFunction = (itemId: number) =>
    new Promise((resolve, reject) => {
      deleteFuncionario(itemId)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });

  return (
    <Layout>
      <Title>IClinic </Title>
      <Subtitle>Sua plataforma de gerenciamento!</Subtitle>

      {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
      {isError && (
        <LoadingContainer>
          <p>
            Algo de errado com o servidor, por gentileza tente novamente mais
            tarde!
          </p>
        </LoadingContainer>
      )}

      {!isLoading && data && (
        <GenericTable
          name="funcionario"
          deleteItem={deleteFuncionarioFunction}
          values={data}
        />
      )}
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

const LoadingContainer = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

