import React from 'react';

export function Settings() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="bg-purple-600 text-white pt-12 pb-6 px-4">
        <h1 className="text-2xl font-bold">Configuraciones</h1>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Preferencias generales</h2>
          <p className="text-gray-600">Ajusta las preferencias para personalizar tu experiencia en la aplicación.</p>

          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Notificaciones por correo</span>
              <button className="text-purple-600">Activar</button>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">Modo oscuro</span>
              <button className="text-purple-600">Activar</button>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">Idioma</span>
              <select className="border border-gray-300 rounded-md py-1 px-3">
                <option>Español</option>
                <option>Inglés</option>
                <option>Portugués</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Seguridad</h2>
          <p className="text-gray-600">Configura las opciones relacionadas con la seguridad de tu cuenta.</p>

          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Autenticación en dos pasos</span>
              <button className="text-purple-600">Activar</button>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-700">Verificación de correo electrónico</span>
              <button className="text-purple-600">Verificar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
