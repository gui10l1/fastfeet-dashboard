import { FC, useCallback, useEffect, useState } from 'react';
import { FiEdit, FiPlusCircle, FiTrash } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Header } from '../../components/layouts/Header';
import { Master } from '../../components/layouts/Master';
import { fastFeetApi } from '../../services/fastFeetApi';
import { Loader } from '../../components/layouts/Loader';
import {
  Container,
  Card,
  ButtonWrapper,
  Content,
  ImageWrapper,
} from './styles';

interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  quantityInStock: number;
  photos: string[];
  imagesUrl: string[];
}

interface IResponse {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity_in_stock: number;
  photos: string[];
  imagesUrl: string[];
}

const Products: FC = () => {
  const { push } = useHistory();

  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    fastFeetApi.get<IResponse[]>('/products').then(response => {
      setProducts(_ => {
        return response.data.map(product => ({
          ...product,
          quantityInStock: product.quantity_in_stock,
        }));
      });
    });
  }, []);

  const handleAddNewProductNavigation = useCallback(() => {
    push('/products/new');
  }, [push]);

  const handleDeleteProduct = useCallback(() => {
    // CODE
  }, []);

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
          {!products ? (
            <Loader />
          ) : (
            products.map(product => (
              <Card key={product.id}>
                <ButtonWrapper>
                  <Link to={`products/${product.id}/edit`}>
                    <FiEdit />
                  </Link>
                  <Link to="button">
                    <FiTrash />
                  </Link>
                </ButtonWrapper>

                <ImageWrapper>
                  <img src={product.imagesUrl[0]} alt={product.photos[0]} />
                </ImageWrapper>

                <Content>
                  <h1>{product.name}</h1>

                  <span>{product.quantityInStock} itens</span>
                </Content>
              </Card>
            ))
          )}
        </Container>
      </Master>
    </>
  );
};

export { Products };
