import { FC } from 'react';
import Skeleton from '@yisheng90/react-loading';

import { Container } from './styles';

const FormSkeleton: FC = () => (
  <>
    <Container>
      <Skeleton height={56} />

      <Skeleton height={56} />

      <Skeleton height={56} />
    </Container>

    <Container>
      <Skeleton height={56} />
    </Container>

    <Container>
      <Skeleton height={56} />

      <Skeleton height={56} />
    </Container>

    <Container>
      <Skeleton height={56} />

      <Skeleton height={56} />

      <Skeleton height={56} />
    </Container>
  </>
);

export { FormSkeleton };
