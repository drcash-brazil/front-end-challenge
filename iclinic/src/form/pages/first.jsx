import React from 'react'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';


function Step1() {
  return (
    <form  noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
  <TextField id="standard-basic" label="Filled" variant="filled" />
  <TextField id="standard-basic" label="Outlined" variant="outlined" />
</form>
  )
}

export default Step1