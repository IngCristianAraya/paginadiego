// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = [
    { id: 1, name: 'Sticker de Auto', image: "/images/foto_auto_verde.jpg", price: 12.99 },
    { id: 2, name: 'Sticker de Decoración', image: '/images/sticker-decor.jpg', price: 7.99 },
    { id: 3, name: 'Sticker Personalizado', image: '/images/sticker-custom.jpg', price: 15.99 },
  ];

  return (
    <div>
      <Navbar />
      <section className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('/images/sticker-car.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <h2 className="text-4xl font-bold">¡Haz que tu auto se vea único!</h2>
          <p className="mt-4 text-xl">Explora nuestra colección de stickers sublimados para personalizar tu vehículo.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Productos Destacados</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
