import { List } from "phosphor-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import DrCash from "../../assets/logoDrCash.png";

// STYLES
import {
  WrapperHeaderResponsive,
  ContentHeader,
  ButtonBurger,
  StyledMenu,
} from "./styles";

export function HeaderResponsive() {
  const [open, setOpen] = useState(false);

  return (
    <WrapperHeaderResponsive>
      <ContentHeader>
        <ButtonBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </ButtonBurger>

        <StyledMenu open={open}>
          <Link to="/network">
            <span>Redes</span>
          </Link>
          <Link to="/network">
            <span>Clínicas</span>
          </Link>
          <Link to="/network">
            <span>Funcionários</span>
          </Link>
        </StyledMenu>

        <img src={DrCash} alt="" />
      </ContentHeader>
    </WrapperHeaderResponsive>
  );
}
