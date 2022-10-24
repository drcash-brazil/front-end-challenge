import React from "react";
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
  IconInfo,
  Info,
  Item,
  MoreInfo,
  NetworkList,
  NetworkName,
  TitlePage,
  WrapperNetworks,
} from "./styles";

export function Networks() {
  const networks = Array.from(Array(40).keys());

  return (
    <WrapperNetworks>
      <HeaderPage>
        <TitlePage>Redes</TitlePage>

        <HeaderContentRight>
          <TextInput.Root>
            <TextInput.Icon>
              <MagnifyingGlass />
            </TextInput.Icon>

            <TextInput.Input type="text" placeholder="Procurar Redes" />
          </TextInput.Root>

          <Button>Cadastrar Rede</Button>
        </HeaderContentRight>
      </HeaderPage>

      <NetworkList>
        {networks.map((item) => (
          <Item>
            <HeaderItem>
              <BoxInitialLetter>S</BoxInitialLetter>
              <NetworkName>Smartall</NetworkName>

              <IconInfo />
            </HeaderItem>

            <MoreInfo>
              <BoxInfo>
                <At />
                <Info>example@email.com</Info>
              </BoxInfo>

              <BoxInfo>
                <Phone />
                <Info>981733892</Info>
              </BoxInfo>
            </MoreInfo>
          </Item>
        ))}
      </NetworkList>
    </WrapperNetworks>
  );
}
