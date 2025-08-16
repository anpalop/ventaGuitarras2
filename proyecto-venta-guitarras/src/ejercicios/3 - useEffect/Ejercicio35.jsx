import { useEffect, useState } from "react";

export default function MostrarComponenteMensaje() {
  useEffect(() => {
    console.log("El componente esta listo");
  }, []);

  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <p>COMPONENTE LISTO X2</p>
        <p>==========================================</p>
      </div>
    </>
  );
}
