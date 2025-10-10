import React, { useEffect, useState } from "react";
import Header from "./Header";
import Guitarras from "./Guitarras";
import { db } from "../data/db";

interface Guitarra {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  cantidad?: number;
}

interface HomeProps {
  carrito: Guitarra[];
  setCarrito: React.Dispatch<React.SetStateAction<Guitarra[]>>;
  AgregarCarrito: (guitarra: Guitarra) => void;
}

const Home: React.FC<HomeProps> = ({ carrito, setCarrito, AgregarCarrito }) => {
  const [dataBase, setDataBase] = useState<Guitarra[]>(db);

  const CANTIDAD_MAXIMA = 5;
  const MINIMA_CANTIDAD = 1;

  function removerElemento(id: number) {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((element) => element.id !== id)
    );
  }

  function incrementarCantidad(id: number) {
    const actualizacionCarrito = carrito.map((element) => {
      if (element.id === id && element.cantidad! < CANTIDAD_MAXIMA) {
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
      if (element.id === id && element.cantidad! > MINIMA_CANTIDAD) {
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
};

export default Home;
