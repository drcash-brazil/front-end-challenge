import PropTypes from 'prop-types';
import { Form, Formik } from "formik";
import * as yup from 'yup';

import Input from 'components/ui/Input';
import Button from 'components/ui/Button';

const SecondStep = ({
  formData,
  setForm,
  navigation
}) => {
  const { 
    cep,
    state,
    city,
    neightborhood,
    street,
    number
  } = formData;

  const validate = yup.object({
    cep: yup
      .string()
      .required('CEP obrigatório')
      .min(8, 'O CEP contém 8 digitos')
      .max(8, 'O CEP contém 8 digitos'),
    state: yup.string().required('Campo obrigatório'),
    city: yup.string().required('Campo obrigatório'),
    street: yup.string().required('Campo obrigatório'),
    number: yup.string().required('Campo obrigatório'),
    neightborhood: yup.string().required('Campo obrigatório'),
  });

  return (
    <>
      <h2 className="mb32">Endereço</h2>

      <Formik
        initialValues={{
          cep,
          state,
          city,
          neightborhood,
          street,
          number
        }}
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
        {formik => (
          <div>
            <Form>
              <Input
                className="mb16"
                label="Cep"
                name="cep"
                type="text"
              />
              <Input
                className="mb16"
                label="Estado"
                name="state"
                type="text"
              />
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
              <Input
                className="mb16"
                label="Número"
                name="number"
                type="text"
              />

              <div className="flex justify-between">
                <Button buttonValue="Voltar" type="button" onClick={() => navigation.previous()} variant="outlined" color="default" />
                <Button buttonValue="Próximo" type="submit" />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

SecondStep.propTypes = {
  formData: PropTypes.object,
  setForm: PropTypes.func,
  navigation: PropTypes.object
}

SecondStep.defaultProps = {
  formData: {},
  setForm: () => {},
  navigation: {}
}

export default SecondStep;