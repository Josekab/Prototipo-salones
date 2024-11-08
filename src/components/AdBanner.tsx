import React from 'react';

interface AdBannerProps {
  type: 'inline' | 'banner' | 'sponsored';
  className?: string;
}

export function AdBanner({ type, className = '' }: AdBannerProps) {
  const getAdContent = () => {
    switch (type) {
      case 'sponsored':
        return {
          title: 'L\'Oréal Professional',
          description: 'Transforma tu salón con productos premium para el cuidado del cabello.',
          image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000',
          cta: 'Aprender más'
        };
      case 'banner':
        return {
          title: 'Premium Beauty Tools',
          description: 'Equipo de nivel profesional para tu salón.',
          image: 'https://i.ebayimg.com/thumbs/images/g/XqgAAOSwM9dlpMsu/s-l1200.jpg',
          cta: 'Comprar ahora'
          
        };
      default:
        return {
          title: 'Salon Management Software',
          description: 'Optimiza las operaciones de tu negocio.',
          image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=1000',
          cta: 'Comenzar'
        };
    }
  };

  const content = getAdContent();

  return (
    <div className={`relative bg-white rounded-lg overflow-hidden shadow-md max-w-md w-full mx-auto p-4 border border-gray-200 ${className}`}>
      <div className="absolute top-2 right-2 text-xs text-gray-500">Sponsored</div>
      <img
        src={content.image}
        alt={content.title}
        className="w-full h-40 object-cover rounded-md shadow-sm mb-4"
      />
      <div className="p-2 text-center">
        <h3 className="font-semibold text-lg text-gray-900">{content.title}</h3>
        <p className="text-gray-600 text-sm mt-1 mb-3">{content.description}</p>
        <button className="w-full md:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
          {content.cta}
        </button>
      </div>
    </div>
  );
}
