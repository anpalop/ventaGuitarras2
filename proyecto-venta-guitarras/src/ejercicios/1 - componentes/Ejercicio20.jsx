export default function Imagen({ url }) {
  return (
    // EJERCICIO 7
    <p>
      La url dada es '
      <a className="text-black" href={`${url}`}>
        este link
      </a>
      '{" "}
    </p>
  );
}
