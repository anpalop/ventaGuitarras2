export default function Menu({ array }) {
  return (
    <nav>
      {array.map((element, i) => (
        <p key={i}>
          <a className="text-black" href={element.link}>
            {element.nombre}
          </a>
        </p>
      ))}
    </nav>
  );
}
