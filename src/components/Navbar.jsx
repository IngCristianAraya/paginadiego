// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">World Sticker</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Inicio</Link>
          <Link to="/productos" className="text-white hover:text-gray-400">Productos</Link>
          <Link to="/sobre-nosotros" className="text-white hover:text-gray-400">Sobre Nosotros</Link>
          <Link to="/contacto" className="text-white hover:text-gray-400">Contacto</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
