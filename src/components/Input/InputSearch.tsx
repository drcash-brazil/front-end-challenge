import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputSearch: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <InputContainer>
      <i className="fa-solid fa-magnifying-glass"></i>
      <Input {...props} />
    </InputContainer>
  );
};

export default InputSearch;

const InputContainer = styled.div`
  min-width: 150px;
  max-width: 200px;
  height: 40px;
  font-size: 1rem;
  color: #495057;
  background: #ffffff;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  transition: 0.25s;

  > i {
    margin-left: 10px;
    margin-right: 5px;
    color: #6c757d;
  }

  :hover,
  :focus-within {
    border-color: #073b4c;
  }
`;

const Input = styled.input`
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: 14px;
`;

