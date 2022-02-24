import React from 'react'
import { Button } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {
      display: "flex",
      alignSelf: "end",
      marginRight:"120px",
      marginTop:"10px"
    },
  });


function AddButton() {
    const classes = useStyles();
  return (
    <Button className={classes.main} color="primary" variant="contained">Adicionar Clínica</Button>
  )
}

export default AddButton