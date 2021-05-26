import { FC } from 'react';
import { Switch } from 'react-router-dom';

import { Route } from './Route';
import { Products } from '../pages/Products';
import { Login } from '../pages/Login';
import { NewProduct } from '../pages/NewProduct';

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/dashboard" isPrivate component={Products} />
      <Route path="/products/new" isPrivate component={NewProduct} />

      <Route path="/login" component={Login} />
    </Switch>
  );
};

export { Routes };
