import React from 'react';
import { Crown, Check } from 'lucide-react';

export function PremiumBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 text-white mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Crown className="w-6 h-6" />
        <h2 className="text-xl font-bold">Actualízate a Premium</h2>
      </div>
      <p className="text-purple-100 mb-4">Desbloquea funciones y beneficios exclusivos</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          'Reservas Prioritarias',
          'Descuentos Exclusivos',
          'Soporte VIP',
          'Sin Anuncios'
        ].map((benefit) => (
          <div key={benefit} className="flex items-center gap-2">
            <Check className="w-4 h-4 text-purple-200" />
            <span className="text-sm">{benefit}</span>
          </div>
        ))}
      </div>
      <button className="w-full bg-white text-purple-600 py-2 rounded-full font-semibold hover:bg-purple-50 transition-colors">
      Prueba gratis por 30 días
      </button>
    </div>
  );
}