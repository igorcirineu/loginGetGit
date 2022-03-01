import { createContext, ReactNode, useState } from 'react';
import { useNavigate } from "react-router-dom";

// Arquivo com as credenciais validas
import { LOGIN_VALIDOS } from '../constants/constant';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): void;
  user: string | null;
  isAuthenticated: boolean;
  signOut: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);


export function AuthProvider({ children }: AuthProviderProps) {

  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("email"));
  const [isAuthenticated, setIsAuthenticated] = useState(!!user);



  // //FUNÇÃO DE LOGIN
  async function signIn({ email, password }: SignInCredentials) {
    
    // FUNÇÃO JAVASCRIPT QUE RETORNA TRUE CASO EMAIL E SENHA FOREM IGUAIS CONTIDOS EM LOGIN_VALIDOS
    if (LOGIN_VALIDOS.some((elem) => {
      return (elem.email === email) && (elem.password === password)
    })) {

      // PERSISTENCIA DO LOGIN FEITA POR MEIO DO LOCALSTORAGE
      localStorage.setItem("email", email);
      setUser(email)

      setIsAuthenticated(true);

      navigate('/home', { replace: true })
    } else {
      // CASO FOR ERRADO EMITE UM ALERTA
      alert('Credenciais incorretas!')
    }
  }

  // //FUNÇÃO DE LOGOUT
  function signOut() {
    localStorage.setItem("email", "");
    setUser("");


    navigate('/');
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user, signOut }} >
      {children}
    </AuthContext.Provider>
  )
}