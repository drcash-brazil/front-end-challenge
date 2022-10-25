import * as yup from 'yup';

const schema = yup.object({
  nome: yup.string()
    .max(100, 'Deve ter no máximo 100 caracteres!')
    .required('Campo obrigatório!'),
  email: yup.string().email('Deve ser um e-mail válido')
    .required('Campo obrigatório!'),
  address: yup.string()
    .required('Campo obrigatório!'),
  fone: yup
    .number()
    .test(
      'len',
      'Telefone é formado por apenas 10 números',
      (val) => val && val.toString().length === 10,
    ).required('Campo obrigatório!'),
});

export { schema };
