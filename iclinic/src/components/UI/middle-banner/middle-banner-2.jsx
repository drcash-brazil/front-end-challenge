import React from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";

import Theme from '../../../utils/pallete/index.jsx'

import Slide from 'react-reveal/Slide';

import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((Theme) => ({
  root: {
    display: "flex",
    height:"580px",
    padding:'0 20px'

  },
  leftAside:{
      display:"flex",
     "flex-direction":"column",
      "align-items":"start",
      "justify-content":"space-between",
       width:"40%",
       padding:"10px 50px",
       height:'50%',
       marginTop:'20px'
  },
  rightAside:{
 
       width:"60%",
       padding:"10px 50px",
       
  },
  title: {

    fontSize:"30px",
    color:"#000000", 
     "mix-blend-mode": "normal",
     },subtitle:{

fontFamily: "Roboto",
fontStyle:" normal",
fontWeight: "300",
fontSize: "17px",
lineHeight: "32px",
color: "#7D7987;"
     
  } ,
  button:{
borderRadius: "55px",
background:"primary"
  }

}));






const Image = styled.img`
    
 display:flex;
 align-self:end;
 width:90%;

`;



export default function MiddleBannerQ() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
    <ThemeProvider  theme={Theme}>
          <Box className={classes.leftAside}> 
          <Slide left>            <Typography className={classes.title} variant="h3">
            Download our 
mobile apps
            </Typography>
         
            <Typography  className={classes.subtitle} variant="subtitle1">
            Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely
            </Typography>
            <Button className={classes.button} variant="contained" color="primary" > 
              Download
            </Button> 
            </Slide>

          </Box>

          <Box className={classes.rightAside}> 
          <Slide left> 
          <Image src={`${process.env.PUBLIC_URL}trafalgar-illustration.svg`} />
          </Slide>
          </Box>
          
          </ThemeProvider>
    </Container>
    
  )
}
