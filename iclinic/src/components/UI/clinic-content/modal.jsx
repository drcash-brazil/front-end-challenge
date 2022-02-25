import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Form from '../../../form/form'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:'500px',
    height:'500px',
    borderRadius:'10px',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'space-between',
    
  },close:{
      position: 'absolute',
      right:'0'
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  

  return (
    <div>
   
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
              <i className={classes.close}> x </i>
 
            <Form/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}