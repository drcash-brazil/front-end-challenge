import React from "react";
import TableUI from "./table";
import Tittle from "./tittle";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import AddButton from "./button";
import Description from "./description";

const ContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
`;
function MainContent() {
  return (
    <ContentWrapper>
      <Tittle />
      <Description />
      <TableUI/>
    </ContentWrapper>
  );
}

export default MainContent;
