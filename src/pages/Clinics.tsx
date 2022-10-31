import Layout from "components/Layout/Layout";
import TableClinics from "components/Table/TableClinics";
import useFetchClinicas from "queries/clinicas";
import React from "react";
import styled from "styled-components";

const Clinics: React.FC = () => {
  const { data, isLoading } = useFetchClinicas();

  return (
    <Layout>
      <Title>IClinic </Title>
      <Subtitle>Sua rede na palma de sua mão!</Subtitle>

      {!isLoading && <TableClinics values={data.clinicas} />}
    </Layout>
  );
};

export default Clinics;

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

