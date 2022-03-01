import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Fade from "react-reveal";
const MenuWrapper = styled.div`
  position: fixed;
  background-color: #458ff6;
  width: 100%;
  height: 100vh;
  z-index: 100;
  display: flex;
  align-items: start;
  justify-content: left;
  padding: 10px;
  li {
    color: #fff;
    border-bottom: 0.5px solid #fff;
    text-align: start;
    padding: 0;
    margin: 5px;
    a {
      color: #fff;
      font-size: 20px;
      text-align: start;
    }
  }
`;
function MobileMenu() {
  return (
    <MenuWrapper>
         <Fade top> 
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <a href="#features">Serviços</a>
        </ListItem>
        <ListItem>
          <a href="#newletter"> Testemunhos</a>
        </ListItem>
        <ListItem>
          <Link to="/Clinic"> Clínicas</Link>
        </ListItem>
      </List>
    </Fade>
    </MenuWrapper>

  );
}

export default MobileMenu;
