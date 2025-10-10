export async function enviarFormulario(datos: {
  nombre: string;
  correo: string;
  mensaje: string;
}) {
  try {
    const res = await fetch("http://localhost:3001/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    return res.ok;
  } catch (error) {
    return false;
  }
}
