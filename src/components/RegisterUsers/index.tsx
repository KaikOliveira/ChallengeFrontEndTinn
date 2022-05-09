import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Button';
import { CustomToast } from 'components/CustomTostfy';
import { Input } from 'components/Input';
import { User } from 'interfaces/teste-front';
import { setCookie } from 'nookies';
import { maskCpf } from 'utils/maskCpf';
import { maskPhoneNumber } from 'utils/maskPhoneNumber';

import { registerUsersSchema } from './schema';
import * as S from './styles';

interface RegisterUsersProps {
  users: User[];
  refetchUsers: () => Promise<void>;
}

export const RegisterUsers = ({ users, refetchUsers }: RegisterUsersProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    resolver: yupResolver(registerUsersSchema)
  });

  const [isLoading, setIsLoading] = React.useState(false);

  async function handleCreateUser(values) {
    try {
      setIsLoading(true);

      const newUser: User = {
        id: users.length + 1,
        name: values.name,
        email: values.email,
        cpf: values.cpf,
        phone: values.tel
      };

      users.push(newUser);

      setCookie(undefined, '@tinnova:users', JSON.stringify(users), {
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
      });

      await refetchUsers();

      setTimeout(() => {
        reset({
          name: '',
          email: '',
          cpf: '',
          tel: ''
        });

        toast(
          <CustomToast
            status="success"
            title="Sucesso!"
            message="Novo usuário cadastrado com sucesso."
          />
        );
      }, 4000);
    } catch (error) {
      toast(
        <CustomToast
          status="error"
          title="Ops..."
          message="Algo de errado aconteceu, tente novamente."
        />
      );
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
  }

  return (
    <S.Container>
      <p>Preencha o formulário para cadastrar um novo usuário</p>

      <form onSubmit={handleSubmit(handleCreateUser)}>
        <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              name="name"
              placeholder="Nome completo [sem abreviações]"
              value={value}
              error={errors.name}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field: { value, onChange, name } }) => (
            <Input
              name={name}
              placeholder="E-mail"
              value={value}
              error={errors.email}
              onChange={onChange}
            />
          )}
        />

        <Controller
          name="cpf"
          control={control}
          render={({ field: { value, onChange, name } }) => (
            <Input
              name={name}
              placeholder="CPF"
              value={value}
              error={errors.cpf}
              onChange={(e) => onChange(maskCpf(e.target.value))}
            />
          )}
        />

        <Controller
          name="tel"
          control={control}
          render={({ field: { value, onChange, name } }) => (
            <Input
              name={name}
              placeholder="Telefone"
              value={value}
              error={errors.tel}
              onChange={(e) => onChange(maskPhoneNumber(e.target.value))}
            />
          )}
        />

        <Button type="submit" variant="DEFAULT" isLoading={isLoading}>
          Cadastrar
        </Button>
      </form>
    </S.Container>
  );
};
