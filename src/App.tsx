import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import Modular Routes
import UserRoutes from './router/userRoutes';
// import CommerceRoutes from './router/commerceRoutes';
// import AdminRoutes from './router/adminRoutes';

// Fallback Layar 404 (Not Found)
const NotFound = () => (
  <div className="min-h-screen bg-loopwear-cream flex flex-col items-center justify-center p-6 text-center font-jakarta">
    <h1 className="text-6xl font-bold text-loopwear-green mb-4">404</h1>
    <h2 className="text-2xl font-semibold text-loopwear-dark mb-2">Halaman Tidak Ditemukan</h2>
    <p className="text-loopwear-muted mb-8">Maaf, halaman yang kamu cari tidak ada atau pakaiannya sudah diputar ke tempat lain.</p>
    <a href="/" className="px-6 py-3 bg-loopwear-orange text-white rounded-full font-semibold">
      Kembali ke Beranda
    </a>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      {/* Wrapper global aplikasi dengan warna background dasar cream */}
      <div className="min-h-screen bg-[#F3EEE3] text-[#1A1A1A] font-jakarta antialiased selection:bg-loopwear-lightGreen">
        <Routes>
          {/* 
            Mendaftarkan Rute Modular:
            1. User Routes (Alyaa): Onboarding, Lemari, Profil (*)
            2. Commerce Routes (Maccrea): Beranda, Jelajah, Putar, Transaksi (*)
            3. Admin Routes: Dashboard Operasional (*)
          */}
          <Route path="/*" element={<UserRoutes />} />
          {/* <Route path="/app/*" element={<CommerceRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} /> */}
          
          {/* Tangkap URL tidak valid dan arahkan ke NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}