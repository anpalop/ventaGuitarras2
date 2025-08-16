import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <p> {contador} </p>
        <button onClick={() => setContador(contador + 1)}>
          Click para aumentar
        </button>
        <button onClick={() => setContador(contador - 1)}>
          Click para disminuir
        </button>
        <p>==========================================</p>
      </div>
    </>
  );
}
