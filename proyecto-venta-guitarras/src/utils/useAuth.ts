import { useAuthContext } from './globalState';

const usuariosSimulados = [
  { username: 'admin', password: 'admin123' },
  { username: 'user', password: 'user123' },
];

export function useAuth() {
  const { isAuthenticated, setAuthenticated } = useAuthContext();

  function login(username: string, password: string) {
    const usuario = usuariosSimulados.find(
      u => u.username === username && u.password === password
    );
    setAuthenticated(!!usuario);
    return !!usuario;
  }

  function logout() {
    setAuthenticated(false);
  }

  return { isAuthenticated, login, logout };
}
