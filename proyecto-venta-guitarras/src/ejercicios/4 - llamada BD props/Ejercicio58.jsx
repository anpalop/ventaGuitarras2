import { useEffect, useState } from "react";
import { db } from "../../data/db";

export default function FiltrarPropiedad() {
  let [baseDatos, setBaseDatos] = useState(db);
  let [mostrarFiltrados, setMostrarFiltrados] = useState(null);
  useEffect(() => {
    let copiaBd = [...baseDatos];
    copiaBd = copiaBd.slice(0, 5);
    setBaseDatos(copiaBd);
  }, []);

  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <input type="text" />
        <br />
        {baseDatos.map((element) => (
          <div>
            <p>ID: {element.id}</p>
            <p>Nombre: {element.name}</p>
            <p>Precio: {element.price}</p>
            <p>==============</p>
          </div>
        ))}

        <p>==========================================</p>
      </div>
    </>
  );
}
