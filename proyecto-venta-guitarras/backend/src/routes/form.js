import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  // Aquí se podría guardar en una base de datos
  res.status(201).json({ mensaje: 'Formulario recibido', datos: { nombre, correo, mensaje } });
});

export default router;
