import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { dummyPakaian } from '../../data/dummyLemari';

export default function LemariDetail() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // Mencari item pakaian berdasarkan ID dari URL, fallback ke item 1 jika tidak ditemukan
  const item = dummyPakaian.find((p) => p.id === Number(id)) || dummyPakaian[0];

  return (
    <div className="min-h-screen bg-[#F3EEE3] flex flex-col font-jakarta pb-24">
      {/* Header */}
      <div className="pt-5 px-6 pb-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-loopwear-dark">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[16px] font-bold text-loopwear-dark">Detail Pakaian</h1>
        
        {/* Icon Profile User Circular */}
        <div className="w-9 h-9 bg-[#1B4D3E] rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>

      <div className="px-6 space-y-4">
        {/* Hero Image dengan Gambar Asli */}
        <div className="bg-[#e4d8c6] rounded-3xl h-64 relative overflow-hidden shadow-sm border border-loopwear-grey/30">
          <img
            src={item.img}
            alt={item.nama}
            className="w-full h-full object-cover"
          />

          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[#2E6F40] px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm">
            <span className="w-2 h-2 bg-[#2E6F40] rounded-full"></span> Tersedia di Lemari
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-[#D9714B] shadow-sm">
              ❤️
            </button>
            <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-loopwear-dark shadow-sm">
              🔗
            </button>
          </div>
          <div className="absolute bottom-4 left-4 bg-[#2E6F40]/90 backdrop-blur text-white px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1">
            ✓ {item.mutu} • Orisinal Terverifikasi
          </div>
          <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur text-white px-2 py-1 rounded-full text-[10px] flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#D9714B] rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
            <span>1/3</span>
          </div>
        </div>

        {/* Product Info & Est Value */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[9px] font-bold text-loopwear-muted tracking-widest mb-1">
              LOOPWEAR • LEMARI PRIBADI
            </p>
            <h2 className="text-[20px] font-extrabold text-loopwear-dark">{item.nama}</h2>
          </div>
          <div className="bg-white px-3 py-2 rounded-2xl border border-[#D9714B]/30 shadow-sm text-center">
            <p className="text-[9px] text-[#D9714B] font-bold mb-0.5">Estimasi Nilai</p>
            <p className="text-[14px] font-extrabold text-[#D9714B]">
              {item.harga || 'Rp135.000'}
            </p>
          </div>
        </div>

        {/* Tags Dinamis */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide no-scrollbar">
          {[
            `👔 ${item.kategori}`,
            `⚪ ${item.warna}`,
            `🌿 ${item.bahan}`,
            `📏 ${item.ukuran}`,
          ].map((t) => (
            <span
              key={t}
              className="bg-white border border-loopwear-grey/40 text-loopwear-dark px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Statistik Pemakaian */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-loopwear-grey/30 mt-2">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-3xl font-extrabold text-loopwear-dark flex items-baseline gap-1">
                {item.frekuensiPakai}x <span className="text-[14px] font-bold">Dipakai</span>
              </h3>
              <p className="text-[10px] text-loopwear-muted mt-1">Terakhir: 12 Okt</p>
            </div>
            <div className="bg-[#E8F5E9] text-[#2E6F40] px-2 py-1 rounded-lg text-[9px] font-bold border border-[#2E6F40]/20 flex items-center gap-1">
              ⚡ Rotasi Sehat
            </div>
          </div>

          <div className="flex justify-between items-end h-16 bg-[#F9FBF8] p-3 rounded-2xl border border-[#E8F5E9]">
            <div className="w-1/6 flex flex-col items-center gap-1">
              <div className="w-full bg-[#2E6F40]/30 rounded-t h-4"></div>
              <span className="text-[8px] text-loopwear-muted">M1</span>
            </div>
            <div className="w-1/6 flex flex-col items-center gap-1">
              <div className="w-full bg-[#2E6F40]/40 rounded-t h-6"></div>
              <span className="text-[8px] text-loopwear-muted">M2</span>
            </div>
            <div className="w-1/6 flex flex-col items-center gap-1">
              <div className="w-full bg-[#2E6F40]/70 rounded-t h-3"></div>
              <span className="text-[8px] text-loopwear-muted">M3</span>
            </div>
            <div className="w-1/6 flex flex-col items-center gap-1">
              <div className="w-full bg-[#2E6F40] rounded-t h-10 shadow-sm"></div>
              <span className="text-[8px] font-bold text-loopwear-dark">M4</span>
            </div>
            <div className="w-1/6 flex flex-col items-center gap-1">
              <div className="w-full bg-[#2E6F40]/40 rounded-t h-5"></div>
              <span className="text-[8px] text-loopwear-muted">M5</span>
            </div>
            <div className="w-1/6 flex flex-col items-center gap-1 relative">
              <div className="absolute -top-4 text-[8px] font-bold text-[#D9714B] whitespace-nowrap">
                Minggu ini!
              </div>
              <div className="w-full bg-[#D9714B] rounded-t h-8 shadow-sm flex items-center justify-center">
                <span className="text-white text-[10px]">✨</span>
              </div>
              <span className="text-[8px] font-bold text-[#D9714B]">Kini</span>
            </div>
          </div>
        </div>

        {/* LOOP DECISION HUB */}
        <div className="bg-[#2E6F40] rounded-3xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>

          <div className="flex justify-between items-center mb-3 relative z-10">
            <h3 className="font-bold text-white text-[13px] flex items-center gap-1.5">
              <span className="text-[#C4ECCF]">✨</span> LOOP DECISION HUB
            </h3>
            <span className="bg-[#C4ECCF] text-[#2E6F40] px-2 py-0.5 rounded text-[8px] font-bold">
              Rekomendasi AI
            </span>
          </div>

          <div className="bg-white/10 border border-white/20 p-2.5 rounded-xl flex items-start gap-2 mb-4 relative z-10">
            <span className="text-white text-sm">💡</span>
            <p className="text-[10px] text-white/90 leading-relaxed">
              {item.alasanAI}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 relative z-10">
            {['Simpan', 'Jual', 'Sewakan', 'Daur Ulang'].map((opsi) => {
              const isSelected = item.rekomendasiAI === opsi;
              return (
                <button
                  key={opsi}
                  className={`rounded-2xl p-3 flex flex-col items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-white border-2 border-white shadow-md transform scale-105'
                      : 'bg-[#1B4D3E] border border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <span className={`text-xl mb-1 ${isSelected ? 'text-[#2E6F40]' : ''}`}>
                    {opsi === 'Simpan' && '👗'}
                    {opsi === 'Jual' && '🏷️'}
                    {opsi === 'Sewakan' && '📅'}
                    {opsi === 'Daur Ulang' && '♻️'}
                  </span>
                  <span
                    className={`text-[12px] font-extrabold ${
                      isSelected ? 'text-[#2E6F40]' : 'text-white'
                    }`}
                  >
                    {opsi}
                  </span>
                  {isSelected && (
                    <span className="text-[9px] font-bold mt-0.5 text-[#D9714B]">
                      Pilihan AI ✨
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* --- TAMBAHAN BAGIAN: Inspirasi Padu Padan (Mirip Referensi Gambar) --- */}
        <div className="pt-2">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-extrabold text-[15px] text-[#1A1A1A] flex items-center gap-1.5">
              <span>🪞</span> Inspirasi Padu Padan
            </h3>
            <button className="text-[12px] font-bold text-[#2E6F40] hover:underline">
              Lihat Semua &gt;
            </button>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {/* OOTD Item 1 */}
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-black/[0.04]">
              <div className="relative h-28 rounded-xl overflow-hidden mb-2 bg-[#EFE8DC]">
                <img 
                  src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80" 
                  alt="Chino Moka" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1.5 left-1.5 bg-[#2E6F40] text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded">
                  90% Cocok
                </span>
              </div>
              <h4 className="font-extrabold text-[12px] text-[#1A1A1A] truncate">Chino Moka</h4>
              <p className="text-[10px] text-[#8C9387]">Bawahan</p>
            </div>

            {/* OOTD Item 2 */}
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-black/[0.04]">
              <div className="relative h-28 rounded-xl overflow-hidden mb-2 bg-[#EFE8DC]">
                <img 
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80" 
                  alt="Blazer Warm Clay" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1.5 left-1.5 bg-black/60 backdrop-blur-sm text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded">
                  Layer-One
                </span>
              </div>
              <h4 className="font-extrabold text-[12px] text-[#1A1A1A] truncate">Blazer Warm Clay</h4>
              <p className="text-[10px] text-[#8C9387]">Outerwear</p>
            </div>

            {/* OOTD Item 3 */}
            <div className="bg-white rounded-2xl p-2 shadow-sm border border-black/[0.04]">
              <div className="relative h-28 rounded-xl overflow-hidden mb-2 bg-[#EFE8DC]">
                <img 
                  src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=400&q=80" 
                  alt="Kulot Satin" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1.5 left-1.5 bg-[#D9714B] text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded">
                  Santai
                </span>
              </div>
              <h4 className="font-extrabold text-[12px] text-[#1A1A1A] truncate">Kulot Satin</h4>
              <p className="text-[10px] text-[#8C9387]">Bawahan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 left-6 right-6 z-40">
        <button className="w-full bg-[#D9714B] text-white font-bold py-4 rounded-full shadow-xl active:scale-95 transition-transform text-[15px] flex justify-center items-center gap-2 border-2 border-[#D9714B] hover:bg-[#c2623e] cursor-pointer">
          ✨ Pakai Hari Ini
        </button>
      </div>
    </div>
  );
}