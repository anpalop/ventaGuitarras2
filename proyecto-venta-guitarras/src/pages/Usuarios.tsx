import React, { useEffect, useState } from 'react';
import { obtenerUsuarios } from '../utils/apiAxios';

const Usuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<{ id: number; username: string }[]>([]);

  useEffect(() => {
    async function fetchUsuarios() {
      const data = await obtenerUsuarios();
      setUsuarios(data);
    }
    fetchUsuarios();
  }, []);

  return (
    <section className="pt-20 pb-16 px-4">
      <h2 className="text-2xl font-bold mb-4">Lista de usuarios</h2>
      <ul className="bg-white p-4 rounded shadow">
        {usuarios.map(u => (
          <li key={u.id} className="mb-2">{u.username}</li>
        ))}
      </ul>
    </section>
  );
};

export default Usuarios;
