import { FC } from 'react';

import { Aside } from '../Aside';
import { Main } from '../Main';

const Master: FC = ({ children }) => (
  <>
    <Aside />

    <Main>{children}</Main>
  </>
);

export { Master };
