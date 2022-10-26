import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  gap: 2.5rem;
  padding: 2.5rem;

  @media ${({ theme }) => theme.device.lg} {
    width: 40vw;
  }
`;
export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  button {
    margin-top: 0.75rem;
  }
`;
export const TitleModal = styled.h2``;
export const Label = styled.span`
  font-weight: 500;
`;
export const ButtonCloseModal = styled.button`
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.pallet.black};
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.pallet.red};
    }
  }
`;
