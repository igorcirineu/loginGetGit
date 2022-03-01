import { Box, Box2, Container, ContainerSmall, Content } from "./styles";
import logoBranca from "../../assets/images/logoBranca.png";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";


function Header() {
  const { user, signOut } = useContext(AuthContext)

  // FORAM CRIADOS DOIS TIPOS DE CONTAINERS, CADA UM HABILITADO PRA UMA DETERMINADA MEDIA QUERY
  return (
    <Content>
      <Container>
        <main>
          <img src={logoBranca} alt="Logo branca" />
          <Box>
            <strong>{user}</strong>
            <button onClick={signOut}>Sair</button>
          </Box>
        </main>
      </Container>
      <ContainerSmall>
        <main>
          <Box2>
            <img src={logoBranca} alt="Logo branca" />
            <button onClick={signOut}>Sair</button>
          </Box2>
          <strong>{user}</strong>
        </main>
      </ContainerSmall>
    </Content>
  )
}

export default Header;