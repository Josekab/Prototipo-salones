import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Salon } from '../types';

interface SalonCardProps {
  salon: Salon;
}

export function SalonCard({ salon }: SalonCardProps) {
  return (
    <Link
      to={`/salon/${salon.id}`}
      className="block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative">
        <img
          src={salon.image}
          alt={salon.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400" />
          <span>{salon.rating}</span>
          <span className="text-gray-500">({salon.reviewCount})</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{salon.name}</h3>
        
        <div className="mt-2 flex items-center text-gray-500 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{salon.location}</span>
        </div>
        
        <div className="mt-2 flex items-center text-gray-500 text-sm">
          <Clock className="w-4 h-4 mr-1" />
          <span>Abre 9:00 AM</span>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-2">
          {salon.services.slice(0, 3).map((service) => (
            <span
              key={service}
              className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
            >
              {service}
            </span>
          ))}
        </div>
        
        <div className="mt-3 text-sm">
          <span className="font-semibold text-gray-900">{salon.price}</span>
          <span className="text-gray-500"> por servicio</span>
        </div>
      </div>
    </Link>
  );
}