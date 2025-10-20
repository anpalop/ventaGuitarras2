import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Formulario from "./pages/Formulario";
import Usuarios from "./pages/Usuarios";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import DeleteUser from "./pages/DeleteUser";
import PrivateRoute from "./components/PrivateRoute";

interface Guitarra {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  cantidad?: number;
}

const App: React.FC = () => {
  const [carrito, setCarrito] = useState<Guitarra[]>([]);

  function AgregarCarrito(objeto: Guitarra) {
    const idx = carrito.findIndex((el) => el.id === objeto.id);
    if (idx !== -1) {
      const actualizar = [...carrito];
      actualizar[idx].cantidad = (actualizar[idx].cantidad || 1) + 1;
      setCarrito(actualizar);
    } else {
      objeto.cantidad = 1;
      setCarrito([...carrito, objeto]);
    }
  }

  function removerElemento(id: number) {
    setCarrito((prev) => prev.filter((it) => it.id !== id));
  }

  function incrementarCantidad(id: number) {
    setCarrito((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, cantidad: (el.cantidad || 1) + 1 } : el
      )
    );
  }

  function decrementarCantidad(id: number) {
    setCarrito((prev) =>
      prev.map((el) =>
        el.id === id && (el.cantidad || 1) > 1
          ? { ...el, cantidad: (el.cantidad || 1) - 1 }
          : el
      )
    );
  }

  function limpizarCarrito() {
    setCarrito([]);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        carrito={carrito}
        removerElemento={removerElemento}
        incrementarCantidad={incrementarCantidad}
        decrementarCantidad={decrementarCantidad}
        limpizarCarrito={limpizarCarrito}
      />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/usuarios/edit/:id" element={<EditUser />} />
          <Route path="/usuarios/delete/:id" element={<DeleteUser />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Home
                  carrito={carrito}
                  setCarrito={setCarrito}
                  AgregarCarrito={AgregarCarrito}
                />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;