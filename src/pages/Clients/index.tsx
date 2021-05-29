import { FC, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from '../../components/layouts/Header';
import { Master } from '../../components/layouts/Master';
import { fastFeetApi } from '../../services/fastFeetApi';
import { Container, Client, ClientInfo } from './styles';
import fastFeetLogo from '../../assets/logo.svg';
import { Loader } from '../../components/layouts/Loader';

interface IClient {
  id: string;
  name: string;
  email: string;
  cep: string;
}

const Clients: FC = () => {
  const { push } = useHistory();

  const [clients, setClients] = useState<IClient[]>();

  useEffect(() => {
    async function loadDeliveryMen() {
      const { data } = await fastFeetApi.get<IClient[]>('/clients');
      setClients(data);
    }
    loadDeliveryMen();
  }, []);

  const handleNavigateToEditClient = useCallback(
    (clientId: string) => {
      push(`/clients/${clientId}`);
    },
    [push],
  );

  return (
    <>
      <Header>
        <h1>Clientes</h1>
      </Header>
      <Master>
        <Container>
          {clients ? (
            clients.map(item => (
              <Client
                onClick={() => handleNavigateToEditClient(item.id)}
                key={item.id}
              >
                <ClientInfo>
                  <img src={fastFeetLogo} alt="FastFeet logo" />

                  <div>
                    <h1>{item.name}</h1>

                    <span>{item.email}</span>
                  </div>
                </ClientInfo>
              </Client>
            ))
          ) : (
            <Loader />
          )}
        </Container>
      </Master>
    </>
  );
};

export { Clients };
