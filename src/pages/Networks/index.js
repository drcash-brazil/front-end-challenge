import React, { useCallback, useMemo, useRef, useState } from "react";
import { At, MagnifyingGlass, Phone, X } from "phosphor-react";
import * as Yup from "yup";

// COMPONENTS
import { TextInput } from "../../components/Input";
import { Button } from "../../components/Button";

// STYLES
import {
  BoxInfo,
  BoxInitialLetter,
  HeaderContentRight,
  HeaderItem,
  HeaderPage,
  Info,
  Item,
  MoreInfo,
  NetworkList,
  NetworkName,
  TitlePage,
  WrapperNetworks,
  HeaderModal,
  TitleModal,
  Label,
  Wrapper,
  StyledForm,
  ButtonCloseModal,
} from "./styles";
import { getNetworks } from "../../services/endpoints/networks";
import { useQuery } from "react-query";
import { Loading } from "../../components/Loading";
import { ModalRadix, ModalWrapper } from "../../components/ModalRadix";

export function Networks() {
  const formRef = useRef(null);
  const queryKey = useMemo(() => ["networks"], []);
  const [isOpenModalCreateNetword, setIsOpenModalCreateNetword] =
    useState(false);

  const handleGetNetworks = useCallback(async () => {
    const { apiCall } = getNetworks();

    const { redes } = await apiCall();

    return redes;
  }, []);

  const { data, isLoading, isFetching, error } = useQuery(
    queryKey,
    handleGetNetworks,
    {
      onSuccess: (dataTab) => {
        console.log("data", dataTab);
      },
      refetchOnWindowFocus: false,
      retry: 0,
    }
  );

  const handleSubmit = useCallback(async (data) => {
    console.log("data", data);

    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome da rede é obrigatório"),
        email: Yup.string().email().required("E-mail da rede é obrigatório"),
        fone: Yup.string().min(11).required("Telefone da rede é obrigatório"),
        address: Yup.string().required("Endereço da rede é obrigatório"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      console.log(data);
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }, []);

  return (
    <WrapperNetworks>
      <HeaderPage>
        <TitlePage>Redes</TitlePage>

        <HeaderContentRight>
          <TextInput.Root>
            <TextInput.Icon>
              <MagnifyingGlass />
            </TextInput.Icon>

            <TextInput.Input
              disabled={isLoading || isFetching}
              type="text"
              placeholder="Procurar Redes"
            />
          </TextInput.Root>

          <Button
            type="button"
            onClick={() => setIsOpenModalCreateNetword(true)}
          >
            Cadastrar Rede
          </Button>
        </HeaderContentRight>
      </HeaderPage>

      {isLoading && <Loading />}

      {!isLoading && !error && !!data.length && (
        <NetworkList>
          {data.map((item) => (
            <Item key={item.id}>
              <HeaderItem>
                <BoxInitialLetter>{item.nome.substr(0, 1)}</BoxInitialLetter>
                <NetworkName>{item.nome}</NetworkName>
              </HeaderItem>

              <MoreInfo>
                <BoxInfo>
                  <At />
                  <Info>{item.email}</Info>
                </BoxInfo>

                <BoxInfo>
                  <Phone />
                  <Info>{item.fone}</Info>
                </BoxInfo>
              </MoreInfo>
            </Item>
          ))}
        </NetworkList>
      )}

      <ModalRadix open={isOpenModalCreateNetword}>
        <ModalWrapper>
          <Wrapper>
            <HeaderModal>
              <TitleModal>Cadastrar Rede</TitleModal>
              <ButtonCloseModal
                type="button"
                onClick={() => setIsOpenModalCreateNetword(false)}
              >
                <X />
              </ButtonCloseModal>
            </HeaderModal>

            <StyledForm ref={formRef} onSubmit={handleSubmit}>
              <Label>Nome</Label>
              <TextInput.Root>
                <TextInput.InputUnform
                  name="nome"
                  placeholder="Insira o nome"
                />
              </TextInput.Root>

              <Label>Endereço de e-mail</Label>
              <TextInput.Root>
                <TextInput.InputUnform
                  name="email"
                  placeholder="Insira o e-mail"
                />
              </TextInput.Root>

              <Label>Telefone</Label>
              <TextInput.Root>
                <TextInput.InputUnform
                  name="fone"
                  placeholder="Insira o telefone"
                />
              </TextInput.Root>

              <Label>Endereço</Label>
              <TextInput.Root>
                <TextInput.InputUnform
                  name="address"
                  placeholder="Insira o endereço"
                />
              </TextInput.Root>

              <Button type="submit">Cadastrar</Button>
            </StyledForm>
          </Wrapper>
        </ModalWrapper>
      </ModalRadix>
    </WrapperNetworks>
  );
}
