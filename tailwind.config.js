/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Colores base del sitio
        primary: '#c7ae94',   // Marrón dorado
        secondary: '#d4c3b3', // Marrón claro
        accent: '#6e1a1a',    // Rojo profundo (para botones de acción)
        light: '#f5f1ec',     // Fondo claro / beige
        dark: '#2a2a2a',      // Gris oscuro usado en posts
        
        // Colores personalizados para hover o sombras
        'primary-hover': '#b89d82',
        'accent-hover': '#5e1616',
      },
    },
  },
  plugins: [],
};