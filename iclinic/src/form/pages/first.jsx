import React ,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
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

function Step1(props) {

  const classes = useStyles();
  const [data , setData] = useState({
   nome:"",
   cpf:"",
   capital:""
  });  

  const handleChange = (evt) =>{
    setData({
      ...data, [evt.target.name]:evt.target.value}  );
  }
  React.useEffect(() => {
    if (props.onChange) {
      props.onChange(data)
    }
  }, [data.nome, data.cpf , data.capital])
  
  return (
    <form className={classes.form} noValidate autoComplete="off" >
  <TextField required name="nome"  id="standard-basic" className={classes.input}  onChange={handleChange}  label="Nome da Clínica" />
  <TextField required  type="number" name="cpf"   id="standard-basic" className={classes.input}  onChange={handleChange}   label="CPF do Responsável"  />
  <TextField   required name="capital"  id="standard-basic" className={classes.input} onChange={handleChange}   label="Capital Social da Clínica"  />
</form>
  )
}

export default Step1