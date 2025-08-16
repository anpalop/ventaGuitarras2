export default function Tarjeta({ titulo, descripcion }) {
  return (
    // De esta forma se crea una card con boostrap en jsx
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
      </div>
    </div>
  );
}
