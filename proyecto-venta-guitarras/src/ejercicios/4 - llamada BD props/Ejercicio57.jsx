import { useEffect, useState } from "react";
import { db } from "../../data/db";

export default function ModificarPropiedadTiempoReal() {
  let [baseDatos, setBaseDatos] = useState(db);
  useEffect(() => {
    let filtrado = baseDatos.slice(0, 5);
    setBaseDatos(filtrado);
  }, []);
  let [cambiarNombre, setCambiarNombre] = useState("");
  let [cambiarPrecio, setCambiarPrecio] = useState("");

  let [mostrar, setMostrar] = useState(null);
  let [mostrar2, setMostrar2] = useState(null);

  function buscarModificar(valorModificador, indice, nombrePropiedad) {
    let copiaArray = [...baseDatos];
    copiaArray[indice][nombrePropiedad] = valorModificador;
    setBaseDatos(copiaArray);
  }

  return (
    <>
      <div className="text-center">
        {baseDatos.map((element, idx) => (
          <div>
            <p>{idx}</p>
            <p onClick={() => setMostrar(idx)}>Nombre: {element.name}</p>

            {mostrar === idx ? (
              <div>
                <input
                  type="text"
                  placeholder="Cambiar Nombre"
                  onChange={(e) => {
                    setCambiarNombre(e.target.value);
                  }}
                />
                <p></p>
                <button
                  onClick={() => buscarModificar(cambiarNombre, idx, "name")}
                >
                  Guardar
                </button>
                <button onClick={() => setMostrar(false)}>Salir</button>
              </div>
            ) : (
              ""
            )}
            <br />
            {/* ESTO ES PARA EDIT EL PRECIO */}

            <p onClick={() => setMostrar2(idx)}>Precio: {element.price}</p>

            {mostrar2 === idx ? (
              <div>
                <input
                  type="number"
                  placeholder="Cambiar Precio"
                  onChange={(e) => {
                    setCambiarPrecio(e.target.value);
                  }}
                />
                <p></p>
                <button
                  onClick={() => buscarModificar(cambiarPrecio, idx, "price")}
                >
                  Guardar
                </button>
                <button onClick={() => setMostrar2(false)}>Salir</button>
              </div>
            ) : (
              ""
            )}

            <p>==============</p>
          </div>
        ))}
      </div>
    </>
  );
}
