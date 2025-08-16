export default function PropsGuitarras({ id, nombre }) {
  return (
    <>
      <div className="text-center">
        <p>ID: {id}</p>
        <p>Nombre de la guitarra: {nombre}</p>
        <p>==============</p>
      </div>
    </>
  );
}
