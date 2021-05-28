import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

import { Header } from '../../components/layouts/Header';
import { Master } from '../../components/layouts/Master';
import { fastFeetApi } from '../../services/fastFeetApi';
import {
  Container,
  DeliveryMan,
  DeliveryManInfo,
  ButtonWrapper,
} from './styles';
import fastFeetLogo from '../../assets/logo.svg';

interface IDeliveryMan {
  id: string;
  name: string;
  email: string;
  cpf: string;
  deliveryman: boolean;
}

const DeliveryMen: FC = () => {
  const [deliveryMen, setDeliveryMen] = useState<IDeliveryMan[]>();

  useEffect(() => {
    async function loadDeliveryMen() {
      const { data } = await fastFeetApi.get<IDeliveryMan[]>('/users');
      setDeliveryMen(data);
    }
    loadDeliveryMen();
  }, []);

  return (
    <>
      <Header>
        <h1>Entregadores</h1>
      </Header>
      <Master>
        <Container>
          {deliveryMen &&
            deliveryMen.map(item => (
              <DeliveryMan key={item.id}>
                <DeliveryManInfo>
                  <img src={fastFeetLogo} alt="FastFeet logo" />

                  <div>
                    <h1>{item.name}</h1>

                    <span>
                      {item.deliveryman ? 'Entregador' : 'Administrador'}
                    </span>
                  </div>
                </DeliveryManInfo>

                <ButtonWrapper>
                  <Link to="/">
                    <FiEdit size={24} />
                  </Link>
                </ButtonWrapper>
              </DeliveryMan>
            ))}
        </Container>
      </Master>
    </>
  );
};

export { DeliveryMen };
