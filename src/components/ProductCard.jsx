import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group border border-amber-200 dark:border-orange-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800">
      {/* Imagen del producto */}
      <div className="relative overflow-hidden h-56">
        <img
          src={product.images[0]?.src || 'https://via.placeholder.com/300'}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay al hacer hover */}
        <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>

      {/* Información del producto */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-amber-400 transition-colors duration-300">
          {product.name}
        </h2>
        <p className="text-amber-600 font-bold mt-1">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;