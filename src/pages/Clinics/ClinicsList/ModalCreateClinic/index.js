import PropTypes from "prop-types";
import React, {
  useCallback,
  useEffect,
  useRef,
  useMemo,
  useState,
} from "react";
import * as Yup from "yup";
import { X } from "phosphor-react";
import { useMutation, useQueryClient } from "react-query";

// SERVICES
import { createClinic } from "../../../../services/endpoints/clinics";
import { getEmployees } from "../../../../services/endpoints/employees";

// COMPONENTS
import { TextInput } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { Selector } from "../../../../components/Selector";

// STYLES
import {
  ButtonCloseModal,
  HeaderModal,
  Label,
  StyledForm,
  TitleModal,
  Wrapper,
} from "./styles";

export function ModalCreateClinics({ close }) {
  const queryKey = useMemo(() => ["clinics"], []);
  const [employeesOptions, setEmployeesOptions] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [creatingClinic, setCreatingClinic] = useState(false);
  const formRef = useRef(null);
  const queryClient = useQueryClient();

  const createClinicMutation = useMutation(
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
      const { apiCall } = createClinic();
      setCreatingClinic(true);

      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome da clínica é obrigatório"),
        email: Yup.string().email().required("E-mail da clínica é obrigatório"),
        cnpj: Yup.string().required("CNPJ da clínica é obrigatório"),
        fone: Yup.string()
          .min(11)
          .required("Telefone da clínica é obrigatório"),
        address: Yup.string().required("Endereço da clínica é obrigatório"),
      });

      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        const { clinicas } = await apiCall({
          nome: data.nome,
          email: data.email,
          cnpj: data.cnpj,
          fone: Number(data.fone),
          address: data.address,
          funcionarios: selectedEmployees.map((item) => {
            return { id: item.value, nome: item.label };
          }),
        });

        createClinicMutation.mutate({
          id: clinicas.id,
          ...data,
          funcionarios: selectedEmployees.map((item) => {
            return { id: item.value, nome: item.label };
          }),
        });

        setCreatingClinic(false);
        close();
      } catch (err) {
        setCreatingClinic(false);
        const validationErrors = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
      }
    },
    [selectedEmployees, createClinicMutation, close]
  );

  const handleGetEmployees = useCallback(async () => {
    const { apiCall } = getEmployees();

    try {
      const { funcionarios } = await apiCall();

      setEmployeesOptions(
        funcionarios.map((item) => {
          return {
            value: item.id,
            label: item.nome,
          };
        })
      );
    } catch (error) {}
  }, []);

  useEffect(() => {
    handleGetEmployees();
  }, [handleGetEmployees]);

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
            disabled={creatingClinic}
            placeholder="Insira o nome"
          />
        </TextInput.Root>

        <Label>Endereço de e-mail</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="email"
            disabled={creatingClinic}
            placeholder="Insira o e-mail"
          />
        </TextInput.Root>

        <Label>Telefone</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="fone"
            disabled={creatingClinic}
            placeholder="Insira o telefone"
          />
        </TextInput.Root>

        <Label>CNPJ</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="cnpj"
            disabled={creatingClinic}
            placeholder="Insira o CNPJ"
          />
        </TextInput.Root>

        <Label>Endereço</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="address"
            disabled={creatingClinic}
            placeholder="Insira o endereço"
          />
        </TextInput.Root>

        <Label>Funcionários</Label>
        <Selector
          isMulti
          name="employees"
          disabled={creatingClinic}
          options={employeesOptions}
          onChange={(e) => setSelectedEmployees(e)}
        />

        <Button type="submit" disabled={creatingClinic}>
          {creatingClinic ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </StyledForm>
    </Wrapper>
  );
}

ModalCreateClinics.propTypes = {
  close: PropTypes.func.isRequired,
};
