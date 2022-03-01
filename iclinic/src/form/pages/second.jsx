import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
     
  },input:{
   
    width:'100%',
    margin:'10px'
}

}));

function Step2(props) {
  const classes = useStyles();
  
  const [data , setData] = React.useState({
    estado:"",
    municipio:"",
    rua:""
   });  
 
  const handleChange = (evt) =>{
    setData({
      ...data, [evt.target.name]:evt.target.value}  );
  }

  React.useEffect(() => {
    if (props.onChange) {
      props.onChange(data)
    }
  }, [data.estado, data.rua , data.municipio])
  
  return (
    <form className={classes.form} noValidate autoComplete="off">
  <TextField  required id="standard-basic"  onChange={handleChange}  name="estado" className={classes.input} label="Estado" />
  <TextField  required id="standard-basic" onChange={handleChange}    name="municipio" className={classes.input} label="Município"  />
  <TextField  required id="standard-basic" onChange={handleChange}    name="rua"  className={classes.input}  label="Rua"  />
</form>
  )
}

export default Step2