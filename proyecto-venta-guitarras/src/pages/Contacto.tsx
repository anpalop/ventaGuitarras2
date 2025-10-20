import React, { useState } from 'react';
import { api } from '../utils/apiAxios';

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    const n = nombre.trim();
    const c = correo.trim();
    const m = mensaje.trim();

    if (!n || !c || !m) {
      setStatus('Rellena todos los campos');
      return;
    }

    // validación básica de email
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(c)) {
      setStatus('Correo inválido');
      return;
    }

    setLoading(true);
    try {
      const res = await api.post('/form', { nombre: n, correo: c, mensaje: m });
      setStatus(res?.data?.mensaje || 'Enviado');
      setNombre(''); setCorreo(''); setMensaje('');
    } catch (err: any) {
      console.error('Error enviar formulario:', err);
      const serverMsg = err?.response?.data?.error || err?.message;
      setStatus(serverMsg || 'Error al enviar el formulario');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-3">
        <input
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          placeholder="Nombre"
          className="w-full border px-3 py-2"
        />
        <input
          value={correo}
          onChange={e => setCorreo(e.target.value)}
          placeholder="Correo"
          className="w-full border px-3 py-2"
        />
        <textarea
          value={mensaje}
          onChange={e => setMensaje(e.target.value)}
          placeholder="Mensaje"
          className="w-full border px-3 py-2"
          rows={5}
        />
        <div className="flex gap-2">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>
      {status && <p className="mt-3">{status}</p>}
    </section>
  );
}