import React, { memo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import Logo from '../../ui/Logo';

// import logoBranca from 'assets/img/logoBranca.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
}));

function Header({
  handleDrawer,
  open,
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const history = useHistory();
  
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogOutClick = () => history.push("/");

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      className={cx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
      color="primary"
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
          className={cx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>

        <Logo/>

        <div className="flex flex-row items-center">
          <Typography variant="body1" display="block">
            Olá Administrador01
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isOpen}
            onClose={handleClose}
          >
            <MenuItem onClick={() => alert("Coming Soon...")}>Configurações</MenuItem>
            <MenuItem onClick={handleLogOutClick}>Sair</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  handleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

Header.defaultProps = {
  open: false,
};

export default memo(Header);
