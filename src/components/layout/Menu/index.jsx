import { memo } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import materialStyleConfig from './utils/materialStyleConfig';
function Menu({
  handleDrawer, 
  open,
  options,
  activated,
  handleActivated,
}) {
  const classes = materialStyleConfig();
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
                <div className="pl8">
                  <ListItemIcon
                    className={cx({
                      [classes.blue]: activated === key
                    })}
                    onClick={() => handleActivated(key)}
                  >
                    {o.image}
                  </ListItemIcon>
                </div>
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
