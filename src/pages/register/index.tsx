import { Box, Content } from "./styles";
import logo from "../../assets/images/logo.svg"
import { useEffect, useState } from "react";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [confirmLength, setConfirmLength] = useState(true);
  
  // LOGICA PARA VERIFICAR SE ESTA IGUAIS AS SENHAS E SE OS CAMPOS ESTÃO PREENCHIDOS, POR MEIO DO MONITORAMENTO DO CICLO DE VIDA DOS ESTADOS password, confirmPassword, email
  useEffect(() => {
    if(password.length > 0 && confirmPassword.length > 0 && email.length > 0){
      setConfirmLength(false);
      if(password === confirmPassword ){
        setConfirm(true)
      }else{
        setConfirm(false)
      }
      
    }else{
      setConfirm(false)
      setConfirmLength(true)
    }
  }, [password, confirmPassword, email])

  return (
    <Content>
      <main>
        <Box status={confirm} length={confirmLength}>
          <img src={logo} alt="Logo"/>
          <form>
            <label>E-mail</label>
            <input type="email"required onChange={(e) => setEmail(e.target.value)} />
            <label>Senha</label>
            <input type="password"required onChange={(e) => setPassword(e.target.value)} />
            <label>Confirmar Senha</label>
            <input type="password" required onChange={(e) => setConfirmPassword(e.target.value)} />
            {confirm || confirmLength ? '' : <p>Senhas não coincidem</p>}
            <button type="submit" disabled={confirm ? false : true} >Cadastrar</button>
          </form>
        </Box>
      </main>
    </Content>
  )
}

export default Register;