import { FC } from 'react';
import { Switch } from 'react-router-dom';

import { Route } from './Route';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export { Routes };
