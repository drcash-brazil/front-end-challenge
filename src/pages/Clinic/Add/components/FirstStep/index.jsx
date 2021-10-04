import PropTypes from 'prop-types';
import { Form, Formik } from "formik";

import Input from 'components/ui/Input';
import Button from 'components/ui/Button';
import validationSchema from './utils/validationSchema';

const FirstStep = ({
  formData,
  setForm,
  navigation
}) => {

  return (
    <>
      <h2 className="mt12 mb24 f20">Sobre a Clínica</h2>

      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
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
                label="Nome da clínica"
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
  setForm: () => { },
  navigation: {}
}

export default FirstStep;