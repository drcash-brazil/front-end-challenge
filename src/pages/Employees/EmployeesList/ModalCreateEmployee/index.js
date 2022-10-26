import PropTypes from "prop-types";
import React, { useCallback, useRef, useState, useMemo } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as Yup from "yup";
import { X } from "phosphor-react";

// SERVICES
import { createEmployee } from "../../../../services/endpoints/employees";

// COMPONENTS
import { Button } from "../../../../components/Button";
import { TextInput } from "../../../../components/Input";

// STYLES
import {
  ButtonCloseModal,
  HeaderModal,
  Label,
  StyledForm,
  TitleModal,
  Wrapper,
} from "./styles";

export function ModalCreateEmployee({ close }) {
  const queryKey = useMemo(() => ["employees"], []);
  const [creatingEmployee, setCreatingEmployee] = useState(false);
  const formRef = useRef(null);
  const queryClient = useQueryClient();

  const createEmployeeMutation = useMutation(
    (formData) => {
      const prevData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old) => {
        return [...old, { ...formData }];
      });

      return { prevData };
    },
    {
      onError: (err, newTodo, context) => {
        queryClient.setQueryData(queryKey, context.prevData);
      },
    }
  );

  const handleSubmit = useCallback(
    async (data) => {
      const { apiCall } = createEmployee();
      setCreatingEmployee(true);

      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome do funcionário é obrigatório"),
        email: Yup.string()
          .email()
          .required("E-mail do funcionário é obrigatório"),
        cpf: Yup.string().required("CPF do funcionário é obrigatório"),
        fone: Yup.string()
          .min(11)
          .required("Telefone do funcionário é obrigatório"),
        address: Yup.string().required("Endereço do funcionário é obrigatório"),
      });

      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        const { funcionarios } = await apiCall({
          nome: data.nome,
          email: data.email,
          cpf: data.cpf,
          fone: Number(data.fone),
          address: data.address,
        });

        createEmployeeMutation.mutate({
          id: funcionarios.id,
          ...data,
        });

        setCreatingEmployee(false);
        close();
      } catch (err) {
        setCreatingEmployee(false);
        const validationErrors = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
      }
    },
    [createEmployeeMutation, close]
  );

  return (
    <Wrapper>
      <HeaderModal>
        <TitleModal>Cadastrar Clínica</TitleModal>
        <ButtonCloseModal type="button" onClick={close}>
          <X />
        </ButtonCloseModal>
      </HeaderModal>

      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        <Label>Nome</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="nome"
            disabled={creatingEmployee}
            placeholder="Insira o nome"
          />
        </TextInput.Root>

        <Label>Endereço de e-mail</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="email"
            disabled={creatingEmployee}
            placeholder="Insira o e-mail"
          />
        </TextInput.Root>

        <Label>Telefone</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="fone"
            disabled={creatingEmployee}
            placeholder="Insira o telefone"
          />
        </TextInput.Root>

        <Label>CPF</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="cpf"
            disabled={creatingEmployee}
            placeholder="Insira o CPF"
          />
        </TextInput.Root>

        <Label>Endereço</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="address"
            disabled={creatingEmployee}
            placeholder="Insira o endereço"
          />
        </TextInput.Root>

        <Button type="submit" disabled={creatingEmployee}>
          {creatingEmployee ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </StyledForm>
    </Wrapper>
  );
}

ModalCreateEmployee.propTypes = {
  close: PropTypes.func.isRequired,
};
