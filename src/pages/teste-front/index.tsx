import React from 'react';

import Link from 'next/link';

import { Layout } from 'components/Layout';
import { TableUsers } from 'components/TableUsers';
import { User } from 'interfaces/teste-front';
import { usersService } from 'services/useCases/usersService';
// import { Container } from './styles';

interface TesteFrontProps {
  users: User[];
}

const TesteFront = ({ users }: TesteFrontProps) => {
  const [step, setStep] = React.useState(0);

  const handleSteps = {
    0: <TableUsers users={users} />
  };

  return (
    <Layout>
      <h1>Teste Front</h1>

      <Link href={{ pathname: '/' }}>
        <span>go back</span>
      </Link>

      <main>{handleSteps[step]}</main>
    </Layout>
  );
};

export default TesteFront;

export const getServerSideProps = async () => {
  const users = await usersService.getUsers();

  return {
    props: {
      users
    }
  };
};
