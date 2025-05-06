import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard';
import Navbar from '../components/Navbar';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulamos la llamada a la API (luego lo reemplazaremos por la conexión real)
  useEffect(() => {
    const fetchProducts = async () => {
      // Simulamos una llamada asíncrona
      setTimeout(() => {
        const mockProducts = [
          {
            id: 1,
            name: 'Producto 1',
            price: '29.99',
            images: [{ src: 'https://picsum.photos/id/101/300/300' }],
          },
          {
            id: 2,
            name: 'Producto 2',
            price: '49.99',
            images: [{ src: 'https://picsum.photos/id/102/300/300' }],
          },
          {
            id: 3,
            name: 'Producto 3',
            price: '19.99',
            images: [{ src: 'https://picsum.photos/id/103/300/300' }],
          },
          {
            id: 4,
            name: 'Producto 4',
            price: '89.99',
            images: [{ src: 'https://picsum.photos/id/104/300/300' }],
          },
          {
            id: 5,
            name: 'Producto 5',
            price: '39.99',
            images: [{ src: 'https://picsum.photos/id/105/300/300' }],
          },
          {
            id: 6,
            name: 'Producto 6',
            price: '59.99',
            images: [{ src: 'https://picsum.photos/id/106/300/300' }],
          },
        ];
        setProducts(mockProducts);
        setLoading(false);
      }, 1000); // Simula un delay de 1 segundo
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800 text-center">Nuestros Productos</h1>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;