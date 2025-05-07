import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { darkMode, toggleDarkMode } = useTheme();

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled 
        ? 'bg-white dark:bg-gray-900 shadow-md' 
        : 'bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90'
      }`}>
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between h-16">
          
          {/* Menú desktop - izquierda */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition relative group">
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition relative group">
                Productos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition relative group">
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          </ul>

          {/* Logo - centro con efecto de brillo al hover */}
          <a href="/" className="flex items-center space-x-2 text-xl font-extrabold text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 group">
            <div className="relative">
              <img
                src="/logo_sin_gb.png"
                alt="Logo MiTienda"
                className="h-16 md:h-20 w-auto object-contain transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              />
              {/* Efecto de brillo circular */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)',
                  mixBlendMode: 'overlay'
                }}
              />
              {/* Destello de luz */}
              <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-white rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 transform rotate-12 scale-0 group-hover:scale-100 pointer-events-none"
                style={{
                  filter: 'blur(6px)'
                }}
              />
            </div>
            <span className="hidden md:inline-block"></span>
          </a>

          {/* Botones - derecha */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            {/* Carrito */}
            <a href="/carrito" className="relative flex items-center space-x-1 hover:text-blue-600 dark:hover:text-blue-400 transition">
              🛒 Carrito
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </a>

            {/* Toggle tema */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {darkMode ? '🌞 Claro' : '🌙 Oscuro'}
            </button>
          </div>

          {/* Menú móvil icono */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none dark:text-gray-300"
            aria-label="Menú"
          >
            ☰
          </button>
        </div>

        {/* Menú móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 pb-3 space-y-3 border-t border-gray-200 dark:border-gray-700 pt-3">
            <a href="/" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition">Inicio</a>
            <a href="#products" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition">Productos</a>
            <a href="/contacto" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition">Contacto</a>
            <a href="/carrito" className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 relative transition">
              🛒 Carrito
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </a>
            <button
              onClick={toggleDarkMode}
              className="w-full text-left block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {darkMode ? '🌞 Modo claro' : '🌙 Modo oscuro'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;