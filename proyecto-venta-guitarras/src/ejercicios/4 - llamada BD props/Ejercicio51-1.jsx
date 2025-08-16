import { useEffect, useState } from "react";
import { db } from "../../data/db";
import PropsUsuario from "./Ejercicio51-2";

export default function ComponentesPorUsuario() {
  let [usuario, setUsuario] = useState(db);
  useEffect(() => {
    let filtrado = usuario.slice(0, 3);
    setUsuario(filtrado);
  }, []);
  return (
    <>
      <div className="text-center">
        {usuario.map((element) => (
          <PropsUsuario id={element.id} nombre={element.name} />
        ))}
      </div>
    </>
  );
}
