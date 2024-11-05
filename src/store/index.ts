import { create } from 'zustand';
import type { Salon } from '../types';

interface StoreState {
  selectedSalon: Salon | null;
  setSelectedSalon: (salon: Salon | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedSalon: null,
  setSelectedSalon: (salon) => set({ selectedSalon: salon }),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
}));