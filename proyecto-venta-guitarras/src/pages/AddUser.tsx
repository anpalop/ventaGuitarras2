import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registrarUsuario } from '../utils/apiAxios';

export default function AddUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const uname = username.trim();
    const pwd = password;

    if (!uname || !pwd) {
      setError('Rellena username y password');
      return;
    }

    setLoading(true);
    try {
      const res = await registrarUsuario(uname, pwd);
      if (!res) {
        setError('Error al registrar el usuario');
      } else {
        setSuccess('Usuario creado correctamente');
        setTimeout(() => navigate('/usuarios'), 800);
      }
    } catch (err: any) {
      // mostrar mensaje de error si viene del servidor
      const serverMsg = err?.response?.data?.error || err?.message;
      setError(serverMsg || 'Error inesperado');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="pt-20 pb-16 px-4 max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Añadir usuario</h2>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Usuario</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="username"
              autoComplete="username"
              aria-label="username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="password"
              autoComplete="new-password"
              aria-label="password"
            />
          </div>

          {error && <div className="text-sm text-red-600 mb-3" role="alert">{error}</div>}
          {success && <div className="text-sm text-green-600 mb-3" role="status">{success}</div>}

          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Guardando...' : 'Crear usuario'}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate(-1)}
              disabled={loading}
            >
              Cancelar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}