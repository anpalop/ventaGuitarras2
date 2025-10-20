import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerUsuarios, actualizarUsuario } from '../utils/apiAxios';

export default function EditUser() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const uid = Number(id);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      if (isNaN(uid)) {
        if (mounted) setError('ID inválido');
        return;
      }
      setLoadingInitial(true);
      try {
        const data = await obtenerUsuarios(true);
        const found = Array.isArray(data) ? data.find((u: any) => u.id === uid) : null;
        if (!found) {
          if (mounted) setError('Usuario no encontrado');
        } else {
          if (mounted) setUsername(found.username || '');
        }
      } catch (err) {
        console.error('Error cargando usuario:', err);
        if (mounted) setError('Error al cargar usuario');
      } finally {
        if (mounted) setLoadingInitial(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, [uid]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const uname = username.trim();
    if (!uname) {
      setError('El nombre de usuario es requerido');
      return;
    }

    setLoading(true);
    try {
      await actualizarUsuario(uid, uname, password || undefined);
      navigate('/usuarios');
    } catch (err) {
      console.error('Error al actualizar usuario:', err);
      setError('Error al actualizar');
    } finally {
      setLoading(false);
    }
  }

  if (isNaN(uid)) return <p className="p-4">ID inválido</p>;

  return (
    <section className="pt-20 pb-16 px-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Editar usuario</h2>

      {loadingInitial ? (
        <div>Cargando usuario...</div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Usuario</label>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full border rounded px-3 py-2"
              aria-label="username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Nueva contraseña (opcional)</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
              aria-label="password"
            />
          </div>

          {error && <div className="text-red-600 mb-3">{error}</div>}

          <div className="flex gap-2">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Guardando...' : 'Guardar'}
            </button>
            <button type="button" className="btn" onClick={() => navigate(-1)} disabled={loading}>
              Cancelar
            </button>
          </div>
        </form>
      )}
    </section>
  );
}