import { ReactNode } from "react";
import * as C from "./styles";

import { Header } from "../Header";
import { SideBarItem } from "../SideBarItem";

import { useForm } from "../../contexts/FormContext";

interface Props {
  children: ReactNode;
}

export const Theme = ({ children }: Props) => {
  const { state } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />
        <C.Steps>
          <C.Sidebar>
            <SideBarItem
              title="Empresa"
              description="Dados da clínica"
              icon="enterprise"
              path="/"
              active={state.currentStep === 1}
            />
            <SideBarItem
              title="Endereço"
              description="Endereço da clínica"
              icon="address"
              path="/step2"
              active={state.currentStep === 2}
            />
            <SideBarItem
              title="Clínicas"
              description="Todas as clínicas"
              icon="clinics"
              path="/step3"
              active={state.currentStep === 3}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
