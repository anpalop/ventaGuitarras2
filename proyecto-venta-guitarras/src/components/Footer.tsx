import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-blue-700 text-white p-4 text-center fixed w-full bottom-0 z-50">
    &copy; {new Date().getFullYear()} VentaGuitarras. Todos los derechos reservados.
  </footer>
);

export default Footer;
