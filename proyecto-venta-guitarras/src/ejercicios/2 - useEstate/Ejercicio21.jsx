import { useState } from "react";

export default function ContadorMasMenos() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <div className="text-center">
        <p>{contador}</p>
        <button
          onClick={() => {
            setContador(contador + 1);
          }}
        >
          Aumentar Contador
        </button>
        <button
          onClick={() => {
            setContador(contador - 1);
          }}
        >
          Disminuir Contador
        </button>
      </div>
    </>
  );
}
