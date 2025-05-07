import React from 'react';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800 dark:text-gray-200">Contáctanos</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Redes sociales - izquierda */}
        <div className="md:w-1/3">
          <SocialLinks />
        </div>

        {/* Formulario - derecha */}
        <div className="md:w-2/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Envíanos un mensaje</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Correo electrónico</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 mt-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition transform hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;