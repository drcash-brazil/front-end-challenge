import { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { Form, Formik } from "formik";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { CnpjFormat, PhoneFormat } from "utils";
import { createClinica, editClinica, getClinica } from "queries/clinicas";
import Layout from "components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AssociatesTable from "components/Table/AssociatesTable";
import { useQuery } from "@tanstack/react-query";
import Spinner from "components/Spinner/Spinner";

type ClinicDataForm = {
  name: string;
  email: string;
  document: string;
  phone: string;
  address: string;
};

interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

const REQUIRED_LABEL = "Campo Obrigatório";
const INVALID_FORMAT = "Campo Inválido";

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .required(REQUIRED_LABEL)
    .max(60)
    .min(3, "O campo nome precisa conter pelo menos 3 caracteres."),
  email: yup.string().required(REQUIRED_LABEL).email(INVALID_FORMAT),
  address: yup
    .string()
    .required(REQUIRED_LABEL)
    .min(10, "Endereço muito curto"),
  document: yup
    .string()
    .required(REQUIRED_LABEL)
    .min(14, "Preencha o CNPJ corretamente."),
  phone: yup.string().required(REQUIRED_LABEL),
});

const ClinicEdit: React.FC = () => {
  const navigate = useNavigate();
  const [isLoadingButton, setIsLoadingButton] = useState<boolean>(false);
  const { id, mode } = useParams<{ id: string; mode: string }>();

  const isViewMode = mode === "view";
  const isEditMode = mode === "edit";
  const isNewMode = !isEditMode && !isViewMode;

  const {
    data: clinicaSelected,
    isLoading,
    isError,
  } = useQuery(["clinica", id], () => getClinica(Number(id) ?? 0));

  const handleSubmit = async (values: ClinicDataForm) => {
    setIsLoadingButton(true);

    const valuesFormatted = {
      id: 0,
      nome: values.name,
      email: values.email,
      fone: Number(values.phone.replace(/\D/g, "")),
      cnpj: Number(values.document.replace(/\D/g, "")),
      address: values.address,
    };

    try {
      if (isEditMode) {
        valuesFormatted["id"] = clinicaSelected?.id ?? 0;
        await editClinica(valuesFormatted);
        toast.success("Clinica Atualizada com sucesso!");
        navigate("/clinicas");
        return;
      }

      await createClinica(valuesFormatted);
      toast.success("Clinica criada com sucesso");
      navigate("/clinicas");
    } catch (err: unknown) {
      const e = err as ErrorResponse;
      toast.error(e.response.data.message);
      setIsLoadingButton(false);
    }
    setIsLoadingButton(false);
  };
  return (
    <Layout>
      <Content>
        {isError && !isNewMode && (
          <span>Algo de errado aconteceu, tente novamente mais tarde!</span>
        )}
        {isLoading && !isNewMode && <Spinner />}
        {(isNewMode || (!isLoading && clinicaSelected)) && (
          <Formik
            validationSchema={FormSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
            initialValues={{
              name: isNewMode ? "" : clinicaSelected?.nome,
              email: isNewMode ? "" : clinicaSelected?.email,
              document: isNewMode ? "" : clinicaSelected?.cnpj.toString(),
              phone: isNewMode ? "" : clinicaSelected?.fone.toString(),
              address: isNewMode ? "" : clinicaSelected?.address,
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isValid,
            }) => {
              return (
                <Form onSubmit={handleSubmit}>
                  <Input
                    name="name"
                    label="Nome da Clinica"
                    placeholder="Nome"
                    error={
                      touched.name && errors.name ? errors.name : undefined
                    }
                    value={values.name}
                    onChange={(e) => {
                      handleChange("name")(e.target.value);
                    }}
                    maxLength={80}
                    disabled={isViewMode}
                  />

                  <Input
                    name="document"
                    placeholder="000.000.000-00"
                    label="CNPJ"
                    error={
                      touched.document && errors.document
                        ? errors.document
                        : undefined
                    }
                    value={values.document}
                    onChange={(e) => {
                      handleChange("document")(e.target.value);
                    }}
                    mask={CnpjFormat}
                    disabled={isViewMode}
                  />

                  <Input
                    name="email"
                    placeholder="exemplo@exemplo.com"
                    label="E-mail"
                    error={
                      touched.email && errors.email ? errors.email : undefined
                    }
                    value={values.email}
                    onChange={(e) => {
                      handleChange("email")(e.target.value);
                    }}
                    maxLength={128}
                    disabled={isViewMode}
                  />

                  <Input
                    name="phone"
                    placeholder="(00) 0 0000-0000"
                    label="Telefone"
                    error={
                      touched.phone && errors.phone ? errors.phone : undefined
                    }
                    value={values.phone}
                    onChange={(e) => {
                      handleChange("phone")(e.target.value);
                    }}
                    mask={PhoneFormat}
                    disabled={isViewMode}
                  />

                  <Input
                    name="address"
                    placeholder="Endereço"
                    label="Endereço"
                    error={
                      touched.address && errors.address
                        ? errors.address
                        : undefined
                    }
                    value={values.address}
                    onChange={(e) => {
                      handleChange("address")(e.target.value);
                    }}
                    disabled={isViewMode}
                  />

                  {!isViewMode && (
                    <FormButton type="submit">
                      {isLoadingButton
                        ? "Carregando..."
                        : isEditMode
                        ? "Editar"
                        : "Cadastrar"}
                    </FormButton>
                  )}

                  {isViewMode && (
                    <AssociatesTable
                      name="funcionario"
                      values={clinicaSelected.funcionarios}
                    />
                  )}
                  <FormButtonCancel onClick={() => navigate("/clinicas")}>
                    Voltar
                  </FormButtonCancel>
                </Form>
              );
            }}
          </Formik>
        )}
      </Content>
    </Layout>
  );
};

export default ClinicEdit;

const Content = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const FormButton = styled(Button)`
  width: 80%;
  margin: 0 auto;
  margin-top: 15px;
  font-weight: bold;

  ${(props) =>
    props.disabled &&
    `
    background: #7c7c7c;

    :hover{
      background: #7c7c7c;
    }
  `}
`;

const FormButtonCancel = styled(FormButton)`
  background-color: #960c0c;

  :hover {
    background-color: #6b0b0b;
  }
`;

