export default function PropsCursos({ nombre, estudiantes }) {
  return (
    <>
      <div className="text-center">
        <p>El curso es: {nombre}</p>
        <p>Cantidad de estudiantes: {estudiantes}</p>
        <p>==============</p>
      </div>
    </>
  );
}
