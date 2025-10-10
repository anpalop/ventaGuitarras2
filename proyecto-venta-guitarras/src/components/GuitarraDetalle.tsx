import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import { db } from "../data/db.js";

interface Guitarra {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  cantidad?: number;
}

interface GuitarraDetalleProps {
  AgregarCarrito: (guitarra: Guitarra) => void;
}

const GuitarraDetalle: React.FC<GuitarraDetalleProps> = ({
  AgregarCarrito,
}) => {
  const { id } = useParams<{ id: string }>();
  const guitarra = db.find((g: Guitarra) => g.id === parseInt(id || ""));

  const estadoInicialCarrito = () => {
    const almaceCarrito = localStorage.getItem("carrito");
    return almaceCarrito ? JSON.parse(almaceCarrito) : [];
  };

  const [carrito, setCarrito] = useState<Guitarra[]>(estadoInicialCarrito);

  const CANTIDAD_MAXIMA = 5;
  const MINIMA_CANTIDAD = 1;

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  function agregarCarritoLocal(objeto: Guitarra) {
    let busqueda = carrito.findIndex((element) => element.id === objeto.id);
    if (busqueda !== -1) {
      let actulizarCantidad = [...carrito];
      actulizarCantidad[busqueda].cantidad =
        (actulizarCantidad[busqueda].cantidad || 1) + 1;
      setCarrito(actulizarCantidad);
    } else {
      objeto.cantidad = 1;
      setCarrito([...carrito, objeto]);
    }
  }

  function removerElemento(id: number) {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((element) => element.id !== id)
    );
  }

  function incrementarCantidad(id: number) {
    const actualizacionCarrito = carrito.map((element) => {
      if (element.id === id && (element.cantidad || 1) < CANTIDAD_MAXIMA) {
        return {
          ...element,
          cantidad: (element.cantidad || 1) + 1,
        };
      }
      return element;
    });
    setCarrito(actualizacionCarrito);
  }

  function decrementarCantidad(id: number) {
    const actualizacionCarrito = carrito.map((element) => {
      if (element.id === id && (element.cantidad || 1) > MINIMA_CANTIDAD) {
        return {
          ...element,
          cantidad: (element.cantidad || 1) - 1,
        };
      }
      return element;
    });
    setCarrito(actualizacionCarrito);
  }

  function limpizarCarrito() {
    setCarrito([]);
  }

  if (!guitarra) {
    return (
      <>
        <Header
          carrito={carrito}
          removerElemento={removerElemento}
          incrementarCantidad={incrementarCantidad}
          decrementarCantidad={decrementarCantidad}
          limpizarCarrito={limpizarCarrito}
        />
        <div className="container-xl mt-5">
          <div className="text-center">
            <h2>Guitarra no encontrada</h2>
            <Link to="/" className="btn btn-dark">
              Volver a la tienda
            </Link>
          </div>
        </div>
      </>
    );
  }

  const { name, image, description, price } = guitarra;

  return (
    <>
      <Header
        carrito={carrito}
        removerElemento={removerElemento}
        incrementarCantidad={incrementarCantidad}
        decrementarCantidad={decrementarCantidad}
        limpizarCarrito={limpizarCarrito}
      />
      <div className="container-xl mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src={`/img/${image}.jpg`}
                    className="img-fluid rounded-start h-100"
                    alt={`Guitarra ${name}`}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body d-flex flex-column h-100">
                    <h1 className="card-title text-uppercase fw-bold mb-4">
                      {name}
                    </h1>
                    <p className="card-text fs-5 mb-4">{description}</p>
                    <p className="card-text">
                      <span className="text-primary fs-2 fw-bold">
                        ${price}
                      </span>
                    </p>
                    <div className="mt-auto">
                      <button
                        type="button"
                        className="btn btn-dark w-100 mb-3"
                        onClick={() => agregarCarritoLocal(guitarra)}
                      >
                        Agregar al Carrito
                      </button>
                      <Link to="/" className="btn btn-outline-dark w-100">
                        Volver a la tienda
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados por Jhon Perez
          </p>
        </div>
      </footer>
    </>
  );
};

export default GuitarraDetalle;
