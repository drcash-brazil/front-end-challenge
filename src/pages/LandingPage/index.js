import React from "react";
import Home from "../../components/Home";
import Information from "../../components/Information";

import * as S from "./styles";

export default function LandingPage() {
  return (
    <S.Container>
      <Home />
      <Information />
    </S.Container>
  );
}
