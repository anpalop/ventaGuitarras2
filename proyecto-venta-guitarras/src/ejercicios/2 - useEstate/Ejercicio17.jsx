import { useState } from "react";

export default function OnOf() {
  const [cambio, setCambio] = useState("On");
  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <button
          onClick={() => {
            setCambio(cambio === "On" ? "Of" : "On");
          }}
        >
          {cambio}
        </button>
        <p>==========================================</p>
      </div>
    </>
  );
}
