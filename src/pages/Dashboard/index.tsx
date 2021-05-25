import { FC } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import { Card } from './components/Card';
import { Header } from '../../components/layouts/Header';
import { Master } from '../../components/layouts/Master';
import { Container } from './styles';

const Dashboard: FC = () => {
  return (
    <>
      <Header>
        <h1>Produtos</h1>

        <button type="button">
          <FiPlusCircle />
          Adicionar novo
        </button>
      </Header>

      <Master>
        <Container>
          <Card />

          <Card />

          <Card />

          <Card />

          <Card />

          <Card />

          <Card />

          <Card />

          <Card />
        </Container>
      </Master>
    </>
  );
};

export { Dashboard };
