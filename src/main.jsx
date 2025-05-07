import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext'; // ✅ Importa esto
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider> {/* ✅ Agrega este envoltorio */}
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);