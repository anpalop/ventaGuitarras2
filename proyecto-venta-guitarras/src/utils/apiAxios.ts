import axios from 'axios';

const API_BASE =
  (typeof process !== 'undefined' && (process as any).env && (process as any).env.REACT_APP_API_URL) ||
  (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.VITE_API_URL) ||
  '/api';

export const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

// Crear usuario
export async function registrarUsuario(username: string, password: string) {
  try {
    const res = await api.post('/users', { username, password });
    return res.data;
  } catch (error) {
    console.error('registrarUsuario error:', error);
    throw error;
  }
}

// Actualizar usuario
export async function actualizarUsuario(id: number | string, username?: string, password?: string) {
  try {
    const res = await api.put(`/users/${id}`, { username, password });
    return res.data;
  } catch (error) {
    console.error('actualizarUsuario error:', error);
    throw error;
  }
}

// Eliminar usuario
export async function eliminarUsuario(id: number | string) {
  try {
    const res = await api.delete(`/users/${id}`);
    return res.data;
  } catch (error) {
    console.error('eliminarUsuario error:', error);
    throw error;
  }
}

// Obtener usuarios (opcional full para password en dev)
export async function obtenerUsuarios(full = false) {
  try {
    const url = full ? '/users?full=1' : '/users';
    const res = await api.get(url);
    return res.data;
  } catch (error) {
    console.error('obtenerUsuarios error:', error);
    throw error;
  }
}