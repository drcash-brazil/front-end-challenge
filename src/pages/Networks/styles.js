import { Info as InfoIcon } from "phosphor-react";
import styled from "styled-components";

export const WrapperNetworks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 2rem 1rem 1rem 1rem;
  margin: 0 auto;
  height: calc(100vh - 75px);
`;

export const HeaderPage = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  width: 100%;

  @media ${({ theme }) => theme.device.md} {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export const TitlePage = styled.h1``;

export const HeaderContentRight = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;

  div {
    width: 65%;
  }

  button {
    width: 35%;
  }

  @media ${({ theme }) => theme.device.md} {
    width: auto;

    div {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;

export const NetworkList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
  height: 100%;
  overflow-y: auto;
`;

export const Item = styled.div``;

export const HeaderItem = styled.div``;

export const BoxInitialLetter = styled.div``;

export const NetworkName = styled.span``;

export const IconInfo = styled(InfoIcon)``;

export const MoreInfo = styled.div``;

export const BoxInfo = styled.div``;

export const Info = styled.span``;
