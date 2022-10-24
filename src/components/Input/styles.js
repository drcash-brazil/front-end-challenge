import styled from "styled-components";
import { Slot } from "@radix-ui/react-slot";

export const ContentRoot = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  gap: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.rectangle};
  padding: 1rem 0.75rem;
  background: ${({ theme }) => theme.pallet.gray.gray100};
  border: 2px solid ${({ theme }) => theme.pallet.green.green500};
`;

export const ContentSlot = styled(Slot)`
  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.pallet.green.green500};
`;

export const StyledInput = styled.input`
  background: transparent;
  flex: 1;
  outline: none;
  color: ${({ theme }) => theme.pallet.gray.gray900};
  font-size: ${({ theme }) => theme.fontSize.sm};
  border: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.pallet.gray.gray500};
  }
`;
