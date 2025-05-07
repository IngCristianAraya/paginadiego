import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto">
        {/* Grid: 4 columnas en desktop, 1 en mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Columna 1: Logo y descripción */}
          <div>
          <h2 className="mb-4">
  <img 
    src="/logo_sin_gb_blanco.webp"  // Ajusta la ruta
    alt="Logo StickersCar" 
    className="h-20 w-auto"    // Ajusta altura (h-12 = 48px)
  />
</h2>
            <p className="text-gray-400 mb-4">
              Personaliza tu auto con los mejores stickers. Envíos a todo el país.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">TIENDA</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Nuevos Stickers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Ofertas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Colecciones</a></li>
            </ul>
          </div>

          {/* Columna 3: Ayuda */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">AYUDA</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Cómo comprar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Envíos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Preguntas frecuentes</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">CONTACTO</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <FaMapMarkerAlt />
                <span>Av. Principal 123, Santiago</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FaWhatsapp />
                <a href="https://wa.me/56912345678" className="hover:text-green-400 transition">+56 9 1234 5678</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FaEnvelope />
                <a href="mailto:contacto@stickerscar.cl" className="hover:text-blue-400 transition">contacto@stickerscar.cl</a>
              </li>
            </ul>
          </div>
        </div>

        {/* División y copyright */}
        <hr className="border-gray-700 my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Creciendo Digital. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition">Términos y condiciones</a>
            <a href="#" className="hover:text-blue-400 transition">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;