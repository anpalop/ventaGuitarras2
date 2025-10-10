import React, { useState } from 'react';
import { enviarFormulario } from '../utils/api';

const Formulario: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const exito = await enviarFormulario({ nombre, correo, mensaje });
    setEnviado(exito);
  };

  return (
    <section className="pt-20 pb-16 px-4 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Formulario de contacto</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded shadow">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          className="mb-4 p-2 w-full border rounded"
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
          className="mb-4 p-2 w-full border rounded"
          required
        />
        <textarea
          placeholder="Mensaje"
          value={mensaje}
          onChange={e => setMensaje(e.target.value)}
          className="mb-4 p-2 w-full border rounded"
          required
        />
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded w-full">Enviar</button>
      </form>
      {enviado && <p className="mt-4 text-green-600">¡Formulario enviado correctamente!</p>}
    </section>
  );
};

export default Formulario;
