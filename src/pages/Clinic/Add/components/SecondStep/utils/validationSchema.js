import * as yup from 'yup';

const validateSchema = yup.object({
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

export default validateSchema;