import { FC, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from '../../components/layouts/Header';
import { Master } from '../../components/layouts/Master';
import { fastFeetApi } from '../../services/fastFeetApi';
import { Container, User, UserInfo } from './styles';
import fastFeetLogo from '../../assets/logo.svg';

interface IDeliveryMan {
  id: string;
  name: string;
  email: string;
  cpf: string;
  deliveryman: boolean;
}

const Users: FC = () => {
  const { push } = useHistory();

  const [deliveryMen, setDeliveryMen] = useState<IDeliveryMan[]>();

  useEffect(() => {
    async function loadDeliveryMen() {
      const { data } = await fastFeetApi.get<IDeliveryMan[]>('/users');
      setDeliveryMen(data);
    }
    loadDeliveryMen();
  }, []);

  const handleNavigateToEditUser = useCallback(
    (userId: string) => {
      push(`/users/${userId}`);
    },
    [push],
  );

  return (
    <>
      <Header>
        <h1>Usuários</h1>
      </Header>
      <Master>
        <Container>
          {deliveryMen &&
            deliveryMen.map(item => (
              <User
                onClick={() => handleNavigateToEditUser(item.id)}
                key={item.id}
              >
                <UserInfo>
                  <img src={fastFeetLogo} alt="FastFeet logo" />

                  <div>
                    <h1>{item.name}</h1>

                    <span>
                      {item.deliveryman ? 'Entregador' : 'Administrador'}
                    </span>
                  </div>
                </UserInfo>
              </User>
            ))}
        </Container>
      </Master>
    </>
  );
};

export { Users };
