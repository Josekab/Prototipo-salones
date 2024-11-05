import React from 'react';
import { SalonCard } from '../components/SalonCard';
import { AdBanner } from '../components/AdBanner';
import { Heart } from 'lucide-react';

const SAVED_SALONS = [
  {
    id: '4',
    name: 'Elite Hair Studio',
    rating: 4.9,
    reviewCount: 428,
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000',
    location: 'Eastside',
    services: ['Cortes Premium', 'Color', 'Extensiones'],
    price: '$75+'
  },
  {
    id: '5',
    name: 'Pure Bliss Spa',
    rating: 4.8,
    reviewCount: 312,
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1000',
    location: 'Marina District',
    services: ['Masaje', 'Facial', 'Tratamientos Corporales'],
    price: '$90+'
  },
];

export function Saved() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-purple-600 text-white pt-12 pb-6 px-4">
        <h1 className="text-2xl font-bold">Lugares Guardados</h1>
      </div>

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        {SAVED_SALONS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAVED_SALONS.map((salon, index) => (
              <React.Fragment key={salon.id}>
                <SalonCard salon={salon} />
                {index === 0 && <AdBanner type="sponsored" className="h-full" />}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Aún sin guardar</h2>
            <p className="text-gray-500">Comienza a guardar tus salones y estilistas favoritos</p>
          </div>
        )}
      </main>
    </div>
  );
}