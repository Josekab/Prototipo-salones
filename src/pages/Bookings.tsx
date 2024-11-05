import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const BOOKINGS = [
  {
    id: '1',
    salonName: 'Luxe Beauty Lounge',
    service: 'Haircut & Style',
    date: '2024-03-15',
    time: '10:00 AM',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000',
    status: 'upcoming'
  },
  {
    id: '2',
    salonName: 'Glam Studio',
    service: 'Manicure & Pedicure',
    date: '2024-03-10',
    time: '2:30 PM',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000',
    status: 'completado'
  },
];

export function Bookings() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-purple-600 text-white pt-12 pb-6 px-4">
        <h1 className="text-2xl font-bold">Tus Reservas</h1>
      </div>

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="space-y-4">
          {BOOKINGS.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="flex">
                <img
                  src={booking.image}
                  alt={booking.salonName}
                  className="w-24 h-24 object-cover"
                />
                <div className="p-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {booking.salonName}
                      </h3>
                      <p className="text-purple-600 text-sm">{booking.service}</p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'upcoming'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(booking.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {booking.time}
                    </div>
                  </div>
                </div>
              </div>
              {booking.status === 'upcoming' && (
                <div className="border-t border-gray-100 p-4 flex justify-between">
                  <button className="text-gray-600 text-sm font-medium">
                    Reagendar
                  </button>
                  <button className="text-red-600 text-sm font-medium">
                    Cancelar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}