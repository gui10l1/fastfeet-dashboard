import Skeleton from '@yisheng90/react-loading';
import { FC } from 'react';

const Loader: FC = () => (
  <>
    <Skeleton width="100%" height={30} color="#dedede" />

    <Skeleton width="100%" height={45} color="#dedede" />

    <Skeleton width="100%" height={200} color="#dedede" />
  </>
);

export { Loader };
