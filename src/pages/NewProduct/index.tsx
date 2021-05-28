import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { ChangeEvent, FC, useCallback, useRef, useState } from 'react';
import {
  FiArrowLeft,
  FiDollarSign,
  FiPackage,
  FiSave,
  FiShoppingCart,
} from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { ValidationError } from 'yup';

import { Button } from '../../components/elements/Form/Button';
import { FormRow } from '../../components/elements/Form/FormRow';
import { Input } from '../../components/elements/Form/Input';
import { InputFile } from '../../components/elements/Form/InputFile';
import { Textarea } from '../../components/elements/Form/Textarea';
import { Master } from '../../components/layouts/Master';
import { getValidationErrors } from '../../helpers/getValidationErrors';
import { fastFeetApi } from '../../services/fastFeetApi';
import { Container, FilePreview, Header } from './styles';
import { formValidation } from './validations';

interface ITarget extends EventTarget {
  files: FileList;
}

const NewProduct: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { goBack } = useHistory();

  const [files, setFiles] = useState<FileList>();
  const [imagesToPreview, setImagesToPreview] = useState<string[]>();

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as ITarget;
    const selectImagesFromUser = target.files;

    setFiles(selectImagesFromUser);

    const images = Array.from(selectImagesFromUser).map(image => {
      return URL.createObjectURL(image);
    });

    setImagesToPreview(images);
  }, []);

  const handleFormSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});

        const dataFromForm = data;

        await formValidation(dataFromForm);

        if (!files) {
          // window.alert('Arquivos são obrigatórios');

          return;
        }

        const formData = new FormData();

        delete dataFromForm.photos;

        Object.entries(dataFromForm).forEach(([name, value]) => {
          const parsedValue = value as string;

          formData.append(name, parsedValue);
        });

        Array.from(files).forEach(file => formData.append('photos', file));

        await fastFeetApi.post('/products', formData);

        // console.log('Sucesso!');
      } catch (err) {
        if (err instanceof ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [files],
  );

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <>
      <Header>
        <button type="button" onClick={handleNavigateBack}>
          <FiArrowLeft />
        </button>

        <h1>Novo produto</h1>

        <span />
      </Header>

      <Master>
        <Container>
          <Form ref={formRef} onSubmit={handleFormSubmit}>
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

            <FormRow>
              <InputFile
                name="photos"
                label="Fotos"
                boxLabel="Adicionar arquivos"
                alert="Tenha preferência por imagens retangulares"
                multiple
                onChange={handleOnChange}
              >
                {imagesToPreview?.map(item => (
                  <FilePreview src={item} key={item} />
                ))}
              </InputFile>
            </FormRow>

            <FormRow buttonWrapper>
              <Button type="submit" icon={FiSave}>
                Salvar novo produto
              </Button>
            </FormRow>
          </Form>
        </Container>
      </Master>
    </>
  );
};

export { NewProduct };
