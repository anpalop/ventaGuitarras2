import { useEffect, useState } from "react";

export default function EliminarNumero() {
  const [numero, setNumero] = useState(() => {
    const cargaDatos = localStorage.getItem("guardadoNumeros");
    return cargaDatos ? JSON.parse(cargaDatos) : [1, 2, 3, 4, 5];
  });

  const [leerNumero, setLeerNumero] = useState(0);

  useEffect(() => {
    localStorage.setItem("guardadoNumeros", JSON.stringify(numero));
  }, [numero]);

  return (
    <>
      <div className="text-center">
        <p>Listado de numeros actuales: </p>
        <ul>
          {numero.map((element, idx) => (
            <li>
              {idx} | {element}{" "}
            </li>
          ))}
        </ul>
        <input
          type="number"
          placeholder="Ingrese un numero"
          onChange={(e) => {
            setLeerNumero(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            setNumero([...numero, leerNumero]);
          }}
        >
          Agregar
        </button>
        <button
          onClick={() => {
            let quitarNumero = [...numero];
            quitarNumero.pop();
            setNumero(quitarNumero);
          }}
        >
          quitar
        </button>
      </div>
    </>
  );
}
