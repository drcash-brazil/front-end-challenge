import styled from "styled-components";
import { Form } from "@unform/web";

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
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  div {
    width: 100%;
  }

  button {
    width: 100%;
  }

  @media ${({ theme }) => theme.device.sm} {
    flex-direction: row;

    div {
      width: 65%;
    }

    button {
      width: 35%;
    }
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
  padding: 0.3125rem;
  height: 100%;
  overflow-y: auto;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  background: ${({ theme }) => theme.pallet.white};
  box-shadow: ${({ theme }) => theme.boxShadow.variant};
  gap: 0.5rem;
  padding: 1rem;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
`;

export const BoxInitialLetter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.pallet.green.green500};
  color: ${({ theme }) => theme.pallet.white};
`;

export const NetworkName = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
`;

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
`;

export const BoxInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;

  > svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const Info = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  min-width: 600px;
  padding: 2.5rem;
`;
export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  button {
    margin-top: 0.75rem;
  }
`;
export const TitleModal = styled.h2``;
export const Label = styled.span``;
