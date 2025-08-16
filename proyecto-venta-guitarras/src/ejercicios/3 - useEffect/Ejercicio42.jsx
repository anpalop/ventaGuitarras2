import { useEffect, useState } from "react";

export default function SincronizarEstados() {
  let [suma, setSuma] = useState(0);
  let [primerNumero, setPrimerNumero] = useState(0);
  let [segundoNumero, setSegundoNumero] = useState(0);

  useEffect(() => {
    setSuma(Number(primerNumero) + Number(segundoNumero));
  }, [primerNumero, segundoNumero]);
  return (
    <>
      <div className="text-center">
        <p>Introduzca el primer numero</p>
        <input
          type="number"
          placeholder="0"
          onChange={(e) => {
            setPrimerNumero(e.target.value);
          }}
        />
        <p>Introduzca el segundo numero</p>
        <input
          type="number"
          placeholder="0"
          onChange={(e) => {
            setSegundoNumero(e.target.value);
          }}
        />
        <br />
        <p></p>

        <p>El resultado es {suma}</p>
      </div>
    </>
  );
}
