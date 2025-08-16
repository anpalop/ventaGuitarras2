import { useEffect, useState } from "react";
import { db } from "../../data/db";

export default function MapearArrayString() {
  let [baseDatos, setBaseDatos] = useState([]);
  useEffect(() => {
    setBaseDatos(db);
  });
  let filtrado = baseDatos.filter((element) => element.name).slice(0, 3);
  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        {filtrado.map((element, idx) => (
          <li>
            #{idx}, Nombre: {element.name}
          </li>
        ))}
        <p>==========================================</p>
      </div>
    </>
  );
}
