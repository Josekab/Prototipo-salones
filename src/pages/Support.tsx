import React from 'react';

export function Support() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="bg-purple-600 text-white pt-12 pb-6 px-4">
        <h1 className="text-2xl font-bold">Soporte y Ayuda</h1>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">¿Cómo podemos ayudarte?</h2>
          <p className="text-gray-600">Estamos aquí para ayudarte con cualquier problema que puedas tener.</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Contacto por correo</span>
              <button className="text-purple-600">Enviar mensaje</button>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-700">FAQs</span>

            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-700">Soporte en vivo</span>
              <button className="text-purple-600">Iniciar chat</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Detalles de la cuenta</h2>
          <p className="text-gray-600">Si tienes problemas con tu cuenta, revisa estas opciones.</p>

          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Estado de la cuenta</span>
              <span className="text-gray-600">Activa</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">Historial de soporte</span>
              <button className="text-purple-600">Ver historial</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
