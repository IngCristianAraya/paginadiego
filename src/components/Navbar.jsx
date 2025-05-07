import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { FiShoppingCart, FiSun, FiMoon } from 'react-icons/fi';

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

          {/* Logo - centro */}
          <a href="/" className="flex items-center space-x-2 text-xl font-extrabold text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 flex-shrink-0 absolute left-1/2 transform -translate-x-1/2 group">
            <div className="relative">
              <img
                src="/logo_sin_gb.png"
                alt="Logo MiTienda"
                className="h-16 md:h-20 w-auto object-contain transition-all duration-500 group-hover:brightness-110 group-hover:contrast-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
              />
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)',
                  mixBlendMode: 'overlay'
                }}
              />
              <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-white rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 transform rotate-12 scale-0 group-hover:scale-100 pointer-events-none"
                style={{
                  filter: 'blur(6px)'
                }}
              />
            </div>
          </a>

          {/* Botones - derecha - Versión mejorada */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            {/* Carrito mejorado */}
            <a 
              href="/carrito" 
              className="relative flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 group"
            >
              <FiShoppingCart className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              <span className="ml-2 hidden lg:inline-block text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Carrito
              </span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  {getTotalItems()}
                </span>
              )}
            </a>

            {/* Toggle tema mejorado */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center"
              aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {darkMode ? (
                <>
                  <FiSun className="w-5 h-5 text-yellow-400" />
                  <span className="ml-2 hidden lg:inline-block">Claro</span>
                </>
              ) : (
                <>
                  <FiMoon className="w-5 h-5 text-indigo-400" />
                  <span className="ml-2 hidden lg:inline-block">Oscuro</span>
                </>
              )}
            </button>
          </div>

          {/* Menú móvil icono */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Menú"
          >
            <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menú móvil - Versión mejorada */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 pb-3 space-y-2 border-t border-gray-200 dark:border-gray-700 pt-3">
            <a href="/" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">Inicio</a>
            <a href="#products" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">Productos</a>
            <a href="/contacto" className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">Contacto</a>
            
            <div className="flex items-center justify-between px-4 py-2">
              {/* Carrito móvil */}
              <a 
                href="/carrito" 
                className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <FiShoppingCart className="w-5 h-5" />
                <span>Carrito</span>
                {getTotalItems() > 0 && (
                  <span className="bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </a>
              
              {/* Toggle tema móvil */}
              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {darkMode ? (
                  <>
                    <FiSun className="w-5 h-5 text-yellow-400" />
                    <span>Claro</span>
                  </>
                ) : (
                  <>
                    <FiMoon className="w-5 h-5 text-indigo-400" />
                    <span>Oscuro</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;