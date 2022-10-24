import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const ModalRadixOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: #00000029;
  /* background-color: ${({ theme }) => theme.pallet.gray.gray100}; */
  z-index: 998;
`;

export const ModalRadixWrapper = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: ${({ theme }) => theme.pallet.gray.gray100};
  border-radius: 5px;

  box-shadow: ${({ theme }) => theme.boxShadow.variant};

  z-index: 999;
`;
