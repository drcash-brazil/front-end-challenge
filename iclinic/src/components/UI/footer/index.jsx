import React from 'react';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';


const FooterWrapper = styled.footer`
position:absolute;
bottom:0;
display:flex;
align-items:center;
justify-content:space-between;

width:100%;
height: 432px;;
background: linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%);
margin-top:100px;
padding:10px 30px;
.fistList{
    span{
      font-size:10px;
        background-color:#FFF;
        border-radius:25px;
    }
    display:flex;
    flex-direction:column;
    width:25%;
    li{
        color:#FFF;
    }
}

@media(max-width:776px){
padding:20px 5px;
    
    flex-wrap:wrap;
    .fistList{
        width:50%;
    }
}
`;


function Footer() {
  return (
    <FooterWrapper>
        <List className="fistList">
            <ListItem> <span>I</span> IClinic </ListItem>
            <ListItem>  Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
for everyone </ListItem>
            <ListItem> ©Trafalgar PTY LTD 2020. All rights reserved </ListItem>
        </List>

        <List className="fistList">
            <ListItem> <span>I</span> IClinic </ListItem>
            <ListItem>  Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
for everyone </ListItem>
            <ListItem> ©Trafalgar PTY LTD 2020. All rights reserved </ListItem>
        </List>

        <List className="fistList">
            <ListItem> <span>I</span> IClinic </ListItem>
            <ListItem>  Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
for everyone </ListItem>
            <ListItem> ©Trafalgar PTY LTD 2020. All rights reserved </ListItem>
        </List>
        <List className="fistList">
            <ListItem> <span>I</span> IClinic </ListItem>
            <ListItem>  Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
for everyone </ListItem>
            <ListItem> ©Trafalgar PTY LTD 2020. All rights reserved </ListItem>
        </List>





    </FooterWrapper>
  )
}

export default Footer