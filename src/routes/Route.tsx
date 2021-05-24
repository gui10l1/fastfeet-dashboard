import { ComponentType, FC } from 'react';
import { RouteProps, Route as RouteDOM } from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';

interface IRoute extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

const Route: FC<IRoute> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <RouteDOM
      {...rest}
      render={() => {
        if (Component) {
          if (isPrivate && !user) {
            return <Login />;
          }

          if (!isPrivate && !user) {
            return <Component />;
          }

          if (user && !isPrivate) {
            return <Dashboard />;
          }

          return <Component />;
        }

        return <Login />;
      }}
    />
  );
};

export { Route };
