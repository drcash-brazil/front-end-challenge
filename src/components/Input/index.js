import { ContentRoot, ContentSlot, StyledInput } from "./styles";
import { useField } from "@unform/core";
import { useEffect, useRef } from "react";

function TextInputRoot({ children }) {
  return <ContentRoot>{children}</ContentRoot>;
}

function TextInputIcon({ children }) {
  return <ContentSlot>{children}</ContentSlot>;
}

function TextInputInput(props) {
  return <StyledInput {...props} />;
}

function TextInputInputUnform({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <StyledInput ref={inputRef} {...rest} />

      {error && (
        <span
          style={{
            color: "red",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {error}
        </span>
      )}
    </>
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  InputUnform: TextInputInputUnform,
  Icon: TextInputIcon,
};
