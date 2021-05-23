import { FC } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { CSSObject } from 'styled-components';

import { Container } from './styles';

interface ITooltip {
  type: 'warning' | 'success' | 'error';
  style?: CSSObject;
}

const Tooltip: FC<ITooltip> = ({ type, style, children }) => {
  return (
    <Container type={type} style={style}>
      <FiAlertCircle size={20} />
      <span>{children}</span>
    </Container>
  );
};

export { Tooltip };
