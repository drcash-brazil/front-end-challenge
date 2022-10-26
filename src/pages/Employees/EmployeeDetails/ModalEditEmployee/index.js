import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "react-query";
import * as Yup from "yup";
import { X } from "phosphor-react";

// SERVICES
import { editClinic } from "../../../../services/endpoints/clinics";

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

export function ModalEditEmployee({ clinicId, queryKey, clinicData, close }) {
  const queryClient = useQueryClient();

  const [editingClinic, setEditingClinic] = useState(false);

  const formRef = useRef(null);

  const editMutation = useMutation(
    (formData) => {
      const prevData = queryClient.getQueryData("clinics");

      queryClient.setQueryData("clinics", (old) => {
        const test = old.map((item) => {
          if (item.id === clinicId) {
            return {
              ...item,
              ...formData,
            };
          }

          return item;
        });

        return test;
      });

      return { prevData };
    },
    {
      onError: (err, newTodo, context) => {
        queryClient.setQueryData("clinics", context.prevData);
      },
    }
  );

  const editClinicMutation = useMutation(
    (formData) => {
      const prevDataDetail = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old) => {
        return {
          ...old,
          ...formData,
        };
      });

      return { prevDataDetail };
    },
    {
      onError: (err, newTodo, context) => {
        queryClient.setQueryData(queryKey, context.prevDataDetail);
      },
    }
  );

  const handleSubmit = useCallback(
    async (data) => {
      const { apiCall } = editClinic();
      setEditingClinic(true);

      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome da rede é obrigatório"),
        email: Yup.string().email().required("E-mail da rede é obrigatório"),
        fone: Yup.string().min(11).required("Telefone da rede é obrigatório"),
        address: Yup.string().required("Endereço da rede é obrigatório"),
      });

      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        await apiCall({
          id: clinicId,
          nome: data.nome,
          email: data.email,
          fone: Number(data.fone),
          address: data.address,
        });

        editMutation.mutate(data);
        editClinicMutation.mutate(data);
        setEditingClinic(false);
        close();
      } catch (err) {
        setEditingClinic(false);
        const validationErrors = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
      }
    },
    [clinicId, editClinicMutation, editMutation, close]
  );

  return (
    <Wrapper>
      <HeaderModal>
        <TitleModal>Editar Rede</TitleModal>
        <ButtonCloseModal type="button" onClick={close}>
          <X />
        </ButtonCloseModal>
      </HeaderModal>

      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        <Label>Nome</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="nome"
            disabled={editingClinic}
            defaultValue={clinicData?.nome}
            placeholder="Insira o nome"
          />
        </TextInput.Root>

        <Label>Endereço de e-mail</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="email"
            disabled={editingClinic}
            defaultValue={clinicData?.email}
            placeholder="Insira o e-mail"
          />
        </TextInput.Root>

        <Label>Telefone</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="fone"
            disabled={editingClinic}
            defaultValue={clinicData?.fone}
            placeholder="Insira o telefone"
          />
        </TextInput.Root>

        <Label>Endereço</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="address"
            disabled={editingClinic}
            defaultValue={clinicData?.address}
            placeholder="Insira o endereço"
          />
        </TextInput.Root>

        <Button type="submit" disabled={editingClinic}>
          {editingClinic ? "Editando" : "Editar"}
        </Button>
      </StyledForm>
    </Wrapper>
  );
}

ModalEditEmployee.propTypes = {
  clinicData: PropTypes.shape({
    address: PropTypes.string,
    email: PropTypes.string,
    fone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    nome: PropTypes.string,
  }).isRequired,
  clinicId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  close: PropTypes.func.isRequired,
  queryKey: PropTypes.any.isRequired,
};
