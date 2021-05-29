import { FC } from 'react';

import { Container } from './styles';

interface IBadge {
  type: 'error' | 'warning' | 'success' | 'info';
}

const Badge: FC<IBadge> = ({ type, children }) => (
  <Container type={type}>{children}</Container>
);

export { Badge };
