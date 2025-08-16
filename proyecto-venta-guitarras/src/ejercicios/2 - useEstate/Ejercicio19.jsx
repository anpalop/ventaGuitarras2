import { useState } from "react";

export default function GuardarNombre() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <input
          type="text"
          onChange={(e) => {
            setNombreUsuario(e.target.value);
          }}
        />
        <p>El nombre guardado es {nombreUsuario}</p>
        <p>==========================================</p>
      </div>
    </>
  );
}
