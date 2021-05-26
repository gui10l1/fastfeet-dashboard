import { ButtonHTMLAttributes, FC } from 'react';
import { IconType } from 'react-icons/lib';

import { Container } from './styles';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
}

const Button: FC<IButton> = ({ children, icon: Icon, ...rest }) => (
  <Container {...rest}>
    {Icon && <Icon size={24} />} {children}
  </Container>
);

export { Button };
