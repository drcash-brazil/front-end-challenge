import React from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50vh;
  background: linear-gradient(183.41deg, #67c3f3 -8.57%, #5a98f2 82.96%);
  margin-top: 100px;
  padding: 10px 30px;
  
  ul:first-child{
      width:40%;
  }
  .fistList {
    .title{
      color:red:
  }
    li {
      font-style: normal;
      font-weight: 300;
      font-size: 17px;
      line-height:18px;
      color: #ffffff;
      mix-blend-mode: normal;
    }
    li:first-child {
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height:50px;
      color: #ffffff;
      mix-blend-mode: normal;
    }
    span {
      font-size: 10px;
      background-color: #FFF;
      border-radius: 25px;
      width: 30px;
      height: 30px;
      color:#3a6375;
      border-radius: 50%;
     margin-right:5px;
    }
    display: flex;
    flex-direction: column;
    width: 20%;
    li {
      color: #fff;
    }
  }

  @media (max-width: 776px) {
    padding: 20px 5px;
    height: 80vh;

    flex-wrap: wrap;
    ul:first-child{
        width:50%;
    }
    .fistList {
      width: 50%;
      li {
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 20px;
      color: #ffffff;
      mix-blend-mode: normal;
    }
    li:first-child {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 10px;
     
    }
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <List className="fistList">
        <ListItem className="title"> <span> I  </span> IClinic</ListItem>
        <ListItem>
        A Iclinic - Michel oferece cuidados de saúde progressivos e acessíveis, acessíveis em dispositivos móveis e online para todos
        </ListItem>
        <ListItem> @GeoChivas99s 2022. All rights reserved </ListItem>
      </List>

      <List className="fistList">
        <ListItem>Empresa</ListItem>
        <ListItem>Sobre Nós</ListItem>
        <ListItem> Testemunhos</ListItem>
        <ListItem> Encontre um doutor</ListItem>
        <ListItem> Apps</ListItem>
      </List>

      <List className="fistList">
        <ListItem>Estados</ListItem>
        <ListItem>São Paulo</ListItem>
        <ListItem> Minas Gerais</ListItem>
        <ListItem> Rio de Janeiro</ListItem>
        <ListItem> São Pedro</ListItem>
      </List>
      <List className="fistList">
        <ListItem>Ajuda</ListItem>
        <ListItem>Help Center</ListItem>
        <ListItem> Contacto de Suporte </ListItem>
        <ListItem> Instruções </ListItem>
        <ListItem> Como funciona? </ListItem>
      </List>
    </FooterWrapper>
  );
}

export default Footer;
