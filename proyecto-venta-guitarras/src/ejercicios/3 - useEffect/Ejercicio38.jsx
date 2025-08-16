import { useEffect, useState } from "react";

export default function CambiosDosEstados() {
  let [primerEscrito, setPrimerEscrito] = useState("");
  let [segundoEscrito, setSegundoEscrito] = useState("");

  useEffect(() => {
    console.log(`Estoy escuchando al primer escrito ${primerEscrito}`);
    console.log(`Estoy escuchando al segundo escrito ${segundoEscrito}`);
  }, [primerEscrito, segundoEscrito]);
  return (
    <>
      <div className="text-center">
        <input
          type="text"
          placeholder="Estado 1"
          onChange={(e) => {
            setPrimerEscrito(e.target.value);
          }}
        />
        <p>El estado de la variable cambio a '{primerEscrito}'</p>
        <input
          type="text"
          placeholder="Estado 2"
          onChange={(e) => {
            setSegundoEscrito(e.target.value);
          }}
        />
        <p>El estado de la variable cambio a '{segundoEscrito}'</p>
      </div>
    </>
  );
}
