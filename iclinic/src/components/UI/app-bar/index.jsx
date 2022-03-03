import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import CloseICon from "@material-ui/icons/Close";
import styled from "styled-components";
import NavItem from "./nav-item";
import { Link } from "react-router-dom";
import MobileMenu from "./mobile-menu";

const NavItemsWrapper = styled(Toolbar)`
  background: #fff;
  padding: 0 55px;
  color: black;
  display: flex;
  justify-content: space-between;
  box-shadow:unset;
  .menuToogle {
    display: none;
  }
  @media (max-width: 927px) {
    ul {
      display: none;
    }
    .menuToogle {
      display: flex;
    }
  }
  .iconLogo {
    background: #458ff6;
    border-radius: 30px;
    font-size: 20px;
    padding: 2px;
    color: #fff;
  }
`;

const Nav = styled.ul`
  display: flex;
  list-style: none;
  width: 30%;
  padding: 10px;
  justify-content: space-between;
`;

function NavBar() {
  const [menu, setMenu] = useState(false);
  const handleShowMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <AppBar position="sticky">
        <NavItemsWrapper>
          <Typography variant="h6">
            <span className="iconLogo"> M</span> Iclinic
          </Typography>
          <Nav>
            <NavItem>
              <Link to="/"> Home</Link>
            </NavItem>
            <NavItem>
              <a href="#newletter"> Testemunhos</a>
            </NavItem>
            <NavItem>
              <a href="#features"> Serviços</a>
            </NavItem>
            <NavItem>
              <Link to="/Clinic"> Clínicas</Link>
            </NavItem>
          </Nav>

        { menu ? <CloseICon  onClick={handleShowMenu}/>
          : <MenuIcon onClick={handleShowMenu} className="menuToogle" />}
        </NavItemsWrapper>
      </AppBar>
      {menu ? <MobileMenu /> : <></>}
    </>
  );
}

export default NavBar;
