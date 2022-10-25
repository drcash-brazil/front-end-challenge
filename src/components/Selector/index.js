import React from "react";
import Select from "react-select";

export function Selector({ ...rest }) {
  return (
    <Select
      className="basic-multi-select"
      classNamePrefix="iclinic_select"
      {...rest}
    />
  );
}
