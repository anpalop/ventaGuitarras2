import { useMemo } from "react";
import { Fragment } from "react/jsx-runtime";

export default function Header({ carrito, removerElemento }) {
  // Creacion de state derivado
  // Para no hacer tantos renders (y ahorrar recursos)
  const carritoVacio = useMemo(() => carrito.length === 0, [carrito]);
  // Cada vez que cambio carrito, se ejecuta la funcion

  // Suma total de productos
  const carritoTotal = useMemo(
    () =>
      carrito.reduce(
        (acomulado, element) => acomulado + element.cantidad * element.price,
        0
      ),
    [carrito]
  );

  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="./public/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="./public/img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                {carritoVacio ? (
                  <p className="text-center">El carrito esta vacio</p>
                ) : (
                  <>
                    <table className="w-100 table">
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
                          <tr>
                            <td>
                              <img
                                className="img-fluid"
                                src={`/img/${element.image}.jpg`}
                                alt="imagen guitarra"
                              />
                            </td>
                            <td>{element.name}</td>
                            <td className="fw-bold">${element.price}</td>
                            <td className="flex align-items-start gap-4">
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => {}}
                              >
                                -
                              </button>
                              {element.cantidad}
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => {
                                  let copiaCarrito = [...carrito];

                                  element.cantidad++;
                                }}
                              >
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
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
                    <p className="text-end">
                      Total pagar:{" "}
                      <span className="fw-bold">${carritoTotal}</span>
                    </p>
                  </>
                )}

                <button className="btn btn-dark w-100 mt-3 p-2">
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
