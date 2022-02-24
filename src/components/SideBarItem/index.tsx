import { Link } from "react-router-dom";
import * as C from "./styles";

import SearchIcon from "../../svgs/search.svg";

interface Props {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
}

export const SideBarItem = ({
  title,
  description,
  icon,
  path,
  active,
}: Props) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>
        <C.IconArea active={active}>
          {icon === "enterprise" && <img src="/images/enterprise.svg" alt="" />}
          {icon === "address" && <img src="/images/address.svg" alt="" />}
          {icon === "clinics" && <img src="/images/clinics.svg" alt="" />}
        </C.IconArea>
        <C.Point active={active}></C.Point>
      </Link>
    </C.Container>
  );
};
