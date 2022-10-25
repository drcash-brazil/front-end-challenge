import { X } from "phosphor-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { TextInput } from "../Input";
import { Selector } from "../Selector";
import * as Yup from "yup";

// STYLES
import {
  ButtonCloseModal,
  HeaderModal,
  Label,
  StyledForm,
  TitleModal,
  Wrapper,
} from "./styles";
import { getClinics } from "../../services/endpoints/clinics";
import { createNetwork } from "../../services/endpoints/networks";

export function ModalCreate({ close }) {
  const [clinicsOptions, setClinicsOptions] = useState([]);
  const [selectedClinics, setSelectedClinics] = useState([]);
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      const { apiCall } = createNetwork();

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

        const response = await apiCall({
          nome: data.nome,
          email: data.email,
          fone: Number(data.fone),
          address: data.address,
          clinicas: selectedClinics.map((item) => {
            return { id: Number(item.value), nome: item.label };
          }),
        });

        console.log("response create", response);
      } catch (err) {
        console.log(err);
        const validationErrors = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
      }
    },
    [selectedClinics]
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
      console.log("clinicas", clinicas);
    } catch (error) {}
  }, []);

  useEffect(() => {
    handleGetClinics();
  }, [handleGetClinics]);

  useEffect(() => {
    console.log("selectedClinics", selectedClinics);
  }, [selectedClinics]);

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
          <TextInput.InputUnform name="nome" placeholder="Insira o nome" />
        </TextInput.Root>

        <Label>Endereço de e-mail</Label>
        <TextInput.Root>
          <TextInput.InputUnform name="email" placeholder="Insira o e-mail" />
        </TextInput.Root>

        <Label>Telefone</Label>
        <TextInput.Root>
          <TextInput.InputUnform name="fone" placeholder="Insira o telefone" />
        </TextInput.Root>

        <Label>Endereço</Label>
        <TextInput.Root>
          <TextInput.InputUnform
            name="address"
            placeholder="Insira o endereço"
          />
        </TextInput.Root>

        <Label>Clínicas</Label>
        <Selector
          isMulti
          name="clinics"
          options={clinicsOptions}
          onChange={(e) => setSelectedClinics(e)}
        />

        <Button type="submit">Cadastrar</Button>
      </StyledForm>
    </Wrapper>
  );
}
