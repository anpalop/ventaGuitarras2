import { useEffect, useState } from "react";

export default function EventosGlobales() {
  let [tamanioVentanaX, setTamanioVentaX] = useState(0);
  let [tamanioVentanaY, setTamanioVentaY] = useState(0);
  useEffect(() => {
    function actualizarTamanio() {
      setTamanioVentaX(window.innerWidth);
      setTamanioVentaY(window.innerHeight);
    }
    window.addEventListener("resize", actualizarTamanio);
    actualizarTamanio();
    console.log(`Tamanio de la ventana cambiado`);
    return () => {
      window.removeEventListener("resize", actualizarTamanio);
    };
  }, []);

  return (
    <>
      <div className="text-center">
        <p>Calcular tamanio de la ventana (eje X): </p>
        <p>{tamanioVentanaX}</p>
        <p>Calcular tamanio de la ventana (eje Y): </p>
        <p>{tamanioVentanaY}</p>

        <br />
        <p></p>
      </div>
    </>
  );
}
