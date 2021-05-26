import { FC, useCallback, useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Checkbox } from '../../components/elements/Form/Checkbox';
import { Master } from '../../components/layouts/Master';
import { fastFeetApi } from '../../services/fastFeetApi';

import { Header, Container, ImagesContainer, Images, Image } from './styles';

interface IParams {
  productId: string;
}

interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  quantityInStock: number;
  imagesUrl: string[];
  photos: string[];
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

const ManageProductPhotos: FC = () => {
  const { push } = useHistory();
  const { params } = useRouteMatch<IParams>();

  const [product, setProduct] = useState<IProduct>();
  const [photosToRemove, setPhotosToRemove] = useState<string[]>([]);

  console.log(photosToRemove);

  useEffect(() => {
    fastFeetApi
      .get<IResponse>(`/products/${params.productId}`)
      .then(response => {
        setProduct({
          ...response.data,
          quantityInStock: response.data.quantity_in_stock,
        });
      });
  }, [params.productId]);

  const handleNavigateToDashboard = useCallback(() => {
    push('/dashboard');
  }, [push]);

  const addPhotosToRemove = useCallback(
    (photo: string) => {
      setPhotosToRemove([...photosToRemove, photo]);
    },
    [photosToRemove],
  );

  return (
    <>
      <Header>
        <button type="button" onClick={handleNavigateToDashboard}>
          <FiArrowLeft />
        </button>

        <h1>Gerenciar imagens</h1>

        <span />
      </Header>

      <Master>
        <Container>
          <ImagesContainer>
            <h1>Selecione as imagens que deseja excluir</h1>

            <Images>
              {product &&
                product.imagesUrl.map((image, index) => (
                  <Image key={image}>
                    <img src={image} alt={image} />
                    <Checkbox
                      onClick={() => addPhotosToRemove(product.photos[index])}
                    />
                  </Image>
                ))}
            </Images>
          </ImagesContainer>
        </Container>
      </Master>
    </>
  );
};

export { ManageProductPhotos };
