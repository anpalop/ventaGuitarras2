import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/useAuth';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      setTimeout(() => {
        navigate('/dashboard');
      }, 500);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <section className="pt-20 pb-16 px-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded shadow">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="mb-4 p-2 w-full border rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="mb-4 p-2 w-full border rounded"
          required
        />
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded w-full">Entrar</button>
      </form>
    </section>
  );
};

export default Login;
