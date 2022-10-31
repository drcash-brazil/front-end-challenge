import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  icon?: string;
  children: React.ReactNode;
}
const ButtonIcon: React.FC<Props> = ({ children, color, icon, ...props }) => {
  return (
    <ButtonStyled {...props}>
      <i className={`fa-solid fa-${icon}`}></i>

      {children}
    </ButtonStyled>
  );
};

export default ButtonIcon;

const ButtonStyled = styled.button<Props>`
  width: 130px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: #073b4c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: 0.25s;
  
  > i {
    margin-right: 10px;
  }

  :hover {
    background-color: #095068;
  }
`;

