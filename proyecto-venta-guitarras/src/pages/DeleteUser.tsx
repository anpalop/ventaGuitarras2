import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { obtenerUsuarios, eliminarUsuario } from '../utils/apiAxios';

export default function DeleteUser() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<{ id: number; username: string; password?: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const uid = Number(id);

  useEffect(() => {
    let mounted = true;
    async function load() {
      if (isNaN(uid)) {
        if (mounted) setError('ID inválido');
        if (mounted) setLoadingInitial(false);
        return;
      }
      setLoadingInitial(true);
      try {
        const data = await obtenerUsuarios(true);
        const found = Array.isArray(data) ? data.find((u: any) => u.id === uid) : null;
        if (!found) {
          if (mounted) setError('Usuario no encontrado');
        } else {
          if (mounted) setUser(found);
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

  async function handleDelete() {
    if (!user) return;
    if (!confirm(`Eliminar usuario "${user.username}" (id: ${user.id})? Esta acción no es reversible.`)) return;
    setLoading(true);
    try {
      await eliminarUsuario(user.id);
      navigate('/usuarios');
    } catch (err) {
      console.error('Error eliminando usuario:', err);
      alert('Error al eliminar usuario');
    } finally {
      setLoading(false);
    }
  }

  if (isNaN(uid)) return <p className="p-4">ID inválido</p>;

  return (
    <section className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Eliminar usuario</h2>

      {loadingInitial ? (
        <div>Cargando usuario...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : user ? (
        <div className="bg-white p-4 rounded shadow">
          <p><strong>Usuario:</strong> {user.username}</p>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Contraseña:</strong> {user.password ? user.password : '(no disponible)'}</p>
          <div className="mt-4 flex gap-2">
            <button className="btn btn-danger" onClick={handleDelete} disabled={loading}>
              {loading ? 'Eliminando...' : 'Confirmar eliminación'}
            </button>
            <button className="btn" onClick={() => navigate(-1)} disabled={loading}>Cancelar</button>
          </div>
        </div>
      ) : (
        <p>No se encontró el usuario.</p>
      )}
    </section>
  );
}