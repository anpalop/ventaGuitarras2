import { useEffect, useState } from "react";
import Header from "./Header";
import Guitarras from "./Guitarras";
import { db } from "../data/db";

export default function Home({ carrito, setCarrito, AgregarCarrito }) {
  const [dataBase, setDataBase] = useState(db);

  const CANTIDAD_MAXIMA = 5;
  const MINIMA_CANTIDAD = 1;

  function removerElemento(id) {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((element) => element.id !== id)
    );
  }

  function incrementarCantidad(id) {
    const actualizacionCarrito = carrito.map((element) => {
      if (element.id === id && element.cantidad < CANTIDAD_MAXIMA) {
        return {
          ...element,
          cantidad: element.cantidad + 1,
        };
      }
      return element;
    });

    setCarrito(actualizacionCarrito);
  }

  function decrementarCantidad(id) {
    const actualizacionCarrito = carrito.map((element) => {
      if (element.id === id && element.cantidad > MINIMA_CANTIDAD) {
        return {
          ...element,
          cantidad: element.cantidad - 1,
        };
      }
      return element;
    });

    setCarrito(actualizacionCarrito);
  }

  function limpizarCarrito() {
    setCarrito([]);
  }

  return (
    <>
      <Header
        carrito={carrito}
        removerElemento={removerElemento}
        incrementarCantidad={incrementarCantidad}
        decrementarCantidad={decrementarCantidad}
        limpizarCarrito={limpizarCarrito}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {dataBase.map((element) => {
            return (
              <Guitarras
                key={element.id}
                datos={element}
                AgregarCarrito={AgregarCarrito}
              />
            );
          })}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados por Jhon Perez
          </p>
        </div>
      </footer>
    </>
  );
}
