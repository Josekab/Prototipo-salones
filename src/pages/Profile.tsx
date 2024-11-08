import React from 'react';
import { Settings, Bell, CreditCard, HelpCircle, LogOut, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROFILE_DATA = {
  name: 'Sarah Johnson',
  email: 'sarah.j@example.com',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
  memberSince: 'January 2024',
  isPremium: true,
};

const MENU_ITEMS = [
  { icon: Settings, label: 'Configuraciones', path: '/settings' },
  { icon: Bell, label: 'Notificaciones' }, // Sin funcionalidad
  { icon: CreditCard, label: 'Métodos de Pago' }, // Sin funcionalidad
  { icon: HelpCircle, label: 'Soporte y Ayuda', path: '/support' },
];

export function Profile() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-purple-600 text-white pt-12 pb-6 px-4">
        <h1 className="text-2xl font-bold">Perfil</h1>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center gap-4">
            <img
              src={PROFILE_DATA.image}
              alt={PROFILE_DATA.name}
              className="w-20 h-20 rounded-full object-cover max-w-full"
            />
            <div>
              <h2 className="text-xl font-semibold">{PROFILE_DATA.name}</h2>
              <p className="text-gray-500">{PROFILE_DATA.email}</p>
              {PROFILE_DATA.isPremium && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-sm mt-2">
                  <Crown className="w-4 h-4" /> Miembro Premium 
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Configuraciones con navegación */}
          <Link
            to="/settings"
            className="w-full flex items-center gap-3 p-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100"
          >
            <Settings className="w-5 h-5 text-gray-400" />
            <span>Configuraciones</span>
          </Link>

          {/* Notificaciones - Sin funcionalidad */}
          <button className="w-full flex items-center gap-3 p-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100" disabled>
            <Bell className="w-5 h-5 text-gray-400" />
            <span>Notificaciones</span>
          </button>

          {/* Métodos de Pago - Sin funcionalidad */}
          <button className="w-full flex items-center gap-3 p-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100" disabled>
            <CreditCard className="w-5 h-5 text-gray-400" />
            <span>Métodos de Pago</span>
          </button>

          {/* Soporte y Ayuda con navegación */}
          <Link
            to="/support"
            className="w-full flex items-center gap-3 p-4 text-gray-700 hover:bg-gray-50 border-b border-gray-100"
          >
            <HelpCircle className="w-5 h-5 text-gray-400" />
            <span>Soporte y Ayuda</span>
          </Link>

          {/* Cerrar Sesión */}
          <button className="w-full flex items-center gap-3 p-4 text-red-600 hover:bg-gray-50">
            <LogOut className="w-5 h-5" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </div>
  );
}
