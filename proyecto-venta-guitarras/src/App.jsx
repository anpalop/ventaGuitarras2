import { useState } from "react";
import Header from "./components/Header";
import Guitarras from "./components/Guitarras";
import { db } from "./data/db";

export function App() {
  const [dataBase, setDataBase] = useState(db);
  const [carrito, setCarrito] = useState([]);

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
    <>
      <Header carrito={carrito} setCarrito={setCarrito} />
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
