import { useState } from "react";
import { Box, Content, Footer, Header, Load, Main } from "./styles";
import { FiSearch } from "react-icons/fi";
import api from "../../../services/api";

interface User {
  avatar: string,
  login: string,
  email: string;
  repos: number;
  location: string;
  bio: string;
  url: string;
}

function MainHome() {
  const [user, setUser] = useState<User>();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

    // FUNÇÃO CHAMADA PARA FAZER A REQUISIÇÃO DA API PARA BUSCAR O USUÁRIO, CONTENDO LOADING
  function getUser() {
    setLoading(false);
    // REQUISIÇÃO VIA AXIOS
    api.get(`users/${search}`)
      .then((response) => 
      {
      const aux = {
        avatar: response.data.avatar_url,
        login: response.data.login,
        email: response.data.email,
        repos: response.data.public_repos,
        location: response.data.location,
        bio: response.data.bio,
        url: response.data.html_url
      }
      setUser(aux);
      setLoading(true);
      setSearch('');
      })
      .catch(() => {
        // CASO NÃO ENCONTRADO, É EMITIDO UM ALERTA
        alert('Usuário não encontrado')
        setSearch('')})
  }

  return (
    <Content>
      <label>Digite nome do usuário ou email:</label>
      <div>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={getUser}><FiSearch /></button>
      </div>
      {loading ?
    <Box>
    <div><img src={user?.avatar} alt="profile" /></div>
    <main>
      <Header>
        <div>
          <strong>{user?.login}</strong>
          <p>{user?.email}</p>
        </div>
        <div>
          <p><strong>{user?.repos} </strong>Repo. Públicos</p>
        </div>
      </Header>
      <Main>
        <div>
          <p><strong>De: </strong> {user?.location}</p>
        </div>
        <div>
          <p><strong>Bio: </strong> {user?.bio}</p>
        </div>
      </Main>
      <Footer>
        <a href={user?.url} >Acessar Perfil</a>
      </Footer>
    </main>
  </Box>  
    : 
    <Load>
      <p>Procure um usuários</p>
    </Load>
    }

    </Content>
  )
}

export default MainHome;