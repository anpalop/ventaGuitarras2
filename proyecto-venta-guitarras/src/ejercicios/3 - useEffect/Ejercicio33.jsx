import { useEffect, useState } from "react";

export default function AlertaCambio() {
  let [alerta, setAlerta] = useState(0);
  useEffect(() => {
    // alert("HUBO UN CAMBIO EN EL CONTADOR");
  }, [alerta]);
  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <button
          onClick={() => {
            setAlerta(alerta + 1);
          }}
        >
          Generar cambio {alerta}
        </button>
        <p>==========================================</p>
      </div>
    </>
  );
}
