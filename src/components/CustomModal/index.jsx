import { Dialog, DialogTitle, DialogContent } from '@mui/material';

const CustomModal = ({
  open, title, children, handleClose,
}) => (
  <Dialog
    open={open}
    onClose={handleClose}
  >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
);

export default CustomModal;
