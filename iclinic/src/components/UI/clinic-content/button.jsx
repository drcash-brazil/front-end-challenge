
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import SpringModal from './modal';
const useStyles = makeStyles({
  main: {
    display: "flex",
    alignSelf: "end",
    marginRight:"120px",
    marginTop:"10px"
  },
});


function AddButton() {
  
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const classes = useStyles();
    return (<><SpringModal open={open} handleClose={handleClose} />
    <Button className={classes.main} onClick={handleOpen}  color="primary" variant="contained">Adicionar Clínica</Button>
  </>

  )
}

export default AddButton