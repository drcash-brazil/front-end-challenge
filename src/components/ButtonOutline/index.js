import React from "react";
import PropTypes from "prop-types";

// STYLES
import { ContentButton } from "./styles";

export function ButtonOutLine({ children, className, ...props }) {
  return (
    <ContentButton className={className} {...props}>
      {children}
    </ContentButton>
  );
}

ButtonOutLine.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
};

ButtonOutLine.defaultProps = {
  className: undefined,
};
