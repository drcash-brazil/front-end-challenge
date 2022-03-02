import React from "react";
import { Formiz, FormizStep, useForm } from "@formiz/core";
import {
  isEmail,
  isInRangeNumber,
  isLength,
  isMaxLength,
  isMaxNumber,
  isMinLength,
  isMinNumber,
  isNotEmptyArray,
  isNotEmptyString,
  isNumber,
  isPattern,
  isPercentage,
  isRequired,
} from "@formiz/validations";
import Button from "@material-ui/core/Button";
import MyField from "./custom-field";
import Pagination from "./pagination";
import styled from "styled-components";

const FormWrapper = styled.form`
  border: solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 22px;
  height: 350px;
  border-radius: 20px;
  .form {
    color: red;
  }
  .next-buttton {
    margin-left: 10px;
  }
`;
const Form = () => {
  const myForm = useForm();
  const [isLoading, setIsLoading] = React.useState(false);
  const submitForm = (values) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert(JSON.stringify(values));
      myForm.invalidateFields({
        email: "You can display an error after an API call",
      });
      const step = myForm.getFieldStepName("email");
      myForm.goToStep(step);
    }, 1000);
  };
  return (
    <Formiz onValidSubmit={submitForm} connect={myForm}>
      <FormWrapper
        noValidate
        onSubmit={myForm.submitStep}
        className="form"
        style={{ minHeight: "16rem" }}
      >
        <Pagination current={myForm.currentStep?.index} />
        <div className="form__content">
          <FormizStep name="step1">
            <MyField
              name="name"
              label="Name"
              placeholder="Iclinic"
              required="Preencha o nome"
            />

            <MyField
              name="CPF"
              label="CPF do Responsável"
              required="Preencha o CPF"
              placeholder="999.999.999-99"
              validations={[
                {
                  rule: isPattern("[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}"),
                  message: "Insira um CPF válido",
                },
              ]}
            />

            <MyField
              name="Capital"
              label="Capital Social"
              required="Preencha o Capital"
              type="number"
              placeholder="1234567890"
            />
          </FormizStep>
          <FormizStep name="step2">
            <MyField
              required
              name="CEP"
              label="CEP"
              type="text"
              placeholder="00000-000"
              required="Insira o CEP"
              validations={[
                {
                  rule: isPattern("[0-9]{5}-[0-9]{3}"),
                  message: "Insira um CEP Válido",
                },
              ]}
            />
          </FormizStep>
          <FormizStep name="step3">
            <MyField name="password" label="Password" type="password" />
            <MyField
              name="passwordConfirm"
              label="Confirm password"
              type="password"
              validations={[
                {
                  rule: (value) => myForm.values.password === value,
                  deps: [myForm.values.password],
                  message: "Passwords do not match",
                },
              ]}
            />
          </FormizStep>
        </div>

        <div className="form__footer">
          <div className="mr-auto" style={{ minWidth: "6rem" }}></div>
          <div className="ml-auto" style={{ minWidth: "6rem" }}>
            {!myForm.isFirstStep && (
              <Button
                className="prev-buttton"
                type="button"
                onClick={myForm.prevStep}
                color="primary"
                variant="contained"
              >
                Anterior
              </Button>
            )}
            {myForm.isLastStep ? (
              <Button
                className="next-buttton"
                type="submit"
                variant="contained"
                color="primary"
                disabled={
                  isLoading || (!myForm.isValid && myForm.isStepSubmitted)
                }
              >
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            ) : (
              <Button
                className="submit-buttton"
                type="submit"
                disabled={!myForm.isStepValid && myForm.isStepSubmitted}
                variant="contained"
                color="primary"
              >
                Próximo
              </Button>
            )}
          </div>
        </div>
      </FormWrapper>
    </Formiz>
  );
};
export default Form;
