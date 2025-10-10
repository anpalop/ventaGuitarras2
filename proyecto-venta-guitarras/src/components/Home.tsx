import React, { useEffect, useState } from "react";
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
    <main className="container-xl mt-5 pt-20">
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
  );
};

export default Home;
