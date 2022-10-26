import React, { useState } from "react";
import { Link } from "react-router-dom";

// ASSETS
import DrCash from "../../assets/logoDrCash.png";

// STYLES
import {
  WrapperHeaderResponsive,
  ContentHeader,
  ButtonBurger,
  NavList,
} from "./styles";

export function HeaderResponsive() {
  const [open, setOpen] = useState(false);

  return (
    <WrapperHeaderResponsive>
      <ContentHeader>
        <img src={DrCash} alt="" />

        <ButtonBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </ButtonBurger>

        <NavList open={open}>
          <Link to="/network">
            <span>Redes</span>
          </Link>
          <Link to="/clinics">
            <span>Clínicas</span>
          </Link>
          <Link to="/network">
            <span>Funcionários</span>
          </Link>
        </NavList>
      </ContentHeader>
    </WrapperHeaderResponsive>
  );
}
