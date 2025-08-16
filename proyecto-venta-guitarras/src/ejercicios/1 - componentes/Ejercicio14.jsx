export default function BlogPost({ titulo, autor, fecha, contenido }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">El autor es {autor} </p>
          <p className="card-text">Lo lei en el anio {fecha} </p>
          <p className="card-text">Descripcion: {contenido} </p>
        </div>
      </div>
    </>
  );
}
