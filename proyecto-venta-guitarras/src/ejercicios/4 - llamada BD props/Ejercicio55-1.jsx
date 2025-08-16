import { useEffect, useState } from "react";
import { db } from "../../data/db";
import PropsGuitarras from "./Ejercicio55-2";

export default function MapearGuitarras() {
  let [guitarras, setGuitarras] = useState(db);

  useEffect(() => {
    let filtrado = guitarras.slice(0, 3);
    setGuitarras(filtrado);
  }, []);

  return (
    <>
      <div className="text-center">
        {guitarras.map((element) => (
          <PropsGuitarras id={element.id} nombre={element.name} />
        ))}
      </div>
    </>
  );
}
