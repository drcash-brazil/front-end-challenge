import Button, { ButtonCancel } from "components/Button/Button";
import styled from "styled-components";
import ModalBase from "./ModalBase";

type Props = {
  name: string;
  onClose: () => void;
  onConfirm: () => void;
  isOpen: boolean;
};

const ModalConfirm: React.FC<Props> = ({ onClose, onConfirm, ...props }) => {
  return (
    <ModalBase onClose={onClose} {...props}>
      <Text>Você tem certeza?</Text>
      <ButtonsContainer>
        <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
        <Button onClick={onConfirm}>Confirmar</Button>
      </ButtonsContainer>
    </ModalBase>
  );
};

export default ModalConfirm;

const Text = styled.p`
  text-align: center;
  font-size: 18px;
`;

const ButtonsContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  flex-wrap: wrap;
  gap: 10px;
`;

