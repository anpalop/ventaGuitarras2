import express from 'express';
const router = express.Router();

let usuarios = [
  { id: 1, username: 'admin', password: 'admin123' },
  { id: 2, username: 'user', password: 'user123' }
];

router.get('/', (req, res) => {
  res.json(usuarios);
});

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const nuevoUsuario = { id: usuarios.length + 1, username, password };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const usuario = usuarios.find(u => u.id === parseInt(id));
  if (usuario) {
    usuario.username = username;
    usuario.password = password;
    res.json(usuario);
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  usuarios = usuarios.filter(u => u.id !== parseInt(id));
  res.status(204).end();
});

export default router;
