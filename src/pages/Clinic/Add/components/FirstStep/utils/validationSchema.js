import { cpf as cpfValidator } from 'cpf-cnpj-validator';
import * as yup from 'yup';

const validationSchema = yup.object({
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

export default validationSchema;