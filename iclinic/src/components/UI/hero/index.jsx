import React from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";

import Theme from '../../../utils/pallete/index.jsx'
import Bounce from 'react-reveal/Bounce';

import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((Theme) => ({
  root: {
    display: "flex",
    height:"580px",
    padding:"50px",

 
  },
  leftAside:{
      display:"flex",
     "flex-direction":"column",
      "align-items":"start",
      "justify-content":"space-around",
       width:"40%",
       padding:"10px 50px",
       height:'70%',
       marginTop:'30px'
      

  },
  rightAside:{
      display:"flex",
      alignItems:"end",
      justifyContent:"center",
       width:"60%",
       padding:"10px 50px"
  },
  title: {
    fontSize:"2.5rem",
    color:"#000000", 
     "mix-blend-mode": "normal",
     },
 subtitle:{
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



export default function Hero() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
    <ThemeProvider  theme={Theme}>
         
          <Box className={classes.leftAside}> 
         <Bounce left>
            <Typography  className={classes.title} variant="h3">
            Virtual healthcare for you
            </Typography>
         
            <Typography  className={classes.subtitle} variant="subtitle1">
            Trafalgar provides progressive, and affordable 
            healthcare, accessible on mobile and online 
             for everyone
            </Typography>
            <Button className={classes.button} variant="contained" color="primary" > 
              Consult today
            </Button> 
          </Bounce>
          </Box>
          <Box className={classes.rightAside}> 
          <Bounce>
          <Image src={`${process.env.PUBLIC_URL}heroImage.svg`} />
          </Bounce>
          </Box>
          
          </ThemeProvider>
    </Container>
    
  )
}
