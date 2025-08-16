import { useEffect, useState } from "react";

export default function EstadoTareas() {
  let arrayTareas = [];
  let primeraTarea = {
    nombre: "Matematicas",
    calificacion: 5,
    completado: false,
  };
  let segundaTarea = {
    nombre: "Ciencias",
    calificacion: 3,
    completado: false,
  };
  let terceraTarea = {
    nombre: "Espaniol",
    calificacion: 4,
    completado: false,
  };

  arrayTareas.push(primeraTarea);
  arrayTareas.push(segundaTarea);
  arrayTareas.push(terceraTarea);

  const [tareas, setTareas] = useState(() => {
    let cargaDatos = localStorage.getItem("guardadoTareas");
    return cargaDatos ? JSON.parse(cargaDatos) : arrayTareas;
  });

  useEffect(() => {
    localStorage.setItem("guardadoTareas", JSON.stringify(arrayTareas));
  }, [tareas]);

  let copiaArray = tareas.filter((elemnt) => elemnt.completado === false);

  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <p>Las tareas que hay son: </p>
        <ul>
          {tareas.map((element, idx) => (
            <p>
              La tarea #{idx} es {element.nombre} y tiene una calificacion de{" "}
              {element.calificacion},'{" "}
              {element.completado
                ? "la tarea esta completada"
                : "la tarea no esta completada"}
              '
            </p>
          ))}
        </ul>
        <p>Las tareas que no estan completas son las siguientes:</p>
        <ul>
          {copiaArray.map((element, idx) => (
            <div>
              <p>
                La tarea #{idx} es {element.nombre} y tiene una calificacion de{" "}
                {element.calificacion} pero no esta completada
              </p>
              <button
                onClick={() => {
                  if (element.completado === false) {
                    element.completado = true;
                    setTareas(copiaArray);
                  } else {
                    element.completado = false;
                    setTareas(copiaArray);
                  }
                }}
              >
                Click para marcar como completada o no{" "}
              </button>
            </div>
          ))}
        </ul>
        <p>==========================================</p>
      </div>
    </>
  );
}
