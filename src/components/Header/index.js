import React from "react";
import { Link } from "react-router-dom";

//ASSETS
import DrCash from "../../assets/logoDrCash.png";

// STYLES
import { WrapperHeader, ContentHeader, NavList } from "./styles";

export function Header() {
  return (
    <WrapperHeader>
      <ContentHeader>
        <Link to="/">
          <img src={DrCash} alt="" />
        </Link>

        <NavList>
          <Link to="/">
            <span>Redes</span>
          </Link>
          <Link to="/clinics">
            <span>Clínicas</span>
          </Link>
          <Link to="/employees">
            <span>Funcionários</span>
          </Link>
        </NavList>
      </ContentHeader>
    </WrapperHeader>
  );
}
