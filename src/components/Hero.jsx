import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-900 dark:to-orange-800 text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Efecto de fondo decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Contenido de texto */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Personaliza tu auto con <span className="text-amber-100 dark:text-amber-400">nuestros stickers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-lg mx-auto md:mx-0 opacity-90">
              Diseños únicos, calidad premium y resistencia al clima. ¡Haz que tu vehículo destaque!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/productos" 
                className="bg-amber-400 hover:bg-amber-300 text-orange-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Ver Catálogo
              </Link>
              <Link 
                to="/personalizados" 
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Personalizados
              </Link>
            </div>
          </div>

          {/* Imagen del hero */}
          <div className="md:w-1/2 relative">
            <div className="relative max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Stickers para autos"
                className="rounded-xl shadow-2xl border-4 border-white/20 w-full h-auto object-cover transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />
              {/* Etiqueta decorativa */}
              <div className="absolute -bottom-4 -right-4 bg-amber-400 text-orange-900 px-4 py-2 rounded-lg font-bold shadow-lg">
                ¡Nuevos diseños!
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elemento decorativo de olas */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="fill-current text-white dark:text-orange-900 w-full h-16"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;