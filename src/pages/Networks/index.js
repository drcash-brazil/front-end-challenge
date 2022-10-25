import React, { useCallback, useMemo, useState } from "react";
import { At, MagnifyingGlass, Phone } from "phosphor-react";

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
} from "./styles";
import { getNetworks } from "../../services/endpoints/networks";
import { useQuery } from "react-query";
import { Loading } from "../../components/Loading";
import { ModalRadix, ModalWrapper } from "../../components/ModalRadix";
import { ModalCreate } from "../../components/ModalCreate";

export function Networks() {
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
          <ModalCreate close={() => setIsOpenModalCreateNetword(false)} />
        </ModalWrapper>
      </ModalRadix>
    </WrapperNetworks>
  );
}
