import express from 'express';
const router = express.Router();

// ...existing code...
router.post('/', (req, res) => {
  try {
    const { nombre, correo, mensaje } = req.body;

    if (!nombre || !correo || !mensaje) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
    if (typeof nombre !== 'string' || typeof correo !== 'string' || typeof mensaje !== 'string') {
      return res.status(400).json({ error: 'Formato de datos inválido' });
    }

    // validación básica de email
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(correo)) {
      return res.status(400).json({ error: 'Correo inválido' });
    }

    // sanitizar/normalizar
    const datos = {
      nombre: nombre.trim(),
      correo: correo.trim(),
      mensaje: mensaje.trim(),
    };

    // log en desarrollo solamente
    if (process.env.NODE_ENV !== 'production') {
      console.log('Formulario recibido:', datos);
    }

    return res.status(201).json({ mensaje: 'Formulario recibido', datos });
  } catch (error) {
    console.error('Error en /api/form:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
});

export default router;