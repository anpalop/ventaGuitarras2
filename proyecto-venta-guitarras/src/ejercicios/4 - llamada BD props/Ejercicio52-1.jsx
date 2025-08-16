import { useEffect, useState } from "react";
import PropsTareas from "./Ejercicio52-2";

export default function ComponentesPorTareas() {
  let arrayTareas = [];

  let tarea1 = {
    id: 1,
    nombre: "Matematicas",
    paso: true,
  };

  let tarea2 = {
    id: 1,
    nombre: "Espaniol",
    paso: true,
  };

  let tarea3 = {
    id: 1,
    nombre: "Ingles",
    paso: false,
  };

  arrayTareas.push(tarea1);
  arrayTareas.push(tarea2);
  arrayTareas.push(tarea3);

  let [tareas, setTareas] = useState(arrayTareas);
  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        {tareas.map((element) => (
          <PropsTareas
            id={element.id}
            nombre={element.nombre}
            paso={element.paso}
          />
        ))}
        <p>==========================================</p>
      </div>
    </>
  );
}
