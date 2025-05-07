/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colores para MODO CLARO
        light: {
          bg: '#f8fafc',     // Fondo claro
          text: '#1e293b',   // Texto principal (azul grisáceo)
          card: '#ffffff',   // Tarjetas y navbar
          border: '#cbd5e1', // Bordes claros
        },
        // Colores para MODO OSCURO
        dark: {
          bg: '#0f172a',     // Fondo oscuro (gris azulado)
          text: '#f8fafc',   // Texto blanco/gris muy claro
          card: '#1e293b',   // Fondo de tarjetas en modo oscuro
          border: '#334155', // Bordes más suaves
        },
        primary: '#2563eb',   // Azul principal (para botones)
        secondary: '#1d4ed8',
        accent: '#10b981',    // Verde para precios
      },
    },
  },
  plugins: [],
};