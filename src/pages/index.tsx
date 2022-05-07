import React from 'react';

import Link from 'next/link';

import { Button } from 'components/Button';
import { Layout } from 'components/Layout';
import * as S from 'styles/pages';

const Home = () => {
  const [loading, setLOading] = React.useState(false);
  return (
    <Layout>
      <S.Content>
        <h1>Seja bem vindo ao teste tecnico do Kaik</h1>
        <p>Escolha abaixo de qual teste deseja ver</p>

        <section>
          <div>
            <span>1 - Teste front</span>
            <Link
              href={{
                pathname: '/teste-front'
              }}
            >
              <Button
                maxWidth="5.875rem"
                onClick={() => {
                  setLOading(true);

                  setTimeout(() => {
                    setLOading(false);
                  }, 5000);
                }}
                isLoading={loading}
              >
                Ver
              </Button>
            </Link>
          </div>

          <div>
            <span>2 - Avaliação Tinnova</span>
            <Button maxWidth="5.875rem">Ver</Button>
          </div>
        </section>
      </S.Content>
    </Layout>
  );
};

export default Home;
