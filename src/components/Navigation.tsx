import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Calendar, Heart, User } from 'lucide-react';

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Inicio', path: '/' },
    { icon: Search, label: 'Explorar', path: '/explore' },
    { icon: Calendar, label: 'Reservas', path: '/bookings' },
    { icon: Heart, label: 'Guardado', path: '/saved' },
    { icon: User, label: 'Perfil', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {navItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center gap-1 p-2 ${
              location.pathname === path
                ? 'text-purple-600'
                : 'text-gray-500 hover:text-purple-600'
            }`}
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}