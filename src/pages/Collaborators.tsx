import Layout from "components/Layout/Layout";
//import Spinner from "components/Spinner /Spinner";
import GenericTable from "components/Table/GenericTable";
import { deleteFuncionario, getFuncionarios } from "queries/funcionarios";
import React, { useEffect } from "react";
import useStore from "services/store";
import styled from "styled-components";

const Collaborators: React.FC = () => {
  const funcionarios = useStore((state) => state.funcionarios);
  const updateFuncionarios = useStore((state) => state.updateFuncionarios);

  useEffect(() => {
    getFuncionarios().then((res) => updateFuncionarios(res));
  }, [updateFuncionarios]);

  //const { data, isLoading } = useFetchFuncionarios();

  const deleteFuncionarioFunction = (itemId: number) =>
    new Promise((resolve, reject) => {
      deleteFuncionario(itemId)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });

  return (
    <Layout>
      <Title>IClinic </Title>
      <Subtitle>Sua rede na palma de sua mão!</Subtitle>

      {funcionarios && (
        <GenericTable
          name="funcionario"
          deleteItem={deleteFuncionarioFunction}
          values={funcionarios}
        />
      )}
      {/* {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )} */}
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
/* 
const LoadingContainer = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

 */