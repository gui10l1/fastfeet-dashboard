import { FC } from 'react';
import { useAuth } from '../../hooks/auth';

const Dashboard: FC = () => {
  const { logout } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>

      <button type="button" onClick={logout}>
        Logout
      </button>
    </>
  );
};

export { Dashboard };
