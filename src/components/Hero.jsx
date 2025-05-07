import React from 'react';
import { Parallax } from 'react-parallax';

const Hero = () => {
  return (
    <Parallax 
      bgImage="/foto_hero.jpg"
      strength={500}
      bgImageStyle={{
        objectFit: 'cover',
        height: '100%'
      }}
    >
      <div className="relative h-[70vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-60 z-0"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white">
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
      </div>
    </Parallax>
  );
};

export default Hero;