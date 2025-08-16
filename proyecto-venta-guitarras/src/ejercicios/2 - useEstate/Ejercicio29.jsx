import { useEffect, useState } from "react";

export default function AgregarEliminarImagenes() {
  let arrayImagenes = [];
  let primeraImagen = "/img/guitarra_01.jpg";
  let segundaImagen = "/img/guitarra_02.jpg";
  let terceraImagen = "/img/guitarra_03.jpg";

  arrayImagenes.push(primeraImagen);
  arrayImagenes.push(segundaImagen);
  arrayImagenes.push(terceraImagen);

  const [cuadricula, setCuadricula] = useState(() => {
    let cargarDatos = localStorage.getItem("guardadoImagenes");
    return cargarDatos ? JSON.parse(cargarDatos) : arrayImagenes;
  });

  useEffect(() => {
    localStorage.setItem("guardadoImagenes", JSON.stringify(arrayImagenes));
  }, [arrayImagenes]);

  const [url, setUrl] = useState("");

  return (
    <>
      <div className="text-center">
        <center>
          <p>Las imagenes actuales son: </p>
          <ul>
            {cuadricula.map((elemento, idx) => (
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Imagen #{idx}</h5>
                  <img
                    src={elemento}
                    alt=""
                    className="img-fluid"
                    style={{
                      maxWidth: "150px",
                      maxHeight: "150px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            ))}
          </ul>
          <p>Digite la URL de la imagen que quiere aregar</p>
          <input
            type="text"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <br />
          <p></p>
          <button
            onClick={() => {
              let copiaCuadricula = [...cuadricula];
              copiaCuadricula.push(url);
              setCuadricula(copiaCuadricula);
            }}
          >
            Agregar imagen
          </button>

          <button
            onClick={() => {
              let copiaCuadricula = [...cuadricula];
              copiaCuadricula.pop();
              setCuadricula(copiaCuadricula);
            }}
          >
            Quitar imagen
          </button>
          <br />
          <p></p>
        </center>
      </div>
    </>
  );
}
