import express from 'express';
import {
  obtenerUsuarios,
  obtenerUsuariosSinPassword,
  agregarUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from '../models/usuarios.js';

const router = express.Router();

// ...existing code...
router.get('/', (req, res) => {
  try {
    const full = req.query.full === '1' || process.env.ENABLE_SHOW_PASSWORDS === '1';
    const usuarios = full ? obtenerUsuarios() : obtenerUsuariosSinPassword();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Username y password son requeridos" });
    }
    if (typeof username !== 'string' || typeof password !== 'string') {
      return res.status(400).json({ error: "Formato inválido" });
    }

    const nuevoUsuario = agregarUsuario(username.trim(), password);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    if (error.message === "El usuario ya existe") {
      res.status(400).json({ error: "No se pudo registrar el usuario. Puede que ya exista." });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    if (isNaN(Number(id))) return res.status(400).json({ error: "ID inválido" });

    const { username, password } = req.body;
    if (username !== undefined && typeof username !== 'string') {
      return res.status(400).json({ error: "username debe ser string" });
    }
    if (password !== undefined && typeof password !== 'string') {
      return res.status(400).json({ error: "password debe ser string" });
    }

    const usuarioActualizado = actualizarUsuario(id, username, password);
    res.json(usuarioActualizado);
  } catch (error) {
    if (error.message === "Usuario no encontrado") {
      res.status(404).json({ error: "Usuario no encontrado" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    if (isNaN(Number(id))) return res.status(400).json({ error: "ID inválido" });

    const removed = eliminarUsuario(id);
    // devolver información del eliminado para confirmación en el cliente
    res.json({ mensaje: "Usuario eliminado", usuario: removed });
  } catch (error) {
    if (error.message === "Usuario no encontrado") {
      res.status(404).json({ error: "Usuario no encontrado" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

export default router;