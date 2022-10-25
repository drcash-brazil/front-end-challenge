import * as yup from 'yup';

const schema = yup.object({
  nome: yup.string()
    .max(100, 'Deve ter no máximo 100 caracteres!')
    .required('Campo obrigatório!'),
  cnpj: yup.string()
    .max(14, 'CNPJ tem apenas 14 caracteres!')
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
