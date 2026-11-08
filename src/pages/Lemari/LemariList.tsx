import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyPakaian } from '../../data/dummyLemari';

export default function LemariList() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Semua');

  // Menghitung jumlah item per kategori filter secara dinamis
  const getFilterCount = (categoryFilter: string) => {
    if (categoryFilter === 'Semua') return dummyPakaian.length;
    return dummyPakaian.filter((item) =>
      item.status.toLowerCase().includes(categoryFilter.toLowerCase())
    ).length;
  };

  // Logika penyaringan data berdasarkan tab filter
  const filteredPakaian = dummyPakaian.filter((item) => {
    if (filter === 'Semua') return true;
    return item.status.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-[#F3EEE3] flex flex-col font-jakarta pb-24">
      {/* Top Header Bar dengan Tombol (+) Lingkaran Putih */}
      <div className="pt-6 px-6 pb-4 flex justify-between items-start">
        <div>
          <h1 className="text-[28px] font-extrabold text-[#2E6F40] tracking-tight leading-tight">
            Lemariku
          </h1>
          <p className="text-[13px] text-loopwear-muted mt-1">
            Setiap pakaian punya babak berikutnya.
          </p>
        </div>

        <button 
          onClick={() => navigate('/lemari/tambah')} 
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2E6F40] shadow-sm transition-transform active:scale-95 cursor-pointer shrink-0 mt-1"
        >
          <span className="text-2xl font-light leading-none mb-0.5">+</span>
        </button>
      </div>

      <div className="px-6 flex-1">
        {/* Banner Statistik */}
        <div className="bg-[#2E6F40] rounded-3xl p-5 mb-6 flex justify-between items-center shadow-sm">
          <div>
            <h2 className="text-white text-3xl font-extrabold mb-1">
              {dummyPakaian.length} pakaian
            </h2>
            <p className="text-white/80 text-[11px]">
              Dirawat, dipakai, lalu diputar lagi.
            </p>
          </div>

          <div className="text-[#6CA07A] shrink-0">
            <svg 
              width="36" 
              height="36" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
              <path d="M16 16h5v5" />
            </svg>
          </div>
        </div>

        {/* --- UI FILTER PILLS RAPI & MODERN --- */}
        <div className="flex gap-2.5 mb-6 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
          {['Semua', 'Jual', 'Sewakan', 'Daur Ulang'].map((f) => {
            const count = getFilterCount(f);
            const isActive = filter === f;
            return (
              <button 
                key={f} 
                onClick={() => setFilter(f)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold whitespace-nowrap transition-all duration-200 cursor-pointer active:scale-95 ${
                  isActive 
                    ? 'bg-[#2E6F40] text-white shadow-md' 
                    : 'bg-white text-loopwear-dark border border-[#E2DBCF] hover:border-[#2E6F40]/40'
                }`}
              >
                <span>{f}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-[#F3EEE3] text-[#2E6F40]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Item Cards */}
        <div className="space-y-4 mb-8">
          {filteredPakaian.length > 0 ? (
            filteredPakaian.map((item) => (
              <div 
                key={item.id} 
                onClick={() => navigate(`/lemari/${item.id}`)}
                className="bg-white p-3 rounded-3xl flex items-center gap-4 shadow-sm border border-loopwear-grey/30 cursor-pointer active:scale-[0.98] transition-transform"
              >
                {/* Gambar Pakaian Nyata dari URL dummyLemari.ts */}
                <img 
                  src={item.img} 
                  alt={item.nama} 
                  className="w-20 h-20 object-cover rounded-2xl shrink-0 bg-[#e4d8c6]" 
                />

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-[15px] text-loopwear-dark">{item.nama}</h4>
                    <button className="text-loopwear-muted tracking-widest leading-none mt-1">•••</button>
                  </div>
                  <p className="text-[11px] text-loopwear-muted my-0.5">
                    {item.mutu} • {item.ukuran} • {item.harga || 'Bisa Dipakai'}
                  </p>
                  <div className="inline-flex items-center gap-1 mt-1 text-[10px] font-bold text-[#2E6F40]">
                    <span className="text-xs">♻️</span> {item.status}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 bg-white rounded-3xl border border-loopwear-grey/20">
              <span className="text-3xl block mb-2">👕</span>
              <p className="text-xs font-bold text-loopwear-dark">Tidak ada pakaian di kategori ini</p>
              <p className="text-[10px] text-loopwear-muted mt-1">Coba ganti filter atau tambah pakaian baru.</p>
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="flex items-start gap-3 px-2">
          <span className="text-[#D9714B] text-lg">🎯</span>
          <p className="text-[11px] text-loopwear-muted leading-relaxed">
            Jual, sewakan, atau daur ulang. Kamu tentukan langkah selanjutnya.
          </p>
        </div>
      </div>
    </div>
  );
}