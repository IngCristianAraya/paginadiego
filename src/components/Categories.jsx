import React from 'react';

const categories = [
  {
    name: 'Trivales',
    image: '/trival.webp',
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
    name: 'Branding vehicular',
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
    <section className="container mx-auto px-4 py-16 bg-orange-50 dark:bg-orange-950/20">
      {/* Título con decoración naranja */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-orange-900 dark:text-amber-100">
          Explora Nuestras Categorías
        </h2>
        <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full"></div>
      </div>

      {/* Grid de categorías */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 border border-orange-100 dark:border-orange-900/50"
          >
            {/* Imagen con overlay naranja al hover */}
            <div className="relative overflow-hidden h-48 md:h-56">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
            
            {/* Contenido */}
            <div className="p-4 text-center bg-gradient-to-b from-white to-orange-50 dark:from-gray-800 dark:to-orange-900/10">
              <h3 className="text-lg font-bold text-orange-800 dark:text-amber-100 group-hover:text-orange-600 dark:group-hover:text-amber-300 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-amber-600 dark:text-amber-400 mt-1 font-medium">
                {category.count}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Decoración opcional */}
      <div className="mt-12 text-center">
        <p className="text-orange-700 dark:text-amber-300 italic">
          "Todos nuestros stickers son resistentes a la intemperie y de alta durabilidad"
        </p>
      </div>
    </section>
  );
};

export default Categories;