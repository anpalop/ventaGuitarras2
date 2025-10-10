import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validarEmail, validarTexto } from '../utils/validacion';
import { manejarError } from '../utils/manejoErrores';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validarTexto(username) || !validarEmail(email) || !validarTexto(password)) {
      setError('Datos inválidos');
      return;
    }
    try {
      const res = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        navigate('/login');
      } else {
        setError('No se pudo registrar el usuario');
      }
    } catch (err) {
      setError(manejarError(err));
    }
  };

  return (
    <section className="pt-20 pb-16 px-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Registro de usuario</h2>
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
          type="email"
          placeholder="Correo"
          value={email}
          onChange={e => setEmail(e.target.value)}
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
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded w-full">Registrar</button>
      </form>
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </section>
  );
};

export default Register;
