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
  loading: boolean;
  login(cpf: string, password: string): Promise<void>;
  logout(): Promise<void>;
}

interface IStoragedData {
  user: IUser;
  token: string;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function verifyToken() {
      const checkSession = localStorage.getItem('@FastFeetDashboard:Auth');

      if (checkSession) {
        const parsedData = JSON.parse(checkSession) as IStoragedData;

        const { data } = await fastFeetApi.post('/sessions/verify', {
          token: parsedData.token,
        });

        setUser(parsedData.user);

        fastFeetApi.defaults.headers.authorization = `Bearer ${data}`;

        setLoading(false);

        return;
      }

      setUser(undefined);
      setLoading(false);
    }

    verifyToken();
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
    <AuthContext.Provider value={{ user, login, logout, loading }}>
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
