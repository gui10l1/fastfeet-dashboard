import { Form } from '@unform/web';
import { FC, useCallback, useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Badge } from '../../components/elements/Badge';
import { FormRow } from '../../components/elements/Form/FormRow';
import { Input } from '../../components/elements/Form/Input';
import { Loader } from '../../components/layouts/Loader';
import { Master } from '../../components/layouts/Master';
import { fastFeetApi } from '../../services/fastFeetApi';

import { Container, Header } from './styles';

interface IParams {
  userId: string;
}

interface IUser {
  id: string;
  name: string;
  cpf: string;
  email: string;
  deliveryman: boolean;
}

const ViewUser: FC = () => {
  const { params } = useRouteMatch<IParams>();
  const { goBack } = useHistory();

  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    async function loadUser() {
      const { data } = await fastFeetApi.get<IUser>(`/users/${params.userId}`);

      setUser(data);
    }

    loadUser();
  }, [params.userId]);

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <>
      {!user ? (
        <Loader />
      ) : (
        <>
          <Header>
            <button type="button" onClick={handleNavigateBack}>
              <FiArrowLeft />
            </button>

            <h1>Ver dados</h1>

            <Badge type={user.deliveryman ? 'warning' : 'success'}>
              {user.deliveryman ? 'Entregador' : 'Administrador'}
            </Badge>
          </Header>

          <Master>
            <Container>
              <Form
                onSubmit={() => console.log('Hello user!')}
                initialData={user}
              >
                <FormRow>
                  <Input name="name" label="Nome" disabled />

                  <Input name="email" label="Email" disabled />
                </FormRow>

                <FormRow>
                  <Input name="cpf" label="CPF" disabled />
                </FormRow>
              </Form>
            </Container>
          </Master>
        </>
      )}
    </>
  );
};

export { ViewUser };
