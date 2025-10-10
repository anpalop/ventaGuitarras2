import express from "express";
import {
  obtenerUsuariosSinPassword,
  agregarUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "../models/usuarios.js";
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const usuarios = obtenerUsuariosSinPassword();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username y password son requeridos" });
    }

    const nuevoUsuario = agregarUsuario(username, password);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    if (error.message === "El usuario ya existe") {
      res
        .status(400)
        .json({
          error: "No se pudo registrar el usuario. Puede que ya exista.",
        });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;
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
    eliminarUsuario(id);
    res.status(204).end();
  } catch (error) {
    if (error.message === "Usuario no encontrado") {
      res.status(404).json({ error: "Usuario no encontrado" });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

export default router;
