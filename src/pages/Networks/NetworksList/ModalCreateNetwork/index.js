import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "react-query";
import * as Yup from "yup";
import { X } from "phosphor-react";

// SERVICES
import { getClinics } from "../../../../services/endpoints/clinics";
import { createNetwork } from "../../../../services/endpoints/networks";

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

export function ModalCreateNetwork({ close }) {
  const queryKey = useMemo(() => ["networks"], []);
  const queryClient = useQueryClient();

  const [clinicsOptions, setClinicsOptions] = useState([]);
  const [selectedClinics, setSelectedClinics] = useState([]);
  const [creatingNetwork, setCreatingNetwork] = useState(false);

  const formRef = useRef(null);

  const createNetworkMutation = useMutation(
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
      const { apiCall } = createNetwork();
      setCreatingNetwork(true);

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

        const { redes } = await apiCall({
          nome: data.nome,
          email: data.email,
          fone: Number(data.fone),
          address: data.address,
          clinicas: selectedClinics.map((item) => {
            return { id: item.value, nome: item.label };
          }),
        });

        createNetworkMutation.mutate({
          id: redes.id,
          ...data,
          clinicas: selectedClinics.map((item) => {
            return { id: item.value, nome: item.label };
          }),
        });

        setCreatingNetwork(false);
        close();
      } catch (err) {
        setCreatingNetwork(false);
        const validationErrors = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
      }
    },
    [selectedClinics, createNetworkMutation, close]
  );

  const handleGetClinics = useCallback(async () => {
    const { apiCall } = getClinics();

    try {
      const { clinicas } = await apiCall();

      setClinicsOptions(
        clinicas.map((item) => {
          return {
            value: item.id,
            label: item.nome,
          };
        })
      );
    } catch (error) {}
  }, []);

  useEffect(() => {
    handleGetClinics();
  }, [handleGetClinics]);

  return (
    <Wrapper>
      <HeaderModal>
        <TitleModal>Cadastrar Rede</TitleModal>
        <ButtonCloseModal type="button" onClick={close}>
          <X />
        </ButtonCloseModal>
      </HeaderModal>

      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        <Label>Nome</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="nome"
            disabled={creatingNetwork}
            placeholder="Insira o nome"
          />
        </TextInput.Root>

        <Label>Endereço de e-mail</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="email"
            disabled={creatingNetwork}
            placeholder="Insira o e-mail"
          />
        </TextInput.Root>

        <Label>Telefone</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="fone"
            disabled={creatingNetwork}
            placeholder="Insira o telefone"
          />
        </TextInput.Root>

        <Label>Endereço</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="address"
            disabled={creatingNetwork}
            placeholder="Insira o endereço"
          />
        </TextInput.Root>

        <Label>Clínicas</Label>
        <Selector
          isMulti
          name="clinics"
          disabled={creatingNetwork}
          options={clinicsOptions}
          onChange={(e) => setSelectedClinics(e)}
        />

        <Button type="submit" disabled={creatingNetwork}>
          {creatingNetwork ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </StyledForm>
    </Wrapper>
  );
}

ModalCreateNetwork.propTypes = {
  close: PropTypes.func.isRequired,
};
