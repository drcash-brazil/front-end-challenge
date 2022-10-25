import * as yup from 'yup';

const schema = yup.object({
  nome: yup.string()
    .max(100, 'Deve ter no máximo 100 caracteres!')
    .required('Campo obrigatório!'),
  cpf: yup.string()
    .min(11, 'CPF tem 11 caracteres')
    .max(11, 'CPF tem apenas 11 caracteres!')
    .required('Campo obrigatório!'),
  email: yup.string().email('Deve ser um e-mail válido')
    .required('Campo obrigatório!'),
  address: yup.string()
    .required('Campo obrigatório!'),
  fone: yup.string()
    .max(10, 'O Telefone tem no máximo 10 caracteres!')
    .required('Campo obrigatório!'),
});

export { schema };
