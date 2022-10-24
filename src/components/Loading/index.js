// LIBS
import ReactLoading from "react-loading";

// STYLES
import { WrapperLoading } from "./styles";

export function Loading({
  h,
  w,
  color = "#3FD2B6",
  type = "bubbles",
  ...rest
}) {
  return (
    <WrapperLoading style={{ height: h ? h : "100%", width: w ? w : "100%" }}>
      <ReactLoading type={type} color={color} {...rest} />
    </WrapperLoading>
  );
}
