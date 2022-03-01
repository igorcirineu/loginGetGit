import { Box, Content } from "./styles";
import logo from "../../assets/images/logo.svg"
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext)

  // função que chama o contexto sigIn para verificar as credenciais
  const handleLoginSubmit = (e: FormEvent) => {
    e.preventDefault();

    signIn({ email, password });
  }

  return (
    <Content>
      <main>
        <Box>
          <img src={logo} alt="Logo"/>
          <form onSubmit={handleLoginSubmit}>
            <label>E-mail</label>
            <input type="email" required onChange={(e) => setEmail(e.target.value)}/>
            <label>Senha</label>
            <input type="password" required onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
          </form>
        </Box>
        <a href="/register">Registar</a>
      </main>
    </Content>
  )
}