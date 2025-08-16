import { useEffect, useState } from "react";
import { db } from "../../data/db";

export default function MapearImagenes() {
  let arrayGaleria = [];
  let primeraImagen = "/img/guitarra_01.jpg";
  let segundaImagen = "/img/guitarra_02.jpg";
  let terceraImagen = "/img/guitarra_03.jpg";

  arrayGaleria.push(primeraImagen);
  arrayGaleria.push(segundaImagen);
  arrayGaleria.push(terceraImagen);
  let [imagenes, setImagenes] = useState(arrayGaleria);

  return (
    <>
      <div className="text-center">
        <p>==========================================</p>
        {imagenes.map((element) => (
          <div>
            <img
              src={element}
              alt=""
              className="img-fluid"
              style={{
                maxWidth: "150px",
                maxHeight: "150px",
                objectFit: "cover",
                borderRadius: "3px",
                border: "2px solid #000",
                margin: "3px",
              }}
            />
          </div>
        ))}
        <p>==========================================</p>
      </div>
    </>
  );
}
