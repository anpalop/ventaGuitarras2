import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function registrarUsuario(username: string, password: string) {
  try {
    const res = await api.post('/users', { username, password });
    return res.data;
  } catch (error) {
    return null;
  }
}

export async function loginUsuario(username: string, password: string) {
  try {
    const res = await api.post('/login', { username, password });
    return res.data;
  } catch (error) {
    return null;
  }
}

export async function obtenerUsuarios() {
  try {
    const res = await api.get('/users');
    return res.data;
  } catch (error) {
    return [];
  }
}
