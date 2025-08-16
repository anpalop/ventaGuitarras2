import { useEffect, useState } from "react";

export default function PollingAPI() {
  let [estado, setEstado] = useState([]);

  let url = "https://jsonplaceholder.typicode.com/users";
  let [ejecutarConsulta, setEjecutarConsulta] = useState(false);
  let [contador, setContador] = useState(0);

  useEffect(() => {
    let intervalo = setInterval(() => {
      if (ejecutarConsulta) {
        fetch(url)
          .then((consulta) => consulta.json())
          .then((guardarDatos) => setEstado(guardarDatos.slice(0, 3)));
        setContador((contadorPrevio) => {
          const nuevoContador = contadorPrevio + 1;
          console.log(`La consulta fue llamada por #${nuevoContador} vez`);
          return nuevoContador;
        });
        console.log(`La consulta fue llamada por #${contador} ves`);
      }
    }, 5000);

    return () => clearInterval(intervalo);
  }, [ejecutarConsulta]);

  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <button
          onClick={() => {
            ejecutarConsulta
              ? setEjecutarConsulta(false)
              : setEjecutarConsulta(true);
          }}
        >
          {ejecutarConsulta ? `Desactivar Consulta` : `Activar Consulta`}
        </button>
        <p>==========================================</p>
      </div>
    </>
  );
}
