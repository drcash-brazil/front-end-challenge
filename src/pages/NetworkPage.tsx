import { useMemo, useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import { Form, Formik } from "formik";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { PhoneFormat } from "utils";
import { createRede, editRede } from "queries/redes";
import Layout from "components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useStore from "services/store";
import AssociatesTable from "components/Table/AssociatesTable";

type NetworkDataForm = {
  name: string;
  email: string;
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

  phone: yup.string().required(REQUIRED_LABEL),
});

const NetworkPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoadingButton, setIsLoadingButton] = useState<boolean>(false);
  const { id, mode } = useParams<{ id: string; mode: string }>();
  const redes = useStore((state) => state.redes);

  const isViewMode = mode === "view";
  const isEditMode = mode === "edit";

  const redeSelected = useMemo(
    //@ts-ignore
    () => redes.find((rede) => rede.id === id),
    [redes, id]
  );

  const handleSubmit = async (values: NetworkDataForm) => {
    setIsLoadingButton(true);

    const valuesFormatted = {
      nome: values.name,
      email: values.email,
      fone: Number(values.phone.replace(/\D/g, "")),
      address: values.address,
    };

    try {
      if (isEditMode) {
        //@ts-ignore
        valuesFormatted["id"] = redeSelected?.id;
        await editRede(valuesFormatted);
        toast.success("Rede Atualizada com sucesso!");
        navigate("/redes");
        return;
      }

      await createRede(valuesFormatted);
      toast.success("Rede criada com sucesso!");
      navigate("/redes");
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
            name: redeSelected?.nome ?? "",
            email: redeSelected?.email ?? "",
            phone: redeSelected?.fone.toString() ?? "",
            address: redeSelected?.address ?? "",
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
                  label="Nome da Rede"
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
                    name="clinica"
                    //@ts-ignore
                    values={redeSelected.clinicas}
                  />
                )}
                <FormButtonCancel onClick={() => navigate("/redes")}>
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

export default NetworkPage;

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

