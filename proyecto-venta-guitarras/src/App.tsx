import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from './pages/Home';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Formulario from "./pages/Formulario";
import Usuarios from "./pages/Usuarios";
import PrivateRoute from "./components/PrivateRoute";

import React, { useState } from "react";

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

  function removerElemento(id: number) {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((element) => element.id !== id)
    );
  }
  function incrementarCantidad(id: number) {
    setCarrito((prevCarrito) =>
      prevCarrito.map((element) =>
        element.id === id
          ? { ...element, cantidad: (element.cantidad || 1) + 1 }
          : element
      )
    );
  }
  function decrementarCantidad(id: number) {
    setCarrito((prevCarrito) =>
      prevCarrito.map((element) =>
        element.id === id && (element.cantidad || 1) > 1
          ? { ...element, cantidad: (element.cantidad || 1) - 1 }
          : element
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
          {/* Ruta inicial: Login */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/usuarios" element={<Usuarios />} />
          {/* Rutas privadas */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
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
