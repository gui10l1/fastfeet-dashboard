import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './hooks';
import { Routes } from './routes';
import GlobalStyles from './styles/global';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Providers>
        <Routes />
      </Providers>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
