import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import cx from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  blue: {
    color: '#3f51b5',
  },

}));

function Menu({
  handleDrawer,
  open,
  options,
  activated,
  handleActivated,
}) {
  const classes = useStyles();
  return (
    <Drawer
      variant="permanent"
      className={cx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: cx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        {options.map((option) => (
          option.map((o, key) => (
            <div key={o.route}>
              <ListItem component={Link} to={o.route} button key={o.title}>
                <ListItemIcon
                  className={cx({
                    [classes.blue]: activated === key,
                  })}
                  onClick={() => handleActivated(key)}
                >
                  {o.image}
                </ListItemIcon>
                <ListItemText
                  primary={o.title}
                  className={cx('fw6', { [classes.blue]: activated === key })}
                  onClick={() => handleActivated(key)}
                />
              </ListItem>
            </div>
          ))
        ))}
      </List>
    </Drawer>
  );
}

Menu.propTypes = {
  handleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
  }))).isRequired,
  activated: PropTypes.number,
  handleActivated: PropTypes.func,
};

Menu.defaultProps = {
  open: false,
  activated: 0,
  handleActivated: () => {},
};

export default memo(Menu);
