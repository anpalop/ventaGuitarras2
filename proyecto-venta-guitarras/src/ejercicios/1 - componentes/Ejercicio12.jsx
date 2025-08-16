export default function Producto({ nombre, precio, foto }) {
  return (
    <>
      <p>==========================================</p>
      <>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">El nombre del producto es {nombre}</h5>
            <p className="card-text">El precio es de {precio} </p>
          </div>
          <div className="col-4">
            <img src={`/img/${foto}.jpg`} alt="presentacion" />
          </div>
        </div>
      </>
      <p>==========================================</p>
    </>
  );
}
