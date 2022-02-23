import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import styled from 'styled-components';
import NavItem from './nav-item';



const NavItemsWrapper = styled(Toolbar)`
background: #fff;
padding:0 55px;
color:black;
display:flex;
justify-content:space-between;
.menuToogle{
  display:none;
}
@media(max-width:927px){
  ul{
    display:none;
  }
  .menuToogle{
  display:flex;
}
}
.iconLogo{
  background:#458FF6;
   border-radius:30px;
   font-size:20px;
   padding:2px;
   color:#FFF
}
`; 

const Nav = styled.ul`

display:flex;
list-style:none;
width:30%;
padding:10px;
justify-content:space-between;
 
`;


function NavBar() {

  return (
    <AppBar position="sticky">
      <NavItemsWrapper >
 
        <Typography variant="h6" >
        <span className="iconLogo"> I</span>    Iclinic 
        </Typography>
        <Nav> 
          <NavItem> 
           Home
          </NavItem>
          <NavItem> 
           Testemunhos
          </NavItem>
          <NavItem> 
           Sobre Nós
          </NavItem>
          <NavItem> 
           Clínicas
          </NavItem>
        
        </Nav>

        <MenuIcon className="menuToogle"/>
     
      </NavItemsWrapper>
    </AppBar>
  );
}

export default NavBar;
