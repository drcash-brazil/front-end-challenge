import styled from "styled-components";

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
  background: ${({ theme }) => theme.pallet.green.green500};
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
`;

export const NavList = styled.div`
  display: flex;
  gap: 2rem;

  a {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    color: ${({ theme }) => theme.pallet.white};
  }
`;
