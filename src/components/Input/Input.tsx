import styled from "styled-components";
import Cleave from "cleave.js/react";
import { CleaveOptions } from "cleave.js/options";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  mask?: CleaveOptions;
  label?: string;
  sucess?: boolean;
  error: string | undefined;
  text?: string;
  value?: string;
}

const Input: React.FC<Props> = ({
  placeholder,
  name,
  error,
  value,
  onChange,
  maxLength,
  type,
  mask,
  sucess,
  label,
  text,
  disabled,
  onBlur,
  ...props
}) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <InputContainer disabled={disabled}>
        <InputLabeled
          placeholder={placeholder ?? ""}
          name={name}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          type={type}
          options={
            mask ? (mask as CleaveOptions) : { blocks: [9999], delimiter: "" }
          }
          disabled={disabled}
          onBlur={onBlur}
          {...props}
        />
      </InputContainer>
      {text && <AssistiveText>{text}</AssistiveText>}
      {error && <FormFeedback>{error}</FormFeedback>}
    </>
  );
};

export default Input;

const InputLabeled = styled(Cleave)`
  outline: none;
  border: none;
  background-color: transparent;
  width: 90%;
  height: 100%;
  padding-left: 15px;
  font-size: 14px;

  :disabled {
    color: #525151;
  }

  ::-webkit-input-placeholder {
    color: #495057;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.02em;
  }

  :-ms-input-placeholder {
    color: #495057;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.02em;
  }

  ::placeholder {
    color: #495057;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.02em;
  }

  :focus {
    ::-webkit-input-placeholder {
      color: #cccccc;
    }

    :-ms-input-placeholder {
      color: #cccccc;
    }

    ::placeholder {
      color: #cccccc;
    }
  }
`;

const InputContainer = styled.div<{
  disabled?: boolean;
}>`
  min-width: 150px;
  width: 100%;
  height: 40px;
  color: #495057;
  background: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 6px;
  display: flex;
  transition: 0.25s;

  :hover,
  :focus-within {
    border-color: #073b4c;
  }

  ${(props) =>
    props.disabled &&
    `
    background-color: #d1d1d1;
    
    :hover,
  :focus-within {
    border-color: #d1d1d1;
  }
  `}
`;

const FormFeedback = styled.div`
  width: 100%;
  color: red;
  font-family: "Roboto";
  font-size: 12px;
  letter-spacing: 0.02em;
  margin-top: 6px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

const AssistiveText = styled.div`
  width: 100%;
  color: #808080;
  font-family: "Roboto";
  font-size: 14px;
  letter-spacing: 0.02em;
  margin-top: 6px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

const Label = styled.span`
  display: block;
  color: #031c24;
  font-family: "Roboto";
  font-size: 14px;
  letter-spacing: 0.02em;
  margin-top: 12px;
  margin-bottom: 10px;
  margin-left: 5px;
`;

