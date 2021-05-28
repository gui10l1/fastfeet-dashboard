import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import {
  FiArrowLeft,
  FiDollarSign,
  FiImage,
  FiPackage,
  // FiRotateCcw,
  FiSave,
  FiShoppingCart,
} from 'react-icons/fi';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { ValidationError } from 'yup';

import { Button } from '../../components/elements/Form/Button';
import { FormRow } from '../../components/elements/Form/FormRow';
import { Input } from '../../components/elements/Form/Input';
import { Textarea } from '../../components/elements/Form/Textarea';
import { FormSkeleton } from '../../components/layouts/Loaders/Form';
import { Master } from '../../components/layouts/Master';
import { getValidationErrors } from '../../helpers/getValidationErrors';
import { fastFeetApi } from '../../services/fastFeetApi';
import { Container, Header } from './styles';
import { formValidation } from './validations';

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

const EditProduct: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { params } = useRouteMatch<IParams>();
  const { push, goBack } = useHistory();

  const [product, setProduct] = useState<IProduct>();

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

  const handleFormSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});

        await formValidation(data);

        const { data: productFromApi } = await fastFeetApi.put<IResponse>(
          `/products/${params.productId}/`,
          data,
        );

        const parsedProduct = {
          ...productFromApi,
          quantityInStock: productFromApi.quantity_in_stock,
        };

        setProduct(parsedProduct);

        // console.log('Sucesso!');
      } catch (err) {
        if (err instanceof ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [params.productId],
  );

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleNavigateToManageImages = useCallback(() => {
    push(`/products/${params.productId}/images`);
  }, [push, params.productId]);

  return (
    <>
      <Header>
        <button type="button" onClick={handleNavigateBack}>
          <FiArrowLeft />
        </button>

        <h1>Editar produto</h1>

        <button type="button" onClick={handleNavigateToManageImages}>
          <FiImage />
          Gerenciar imagens
        </button>
      </Header>

      <Master>
        <Container>
          {!product ? (
            <FormSkeleton />
          ) : (
            <Form
              ref={formRef}
              onSubmit={handleFormSubmit}
              initialData={product}
            >
              <FormRow>
                <Input
                  name="name"
                  label="Nome"
                  icon={FiShoppingCart}
                  placeholder="Insira o nome do produto"
                />

                <Input
                  name="price"
                  label="Preço"
                  icon={FiDollarSign}
                  placeholder="Insira o preço do produto"
                />
              </FormRow>

              <FormRow>
                <Input
                  name="quantityInStock"
                  type="number"
                  label="Quantidade em estoque"
                  icon={FiPackage}
                  placeholder="Quantidade do produto em estoque"
                />
              </FormRow>

              <FormRow>
                <Textarea
                  name="description"
                  label="Descrição"
                  placeholder="Escreva a descrição do produto"
                  rows={10}
                />
              </FormRow>

              <FormRow buttonWrapper>
                {/* <Button type="reset" icon={FiRotateCcw}>
                  Resetar formulário
                </Button> */}

                <Button type="submit" icon={FiSave}>
                  Salvar alterações
                </Button>
              </FormRow>
            </Form>
          )}
        </Container>
      </Master>
    </>
  );
};

export { EditProduct };
