export default function PropsPost({ id, titulo, cuerpo }) {
  return (
    <>
      <div className="text-center">
        <p>ID:{id}</p>
        <p>TITULO: {titulo}</p>
        <p>Contenido del POST: {cuerpo}</p>
        <p>==============</p>
      </div>
    </>
  );
}
