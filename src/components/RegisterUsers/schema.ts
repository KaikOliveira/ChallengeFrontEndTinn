import { isCPF } from 'brazilian-values';
import * as yup from 'yup';

export const registerUsersSchema = yup.object().shape({
  name: yup
    .string()
    .required('O nome é obrigatório')
    .min(3, 'Campo deve conter 3 caracteres ou mais'),
  email: yup.string().required('O email é obrigatório').email('Email inválido'),
  cpf: yup
    .string()
    .required('O CPF é obrigatório')
    .test('cpf', 'CPF inválido', (value) => isCPF(value)),
  tel: yup
    .string()
    .required('Telefone obrigatório')
    .min(16, 'Minimo 11 digitos')
});
