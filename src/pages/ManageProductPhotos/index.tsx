import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { FiArrowLeft, FiPlusCircle, FiTrash2 } from 'react-icons/fi';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { Form } from '@unform/web';
import { Master } from '../../components/layouts/Master';
import { fastFeetApi } from '../../services/fastFeetApi';
import { Checkbox } from '../../components/elements/Form/Checkbox';

import { Button } from '../../components/elements/Form/Button';
import { FormRow } from '../../components/elements/Form/FormRow';
import { InputFile } from '../../components/elements/Form/InputFile';
import {
  Header,
  Container,
  ImagesContainer,
  Images,
  Image,
  FilePreview,
} from './styles';
import { ListSkeleton } from '../../components/layouts/Loaders/List';

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

interface ITarget extends EventTarget {
  files: FileList;
}

const ManageProductPhotos: FC = () => {
  const { goBack } = useHistory();
  const { params } = useRouteMatch<IParams>();

  const [product, setProduct] = useState<IProduct>();
  const [photosToRemove, setPhotosToRemove] = useState<string[]>([]);
  const [files, setFiles] = useState<FileList>();
  const [imagesToPreview, setImagesToPreview] = useState<string[]>();

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

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const addPhotosToRemove = useCallback(
    (photo: string) => {
      const findPhoto = photosToRemove.find(find => find === photo);

      if (findPhoto) {
        const updatedPhotosToRemove = photosToRemove.filter(
          item => findPhoto !== item,
        );

        setPhotosToRemove(updatedPhotosToRemove);

        return;
      }

      setPhotosToRemove([...photosToRemove, photo]);
    },
    [photosToRemove],
  );

  const handleDeletePhotos = useCallback(async () => {
    const { data } = await fastFeetApi.patch<IResponse>(
      `/products/${params.productId}/remove-photos`,
      {
        photos: photosToRemove,
      },
    );

    const parsedData = {
      ...data,
      quantityInStock: data.quantity_in_stock,
    };

    setProduct(parsedData);
    setPhotosToRemove([]);
  }, [params.productId, photosToRemove]);

  const handleFormSubmit = useCallback(async () => {
    if (!files) {
      return;
    }

    const formData = new FormData();

    Array.from(files).forEach(file => {
      formData.append('photos', file);
    });

    const { data } = await fastFeetApi.patch<IResponse>(
      `/products/${params.productId}/add-photos`,
      formData,
    );

    const parsedData = {
      ...data,
      quantityInStock: data.quantity_in_stock,
    };

    setProduct(parsedData);
    setFiles(undefined);
  }, [files, params.productId]);

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as ITarget;
    const selectImagesFromUser = target.files;

    setFiles(selectImagesFromUser);

    const images = Array.from(selectImagesFromUser).map(image => {
      return URL.createObjectURL(image);
    });

    setImagesToPreview(images);
  }, []);

  return (
    <>
      <Header>
        <button type="button" onClick={handleNavigateBack}>
          <FiArrowLeft />
        </button>

        <h1>Gerenciar imagens</h1>

        <span />
      </Header>

      <Master>
        <Container>
          <ImagesContainer>
            <FormRow>
              <h1>Selecione as imagens que deseja excluir</h1>
            </FormRow>

            <FormRow>
              <Images>
                {!product && <ListSkeleton />}

                {product &&
                  product.imagesUrl.map((image, index) => (
                    <Image key={image}>
                      <img src={image} alt={image} />
                      <Checkbox
                        onClick={() => addPhotosToRemove(product.photos[index])}
                      />
                    </Image>
                  ))}

                {product && product.imagesUrl.length === 0 && (
                  <span>Não há imagens para este produto</span>
                )}
              </Images>
            </FormRow>

            <FormRow>
              <Button
                type="submit"
                icon={FiTrash2}
                onClick={handleDeletePhotos}
                disabled={product && product.imagesUrl.length === 0}
              >
                Remover fotos selecionadas
              </Button>
            </FormRow>
          </ImagesContainer>

          <Form onSubmit={handleFormSubmit} style={{ marginTop: 20 }}>
            <FormRow>
              <InputFile
                name="photos"
                boxLabel="Adicionar novas fotos"
                label="Fotos"
                onChange={handleOnChange}
                multiple
              >
                {imagesToPreview?.map(item => (
                  <FilePreview src={item} key={item} />
                ))}
              </InputFile>
            </FormRow>

            <FormRow buttonWrapper>
              <Button type="submit" icon={FiPlusCircle}>
                Adicionar fotos
              </Button>
            </FormRow>
          </Form>
        </Container>
      </Master>
    </>
  );
};

export { ManageProductPhotos };
