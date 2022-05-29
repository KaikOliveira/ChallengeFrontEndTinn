import React from 'react';

import Link from 'next/link';

import { Button } from 'components/Button';
import { Layout } from 'components/Layout';
import * as S from 'styles/pages';

const Home = () => {
  return (
    <Layout>
      <S.Content>
        <h1>Seja bem vindo ao teste tecnico</h1>
        <p>Escolha abaixo de qual teste deseja ver</p>

        <section>
          <div>
            <span>1 - Teste front</span>
            <Link
              href={{
                pathname: '/teste-front'
              }}
            >
              <Button maxWidth="5.875rem">Ver</Button>
            </Link>
          </div>

          <div>
            <span>2 - Avaliação Tinnova</span>
            <Link
              href={{
                pathname: '/avaliacao-tinnova'
              }}
            >
              <Button maxWidth="5.875rem" disabled={true}>
                Ver
              </Button>
            </Link>
          </div>
        </section>
      </S.Content>
    </Layout>
  );
};

export default Home;
