import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard';
import Hero from '../components/Hero';
import SocialLinks from '../components/SocialLinks';
import Categories from '../components/Categories'; 
import Footer from '../components/Footer';

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
      
      {/* Sección Hero con margen inferior aumentado */}
      <div className="mb-40"> {/* Aumentado de mb-32 a mb-40 */}
        <Hero />
      </div>

      {/* Sección de categorías con margen superior */}
      <div className="mb-40 mt-10"> {/* Añadido mt-10 y aumentado mb-32 a mb-40 */}
        <Categories />
      </div>

      {/* Productos con márgenes ajustados */}
      {/* Productos con márgenes ajustados */}
<div className="container mx-auto px-4 mb-40" id="products">
  {/* Título con decoración naranja igual que en Categories */}
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-orange-900 dark:text-amber-100">
      Nuestros Productos
    </h2>
    <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full"></div>
  </div>

  {loading ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[...Array(6)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )}
</div>

      {/* Sección de contacto con márgenes aumentados */}
      {/* Sección de contacto con márgenes aumentados */}
<section className="container mx-auto px-4 mb-40">
  <h2 className="text-3xl font-extrabold text-center text-orange-700 dark:text-amber-200 mb-16">
    Contáctanos
  </h2>

  <div className="flex flex-col md:flex-row gap-12">
    {/* Redes sociales */}
    <div className="md:w-1/2 w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-amber-200 dark:border-orange-900">
      <h3 className="text-2xl font-bold mb-8 text-orange-700 dark:text-amber-200 text-center">
        Nuestras Redes
      </h3>
      <SocialLinks />
    </div>

    {/* Formulario */}
    <div className="md:w-1/2 w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-amber-200 dark:border-orange-900">
      <h3 className="text-2xl font-bold mb-8 text-orange-700 dark:text-amber-200 text-center">
        Envíanos un mensaje
      </h3>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-amber-800 dark:text-amber-100 mb-2">Nombre</label>
          <input
            type="text"
            className="w-full px-4 py-3 mt-1 border border-amber-300 dark:border-orange-700 dark:bg-gray-700 rounded-md focus:ring-amber-400 focus:border-amber-400 outline-none"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-amber-800 dark:text-amber-100 mb-2">Correo electrónico</label>
          <input
            type="email"
            className="w-full px-4 py-3 mt-1 border border-amber-300 dark:border-orange-700 dark:bg-gray-700 rounded-md focus:ring-amber-400 focus:border-amber-400 outline-none"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-amber-800 dark:text-amber-100 mb-2">Mensaje</label>
          <textarea
            rows="5"
            className="w-full px-4 py-3 mt-1 border border-amber-300 dark:border-orange-700 dark:bg-gray-700 rounded-md focus:ring-amber-400 focus:border-amber-400 outline-none"
            placeholder="Escribe tu consulta..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md shadow transition-colors mt-4"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  </div>
</section>
<Footer />
    </>
    
  );
};

export default Home;