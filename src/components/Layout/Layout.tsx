import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Logo from "assets/logoIClinic.png";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const [menuState, setMenuState] = useState<boolean>(false);

  const handleMenuState = useCallback(() => {
    setMenuState((prev) => !prev);
  }, [setMenuState]);

  return (
    <Container>
      <Header>
        <img src={Logo} alt="Logo IClinic" />
        <div>
          <LinkButtonHeader to={"/"}>Inicio</LinkButtonHeader>
          <LinkButtonHeader to={"/redes"}>Redes</LinkButtonHeader>
          <LinkButtonHeader to={"/clinicas"}>Clínicas</LinkButtonHeader>
          <LinkButtonHeader to={"/funcionarios"}>Funcionários</LinkButtonHeader>

          <i className="fa-solid fa-bars" onClick={handleMenuState}></i>
        </div>
      </Header>
      <MobileHeader open={menuState}>
        <LinkButtonHeaderMobile to={"/"}>Inicio</LinkButtonHeaderMobile>
        <LinkButtonHeaderMobile to={"/redes"}>Redes</LinkButtonHeaderMobile>
        <LinkButtonHeaderMobile to={"/clinicas"}>
          Clínicas
        </LinkButtonHeaderMobile>
        <LinkButtonHeaderMobile to={"/funcionarios"}>
          Funcionários
        </LinkButtonHeaderMobile>
      </MobileHeader>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Roboto", sans-serif;
`;

const LinkButtonHeader = styled(Link)`
  color: #ffff;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  transition: all 0.3s ease-in-out;

  > i {
    margin-right: 10px;
  }

  :before {
    content: "";
    background: #ffff;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  :hover::before {
    width: 100%;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: #073b4c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  img {
    width: 50px;
  }

  > div {
    display: flex;
    gap: 15px;

    > i {
      color: white;
      font-size: 20px;
      display: none;
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    > div > i {
      display: block;
    }

    ${LinkButtonHeader} {
      display: none;
    }
  }
`;

const LinkButtonHeaderMobile = styled(Link)`
  color: #ffff;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s ease-in-out;
  height: 50px;
  border-bottom: 1px solid #ffff;

  > i {
    margin-right: 10px;
  }

  :before {
    content: "";
    background: #ffff;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  :hover::before {
    width: 100%;
  }
`;

const MobileHeader = styled.div<{ open: boolean }>`
  width: 100%;
  height: ${(props) => (props.open ? "400px" : "0px")};
  background-color: #073b4c;
  position: absolute;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

const Content = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  background-color: #ffffffed;
  padding: 20px;
`;

