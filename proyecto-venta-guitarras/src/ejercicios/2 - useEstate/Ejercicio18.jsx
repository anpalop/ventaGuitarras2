import { useState } from "react";

export default function ActivarDesactivar() {
  const [estado, setEstado] = useState(true);
  return (
    <>
      <div className="text-center">
        <button
          onClick={() => {
            setEstado(!estado);
          }}
        >
          {" "}
          {estado === true ? "Ocultar" : "Mostrar"} texto
        </button>
        {estado && <p>Mensaje secreto </p>}
      </div>
    </>
  );
}
