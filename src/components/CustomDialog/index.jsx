import PropTypes from 'prop-types';
import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@mui/material';

const CustomDialog = ({
  open,
  title,
  content,
  handleClose,
  cancelButton,
  confirmButton,
  handleConfirm,
}) => (
  <Dialog
    open={open}
    onClose={handleClose}
  >
    <DialogTitle>
      {title}
    </DialogTitle>
    <DialogContent>
      {typeof content === 'string' ? (
        <DialogContentText>
          {content}
        </DialogContentText>
      ) : (
        content
      ) }
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>
        {cancelButton}
      </Button>
      <Button onClick={handleConfirm}>
        {confirmButton}
      </Button>
    </DialogActions>
  </Dialog>
);
export default CustomDialog;

CustomDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  cancelButton: PropTypes.string,
  confirmButton: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};

CustomDialog.defaultProps = {
  cancelButton: 'Cancelar',
  confirmButton: 'Confirmar',
};
