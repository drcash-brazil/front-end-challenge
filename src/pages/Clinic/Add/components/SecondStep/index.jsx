import { Form, Formik } from "formik";
import * as yup from 'yup';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import Input from 'components/ui/Input';
import Button from 'components/ui/Button';

import { searchCep } from './requests';
import { useState } from "react";

const SecondStep = ({
  formData,
  setForm,
  navigation
}) => {
  const [displaySpinner, setDisplaySpinner] = useState(false);

  const validate = yup.object({
    cep: yup
      .string()
      .required('CEP obrigatório')
      .min(8, 'O CEP contém 8 digitos')
      .max(8, 'O CEP contém 8 digitos'),
    state: yup.string().required('Campo obrigatório')
      .max(2, 'A UF tem no máximo 2 letras!'),
    city: yup.string().required('Campo obrigatório'),
    street: yup.string().required('Campo obrigatório'),
    number: yup.string().required('Campo obrigatório'),
    neightborhood: yup.string().required('Campo obrigatório'),
    complement: yup.string(),
  });

  const handleCepBlur = async (ev, setFieldValue, setFieldError) => {
    const { value } = ev.target;

    if (value) {
      setDisplaySpinner(true);

      setTimeout(() => {
        searchCep(value)
          .then(({ data, status }) => {
            const { erro } = data;

            if (erro || status >= 400) {
              setFieldError("cep", "Valor não encontrado!");
            }
            else {
              const relation = {
                cep: "cep",
                state: "uf",
                city: "localidade",
                street: "logradouro",
                neightborhood: "bairro",
              };

              Object.keys(data).forEach(key => {
                const apiResponseValue = data[key];

                if (apiResponseValue) {
                  const fieldName = Object.keys(relation).filter(rk => relation[rk] === key)[0];

                  if (fieldName) {
                    const isCepField = fieldName === "cep";

                    if (!isCepField) {
                      setFieldValue(fieldName, apiResponseValue);
                    }

                    setForm({
                      target: {
                        name: fieldName,
                        value: isCepField ? value : apiResponseValue,
                      }
                    });
                  }
                }
              });
            }
          })
          .catch(error => {

          })
          .finally(() => {
            setDisplaySpinner(false);
          })
      }, 750);
    }
  }

  return (
    <div className="relative">
      {displaySpinner && (
        <div className="o-80 flex items-center justify-center fixed z-2 w-100 h-100 top-0 left-0 bg-white pa32 br4 shadow-2">
          <Loader
            type="ThreeDots"
            color="#3B74F2"
            height={100}
            width={100}
            visible={true}
          />
        </div>
      )}
      <h2 className="mt12 mb24 f20">Endereço</h2>

      <Formik
        initialValues={formData}
        validationSchema={validate}
        onSubmit={async values => {
          await Object.keys(values).map(key => {
            const formTarget = {
              target: {
                name: key,
                value: values[key]
              }
            };

            return setForm(formTarget);
          });

          navigation.next()
        }}
      >
        {({ handleBlur, errors, setFieldValue, setFieldError }) => (
          <div>
            <Form>
              
              <div className="flex w-100">
                <div className="pr8 w-60">
                  <Input
                    className="mb16"
                    label="CEP"
                    name="cep"
                    type="text"
                    onBlur={(ev) => {
                      handleBlur(ev);

                      if (!errors["cep"]) {
                        handleCepBlur(ev, setFieldValue, setFieldError);
                      }
                    }}
                  />
                </div>
                <div className="pl8 w-40">
                  <Input
                    className="mb16"
                    label="Estado (UF)"
                    name="state"
                    type="text"
                  />
                </div>
              </div>
              
              <Input
                className="mb16"
                label="Cidade"
                name="city"
                type="text"
              />
              <Input
                className="mb16"
                label="Bairro"
                name="neightborhood"
                type="text"
              />
              <Input
                className="mb16"
                label="Endereço"
                name="street"
                type="text"
              />
              <div className="flex w-100">
                <div className="pr8 w-40">
                  <Input
                    className="mb16"
                    label="Número"
                    name="number"
                    type="text"
                  />
                </div>
                <div className="pl8 w-60">
                  <Input
                    className="mb16"
                    label="Complemento"
                    name="complement"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <Button buttonValue="Voltar" type="button" onClick={() => navigation.previous()} variant="outlined" color="default" />
                <Button buttonValue="Próximo" type="submit" />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

SecondStep.propTypes = {
  formData: PropTypes.object,
  setForm: PropTypes.func,
  navigation: PropTypes.object
}

SecondStep.defaultProps = {
  formData: {},
  setForm: () => { },
  navigation: {}
}

export default SecondStep;