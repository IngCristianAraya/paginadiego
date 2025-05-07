import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';
import Categories from '../components/Categories'; 

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setTimeout(() => {
        const mockProducts = [
          { id: 1, name: 'Producto 1', price: '29.99', images: [{ src: '/foto_auto_verde.jpg' }] },
          { id: 2, name: 'Producto 2', price: '49.99', images: [{ src: '/foto_3.webp' }] },
          { id: 3, name: 'Producto 3', price: '19.99', images: [{ src: '/foto_4.webp' }] },
          { id: 4, name: 'Producto 4', price: '89.99', images: [{ src: '/foto_5.webp' }] },
          { id: 5, name: 'Producto 5', price: '39.99', images: [{ src: '/foto_6.webp' }] },
          { id: 6, name: 'Producto 6', price: '59.99', images: [{ src: '/foto_9.webp' }] },
        ];
        setProducts(mockProducts);
        setLoading(false);
      }, 1000);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Sección Hero con margen inferior */}
      <div className="mb-32">
        <Hero />
      </div>
      {/* Sección de categorías */}
      <Categories /> {/* ✅ Aquí usamos el nuevo componente */}

      
      {/* Productos */}
      <div className="container mx-auto px-4 mb-32" id="products">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-14 text-gray-800 dark:text-white text-center">
          Nuestros Productos
        </h1>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>





      {/* Sección de contacto */}
      <section className="container mx-auto px-4 mb-32">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 dark:text-white mb-14">
          Contáctanos
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Redes sociales */}
          <div className="md:w-1/2 w-full">
            <SocialLinks />
          </div>

          {/* Formulario */}
          <div className="md:w-1/2 w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
              Envíanos un mensaje
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 mt-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-300"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Correo electrónico</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 mt-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-300"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 mt-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-300"
                  placeholder="Escribe tu consulta..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
