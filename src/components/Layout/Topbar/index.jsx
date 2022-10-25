import PropTypes from 'prop-types';

import {
  AppBar, Box, Toolbar, IconButton,
} from '@mui/material';

import { Menu } from '@mui/icons-material';

const Topbar = ({ setOpen }) => (
  <AppBar
    elevation={2}
    color="primary"
    position="static"
  >
    <Toolbar>
      <IconButton onClick={() => setOpen((prevState) => !prevState)} size="small">
        <Menu style={{ fill: 'white' }} />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Topbar;

Topbar.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
