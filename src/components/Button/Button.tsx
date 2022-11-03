import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  icon?: string;
  children: React.ReactNode;
}
const Button: React.FC<Props> = ({ children, color, icon, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export const ButtonCancel: React.FC<Props> = ({ children, color, icon, ...props }) => {
    return <ButtonCancelStyled {...props}>{children}</ButtonCancelStyled>;
  };


export default Button;


export const ButtonStyled = styled.button<Props>`
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
    background-color: #063342;
  }
`;

const ButtonCancelStyled = styled(ButtonStyled)`
  background-color: #b41010;

  :hover {
    background-color:  #a01010;
  }
`