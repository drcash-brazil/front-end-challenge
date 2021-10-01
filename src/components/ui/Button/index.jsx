import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@material-ui/core/Button';

const Button = ({
  buttonValue,
  className,
  type,
  disabled,
  onClick,
  ...props
}) => (
  <>
    <MuiButton
      onClick={onClick}
      type={type}
      className={className}
      disabled={disabled}
      {...props}
    >
      {buttonValue}
    </MuiButton>
  </>
);

Button.propTypes = {
  buttonValue: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  className: null,
  type: null,
  disabled: false,
  onClick: null,
  variant: 'contained',
  color: 'primary',
};

export default Button;
