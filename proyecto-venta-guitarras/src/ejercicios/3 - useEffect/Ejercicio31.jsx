import { useEffect, useState } from "react";

export default function MontarComponente() {
  useEffect(() => {
    console.log("Componente montado");
  }, []);
  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <p>COMPONENTE MONTADO</p>
        <p>==========================================</p>
      </div>
    </>
  );
}
