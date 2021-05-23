import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../pages/Login';

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  );
};

export { Routes };
