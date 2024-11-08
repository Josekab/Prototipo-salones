import React, { useState } from 'react';
import { FaLock, FaCreditCard } from 'react-icons/fa';

export function Payment() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      alert('Pago realizado con éxito');
    }, 2000);
  };

  const isFormValid = cardNumber.length === 16 && expiration.length === 5 && cvv.length === 3;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-purple-600 text-white pt-12 pb-6 px-4">
        <h1 className="text-2xl font-bold mb-2">Pasarela de Pago</h1>
        <p className="text-purple-100 mb-6">Selecciona tu método de pago preferido</p>
      </header>

      <main className="max-w-screen-md mx-auto px-4 py-6">
        <div className="bg-white rounded-lg p-4 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">Pagar con Sinpe Móvil</h2>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2">
            <FaCreditCard /> Pagar con Sinpe
          </button>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Pagar con Tarjeta</h2>
          <div className="flex justify-between items-center mb-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="w-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="MasterCard" className="w-10" />
            <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="Amex" className="w-10" />
            <img src="https://cdn.icon-icons.com/icons2/1178/PNG/512/discover_82082.png" alt="Discover" className="w-10" />
          </div>
          <form onSubmit={handlePayment}>
            <div className="mb-4">
              <label className="block text-gray-700">Número de tarjeta</label>
              <div className="relative">
                <input 
                  type="text" 
                  className="w-full mt-1 p-2 border rounded-lg pl-10 bg-gray-100" 
                  placeholder="1234 5678 9012 3456" 
                  maxLength={16}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
                />
                <FaCreditCard className="absolute top-2.5 left-3 text-gray-500" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mb-4 flex-1">
                <label className="block text-gray-700">Fecha de expiración</label>
                <input 
                  type="text" 
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-100" 
                  placeholder="MM/AA" 
                  maxLength={5}
                  value={expiration}
                  onChange={(e) => setExpiration(e.target.value.replace(/[^0-9/]/g, ''))}
                />
              </div>
              <div className="mb-4 flex-1">
                <label className="block text-gray-700">Código CVV</label>
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full mt-1 p-2 border rounded-lg bg-gray-100 pl-10" 
                    placeholder="123" 
                    maxLength={3}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                  />
                  <FaLock className="absolute top-2.5 left-3 text-gray-500" />
                </div>
              </div>
            </div>
            <button 
              type="submit" 
              className={`w-full py-2 rounded-lg text-white font-semibold ${isFormValid ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-400 cursor-not-allowed'}`} 
              disabled={!isFormValid || isProcessing}
            >
              {isProcessing ? 'Procesando...' : 'Pagar'}
            </button>
          </form>
          <div className="text-center text-gray-500 text-xs mt-4">
            <FaLock className="inline mr-1" /> Pago Seguro
          </div>
        </div>
      </main>
    </div>
  );
}
