import Button, { ButtonCancel } from "components/Button/Button";
import { useState } from "react";
import styled from "styled-components";
import { GenericType } from "types";
import ModalBase from "./ModalBase";

type Props = {
  name: string;
  onClose: () => void;
  onConfirm: (clinicaId: number) => void;
  isOpen: boolean;
  text?: string;
  firstSelectLabel?: string;
  firstSelectValue?: GenericType;
  secondSelectLabel?: string;
  secondSelectValue?: GenericType[];
};

const ModalAssociate: React.FC<Props> = ({
  firstSelectValue,
  firstSelectLabel,
  secondSelectLabel,
  secondSelectValue,
  text,
  onClose,
  onConfirm,
  ...props
}) => {
  const [selectValue, setSelectValue] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleConfirm = (clinicaId: number) => {
    onConfirm(clinicaId);
    setLoading((prev) => !prev);
  };

  return (
    <ModalBase onClose={onClose} {...props}>
      <Text>{text}</Text>
      <SelectContainer>
        <Label>{firstSelectLabel}</Label>
        <Select disabled>
          {firstSelectValue && (
            <option defaultChecked value={firstSelectValue.id}>
              {firstSelectValue.nome}
            </option>
          )}
        </Select>
        <Label>{secondSelectLabel}</Label>
        <Select
          value={selectValue}
          onChange={(e) => {
            setSelectValue(Number(e.target.value));
          }}
        >
          {secondSelectValue &&
            secondSelectValue.map((value, index) => (
              <option
                key={`${secondSelectLabel}-option-${index}`}
                value={value.id}
                defaultChecked
              >
                {value.nome}
              </option>
            ))}
        </Select>
      </SelectContainer>

      <ButtonsContainer>
        <ButtonCancel onClick={onClose}>Cancelar</ButtonCancel>
        <Button disabled={loading} onClick={() => handleConfirm(selectValue)}>
          {loading ? "Carregando..." : "Confirmar"}
        </Button>
      </ButtonsContainer>
    </ModalBase>
  );
};

export default ModalAssociate;

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

const SelectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Label = styled.span`
  display: block;
  color: #031c24;
  font-family: "Roboto";
  font-size: 16px;
  letter-spacing: 0.02em;
  margin-top: 20px;
  margin-bottom: 10px;
  width: 50%;
  text-align: start;
`;

const Select = styled.select`
  max-width: 250px;
  width: 100%;
  height: 40px;
  font-size: 1rem;
  color: #495057;
  background: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 6px;
  outline: none;
  cursor: pointer;
`;

