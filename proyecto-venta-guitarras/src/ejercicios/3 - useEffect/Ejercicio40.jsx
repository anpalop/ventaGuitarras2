import { useEffect, useState } from "react";

export default function GuardarLocalStorage() {
  let url = "https://jsonplaceholder.typicode.com/users";

  let [guardarDatos, setGuardadoDatos] = useState(() => {
    let exraerDatos = localStorage.getItem("jsonDatos");
    return exraerDatos ? JSON.parse(exraerDatos) : [];
  });

  useEffect(() => {
    fetch(url)
      .then((consulta) => consulta.json())
      .then((filtrado) => setGuardadoDatos(filtrado.slice(0, 3)));
  }, []);
  useEffect(() => {
    localStorage.setItem("jsonDatos", JSON.stringify(guardarDatos));
  }, [guardarDatos]);

  return (
    <>
      <div className="text-center">
        <ul>
          {guardarDatos.map((element) => (
            <ol>Soy {element.name}</ol>
          ))}
        </ul>
      </div>
    </>
  );
}
