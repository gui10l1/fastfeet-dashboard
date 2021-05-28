import { FC, useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { ValidationError } from 'yup';

import { Input } from './components/Input';
import { Checkbox } from './components/Checkbox';
import { formValidation } from './validations';
import { getValidationErrors } from '../../helpers/getValidationErrors';
import {
  Container,
  Background,
  Content,
  InputContainer,
  RememberMe,
  Button,
} from './styles';
import { useAuth } from '../../hooks/auth';

const Login: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { login } = useAuth();
  const { push } = useHistory();

  const handleFormSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});

        await formValidation(data);

        login(data.cpf, data.password);

        push('/products');
      } catch (err) {
        if (err instanceof ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [login, push],
  );

  return (
    <Container>
      <Background />

      <Content>
        {/* <img
          src="https://gui10l1-github-projects.s3.amazonaws.com/fastfeet.png"
          alt="Fast Feet Brand"
        /> */}

        <h1>Faça seu login</h1>

        <Form onSubmit={handleFormSubmit} ref={formRef}>
          <InputContainer>
            <Input inputName="cpf" placeholder="CPF" labelText="CPF" id="cpf" />

            <hr />

            <Input
              inputName="password"
              inputType="password"
              placeholder="Senha"
              labelText="Senha"
              id="password"
            />
          </InputContainer>

          <RememberMe>
            <div>
              <Checkbox />

              <label htmlFor="rememberMe">Lembrar de mim</label>
            </div>

            <Link to="/">Esqueci minha senha</Link>
          </RememberMe>

          <Button type="submit">Acessar plataforma</Button>
        </Form>
      </Content>
    </Container>
  );
};

export { Login };
