import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="bg-blue-700 text-white p-4 flex justify-between items-center fixed w-full top-0 z-50">
    <div className="font-bold text-xl">VentaGuitarras</div>
    <nav>
  {/* <Link to="/" className="mx-2">Home</Link> */}
      <Link to="/formulario" className="mx-2">Formulario</Link>
  <Link to="/dashboard" className="mx-2">Dashboard</Link>
  <Link to="/login" className="mx-2">Login</Link>
  <Link to="/register" className="mx-2">Registro</Link>
  <Link to="/usuarios" className="mx-2">Usuarios</Link>
    </nav>
  </header>
);

export default Header;
