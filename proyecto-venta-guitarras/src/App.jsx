import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GuitarraDetalle from "./components/GuitarraDetalle";
import { db } from "./data/db";

export function App() {
  const estadoInicialCarrito = () => {
    const almaceCarrito = localStorage.getItem("carrito");
    return almaceCarrito ? JSON.parse(almaceCarrito) : [];
  };

  const [carrito, setCarrito] = useState(estadoInicialCarrito);

  const CANTIDAD_MAXIMA = 5;
  const MINIMA_CANTIDAD = 1;

  // Local storage
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  function AgregarCarrito(objeto) {
    let busqueda = carrito.findIndex((element) => element.id === objeto.id);
    if (busqueda !== -1) {
      let actulizarCantidad = [...carrito];
      actulizarCantidad[busqueda].cantidad++;
      setCarrito(actulizarCantidad);
    } else {
      // Agregar cantidad
      objeto.cantidad = 1;
      setCarrito([...carrito, objeto]);
    }
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            carrito={carrito}
            setCarrito={setCarrito}
            AgregarCarrito={AgregarCarrito}
          />
        }
      />
      <Route
        path="/guitarra/:id"
        element={<GuitarraDetalle AgregarCarrito={AgregarCarrito} />}
      />
    </Routes>
  );
}
