import styled from "styled-components";

export const WrapperClinicDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 2rem 1rem 1rem 1rem;
  margin: 0 auto;
  height: calc(100vh - 75px);
`;

export const ContentClinicDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HeaderPage = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};

  @media ${({ theme }) => theme.device.sm} {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const BoxHeaderRight = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonDelete = styled.button`
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.rectangle};
  border: 2px solid ${({ theme }) => theme.pallet.red};

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme.pallet.red};
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.pallet.red};
    background-color: ${({ theme }) => theme.pallet.red};

    svg {
      color: ${({ theme }) => theme.pallet.white};
    }
  }
`;

export const BoxDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Title = styled.span``;
