import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center h-[70vh] flex items-center justify-center text-gray-800 dark:text-gray-200 dark:bg-gray-900 transition-colors duration-300">
      
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-60 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1607083206173-dfd3d266fe4f?auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Contenido centrado */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Bienvenidos a Nuestra Tienda
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl mx-auto">
          Encuentra los mejores productos al mejor precio. Todo en un solo lugar.
        </p>
        <a
          href="#products"
          className="inline-block py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg transform transition hover:scale-105 hover:shadow-xl"
        >
          Ver Productos
        </a>
      </div>
    </section>
  );
};

export default Hero;