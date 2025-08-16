export default function Galeria({ array }) {
  return (
    <div className="galeria-grid container">
      {array.map((element, indicadorUnico) => (
        <div key={indicadorUnico}>
          <img src={element} alt="" />
        </div>
      ))}
    </div>
  );
}
