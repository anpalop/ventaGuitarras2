import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { buscarUsuarioPorUsername } from "../models/usuarios.js";
const router = express.Router();

router.post("/", (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username y password son requeridos" });
    }

    const usuario = buscarUsuarioPorUsername(username);

    if (usuario && bcrypt.compareSync(password, usuario.password)) {
      const token = jwt.sign(
        { id: usuario.id, username: usuario.username },
        "secreto",
        { expiresIn: "1h" }
      );
      res.json({ token, user: { id: usuario.id, username: usuario.username } });
    } else {
      res.status(401).json({ error: "Credenciales inválidas" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;
