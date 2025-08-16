import { useState } from "react";

export default function GuardarMostrar() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [apellidoUsuario, setApellidoUsuario] = useState("");

  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <form action="">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setNombreUsuario(e.target.value);
            }}
          />
          <p>El nombre escrito es {nombreUsuario}</p>
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => {
              setApellidoUsuario(e.target.value);
            }}
          />
          <p>El apellido escrito es {apellidoUsuario}</p>
          <p>
            El nombre completo es {nombreUsuario} {apellidoUsuario}
          </p>
        </form>
        <p>==========================================</p>
      </div>
    </>
  );
}
