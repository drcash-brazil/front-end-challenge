import React from "react";

// STYLES
import { WrapperHeader, ContentHeader } from "./styles";

import DrCash from "../../assets/logoDrCash.png";

export function Header() {
  return (
    <WrapperHeader>
      <ContentHeader>
        <img src={DrCash} alt="" />
      </ContentHeader>
    </WrapperHeader>
  );
}
