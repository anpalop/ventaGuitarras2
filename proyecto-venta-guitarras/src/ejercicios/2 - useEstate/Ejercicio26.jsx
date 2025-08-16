import { useEffect, useState } from "react";

export default function AgregarProductos() {
  const [listaProductos, setListaProductos] = useState(() => {
    // Primero averiguo si habia datos anteriores, le digo al navegador si en el local storage tiene un JSON llamado 'datosGuardados'
    const datosAnterior = localStorage.getItem("datosGuardados");

    return datosAnterior
      ? JSON.parse(datosAnterior)
      : ["Tomate", "Lechuga", "Pepino", "Cebolla"];
  });

  // Segundo guardo los nuevos datos en un JSON, transformo mi array en un texto para guardarlo en el JSON.

  // Cada vez que guardo un dato en la listaProductos, se ejecutara el effect actualizando el JSON
  useEffect(() => {
    localStorage.setItem("datosGuardados", JSON.stringify(listaProductos));
  }, [listaProductos]);
  const [agreagarElemento, setAgregarElemento] = useState("");

  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <p>
          La lista de productos actuales es de:
          <ul>
            {listaProductos.map((element, idx) => (
              <li key={idx}>
                {idx} | {element}
              </li>
            ))}
          </ul>
        </p>
        <div>
          <input
            type="text"
            placeholder="Ingrese Producto"
            onChange={(e) => {
              setAgregarElemento(e.target.value);
            }}
          />
        </div>
        <br />
        <button
          onClick={() => {
            setListaProductos([...listaProductos, agreagarElemento]);
          }}
        >
          Pulsar para agregar producto
        </button>
        <button
          onClick={() => {
            let quitarProducto = [...listaProductos];
            quitarProducto.pop();
            setListaProductos(quitarProducto);
          }}
        >
          Pulsar para quitar producto
        </button>
        <p>==========================================</p>
      </div>
    </>
  );
}
