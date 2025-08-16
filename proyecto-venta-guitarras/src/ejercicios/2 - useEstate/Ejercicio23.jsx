import { useEffect, useState } from "react";

export default function MostrarArray() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    let arrayTareas = [
      "Tarea de matematicas",
      "Tarea de ciencias",
      "Tarea de espaniol",
    ];

    setTareas(arrayTareas);
  }, []);

  return (
    <>
      <div className="text-center">
        <p>El array de tareas es el siguiente: </p>
        <ul>
          {tareas.map((element, idx) => (
            <li key={idx}>{element}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
