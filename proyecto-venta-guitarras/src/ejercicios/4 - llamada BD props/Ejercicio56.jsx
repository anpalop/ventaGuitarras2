import { useEffect, useState } from "react";
import { db } from "../../data/db";

export default function MapearBorrar() {
  let [baseDatos, setBaseDatos] = useState(db);
  let [eleEliminar, setEleEliminar] = useState({});

  useEffect(() => {
    let filtrado = baseDatos.slice(0, 5);
    setBaseDatos(filtrado);
  }, []);
  function Eliminar(modificar) {
    let arrayModificado = baseDatos.filter((element) => {
      if (element !== modificar) {
        return element;
      }
    });
    setBaseDatos(arrayModificado);
  }
  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        {baseDatos.map((element) => (
          <div>
            <p>{element.id}</p>
            <p>{element.image}</p>
            <button onClick={() => Eliminar(element)}>Eliminar</button>
            <p>==============</p>
          </div>
        ))}
        <p>==========================================</p>
      </div>
    </>
  );
}
