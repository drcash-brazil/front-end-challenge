import styled from "styled-components";

export const ContentButton = styled.button`
  font-weight: bold;
  color: ${({ theme }) => theme.pallet.white};
  background: ${({ theme }) => theme.pallet.green.green500};
  border-radius: ${({ theme }) => theme.borderRadius.rectangle};
  padding: 0.75rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  width: 100%;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover {
    background: ${({ theme }) => theme.pallet.green.green300};
  }
`;
