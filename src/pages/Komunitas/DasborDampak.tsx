import { useNavigate } from 'react-router-dom';
import { Award, Trophy, Camera } from 'lucide-react';

export default function DasborDampak() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F3EEE3] font-jakarta pb-32">
      {/* Header & Impact Section */}
      <div className="bg-[#1B4D3E] rounded-b-[40px] px-6 pt-5 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 -left-10 w-32 h-32 bg-[#D9714B]/20 rounded-full blur-2xl"></div>

        <div className="flex justify-between items-center mb-8 relative z-10">
          <div className="flex items-center gap-2">
            <h1 className="text-white font-extrabold text-xl tracking-widest">LOOPWEAR</h1>
            <span className="bg-[#C4ECCF] text-[#1B4D3E] px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#1B4D3E] rounded-full"></span> Komunitas
            </span>
          </div>
          <div className="text-[#D9714B] text-2xl">
            {/* Simple hanger icon via emoji/svg */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v4"/><path d="M22 17l-10-8-10 8"/><path d="M17 14v4"/><path d="M7 14v4"/><circle cx="12" cy="4" r="2"/></svg>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="flex flex-col items-center justify-center relative z-10 mb-8">
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Background Circle */}
            <svg className="absolute w-full h-full transform -rotate-90">
              <circle cx="72" cy="72" r="64" stroke="rgba(255,255,255,0.1)" strokeWidth="12" fill="none" />
              {/* Progress Circle (65%) */}
              <circle cx="72" cy="72" r="64" stroke="#D9714B" strokeWidth="12" fill="none" strokeDasharray="402" strokeDashoffset="140" strokeLinecap="round" className="transition-all duration-1000 ease-out" />
            </svg>
            <div className="text-center">
              <span className="text-white text-4xl font-extrabold block leading-none">65<span className="text-xl">%</span></span>
              <span className="text-white/80 text-[10px] font-bold tracking-widest mt-1 block">SIRKULAR</span>
            </div>
          </div>
          <h2 className="text-white font-bold mt-6 text-lg">Target Sirkular Bulan Ini</h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white mb-2 backdrop-blur-sm border border-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
            </div>
            <span className="text-white font-bold text-lg">12</span>
            <span className="text-white/60 text-[10px]">diputar</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white mb-2 backdrop-blur-sm border border-white/10 relative">
              {/* Dotted lines connecting stats */}
              <div className="absolute top-1/2 -left-8 w-6 border-t-2 border-dashed border-white/20"></div>
              <div className="absolute top-1/2 -right-8 w-6 border-t-2 border-dashed border-white/20"></div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 2v6h6"/></svg>
            </div>
            <span className="text-white font-bold text-lg">3</span>
            <span className="text-white/60 text-[10px]">dari limbah</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white mb-2 backdrop-blur-sm border border-white/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            </div>
            <span className="text-white font-bold text-lg">14,8</span>
            <span className="text-white/60 text-[10px]">kg CO₂e</span>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="text-[#C4ECCF] text-[10px] font-bold flex items-center justify-center gap-1 mx-auto bg-white/10 px-3 py-1 rounded-full">
            ⓘ Lihat sumber kalkulasi
          </button>
        </div>
      </div>

      {/* Main Action Cards */}
      <div className="px-6 -mt-10 relative z-20 flex gap-3 mb-6">
        <button onClick={() => navigate('/app/komunitas/lencana')} className="flex-1 bg-white rounded-3xl p-4 shadow-sm flex flex-col items-center justify-center border border-loopwear-grey/20 relative">
          <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#D9714B] rounded-full"></div>
          <div className="w-10 h-10 bg-[#FFF0E8] rounded-full flex items-center justify-center text-[#D9714B] mb-2">
            <Award size={20} />
          </div>
          <span className="font-bold text-[13px] text-loopwear-dark">Lencana</span>
          <span className="text-[9px] text-[#2E6F40] bg-[#E8F5E9] px-2 py-0.5 rounded-full mt-1 font-bold">6 / 18</span>
        </button>
        <button onClick={() => navigate('/app/komunitas/tantangan')} className="flex-1 bg-white rounded-3xl p-4 shadow-sm flex flex-col items-center justify-center border border-loopwear-grey/20 relative">
          <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#2E6F40] rounded-full"></div>
          <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center text-[#2E6F40] mb-2">
            <Trophy size={20} />
          </div>
          <span className="font-bold text-[13px] text-loopwear-dark">Tantangan</span>
          <span className="text-[9px] text-[#2E6F40] bg-[#C4ECCF] px-2 py-0.5 rounded-full mt-1 font-bold">1 aktif</span>
        </button>
        <button onClick={() => navigate('/app/komunitas/galeri')} className="flex-1 bg-white rounded-3xl p-4 shadow-sm flex flex-col items-center justify-center border border-loopwear-grey/20">
          <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center text-[#2E6F40] mb-2">
            <Camera size={20} />
          </div>
          <span className="font-bold text-[13px] text-loopwear-dark">Galeri</span>
          <span className="text-[9px] text-[#2E6F40] bg-[#C4ECCF] px-2 py-0.5 rounded-full mt-1 font-bold">Baru</span>
        </button>
      </div>

      {/* Impact Breakdown List */}
      <div className="px-6 mb-8">
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-loopwear-grey/20">
          <div className="flex items-start gap-3 mb-5 border-b border-loopwear-grey/20 pb-4">
             <div className="w-8 h-8 bg-[#E8F5E9] rounded-full flex items-center justify-center text-[#2E6F40] shrink-0">🏷️</div>
             <div className="flex-1">
                <div className="flex justify-between items-center">
                   <h3 className="font-bold text-[13px] text-loopwear-dark">Jual Preloved</h3>
                   <span className="text-[9px] text-[#2E6F40] font-bold bg-[#C4ECCF]/50 px-2 py-0.5 rounded">+6.5 kg CO₂ dicegah</span>
                </div>
                <p className="text-[10px] text-loopwear-muted mt-1 leading-snug">7 baju terjual • Uang saku tambahan dari baju layak</p>
             </div>
             <div className="text-loopwear-muted mt-2">›</div>
          </div>
          
          <div className="flex items-start gap-3 mb-5 border-b border-loopwear-grey/20 pb-4">
             <div className="w-8 h-8 bg-[#FFF0E8] rounded-full flex items-center justify-center text-[#D9714B] shrink-0">🔁</div>
             <div className="flex-1">
                <div className="flex justify-between items-center">
                   <h3 className="font-bold text-[13px] text-loopwear-dark">Sewa & Pinjam</h3>
                   <span className="text-[9px] text-[#D9714B] font-bold bg-[#FFF0E8] px-2 py-0.5 rounded">2.5x Lebih Lama</span>
                </div>
                <p className="text-[10px] text-loopwear-muted mt-1 leading-snug">2 baju pesta • Perpanjang umur pakai tanpa beli</p>
             </div>
             <div className="text-loopwear-muted mt-2">›</div>
          </div>

          <div className="flex items-start gap-3">
             <div className="w-8 h-8 bg-[#E8F5E9] rounded-full flex items-center justify-center text-[#2E6F40] shrink-0">♻️</div>
             <div className="flex-1">
                <div className="flex justify-between items-center">
                   <h3 className="font-bold text-[13px] text-loopwear-dark">Daur Ulang</h3>
                </div>
                <p className="text-[10px] text-loopwear-muted mt-1 leading-snug">3 potong rusak diproses jadi totebag & serat kain</p>
             </div>
             <div className="text-loopwear-muted mt-2">›</div>
          </div>
        </div>
      </div>

      {/* Share Button Overlay */}
      <div className="fixed bottom-28 left-6 right-6 z-40">
        <button className="w-full bg-[#D9714B] text-white font-bold py-3.5 rounded-full shadow-[0_8px_20px_rgba(217,113,75,0.3)] flex justify-center items-center gap-2 text-[14px]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          Bagikan Cerita Dampak ke Komunitas ✨
        </button>
        <p className="text-center text-[9px] text-loopwear-muted mt-2">Setiap cerita menginspirasi gerakan lemari sirkular lainnya.</p>
      </div>
    </div>
  );
}