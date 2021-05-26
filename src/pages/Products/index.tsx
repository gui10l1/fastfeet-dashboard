import { FC, useCallback } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { Card } from './components/Card';
import { Header } from '../../components/layouts/Header';
import { Master } from '../../components/layouts/Master';
import { Container } from './styles';

const Products: FC = () => {
  const { push } = useHistory();

  const handleAddNewProductNavigation = useCallback(() => {
    push('/products/new');
  }, [push]);

  return (
    <>
      <Header>
        <h1>Produtos</h1>

        <button type="button" onClick={handleAddNewProductNavigation}>
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

export { Products };
