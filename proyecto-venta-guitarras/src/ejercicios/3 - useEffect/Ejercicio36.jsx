import { useEffect, useState } from "react";

export default function FecthAPI() {
  let url = "https://jsonplaceholder.typicode.com/users";
  let [guardarDatos, setGuardadoDatos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((convertirDatos) => convertirDatos.json())
      .then((filtrarDatos) => setGuardadoDatos(filtrarDatos.slice(0, 3)));
  }, []);

  return (
    <>
      <div className="text-center">
        <p>Los datos traidos del fetch son los siguientes:</p>
        <ul>
          {guardarDatos.map((element) => (
            <ol>{element.name}</ol>
          ))}
        </ul>
      </div>
    </>
  );
}
