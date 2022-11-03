import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./Button";

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

