import React from 'react';
import { RiArrowGoBackLine, RiUser3Line, RiDraftLine } from 'react-icons/ri';

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { Layout } from 'components/Layout';
import { RegisterUsers } from 'components/RegisterUsers';
import { TableUsers } from 'components/TableUsers';
import { User } from 'interfaces/teste-front';
import { parseCookies, setCookie } from 'nookies';
import { usersService } from 'services/useCases/usersService';
import * as S from 'styles/pages/teste-front';

interface TesteFrontProps {
  users: User[];
}

const TesteFront = ({ users }: TesteFrontProps) => {
  const router = useRouter();
  const [step, setStep] = React.useState(0);
  const [usersInCookie, setUsersInCookie] = React.useState<User[]>(users);

  async function refetchUsers() {
    const { '@tinnova:users': usersInCookie } = parseCookies();
    if (usersInCookie) {
      const usersJSON = await JSON.parse(usersInCookie);
      setUsersInCookie(usersJSON);
    } else {
      setCookie(undefined, '@tinnova:users', JSON.stringify(users), {
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
      });
    }
  }

  const handleSteps = {
    0: <TableUsers users={usersInCookie} refetchUsers={refetchUsers} />,
    1: <RegisterUsers users={usersInCookie} refetchUsers={refetchUsers} />
  };

  const arrOptions = [
    {
      id: 0,
      label: 'Tabela de usuários',
      onclick: () => setStep(0),
      icon: <RiUser3Line />
    },
    {
      id: 1,
      label: 'Cadastro de usuários',
      onclick: () => setStep(1),
      icon: <RiDraftLine />
    },
    {
      id: 2,
      label: 'Voltar',
      onclick: () => router.push('/'),
      icon: <RiArrowGoBackLine />
    }
  ];

  React.useEffect(() => {
    (async () => await refetchUsers())();
  }, []);

  return (
    <Layout>
      <S.Content>
        <h1>Teste front-end Tinnnova</h1>
        <header>
          {arrOptions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={item.onclick}
              className={step === item.id ? 'active' : ''}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </header>
        {handleSteps[step]}
      </S.Content>
    </Layout>
  );
};

export default TesteFront;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { '@tinnova:users': usersInCookie } = parseCookies(ctx);

  const users = [];

  if (!usersInCookie) {
    const usersFetch = await usersService.getUsers();

    const arrUsers = usersFetch.map((item, i) => {
      return {
        id: i + 1,
        ...item
      };
    });

    users.push(...arrUsers);
  } else {
    const usersJSON = await JSON.parse(usersInCookie);

    users.push(usersJSON);
  }

  return {
    props: {
      users
    }
  };
};
