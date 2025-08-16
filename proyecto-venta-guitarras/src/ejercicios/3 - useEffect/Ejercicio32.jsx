import { useEffect, useState } from "react";

export default function CambioTitulo() {
  useEffect(() => {
    let titulo = document.querySelector("H2");
    titulo.textContent = "CAMBIADO";
  }, []);
  return (
    <>
      <div className="text-center">
        <h2>TITULO A CAMBIAR</h2>
      </div>
    </>
  );
}
