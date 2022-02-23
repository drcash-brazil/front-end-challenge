import React from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height:"580px",
    padding:"10px",

 
  },
  leftAside:{
      display:"flex",
     "flex-direction":"column",
      "align-items":"start",
      "justify-content":"center",
       width:"40%",
       padding:"10px 50px"
  },
  rightAside:{
      display:"flex",

      "align-items":"end",
      "justify-content":"center",
       width:"60%",
       padding:"10px 50px"
  },
  title: {
    flexGrow: 1,
    "font-family":"Mulish",
    "font-weight":"bold",
    "font-size":"48px",
    color:"#000000", 
     "mix-blend-mode": "normal"
    
  },subtitle:{
"font-family": "Roboto",
"font-style":" normal",
"font-weight": "300",
"font-size": "21px",
"line-height": "32px",
color: "#7D7987;"
  } ,
  button:{
"border-radius": "55px",
"background":"primary"
  }

}));






const Image = styled.img`
    
 display:flex;
 align-self:end;
 width:100%;

`;



export default function Hero() {
  const classes = useStyles();
  return (
    
    <Container className={classes.root}>
          <Box className={classes.leftAside}> 
            <Typography variant="h3">
            Virtual healthcare for you
            </Typography>
         
            <Typography  className={classes.subtitle} variant="subtitle1">
            Trafalgar provides progressive, and affordable 
            healthcare, accessible on mobile and online 
             for everyone
            </Typography>
            <Button className={classes.button} variant="contained"> 
              Consult today
            </Button> 
          </Box>
          <Box className={classes.rightAside}> 
          <Image src={`${process.env.PUBLIC_URL}heroImage.svg`} />
          </Box>
          {console.log(process.env.PUBLIC_URL)}
    </Container>
  )
}
