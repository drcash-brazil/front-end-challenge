import { memo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Logo from 'components/ui/Logo';
import materialStyleConfig from './utils/materialStyleConfig';

function Header({
  handleDrawer,
  open,
}) {
  const classes = materialStyleConfig();
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
            Olá, Michael
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

export default memo(Header);
