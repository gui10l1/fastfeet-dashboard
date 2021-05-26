import { FC } from 'react';

import { Container } from './styles';

interface IFormRow {
  buttonWrapper?: boolean;
}

const FormRow: FC<IFormRow> = ({ buttonWrapper, children }) => (
  <Container buttonWrapper={Number(buttonWrapper)}>{children}</Container>
);

export { FormRow };
