import { Button } from 'components/Button';
import * as S from 'styles/pages';

const Home = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h1>Seja bem vindo ao teste tecnico do Kaik</h1>
        <p>Escolha abaixo de qual teste deseja ver</p>

        <section>
          <span>opões</span>
          <Button>Opção 1</Button>
        </section>
      </S.Container>
    </S.Wrapper>
  );
};

export default Home;
