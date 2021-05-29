import { FC, useCallback, useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Form } from '@unform/web';

import { Badge } from '../../components/elements/Badge';
import { FormRow } from '../../components/elements/Form/FormRow';
import { Input } from '../../components/elements/Form/Input';
import { Loader } from '../../components/layouts/Loader';
import { Master } from '../../components/layouts/Master';
import { fastFeetApi } from '../../services/fastFeetApi';

import { Container, Header } from './styles';

interface IParams {
  clientId: string;
}

interface IClient {
  id: string;
  name: string;
  email: string;
  postalCode: string;
}

interface IResponse {
  id: string;
  name: string;
  email: string;
  postal_code: string;
}

const ViewClient: FC = () => {
  const { params } = useRouteMatch<IParams>();
  const { goBack } = useHistory();

  const [user, setUser] = useState<IClient>();

  useEffect(() => {
    async function loadUser() {
      const { data } = await fastFeetApi.get<IResponse>(
        `/clients/${params.clientId}`,
      );

      setUser({
        ...data,
        postalCode: data.postal_code,
      });
    }

    loadUser();
  }, [params.clientId]);

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

            <Badge type="info">Cliente</Badge>
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
                  <Input name="postalCode" label="Código postal" disabled />
                </FormRow>
              </Form>
            </Container>
          </Master>
        </>
      )}
    </>
  );
};

export { ViewClient };
