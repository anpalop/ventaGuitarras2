import { useState } from "react";

export default function TextoPantalla() {
  const [escribiendo, setEscribiendo] = useState("");

  return (
    <>
      <div className="text-center">
        <input
          type="text"
          value={escribiendo}
          onChange={(e) => {
            setEscribiendo(e.target.value);
          }}
        />
        <p>Lo que esta escribiendo es '{escribiendo}'</p>
      </div>
    </>
  );
}
