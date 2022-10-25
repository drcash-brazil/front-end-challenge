import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
} from '@mui/material';
import {
  makeStyles,
} from '@mui/styles';
import styles from './styles';

const useStyles = makeStyles(styles);

function NavItem({
  className, href, icon, title, ...rest
}) {
  const classes = useStyles();
  return (
    <ListItem
      disableGutters
      {...rest}
    >
      <Button
        to={href}
        component={NavLink}
        className={classes.button}
        activeClassName={classes.active}
      >
        <span>{title}</span>
      </Button>
    </ListItem>
  );
}

NavItem.defaultProps = {
  className: null,
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavItem;
