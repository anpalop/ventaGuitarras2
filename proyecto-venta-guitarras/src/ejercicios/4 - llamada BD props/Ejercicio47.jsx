import { useEffect, useState } from "react";
import { db } from "../../data/db";

export default function MapearArrayP() {
  let [baseDatos, setBaseDatos] = useState([]);
  useEffect(() => {
    setBaseDatos(db);
  }, []);
  let filtrado = baseDatos.filter((element) => element.id).slice(0, 3);
  return (
    <>
      <div className="text-center">
        {filtrado.map((element, idx) => (
          <p>
            {idx}, ID:{element.id}
          </p>
        ))}
      </div>
    </>
  );
}
