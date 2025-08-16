import { useEffect, useState } from "react";

export default function Temporizador() {
  let [temporizador, setTemporizador] = useState(0);
  let [activarTemporizador, setActivarTemporizador] = useState(false);

  useEffect(() => {
    let intervalo;
    if (activarTemporizador) {
      intervalo = setInterval(() => {
        setTemporizador((tiempo) => tiempo + 1);
      }, 1000);
    }
    return () => clearInterval(intervalo);
  }, [activarTemporizador]);
  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        {
          <div>
            <p>Temporizador:</p>
            <p></p>
            <p>{temporizador}</p>
            <button
              onClick={() => {
                if (activarTemporizador === true) {
                  setActivarTemporizador(false);
                } else {
                  setActivarTemporizador(true);
                }
              }}
            >
              {activarTemporizador
                ? "Temporizador Activo"
                : "Temporizador Inactivo"}
            </button>
          </div>
        }
        <p>==========================================</p>
      </div>
    </>
  );
}
