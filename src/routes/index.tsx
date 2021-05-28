import { FC } from 'react';
import { Switch } from 'react-router-dom';

import { Route } from './Route';
import { Products } from '../pages/Products';
import { Login } from '../pages/Login';
import { NewProduct } from '../pages/NewProduct';
import { EditProduct } from '../pages/EditProduct';
import { ManageProductPhotos } from '../pages/ManageProductPhotos';
import { DeliveryMen } from '../pages/DeliveryMen';

const Routes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/products" exact isPrivate component={Products} />
      <Route path="/products/new" isPrivate component={NewProduct} />
      <Route
        path="/products/:productId/edit"
        isPrivate
        component={EditProduct}
      />
      <Route
        path="/products/:productId/images"
        isPrivate
        component={ManageProductPhotos}
      />

      <Route path="/delivery-men" exact isPrivate component={DeliveryMen} />

      <Route path="/login" component={Login} />
    </Switch>
  );
};

export { Routes };
