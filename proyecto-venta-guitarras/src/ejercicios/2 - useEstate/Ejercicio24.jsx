import { useEffect, useState } from "react";

export default function GuardarColor() {
  let colorFondo = "#20c997";
  const [color, setColor] = useState("#159164");
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <div
        className="text-center"
        onClick={() => {
          if (color === "#20c997") {
            setColor("#159164");
          } else {
            setColor(colorFondo);
          }
        }}
      >
        <p>==========================================</p>
        <p>
          El color prron para el fondo es {color}, para cambiar presionar aqui
        </p>
        <p>==========================================</p>
      </div>
    </>
  );
}
