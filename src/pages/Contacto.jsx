import React from 'react';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-orange-50 dark:bg-orange-950/10">
      {/* Encabezado con decoración */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-orange-800 dark:text-amber-100">
          ¿Necesitas ayuda personalizada?
        </h1>
        <p className="text-lg text-amber-600 dark:text-amber-400 max-w-2xl mx-auto">
          Contáctanos para diseños exclusivos o consultas sobre tus stickers
        </p>
        <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sección de redes sociales */}
        <div className="lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-orange-100 dark:border-orange-900/50">
          <h2 className="text-2xl font-bold mb-6 text-orange-700 dark:text-amber-200">
            Nuestras Redes
          </h2>
          <div className="space-y-4">
            <SocialLinks />
            <div className="pt-4 border-t border-orange-100 dark:border-orange-900/30">
              <h3 className="font-semibold text-orange-800 dark:text-amber-100 mb-2">Información de contacto</h3>
              <p className="text-amber-700 dark:text-amber-300">
                <span className="font-medium">Email:</span> contacto@stickersauto.com
              </p>
              <p className="text-amber-700 dark:text-amber-300 mt-1">
                <span className="font-medium">WhatsApp:</span> +1 234 567 890
              </p>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="lg:w-2/3 bg-white dark:bg-gray-800 p-6 lg:p-8 rounded-xl shadow-lg border border-orange-100 dark:border-orange-900/50">
          <h2 className="text-2xl font-bold mb-6 text-orange-700 dark:text-amber-200">
            Envíanos un mensaje directo
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-amber-300 dark:border-orange-700 dark:bg-gray-700/50 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition rounded-lg"
                placeholder="Ej: Juan Pérez"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-amber-300 dark:border-orange-700 dark:bg-gray-700/50 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition rounded-lg"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-amber-300 dark:border-orange-700 dark:bg-gray-700/50 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition rounded-lg"
                  placeholder="+1 234 567 890"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-amber-800 dark:text-amber-200 mb-1">
                Tu mensaje
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 border border-amber-300 dark:border-orange-700 dark:bg-gray-700/50 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition rounded-lg"
                placeholder="Describe tu consulta o diseño especial..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-orange-900 font-bold rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      {/* Decoración adicional opcional */}
      <div className="mt-16 text-center">
        <p className="text-orange-600 dark:text-amber-300 italic">
          "Respondemos todas las consultas en menos de 24 horas"
        </p>
      </div>
    </div>
  );
};

export default Contact;