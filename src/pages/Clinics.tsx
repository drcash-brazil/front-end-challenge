import Layout from "components/Layout/Layout";
import {
  associateCollaborator,
  deleteClinica,
  getClinicas,
} from "queries/clinicas";
import React, { useEffect } from "react";
import styled from "styled-components";
import useStore from "services/store";
import GenericTable, {
  AssociatePropsInterface,
} from "components/Table/GenericTable";

const Clinics: React.FC = () => {
  const clinicas = useStore((state) => state.clinicas);
  const updateClinicas = useStore((state) => state.updateClinicas);

  useEffect(() => {
    getClinicas().then((res) => updateClinicas(res));
  }, [updateClinicas]);

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
      <Subtitle>Sua rede na palma de sua mão!</Subtitle>

      {/*  {isLoading && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}

      {!isLoading && <TableClinics values={clinicas} />} */}
      {clinicas && (
        <GenericTable
          name="clinica"
          deleteItem={deleteClinicaFunction}
          values={clinicas}
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

/* const LoadingContainer = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

 */

