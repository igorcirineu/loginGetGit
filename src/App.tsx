import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";


// FUNÇÃO HOC QUE VERIFICA AS ROTAS PRIVADAS
function RequireAuth({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Rotas Públicas */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* ROTAS PRIVADAS */}
             <Route path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>} />

            {<Route path="*"  element={
                <RequireAuth>
                  <Home />
                </RequireAuth>} /> }
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>

  );
}


