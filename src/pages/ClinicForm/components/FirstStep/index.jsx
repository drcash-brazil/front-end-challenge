import PropTypes from 'prop-types';
import { Form, Formik } from "formik";
import * as yup from 'yup';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';

import Input from 'components/ui/Input';
import Button from 'components/ui/Button';

const FirstStep = ({
  formData,
  setForm,
  navigation
}) => {
  const { name, cpf, socialCapital } = formData;

  const validate = yup.object({
    name: yup.string()
      .max(100, 'Deve ter no máximo 100 caracteres!')
      .required('Campo obrigatório!'),
    cpf: yup.string()
      .required('Campo obrigatório!')
      .test('cpf-validation', 'Número Inválido!', value => cpfValidator.isValid(value)),
    socialCapital: yup.string()
      .required('Campo obrigatório!')
      .test('money-validation', 'Valor inválido!', value => !isNaN(+value))
  });

  return (
    <>
      <h2 className="mb32">Dados gerais</h2>

      <Formik
        initialValues={{
          name,
          cpf,
          socialCapital
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
                name="name"
                type="text"
                className="mb16"
                label="Nome da cínica"
              />
              <Input
                name="cpf"
                type="text"
                className="mb16"
                label="CPF do responsável"
              />
              <Input
                name="socialCapital"
                type="text"
                className="mb16"
                label="Capital social"
              />

              <div className="flex justify-end">
                <Button buttonValue="Próximo" type="submit" />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}

FirstStep.propTypes = {
  formData: PropTypes.object,
  setForm: PropTypes.func,
  navigation: PropTypes.object
}

FirstStep.defaultProps = {
  formData: {},
  setForm: () => {},
  navigation: {}
}

export default FirstStep;