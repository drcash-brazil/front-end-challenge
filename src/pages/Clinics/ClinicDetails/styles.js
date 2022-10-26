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

export const HeaderPageEmployees = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.75rem;

  @media ${({ theme }) => theme.device.sm} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
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

export const ButtonEdit = styled.button`
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.rectangle};
  border: 2px solid ${({ theme }) => theme.pallet.green.green500};

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme.pallet.green.green500};
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.pallet.green.green500};
    background-color: ${({ theme }) => theme.pallet.green.green500};

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

export const BoxEmployees = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const BoxButton = styled.div``;

export const TitleEmployees = styled.span`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

export const EmployeesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Item = styled.div`
  border: 2px solid ${({ theme }) => theme.pallet.green.green500};
  border-radius: 8px;
  padding: 1rem;
`;

export const ClinicName = styled.span`
  font-weight: 500;
`;
