import Nombre from "./Ejercicio3";

export default function Usuario({ nombre, edad }) {
  return (
    <>
      <p>
        El nombre del usuario es {nombre} y su edad es {edad}
      </p>
      <p>==========================================</p>
    </>
  );
}
