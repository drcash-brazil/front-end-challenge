import React from "react";
import { TextInput } from "../../components/Input";

// STYLES
import {
  HeaderContentRight,
  HeaderPage,
  TitlePage,
  WrapperNetworks,
} from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import { Button } from "../../components/Button";

export function Networks() {
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
    </WrapperNetworks>
  );
}
