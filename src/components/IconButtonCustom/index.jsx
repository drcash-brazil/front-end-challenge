import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';

import styles from './styles.module.css';

const IconButtonCustom = ({ size, children, handleClick }) => (
  <IconButton
    size={size}
    onClick={handleClick}
  >
    {children}
  </IconButton>
);

export default IconButtonCustom;

IconButtonCustom.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

IconButtonCustom.defaultProps = {
  size: 'small',
};
