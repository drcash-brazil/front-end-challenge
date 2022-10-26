import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  gap: 2.5rem;
  padding: 2.5rem;

  @media ${({ theme }) => theme.device.md} {
    width: 35vw;
  }
`;
export const HeaderModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  svg {
    width: 5rem;
    height: 5rem;
    color: ${({ theme }) => theme.pallet.red};
  }
`;
export const StyledContentButton = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const DescriptionModal = styled.span`
  font-weight: 500;
`;
