import { useEffect, useState } from "react";

export default function MostrarDatosEstado() {
  let url = "https://jsonplaceholder.typicode.com/users";

  let [cargarDatos, setCargarDatos] = useState(false);
  let [datosConsultados, setDatosConsultados] = useState([]);
  useEffect(() => {
    if (cargarDatos) {
      fetch(url)
        .then((consulta) => consulta.json())
        .then((guardarDatos) => setDatosConsultados(guardarDatos.slice(0, 3)));
    } else {
      setDatosConsultados([]);
    }
  }, [cargarDatos]);

  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        <p>Cargar Datos?</p>
        <button
          onClick={() => {
            cargarDatos ? setCargarDatos(false) : setCargarDatos(true);
          }}
        >
          {cargarDatos ? "Si" : "No"}
        </button>

        <ul>
          {datosConsultados.map((element, idx) => (
            <ol>
              ID:{idx}, el nombre es: {element.name}
            </ol>
          ))}
        </ul>
        <p>==========================================</p>
      </div>
    </>
  );
}
