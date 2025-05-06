// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ name, image, price }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-64 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-xl text-gray-800">${price}</p>
        <button className="mt-2 w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;
