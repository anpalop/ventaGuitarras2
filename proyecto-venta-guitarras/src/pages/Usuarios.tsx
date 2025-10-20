import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { obtenerUsuarios } from '../utils/apiAxios';

type Usuario = { id: number; username: string; password: string };

const Usuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const data = await obtenerUsuarios(true);
        console.log('API /api/users ->', data);
        if (Array.isArray(data)) setUsuarios(data);
      } catch (err) {
        console.error('Error fetchUsuarios:', err);
      }
    }
    fetchUsuarios();
  }, []);

  return (
    <>
    <section className="pt-20 pb-16 px-4">
      <h2 className="text-2xl font-bold mb-4">Lista de usuarios</h2>
      <ul className="bg-white p-4 rounded shadow">
        {usuarios.map(u => (
          <li key={u.id} className="mb-2">
            <div><strong>Usuario:</strong> {u.username}</div>
            <div><strong>Contraseña:</strong> {u.password}</div>
          </li>
        ))}
      </ul>
    </section>
    <div className='px-4 space-y-2'>
        <Link to="/addUser" className="btn btn-large btn-primary">Agregar Usuario</Link>
        <br />
        <button className="btn btn-large btn-secondary" disabled>Eliminar Usuario</button>
        <br />
        <button className="btn btn-large btn-warning" disabled>Editar Usuario</button>
    </div>
    </>
  );
};

export default Usuarios;
