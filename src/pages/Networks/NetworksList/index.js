import React, { useCallback, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { At, Phone } from "phosphor-react";

// SERVICES
import { getNetworks } from "../../../services/endpoints/networks";

// COMPONENTS
import { Button } from "../../../components/Button";
import { Loading } from "../../../components/Loading";
import { ModalRadix, ModalWrapper } from "../../../components/ModalRadix";
import { ModalCreateNetwork } from "./ModalCreateNetwork";
import { Feedback } from "../../../components/Feedback";

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

export function NetworksList() {
  const queryKey = useMemo(() => ["networks"], []);

  const [isOpenModalCreateNetwork, setIsOpenModalCreateNetwork] =
    useState(false);

  const handleGetNetworks = useCallback(async () => {
    const { apiCall } = getNetworks();

    const { redes } = await apiCall();

    return redes;
  }, []);

  const { data, isLoading, error } = useQuery(queryKey, handleGetNetworks, {
    refetchOnWindowFocus: false,
    retry: 0,
  });

  return (
    <WrapperNetworks>
      <HeaderPage>
        <TitlePage>Redes</TitlePage>

        <HeaderContentRight>
          <Button
            type="button"
            onClick={() => setIsOpenModalCreateNetwork(true)}
          >
            Cadastrar Rede
          </Button>
        </HeaderContentRight>
      </HeaderPage>

      {isLoading && <Loading />}

      {!isLoading && !error && !!data.length && (
        <NetworkList>
          {data.map((item) => (
            <Item key={item.id} to={`/network/${item.id}`}>
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

      {!isLoading && !error && !data.length && (
        <Feedback description="Nenhuma rede encontrada" />
      )}

      <ModalRadix open={isOpenModalCreateNetwork}>
        <ModalWrapper>
          <ModalCreateNetwork
            close={() => setIsOpenModalCreateNetwork(false)}
          />
        </ModalWrapper>
      </ModalRadix>
    </WrapperNetworks>
  );
}
