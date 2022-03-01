import React from 'react'
import Typography  from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
 input:{
   
    width:'100%',
    margin:'10px'
}, text:{

}, root:{
  display:'flex',
  alignItems:'start',
  justifyContent:'center',
  flexDirection:'column'
}

}));

function Preview(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Typography variant="h4" >  Ver Dados </Typography>
    <Typography className={classes.text}  variant="h5"> {props.data[0].nome}  </Typography>
    <Typography className={classes.text} variant="h5"  > {props.data[0].cpf}  </Typography>
    <Typography className={classes.text} variant="h5"  > {props.data[0].capital} </Typography>
    <Typography className={classes.text} variant="h5"  > {props.data[1].estado}  </Typography>
    <Typography className={classes.text} variant="h5"  > {props.data[1].municipio}  </Typography>
    <Typography className={classes.text} variant="h5"  > {props.data[1].rua} </Typography>
  
    </div>
  )
}

export default Preview