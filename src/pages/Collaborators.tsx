import Layout from "components/Layout/Layout";
import Spinner from "components/Spinner/Spinner";
import GenericTable from "components/Table/GenericTable";
import useFetchFuncionarios, { deleteFuncionario } from "queries/funcionarios";
import React from "react";
import styled from "styled-components";
import { LoadingContainer, Subtitle, Title } from "styles";

const Collaborators: React.FC = () => {
  const { data, isLoading, isError } = useFetchFuncionarios();

  const handleDeleteFuncionario = (itemId: number) =>
    new Promise((resolve, reject) => {
      deleteFuncionario(itemId)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });

  return (
    <Layout>
      <Title>Funcionários </Title>
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
          deleteItem={handleDeleteFuncionario}
          values={data}
        />
      )}
    </Layout>
  );
};

export default Collaborators;

