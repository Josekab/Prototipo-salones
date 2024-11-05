import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { useStore } from '../store';

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useStore();

  return (
    <div className="relative flex items-center">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Busca salones, servicios o estilistas"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-l-full rounded-r-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
      <button className="px-4 py-2 bg-white border border-l-0 border-gray-300 rounded-r-full flex items-center gap-2 hover:bg-gray-50">
        <MapPin className="h-5 w-5 text-gray-400" />
        <span className="text-gray-600">Cerca de mí</span>
      </button>
    </div>
  );
}