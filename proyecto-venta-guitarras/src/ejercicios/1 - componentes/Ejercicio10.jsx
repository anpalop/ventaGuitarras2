export default function Perfil({ nombre, edad, foto }) {
  return (
    <>
      <p>==========================================</p>
      <>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Mi nombre es {nombre}</h5>
            <p className="card-text">Tengo {edad} years</p>
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
