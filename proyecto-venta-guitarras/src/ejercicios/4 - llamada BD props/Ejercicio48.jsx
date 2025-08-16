import { useEffect, useState } from "react";
import { db } from "../../data/db";

export default function MapearArrayNombres() {
  let [baseDatos, setBaseDatos] = useState([]);
  useEffect(() => {
    setBaseDatos(db);
  }, []);
  let filtrarDatos = baseDatos.filter((eleemnt) => eleemnt.name).slice(3, 6);
  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        {filtrarDatos.map((element, idx) => (
          <p>
            #{idx}, Nombre: {element.name}
          </p>
        ))}
        <p>==========================================</p>
      </div>
    </>
  );
}
