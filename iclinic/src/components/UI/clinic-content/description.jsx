import React from 'react';
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((Theme) => ({
 subtitle:{
  
  fontFamily: "Roboto",
  fontStyle:" normal",
  fontSize: "20px",
  lineHeight: "32px",
  color: "#7D7987",
   width:"50%" ,
   textAlign:"center"  ,
   margin:"30px 0 "  
    } 
  }));
function Description() {
    const classes = useStyles();
  return (
    <Typography className={classes.subtitle} variant="subtitle1"> Aqui você encontra a maior rede de clínicas do Brasil , com uma diversidade de serviços e preços acessíveis ao seu bolso   </Typography>
  )
}

export default Description