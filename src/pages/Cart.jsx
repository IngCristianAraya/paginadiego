import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.qty, 0).toFixed(2);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800">Tu Carrito</h1>

      {cart.length === 0 ? (
        <div className="bg-yellow-50 p-6 rounded-md text-center">
          <p className="text-gray-600">Tu carrito está vacío.</p>
          <Link to="/" className="text-blue-600 hover:text-blue-800 underline mt-4 inline-block">
            ← Volver a productos
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-start border-b pb-4">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Precio: ${item.price} x {item.qty}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-medium"
              >
                ❌ Eliminar
              </button>
            </div>
          ))}

          <div className="mt-8 text-right">
            <h3 className="text-xl font-bold text-gray-800">Total: <span className="text-green-600">${total}</span></h3>
            <Link
              to="/checkout"
              className="mt-4 inline-block py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Ir al pago
            </Link>
          </div>
        </div>
      )}

      <div className="mt-6">
        <Link to="/" className="text-blue-600 hover:text-blue-800 underline">
          ← Volver a productos
        </Link>
      </div>
    </div>
  );
};

export default Cart;