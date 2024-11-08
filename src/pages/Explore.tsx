import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { SalonCard } from '../components/SalonCard';
import { AdBanner } from '../components/AdBanner';
import { Filter, MapPin } from 'lucide-react';

const CATEGORIES = ['Todos', 'Cabello', 'Uñas', 'Maquillaje', 'Spa', 'Barbería'];

const SALONS = [
  {
    id: '6',
    name: 'Modern Cuts',
    rating: 4.7,
    reviewCount: 283,
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1000',
    location: 'Financial District',
    services: ['Corte de cabello', 'Recorte de barba', 'Toalla caliente'],
    price: '₡25,000+'
  },
  {
    id: '7',
    name: 'Nail Paradise',
    rating: 4.6,
    reviewCount: 195,
    image: 'https://www.treatwell.es/partners/wp-content/uploads/sites/16/2023/05/Captura-de-Pantalla-2023-05-15-a-las-15.20.44-1024x685.png',
    location: 'Shopping Center',
    services: ['Manicure', 'Pedicure', 'Arte de uñas'],
    price: '₡15,500+'
  },
  {
    id: '8',
    name: 'Zen Spa & Beauty',
    rating: 4.9,
    reviewCount: 421,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000',
    location: 'Riverside',
    services: ['Masaje', 'Facial', 'Depilación'],
    price: '₡45,000+'
  }
];

export function Explore() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-purple-600 text-white pt-12 pb-6 px-4">
        <h1 className="text-2xl font-bold mb-4">Explorar</h1>
        <SearchBar />
      </div>

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white shadow-sm text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
          <button className="p-2 rounded-full bg-white shadow-sm">
            <Filter className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SALONS.map((salon, index) => (
            <React.Fragment key={salon.id}>
              <SalonCard salon={salon} />
              {index === 1 && <AdBanner type="inline" className="h-full" />}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-8">
          <button className="w-full py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" />
            Ver Mapa
          </button>
        </div>
      </main>
    </div>
  );
}