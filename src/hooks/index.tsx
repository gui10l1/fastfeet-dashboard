import { FC } from 'react';
import { AuthProvider } from './auth';

const Providers: FC = ({ children }) => <AuthProvider>{children}</AuthProvider>;

export { Providers };
