import Layout from "components/Layout/Layout";
import useFetchClinicas, {
  associateCollaborator,
  deleteClinica,
} from "queries/clinicas";
import React from "react";
import styled from "styled-components";
import GenericTable, {
  AssociatePropsInterface,
} from "components/Table/GenericTable";
import Spinner from "components/Spinner/Spinner";

const Clinics: React.FC = () => {
  const { data, isLoading, isError } = useFetchClinicas();

  const associateItem = ({
    associateItemId,
    itemId,
  }: AssociatePropsInterface) =>
    new Promise((resolve, reject) => {
      associateCollaborator({
        funcionarioId: associateItemId,
        clinicaId: itemId,
      })
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });

  const deleteClinicaFunction = (itemId: number) =>
    new Promise((resolve, reject) => {
      deleteClinica(itemId)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });

  return (
    <Layout>
      <Title>Clinicas </Title>
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
          name="clinica"
          deleteItem={deleteClinicaFunction}
          values={data}
          associateItem={associateItem}
        />
      )}
    </Layout>
  );
};

export default Clinics;

const Title = styled.h1`
  color: rgb(0, 56, 75);
  font-size: 36px;
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

