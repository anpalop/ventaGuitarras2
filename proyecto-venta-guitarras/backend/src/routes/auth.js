import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = express.Router();

const usuarios = [
  { id: 1, username: 'admin', password: bcrypt.hashSync('admin123', 10) },
  { id: 2, username: 'user', password: bcrypt.hashSync('user123', 10) }
];

router.post('/', (req, res) => {
  const { username, password } = req.body;
  const usuario = usuarios.find(u => u.username === username);
  if (usuario && bcrypt.compareSync(password, usuario.password)) {
    const token = jwt.sign({ id: usuario.id, username: usuario.username }, 'secreto', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

export default router;
