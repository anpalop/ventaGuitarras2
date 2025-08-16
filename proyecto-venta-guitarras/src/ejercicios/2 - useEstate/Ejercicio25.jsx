import { useEffect, useState } from "react";

export default function EstadoUsuario() {
  const [estado, setEstado] = useState({});
  let objetoUsuario = {
    nombre: "Jhon Perez",
    edad: 21,
  };

  useEffect(() => {
    setEstado(objetoUsuario);
  }, []);
  return (
    <>
      <div className="text-center">
        <p>
          El nombre de usuario es: {estado.nombre} y su edad es: {estado.edad}
        </p>
      </div>
    </>
  );
}
