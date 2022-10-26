import PropTypes from "prop-types";
import React, { useCallback, useRef, useState } from "react";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "react-query";
import { X } from "phosphor-react";

// SERVICES
import { editNetwork } from "../../../../services/endpoints/networks";

// COMPONENTS
import { TextInput } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

// STYLES
import {
  ButtonCloseModal,
  HeaderModal,
  Label,
  StyledForm,
  TitleModal,
  Wrapper,
} from "./styles";

export function ModalEditNetwork({ networkId, queryKey, networkData, close }) {
  const queryClient = useQueryClient();

  const [editingNetwork, setEditingNetwork] = useState(false);

  const formRef = useRef(null);

  const editMutation = useMutation(
    (formData) => {
      const prevData = queryClient.getQueryData("networks");

      queryClient.setQueryData("networks", (old) => {
        const test = old.map((item) => {
          if (item.id === networkId) {
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
        queryClient.setQueryData("networks", context.prevData);
      },
    }
  );

  const editNetworkMutation = useMutation(
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
      const { apiCall } = editNetwork();
      setEditingNetwork(true);

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
          id: networkId,
          nome: data.nome,
          email: data.email,
          fone: Number(data.fone),
          address: data.address,
        });

        editMutation.mutate(data);
        editNetworkMutation.mutate(data);
        setEditingNetwork(false);
        close();
      } catch (err) {
        setEditingNetwork(false);
        const validationErrors = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
      }
    },
    [networkId, editNetworkMutation, editMutation, close]
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
            disabled={editingNetwork}
            defaultValue={networkData?.nome}
            placeholder="Insira o nome"
          />
        </TextInput.Root>

        <Label>Endereço de e-mail</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="email"
            disabled={editingNetwork}
            defaultValue={networkData?.email}
            placeholder="Insira o e-mail"
          />
        </TextInput.Root>

        <Label>Telefone</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="fone"
            disabled={editingNetwork}
            defaultValue={networkData?.fone}
            placeholder="Insira o telefone"
          />
        </TextInput.Root>

        <Label>Endereço</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="address"
            disabled={editingNetwork}
            defaultValue={networkData?.address}
            placeholder="Insira o endereço"
          />
        </TextInput.Root>

        <Button type="submit" disabled={editingNetwork}>
          {editingNetwork ? "Editando" : "Editar"}
        </Button>
      </StyledForm>
    </Wrapper>
  );
}

ModalEditNetwork.propTypes = {
  networkData: PropTypes.shape({
    address: PropTypes.string,
    email: PropTypes.string,
    fone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    nome: PropTypes.string,
  }).isRequired,
  networkId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  close: PropTypes.func.isRequired,
  queryKey: PropTypes.any.isRequired,
};
