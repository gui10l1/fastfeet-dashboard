import { FC, useRef } from 'react';
import Skeleton from '@yisheng90/react-loading';

import { Container } from './styles';

const ListSkeleton: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Container ref={containerRef}>
      <Skeleton height={300} color="#dfdfdf" />

      <Skeleton height={300} color="#dfdfdf" />

      <Skeleton height={300} color="#dfdfdf" />

      <Skeleton height={300} color="#dfdfdf" />
    </Container>
  );
};

export { ListSkeleton };
