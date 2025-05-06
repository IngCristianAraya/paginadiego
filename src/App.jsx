// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Aquí puedes agregar más rutas según lo necesites */}
      {/* Ejemplo: */}
      {/* <Route path="/productos" element={<Productos />} /> */}
      {/* <Route path="/sobre-nosotros" element={<SobreNosotros />} /> */}
      {/* <Route path="/contacto" element={<Contacto />} /> */}
    </Routes>
  );
};

export default App;
