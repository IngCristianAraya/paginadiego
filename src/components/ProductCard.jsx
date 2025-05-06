import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
      {/* Imagen con zoom al hacer hover */}
      <div className="relative overflow-hidden h-48 md:h-60">
        <img
          src={product.images[0]?.src || 'https://via.placeholder.com/300'}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <span className="text-white font-semibold text-sm sm:text-base">Ver detalles</span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
          {product.name}
        </h2>
        <p className="text-green-600 font-bold mt-1">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 transform hover:scale-105"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;