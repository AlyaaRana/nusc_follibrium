// src/store/useAuthStore.ts
import { create } from 'zustand';

interface AuthState {
  nama: string;
  email: string;
  kampus: string;
  pdpSetuju: boolean;
  aiAktif: boolean;
  seleraGaya: string[];
  ukuran: string;
  setBiodata: (nama: string, email: string, kampus: string) => void;
  setPrivasi: (pdp: boolean, ai: boolean) => void;
  setPreferensi: (gaya: string[], ukuran: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  nama: '',
  email: '',
  kampus: '',
  pdpSetuju: false,
  aiAktif: true,
  seleraGaya: [],
  ukuran: 'M',
  
  setBiodata: (nama, email, kampus) => set({ nama, email, kampus }),
  setPrivasi: (pdpSetuju, aiAktif) => set({ pdpSetuju, aiAktif }),
  setPreferensi: (seleraGaya, ukuran) => set({ seleraGaya, ukuran }),
}));