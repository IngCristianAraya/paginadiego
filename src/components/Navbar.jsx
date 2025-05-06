import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className={`text-xl font-bold ${scrolled ? 'text-blue-600' : 'text-white'}`}>Mi Tienda</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition`}>Inicio</a></li>
          <li><a href="#" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition`}>Productos</a></li>
          <li><a href="#" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition`}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;