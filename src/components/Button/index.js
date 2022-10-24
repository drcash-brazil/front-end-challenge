import React from "react";

// STYLES
import { ContentButton } from "./styles";

export function Button({ children, className, ...props }) {
  return (
    <ContentButton className={className} {...props}>
      {children}
    </ContentButton>
  );
}
