import { useMemo, useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { Form, Formik } from "formik";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { CpfFormat, PhoneFormat } from "utils";
import Layout from "components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useStore from "services/store";
import { createFuncionario } from "queries/funcionarios";

type CollaboratorDataForm = {
  name: string;
  email: string;
  phone: string;
  cpf: string;
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

  phone: yup.string().required(REQUIRED_LABEL),
});

const CollaboratorPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoadingButton, setIsLoadingButton] = useState<boolean>(false);
  const { id, mode } = useParams<{ id: string; mode: string }>();
  const funcionarios = useStore((state) => state.funcionarios);

  const isViewMode = mode === "view";

  const funcionarioSelected = useMemo(
    //@ts-ignore
    () => funcionarios.find((funcionario) => funcionario.id === id),
    [funcionarios, id]
  );

  const handleSubmit = async (values: CollaboratorDataForm) => {
    setIsLoadingButton(true);

    const valuesFormatted = {
      nome: values.name,
      email: values.email,
      fone: Number(values.phone.replace(/\D/g, "")),
      address: values.address,
      cpf: Number(values.cpf.replace(/\D/g, "")),
    };

    try {
      await createFuncionario(valuesFormatted);
      toast.success("Funcionario criado com sucesso!");
      navigate("/funcionarios");
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
        <Formik
          validationSchema={FormSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
          initialValues={{
            name: funcionarioSelected?.nome ?? "",
            email: funcionarioSelected?.email ?? "",
            cpf: funcionarioSelected?.cpf
              ? funcionarioSelected?.cpf.toString()
              : "",
            phone: funcionarioSelected?.fone.toString() ?? "",
            address: funcionarioSelected?.address ?? "",
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
                  label="Nome Completo"
                  placeholder="Nome"
                  error={touched.name && errors.name ? errors.name : undefined}
                  value={values.name}
                  onChange={(e) => {
                    handleChange("name")(e.target.value);
                  }}
                  maxLength={80}
                  disabled={isViewMode}
                />

                <Input
                  name="cpf"
                  placeholder="000.000.000-00"
                  label="CPF"
                  error={touched.cpf && errors.cpf ? errors.cpf : undefined}
                  value={values.cpf}
                  onChange={(e) => {
                    handleChange("cpf")(e.target.value);
                  }}
                  mask={CpfFormat}
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
                    {isLoadingButton ? "Carregando..." : "Cadastrar"}
                  </FormButton>
                )}
                <FormButtonCancel onClick={() => navigate("/funcionarios")}>
                  Voltar
                </FormButtonCancel>
              </Form>
            );
          }}
        </Formik>
      </Content>
    </Layout>
  );
};

export default CollaboratorPage;

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

