import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { SalonCard } from '../components/SalonCard';
import { AdBanner } from '../components/AdBanner';
import { PremiumBanner } from '../components/PremiumBanner';
import { Scissors, Sparkles, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURED_SALONS = [
  {
    id: '1',
    name: 'Luxe Beauty Lounge',
    rating: 4.8,
    reviewCount: 384,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000',
    location: 'Downtown',
    services: ['Haircut', 'Color', 'Styling'],
    price: '₡25,000+'
  },
  {
    id: '2',
    name: 'Glam Studio',
    rating: 4.7,
    reviewCount: 256,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    location: 'Midtown',
    services: ['Makeup', 'Nails', 'Facial'],
    price: '₡15,000+'
  },
  {
    id: '3',
    name: 'The Style House',
    rating: 4.9,
    reviewCount: 521,
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=1000',
    location: 'Westside',
    services: ['Haircut', 'Balayage', 'Treatment'],
    price: '₡35,000+'
  }
];

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-purple-600 text-white pt-12 pb-6 px-4">
        <h1 className="text-2xl font-bold mb-2">Encuentra tu propio estilo</h1>
        <p className="text-purple-100 mb-6">Descubre los salones mejor valorados cerca de ti</p>
        <SearchBar />
      </header>

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <PremiumBanner />

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-semibold">Salones destacados</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_SALONS.map((salon, index) => (
              <React.Fragment key={salon.id}>
                <Link to={`/salon/${salon.id}`}>
                  <SalonCard salon={salon} />
                </Link>
                {index === 1 && (
                  <AdBanner type="sponsored" className="h-full" />
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        <AdBanner type="banner" className="mb-8" />

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Scissors className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-semibold">Servicios Populares</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Corte de cabello y peinado', 'Color y Mechas', 'Manicure & Pedicure', 'Facial & Skincare'].map((service) => (
              <div
                key={service}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="font-medium text-gray-900">{service}</h3>
                <p className="text-sm text-gray-500 mt-1">Desde ₡15,000</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-semibold">Mejor valorados</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_SALONS.slice(0, 2).map((salon) => (
              <Link to={`/salon/${salon.id}`} key={salon.id}>
                <SalonCard salon={salon} />
              </Link>
            ))}
            <AdBanner type="inline" className="h-full" />
          </div>
        </section>
      </main>
    </div>
  );
}