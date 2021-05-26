import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { fastFeetApi } from '../services/fastFeetApi';

interface IUser {
  id: string;
  name: string;
  email: string;
  deliveryMan: boolean;
}

interface IAuthContext {
  user: IUser | undefined;
  login(cpf: string, password: string): Promise<void>;
  logout(): Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>();

  useEffect(() => {
    const checkSession = localStorage.getItem('@FastFeetDashboard:Auth');

    if (checkSession) {
      const parsedData = JSON.parse(checkSession);

      setUser(parsedData.user);

      fastFeetApi.defaults.headers.authorization = `Bearer ${parsedData.token}`;

      return;
    }

    setUser(undefined);
  }, []);

  const login = useCallback(async (cpf: string, password: string) => {
    const { data } = await fastFeetApi.post('/sessions/user', {
      cpf,
      password,
    });

    fastFeetApi.defaults.headers.authorization = `Bearer ${data.token}`;

    const dataToBeStoraged = {
      token: data.token,
      user: data.user,
    };

    localStorage.setItem(
      '@FastFeetDashboard:Auth',
      JSON.stringify(dataToBeStoraged),
    );

    setUser(data.user);
  }, []);

  const logout = useCallback(async () => {
    localStorage.removeItem('@FastFeetDashboard:Auth');

    setUser(undefined);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('A context must be used within a provider (useAuth)');
  }

  return context;
}

export { useAuth, AuthProvider };
