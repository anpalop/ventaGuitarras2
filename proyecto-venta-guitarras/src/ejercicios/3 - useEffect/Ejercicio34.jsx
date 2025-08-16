import { useEffect, useState } from "react";

export default function InputCambio() {
  let [cambio, setCambio] = useState("");
  console.log(cambio);
  return (
    <>
      <div className="text-center">
        <input
          type="text"
          onChange={(e) => {
            setCambio(e.target.value);
          }}
        />
      </div>
    </>
  );
}
