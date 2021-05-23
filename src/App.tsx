import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import GlobalStyles from './styles/global';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
