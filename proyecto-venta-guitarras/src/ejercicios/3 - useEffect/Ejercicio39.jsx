import { use, useEffect, useState } from "react";
import Temporizador from "./Ejercicio37";

export default function LimpiarTiempo() {
  let [mostrarComponente, setMostrarComponente] = useState(false);
  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <p>{mostrarComponente && <Temporizador />}</p>
        <button
          onClick={() => {
            setMostrarComponente((element) => (element = !element));
          }}
        >
          {mostrarComponente ? `Ocultar Componente` : `Activar Componente`}
        </button>
        <p>==========================================</p>
      </div>
    </>
  );
}
