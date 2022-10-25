import {
  Drawer, Container, AppBar, Toolbar, Grid, IconButton,
} from '@mui/material';

import { Close } from '@mui/icons-material';
import PropTypes from 'prop-types';

const SidePage = ({
  open, children, title, setOpenSidePage,
}) => (
  <Drawer
    open={open}
    anchor="right"
    onClose={() => setOpenSidePage(false)}
  >

    <div style={{ width: '500px' }}>
      <AppBar
        postition="static"
        style={{
          width: '500px',
        }}
      >
        <Toolbar style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'primary',
          justifyContent: 'space-between',
        }}
        >
          <h4>{title}</h4>
          <IconButton onClick={() => setOpenSidePage(false)}>
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '80px 20px' }}>
        {children}
      </div>
    </div>

  </Drawer>
);

export default SidePage;

SidePage.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  setOpenSidePage: PropTypes.func.isRequired,
};
