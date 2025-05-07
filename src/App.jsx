// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart'; // ✅ Importa el componente
import Contact from './pages/Contacto'; // ✅ Importa la nueva página
import Footer from './components/Footer';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrito" element={<Cart />} /> {/* ✅ Nueva ruta */}"
      {/* Aquí puedes agregar más rutas según lo necesites */}
      {/* Ejemplo: */}
      {/* <Route path="/productos" element={<Productos />} /> */}
      {/* <Route path="/sobre-nosotros" element={<SobreNosotros />} /> */}
      {/* <Route path="/contacto" element={<Contacto />} /> */}
    </Routes>
  );
};

export default App;
