export default function PropsTareas({ id, nombre, paso }) {
  return (
    <>
      <div className="text-center">
        <p>
          ID:{id} | Nombre: {nombre} | Paso: {paso.toString()}
        </p>
        <p>==============</p>
      </div>
    </>
  );
}
