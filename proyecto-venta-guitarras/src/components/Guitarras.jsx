import { Link } from "react-router-dom";

export default function Guitarras({ datos, AgregarCarrito }) {
  let { id, name, image, description, price } = datos;

  return (
    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
      <div className="col-4">
        <img
          className="img-fluid"
          src={`/img/${image}.jpg`}
          alt="imagen guitarra"
        />
      </div>
      <div className="col-8">
        <Link to={`/guitarra/${id}`} className="text-decoration-none">
          <h3 className="text-black fs-4 fw-bold text-uppercase"> {name} </h3>
        </Link>
        <p>{description}</p>
        <p className="fw-black text-primary fs-3"> {price} </p>
        <button
          type="button"
          className="btn btn-dark w-100"
          onClick={() => {
            AgregarCarrito(datos);
          }}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}
