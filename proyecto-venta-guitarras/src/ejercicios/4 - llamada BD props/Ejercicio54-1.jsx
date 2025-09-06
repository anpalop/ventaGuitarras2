import { useEffect, useState } from "react";
import PropsCursos from "./Ejercicio54-2";

export default function ComponentesPorCurso() {
  let arrayCursos = [];

  let primerCurso = {
    nombre: "Matematicas",
    cantidadEstudiantes: 40,
  };
  let segundoCurso = {
    nombre: "Espaniol",
    cantidadEstudiantes: 40,
  };
  let tercerCurso = {
    nombre: "Ingles",
    cantidadEstudiantes: 40,
  };

  arrayCursos.push(primerCurso);
  arrayCursos.push(segundoCurso);
  arrayCursos.push(tercerCurso);

  let [curso, setCursos] = useState(arrayCursos);

  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        {curso.map((element) => (
          <PropsCursos
            key={element.nombre} 
            nombre={element.nombre}
            estudiantes={element.cantidadEstudiantes}
          />
        ))}
        <p>==========================================</p>
      </div>
    </>
  );
}
