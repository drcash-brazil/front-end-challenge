import Layout from "components/Layout/Layout";
import Spinner from "components/Spinner/Spinner";
import GenericTable, {
  AssociatePropsInterface,
} from "components/Table/GenericTable";
import useFetchRedes, { associateClinica, deleteRede } from "queries/redes";
import React from "react";
import styled from "styled-components";

const Network: React.FC = () => {
  const { data, isLoading, isError } = useFetchRedes();

  const associateItem = ({
    associateItemId,
    itemId,
  }: AssociatePropsInterface) =>
    new Promise((resolve, reject) => {
      associateClinica({ clinicaId: associateItemId, redeId: itemId })
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });

  const deleteRedeFunction = (itemId: number) =>
    new Promise((resolve, reject) => {
      deleteRede(itemId)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });

  return (
    <Layout>
      <Title>IClinic </Title>
      <Subtitle>Sua plataforma de gerenciamento!</Subtitle>

      {!isLoading && data && (
        <GenericTable
          name="rede"
          deleteItem={deleteRedeFunction}
          associateItem={associateItem}
          values={data}
        />
      )}

      {isError && (
        <LoadingContainer>
          <p>
            Algo de errado com o servidor, por gentileza tente novamente mais
            tarde!
          </p>
        </LoadingContainer>
      )}

      {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
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

const LoadingContainer = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

