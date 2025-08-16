import { useEffect, useState } from "react";

export default function AnimacionMontarDesmontar() {
  const [animacion, setAnimacion] = useState("oculto");

  useEffect(() => {
    // Este ejercicio esta realizado con chatgpt por que  i idea de como hace rla animacion en react
    setTimeout(() => setAnimacion("animar-entrada"), 50);
  }, []);

  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <div
          className={`mi-caja ${animacion}`}
          style={{ width: "200px", height: "100px", margin: "0 auto" }}
        >
          Animación de entrada
        </div>
        <p>==========================================</p>
      </div>
    </>
  );
}
