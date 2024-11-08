import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AdBanner } from '../components/AdBanner';

const SALON_DETAILS = {
  id: '2',
  name: 'Glam Studio',
  rating: 4.7,
  reviewCount: 256,
  image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
  location: 'Midtown',
  services: [
    { name: 'Maquillaje', price: '₡35,000' },
    { name: 'Uñas', price: '₡16,500' },
    { name: 'Facial', price: '₡22,500' },
    { name: 'Corte de Cabello', price: '₡13,750' },
    { name: 'Masaje', price: '₡33,000' },
    { name: 'Diseño de Cejas', price: '₡8,250' },
    { name: 'Extensiones de Pestañas', price: '₡24,000' }
  ],
  promotions: [
    { 
      name: 'Especial de Verano', 
      description: '¡Obtén un 20% de descuento en todos los servicios durante el verano!', 
      validUntil: '2025-07-31',
      image: 'https://miradaespecial.com/wp-content/uploads/2019/07/especial-verano.png'
    },
    { 
      name: 'Oferta de Año Nuevo', 
      description: '¡Compra uno y obtén uno gratis en todos los servicios de uñas!', 
      validUntil: '2025-01-31',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiO3fxrI64vKDGt7Ai1Z-2K8WINRGip4zOvEqA1RxC7mkBrVKOzDgSnff-wAwWmu3qL9L7PZjT8yxDNwClWpHTZBcScDghu4NW1Ncx6isjWxkvIzDKrOIgcmiiJ8QIcPjb2Qu8UbpURXyW5/s1600/13465977_10153972799662013_3254855058321800074_n.jpg'
    },
    { 
      name: 'Descuento para Clientes Frecuentes', 
      description: '¡10% de descuento para clientes que regresan!', 
      validUntil: '2024-12-31',
      image: 'https://static.vecteezy.com/system/resources/previews/009/903/250/non_2x/pink-sale-10-percentage-off-promotion-and-celebration-with-gift-boxes-png.png'
    }
  ],
  portfolioImages: [
    'https://media.glamour.mx/photos/65755e1b5eb970aff5349d29/4:3/w_1924,h_1443,c_limit/tintes-de-cabello-invierno-2023.jpg',
    'https://static.bellezaparatodos.com/2019/12/Tutorial-de-maquillaje-con-brillo-para-fiesta-1366x768.jpg',
    'https://media.glamour.mx/photos/627e6fe2bdf5a852d66a3f4d/16:9/w_2880,h_1620,c_limit/disen%CC%83os-un%CC%83as-mujeres-40.jpeg'
  ],
  description: 'Glam Studio ofrece una variedad de servicios de belleza para ayudarte a verte y sentirte lo mejor posible. Nuestro personal experimentado está dedicado a proporcionar un servicio de alta calidad en un ambiente relajante.'
};

export function SalonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const salon = SALON_DETAILS;

  if (salon.id !== id) {
    return <div>Salón no encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-purple-600 text-white pt-12 pb-6 px-4">
        <h1 className="text-2xl font-bold mb-2">{salon.name}</h1>
        <p className="text-purple-100 mb-6">{salon.description}</p>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <img src={salon.image} alt={salon.name} className="w-full h-64 object-cover rounded-lg mb-6" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Servicios</h2>
          <ul className="space-y-4">
            {salon.services.map((service) => (
              <li key={service.name} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{service.name}</span>
                  <span className="text-gray-500">{service.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Promociones</h2>
          <ul className="space-y-4">
            {salon.promotions.map((promotion) => (
              <li key={promotion.name} className="bg-white rounded-lg p-4 shadow-sm hover:bg-pink-50 transition">
                <div className="flex items-center space-x-4">
                  <img src={promotion.image} alt={promotion.name} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                  <div className="flex-grow">
                    <span className="font-medium text-gray-900">{promotion.name}</span>
                    <p className="text-gray-500">{promotion.description}</p>
                    <span className="text-gray-500">Válido hasta: {promotion.validUntil}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Portafolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {salon.portfolioImages.map((image, index) => (
              <img key={index} src={image} alt={`Portafolio ${index + 1}`} className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition" />
            ))}
          </div>
        </div>

        <AdBanner type="banner" className="mb-8" />

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Agendar una cita</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            navigate('/payment');
          }}>
            <div className="mb-4">
              <label className="block text-gray-700">Nombre</label>
              <input type="text" className="w-full mt-1 p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Servicio</label>
              <select className="w-full mt-1 p-2 border rounded-lg">
                {salon.services.map((service) => (
                  <option key={service.name} value={service.name}>{service.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Fecha</label>
              <input type="date" className="w-full mt-1 p-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Hora</label>
              <input type="time" className="w-full mt-1 p-2 border rounded-lg" />
            </div>
            <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg">Agendar</button>
          </form>
        </div>
      </main>
    </div>
  );
}
