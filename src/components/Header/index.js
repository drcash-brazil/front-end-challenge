import React from "react";
import { Link } from "react-router-dom";

// STYLES
import { WrapperHeader, ContentHeader, NavList } from "./styles";

import DrCash from "../../assets/logoDrCash.png";

export function Header() {
  return (
    <WrapperHeader>
      <ContentHeader>
        <img src={DrCash} alt="" />

        <NavList>
          <Link to="/network">
            <span>Redes</span>
          </Link>
          <Link to="/network">
            <span>Clínicas</span>
          </Link>
          <Link to="/network">
            <span>Funcionários</span>
          </Link>
        </NavList>
      </ContentHeader>
    </WrapperHeader>
  );
}
