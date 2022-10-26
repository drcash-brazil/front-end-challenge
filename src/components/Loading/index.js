// LIBS
import PropTypes from "prop-types";
import ReactLoading from "react-loading";

// STYLES
import { WrapperLoading } from "./styles";

export function Loading({ color, type, ...rest }) {
  return (
    <WrapperLoading>
      <ReactLoading type={type} color={color} {...rest} />
    </WrapperLoading>
  );
}

Loading.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
};

Loading.defaultProps = {
  color: "#3FD2B6",
  type: "bubbles",
};
