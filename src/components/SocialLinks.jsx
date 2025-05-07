import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const SocialLinks = () => {
  const logoSrc = '/logo_sin_gb.png';

  const links = [
    {
      icon: <Facebook size={22} />,
      href: 'https://facebook.com',
      bg: 'hover:bg-blue-600',
    },
    {
      icon: <Instagram size={22} />,
      href: 'https://instagram.com',
      bg: 'hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-500',
    },
    {
      icon: <Twitter size={22} />,
      href: 'https://twitter.com',
      bg: 'hover:bg-sky-500',
    },
    {
      icon: <Mail size={22} />,
      href: 'mailto:contacto@mitienda.cl',
      bg: 'hover:bg-red-500',
    },
  ];

  return (
    <section className="py-12 bg-gray-100 text-center">
      <div className="flex justify-center mb-6">
        <img
          src={logoSrc}
          alt="Logo de la tienda"
          className="h-28 w-auto object-contain"
        />
      </div>

      <h2 className="text-3xl font-bold mb-2">¿Listo para personalizar tu mundo?</h2>
      <p className="text-gray-600 mb-6">Conéctate con nosotros o completa el formulario para comenzar.</p>

      <h3 className="text-xl font-semibold text-gray-800 mb-4">Síguenos en nuestras redes sociales</h3>

      <div className="flex justify-center gap-5">
        {links.map(({ icon, href, bg }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md text-gray-700 transition-all duration-300 ${bg}`}
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
