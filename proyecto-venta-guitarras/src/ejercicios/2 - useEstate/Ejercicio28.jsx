import { useEffect, useState } from "react";

export default function ModificarObjetos() {
  let arrayObjetos = [];

  let primerObjeto = {
    nombre: "Carro",
    modelo: 2015,
  };
  let segundoObjeto = {
    nombre: "Moto",
    modelo: 2018,
  };
  let tercerObjeto = {
    nombre: "Camion",
    modelo: 2021,
  };

  arrayObjetos.push(primerObjeto);
  arrayObjetos.push(segundoObjeto);
  arrayObjetos.push(tercerObjeto);

  const [vehiculo, setVehiculo] = useState(() => {
    const cargaDatos = localStorage.getItem("guardadoCarros");
    return cargaDatos ? JSON.parse(cargaDatos) : arrayObjetos;
  });

  const [posicion, setPosicion] = useState(0);
  const [nombrePropiedad, setNombrePropiedad] = useState("");
  const [valorPropiedad, setValorPropiedad] = useState("");

  useEffect(() => {
    localStorage.setItem("guardadoCarros", JSON.stringify(vehiculo));
  }, [vehiculo]);

  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        {vehiculo.map((element, idx) => (
          <ul>
            <p>
              El elemento actual es el numero {idx} y es un {element.nombre} sus
              propiedades son las siguientes:
            </p>
            {Object.entries(element).map(([propiedad, valor]) => (
              <li>
                {propiedad}: {valor}
              </li>
            ))}
          </ul>
        ))}

        <p>
          Ahora para modificarlo ingrese el nombre del objeto y la propiedad que
          desea cambiar, por ultimo que valor le quiere dar a la propiedad
        </p>

        <input
          type="text"
          placeholder="Nombre del objeto"
          onChange={(e) => {
            setPosicion(e.target.value);
          }}
        />
        <p>{posicion}</p>
        <input
          type="text"
          placeholder="Nombre propiedad"
          onChange={(e) => {
            setNombrePropiedad(e.target.value);
          }}
        />
        <p>{nombrePropiedad}</p>
        <input
          type="text"
          placeholder="Valor propiedad"
          onChange={(e) => {
            setValorPropiedad(e.target.value);
          }}
        />
        <p>{valorPropiedad}</p>
        <button
          onClick={() => {
            let posicionObjeto = vehiculo.findIndex(
              (element) => element.nombre === posicion
            );
            // Si encontro la posicion y nombrePropiedad no esta vacio, ejecute lo siguiente
            if (posicionObjeto !== -1 && nombrePropiedad) {
              let array = [...vehiculo];
              // En el array tome la posicion del objeto y busque la propiedad
              array[posicionObjeto][nombrePropiedad] = valorPropiedad;
              setVehiculo(array);
            }
          }}
        >
          Cambiar
        </button>
        <p>==========================================</p>
      </div>
    </>
  );
}
