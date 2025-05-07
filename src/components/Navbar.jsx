import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { FiShoppingCart, FiSun, FiMoon, FiMenu, FiX, FiBookOpen } from 'react-icons/fi';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Barra decorativa superior */}
      <div className={`fixed top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 z-50 transition-opacity duration-300 ${scrolled ? 'opacity-70' : 'opacity-100'}`}></div>

      <nav className={`fixed top-1.5 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 relative">
            
            {/* Logo central premium */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-5 z-30 group">
              <a 
                href="/" 
                className="block"
                onClick={closeMobileMenu}
              >
                <div className="relative">
                  {/* Efecto de halo sutil */}
                  <div className="absolute inset-0 rounded-full bg-amber-100/30 dark:bg-amber-800/20 group-hover:bg-amber-200/40 dark:group-hover:bg-amber-700/30 blur-md scale-90 group-hover:scale-100 transition-all duration-500"></div>
                  
                  <img
                    src="/logo_sin_gb.png"
                    alt="Logo"
                    className={`h-28 object-contain transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1 ${scrolled ? 'filter drop-shadow-md' : 'filter drop-shadow-xl'}`}
                    style={{ transformStyle: 'preserve-3d' }}
                  />
                </div>
              </a>
            </div>

            {/* Menú desktop - izquierda */}
            <ul className="hidden md:flex items-center space-x-8 ml-4 mt-6">
              {['Inicio', 'Productos', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Inicio' ? '/' : `#${item.toLowerCase()}`}
                    className={`text-lg font-semibold tracking-wide ${scrolled ? 'text-gray-800 dark:text-gray-200' : 'text-gray-800 dark:text-gray-200'} hover:text-amber-600 dark:hover:text-amber-300 transition-colors duration-300 relative group`}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-400 ease-out"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Botones - derecha */}
            <div className="hidden md:flex items-center space-x-5 ml-auto mt-6">
              {/* Botón Catálogo */}
              <a
                href="/catalogo"
                className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <FiBookOpen className="mr-2" />
                Catálogo
              </a>

              {/* Carrito */}
              <a
                href="/carrito"
                className="relative flex items-center p-2 rounded-full hover:bg-amber-50/80 dark:hover:bg-orange-900/20 transition-all duration-300 group"
              >
                <FiShoppingCart className={`w-6 h-6 ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-700 dark:text-gray-300'} group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors`} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-sm">
                    {getTotalItems()}
                  </span>
                )}
              </a>

              {/* Toggle tema */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-amber-50/80 dark:hover:bg-orange-900/20 transition-all duration-300"
                aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              >
                {darkMode ? (
                  <FiSun className="w-6 h-6 text-amber-400 hover:text-amber-500 transition-colors" />
                ) : (
                  <FiMoon className="w-6 h-6 text-orange-600 hover:text-orange-700 transition-colors" />
                )}
              </button>
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-amber-50/80 dark:hover:bg-orange-900/20 transition-colors z-30 mt-6"
              aria-label="Menú"
            >
              {mobileMenuOpen ? (
                <FiX className="w-7 h-7 text-gray-700 dark:text-gray-300" />
              ) : (
                <FiMenu className="w-7 h-7 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil premium */}
        <div className={`md:hidden fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg z-20 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
          style={{ paddingTop: '7rem' }}
        >
          <div className="container mx-auto px-6 py-8">
            <ul className="space-y-5">
              {['Inicio', 'Productos', 'Contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Inicio' ? '/' : `#${item.toLowerCase()}`}
                    className="block text-xl font-semibold py-3 px-5 rounded-lg hover:bg-amber-50/50 dark:hover:bg-orange-900/20 transition-colors border-l-4 border-transparent hover:border-amber-400"
                    onClick={closeMobileMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Botón Catálogo en móvil */}
            <div className="mt-6 px-5">
              <a
                href="/catalogo"
                className="flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={closeMobileMenu}
              >
                <FiBookOpen className="mr-2" />
                Catálogo
              </a>
            </div>

            <div className="mt-10 pt-6 border-t border-amber-100/50 dark:border-orange-900/30">
              <div className="flex items-center justify-center space-x-8 px-4">
                <a
                  href="/carrito"
                  className="flex flex-col items-center space-y-1 text-lg font-medium hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  onClick={closeMobileMenu}
                >
                  <div className="relative p-2">
                    <FiShoppingCart className="w-7 h-7" />
                    {getTotalItems() > 0 && (
                      <span className="absolute top-0 right-0 bg-amber-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                        {getTotalItems()}
                      </span>
                    )}
                  </div>
                  <span>Carrito</span>
                </a>

                <button
                  onClick={() => {
                    toggleDarkMode();
                    closeMobileMenu();
                  }}
                  className="flex flex-col items-center space-y-1 text-lg font-medium hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <div className="p-2">
                    {darkMode ? (
                      <FiSun className="w-7 h-7 text-amber-400" />
                    ) : (
                      <FiMoon className="w-7 h-7 text-orange-600" />
                    )}
                  </div>
                  <span>{darkMode ? 'Claro' : 'Oscuro'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;