import { FC, HTMLAttributes } from 'react';

import { Container } from './styles';

interface IFormRow extends HTMLAttributes<HTMLDivElement> {
  buttonWrapper?: boolean;
}

const FormRow: FC<IFormRow> = ({ buttonWrapper, children, ...rest }) => (
  <Container buttonWrapper={Number(buttonWrapper)} {...rest}>
    {children}
  </Container>
);

export { FormRow };
