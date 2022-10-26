import React from "react";
import PropTypes from "prop-types";

// STYLES
import { ContentButton } from "./styles";

export function Button({ children, className, ...props }) {
  return (
    <ContentButton className={className} {...props}>
      {children}
    </ContentButton>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: undefined,
};
