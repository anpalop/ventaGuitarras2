import React, { useMemo } from "react";
import { Link } from "react-router-dom";

interface Guitarra {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  cantidad?: number;
}

interface HeaderProps {
  carrito: Guitarra[];
  removerElemento: (id: number) => void;
  incrementarCantidad: (id: number) => void;
  decrementarCantidad: (id: number) => void;
  limpizarCarrito: () => void;
}

const Header: React.FC<HeaderProps> = ({
  carrito,
  removerElemento,
  incrementarCantidad,
  decrementarCantidad,
  limpizarCarrito,
}) => {
  const carritoVacio = useMemo(() => carrito.length === 0, [carrito]);
  const carritoTotal = useMemo(
    () =>
      carrito.reduce(
        (acomulado, element) =>
          acomulado + (element.cantidad || 1) * element.price,
        0
      ),
    [carrito]
  );

  return (
    <header className="py-5 header bg-blue-700 text-white p-4 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="font-bold text-xl">VentaGuitarras</div>
      <nav className="flex items-center">
        <Link to="/formulario" className="mx-2">
          Formulario
        </Link>
        <Link to="/dashboard" className="mx-2">
          Dashboard
        </Link>
        <Link to="/login" className="mx-2">
          Login
        </Link>
        <Link to="/register" className="mx-2">
          Registro
        </Link>
        <Link to="/usuarios" className="mx-2">
          Usuarios
        </Link>
        <div className="relative ml-4">
          <img
            className="inline-block w-8 h-8 cursor-pointer"
            src="/img/carrito.png"
            alt="imagen carrito"
          />
          <div
            className="absolute right-0 mt-2 w-80 bg-white text-black rounded shadow-lg z-50 p-3"
            style={{ minWidth: "300px" }}
          >
            {carritoVacio ? (
              <p className="text-center">El carrito está vacío</p>
            ) : (
              <>
                <table className="w-full text-xs">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrito.map((element) => (
                      <tr key={element.id}>
                        <td>
                          <img
                            className="w-8 h-8 object-cover"
                            src={`/img/${element.image}.jpg`}
                            alt="imagen guitarra"
                          />
                        </td>
                        <td>{element.name}</td>
                        <td className="font-bold">${element.price}</td>
                        <td className="flex items-center gap-2">
                          <button
                            type="button"
                            className="bg-blue-700 text-white px-2 rounded"
                            onClick={() => decrementarCantidad(element.id)}
                          >
                            -
                          </button>
                          {element.cantidad || 1}
                          <button
                            type="button"
                            className="bg-blue-700 text-white px-2 rounded"
                            onClick={() => incrementarCantidad(element.id)}
                          >
                            +
                          </button>
                        </td>
                        <td>
                          <button
                            className="bg-red-600 text-white px-2 rounded"
                            type="button"
                            onClick={() => removerElemento(element.id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-end mt-2">
                  Total pagar:{" "}
                  <span className="font-bold">${carritoTotal}</span>
                </p>
              </>
            )}
            <button
              className="bg-blue-700 text-white w-full mt-3 p-2 rounded"
              onClick={limpizarCarrito}
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
