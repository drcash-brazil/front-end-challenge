import { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  List,
  Drawer,
  Divider,
  ListItem,
  IconButton,
  ListItemText,
} from '@mui/material';

import { Link } from 'react-router-dom';
import { Close } from '@mui/icons-material';

import Logo from '../../Logo';

import styles from './styles.module.css';

const Navbar = ({ open, handleClose }) => (
  <Drawer achor="left" open={open} onClose={handleClose}>
    <header className={styles.headerDrawer}>
      <Logo width={120} />
      <IconButton size="small" onClick={handleClose}>
        <Close />
      </IconButton>
    </header>
    <Divider />

    <List>
      <Link to="/clinicas" onClick={handleClose}>
        <ListItem>
          <ListItemText primary="Clínicas" />
        </ListItem>
      </Link>

      <Link to="/funcionarios" onClick={handleClose}>
        <ListItem>
          <ListItemText primary="Funcionários" />
        </ListItem>
      </Link>

      <Link to="/redes" onClick={handleClose}>
        <ListItem>
          <ListItemText primary="Redes" />
        </ListItem>
      </Link>
    </List>

  </Drawer>
);

export default Navbar;

Navbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
