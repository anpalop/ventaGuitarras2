export default function PropsUsuario({ id, nombre }) {
  return (
    <>
      <div className="text-center">
        <p>
          ID:{id} | Nombre: {nombre}
        </p>
        <p>==============</p>
      </div>
    </>
  );
}
