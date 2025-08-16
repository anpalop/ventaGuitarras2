import { useEffect, useState } from "react";
import { db } from "../../data/db";

export default function MapearArrayProductosNombrePrecio() {
  let [baseDatos, setBaseDatos] = useState(db);
  useEffect(() => {
    let filtrado = baseDatos.slice(0, 3);
    setBaseDatos(filtrado);
  });
  return (
    <>
      <div className="text-center">
        <ul>
          {baseDatos.map((element) => (
            <div>
              <p>Nombre: {element.name}</p>
              <p>Precio: {element.price}</p>
              <p>==============</p>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
