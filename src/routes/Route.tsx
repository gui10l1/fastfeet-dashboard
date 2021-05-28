import { ComponentType, FC } from 'react';
import { RouteProps, Route as RouteDOM } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { useAuth } from '../hooks/auth';
import { Products } from '../pages/Products';
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
  const { user, loading } = useAuth();

  return (
    <RouteDOM
      {...rest}
      render={() => {
        if (loading) {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100vw',
              }}
            >
              <Loader
                type="TailSpin"
                height={100}
                width={100}
                color="#4C33CC"
              />
            </div>
          );
        }

        if (Component) {
          if (isPrivate && !user) {
            return <Login />;
          }

          if (!isPrivate && !user) {
            return <Component />;
          }

          if (user && !isPrivate) {
            return <Products />;
          }

          return <Component />;
        }

        return <Login />;
      }}
    />
  );
};

export { Route };
