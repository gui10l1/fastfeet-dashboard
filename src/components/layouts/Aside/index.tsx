import { FC } from 'react';
import { FiLogOut, FiShoppingBag, FiSmile, FiUsers } from 'react-icons/fi';
import { useRouteMatch } from 'react-router-dom';

import { BrandContainer, Container, Logout, Menus, Link } from './styles';
import logo from '../../../assets/logo.svg';
import { useAuth } from '../../../hooks/auth';

const Aside: FC = () => {
  const { logout } = useAuth();
  const { path } = useRouteMatch();

  return (
    <Container>
      <BrandContainer>
        <img src={logo} alt="" />
      </BrandContainer>

      <Menus>
        <Link to="/products" active={Number(path.search('/products') >= 0)}>
          <FiShoppingBag />
          <span>Produtos</span>
        </Link>

        <Link to="/users" active={Number(path.search('/users') >= 0)}>
          <FiUsers />
          <span>Usuários</span>
        </Link>

        <Link to="/clients" active={Number(path.search('/clients') >= 0)}>
          <FiSmile />
          <span>Clientes</span>
        </Link>
      </Menus>

      <Logout>
        <Link to="/" active={Number(true)} onClick={logout}>
          <FiLogOut size={24} color="#fff" />
          <span>Sair</span>
        </Link>
      </Logout>
    </Container>
  );
};

export { Aside };
