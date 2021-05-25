import { FC } from 'react';
import { FiLogOut, FiShoppingBag, FiUsers } from 'react-icons/fi';

import { BrandContainer, Container, Logout, Menus, Link } from './styles';
import logo from '../../../assets/logo.svg';
import { useAuth } from '../../../hooks/auth';

const Aside: FC = () => {
  const { logout } = useAuth();

  return (
    <Container>
      <BrandContainer>
        <img src={logo} alt="" />
      </BrandContainer>

      <Menus>
        <Link to="/" active={Number(true)}>
          <FiShoppingBag />
          <span>Produtos</span>
        </Link>

        <Link to="/" active={Number(false)}>
          <FiUsers />
          <span>Entregadores</span>
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
