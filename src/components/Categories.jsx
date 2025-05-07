import React from 'react';

const categories = [
  {
    name: 'Trivales',
    image: '/trival.webp', // Colócalas en public/
    count: '24 Productos'
  },
  {
    name: 'Marcas',
    image: '/marcas.webp',
    count: '36 Productos'
  },
  {
    name: 'Franjas',
    image: '/franja.webp',
    count: '18 Productos'
  },
  {
    name: 'Personalizadas',
    image: '/personalizadas.webp',
    count: '45 Productos'
  },
  {
    name: 'Branding  vehicular',
    image: '/foto_9.webp',
    count: '45 Productos'
  },
  {
    name: 'Diseños Abstractos',
    image: '/abstracto.webp',
    count: '45 Productos'
  },
  {
    name: 'Frases/Textos',
    image: '/letras.webp',
    count: '45 Productos'
  },
  {
    name: 'Deportivos',
    image: '/foto_7.webp',
    count: '45 Productos'
  }
];

const Categories = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800 dark:text-white text-center">
        Categorías Destacadas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800"
          >
            <div className="relative overflow-hidden h-48 md:h-56">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{category.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{category.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;