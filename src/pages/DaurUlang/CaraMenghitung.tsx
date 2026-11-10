import React, { useState } from 'react';
import { 
  ArrowLeft, 
  User, 
  ShieldCheck, 
  Cloud, 
  Droplet, 
  Recycle, 
  ExternalLink, 
  CheckCircle2, 
  FlaskConical,
  Scale,
  Calculator
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CaraMenghitung: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'semua' | 'lca' | 'mitra'>('semua');

  return (
    <div className="w-full max-w-md mx-auto min-h-[100dvh] bg-[#FDFBF7] flex flex-col font-sans sm:border-x sm:border-gray-200 shadow-2xl overflow-hidden relative">
      
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4 bg-[#FDFBF7] sticky top-0 z-30 flex-shrink-0">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={22} className="text-gray-800" />
        </button>
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-[#203f35]" />
          <h1 className="text-sm font-bold text-gray-800 tracking-wide">
            Impact Certificate
          </h1>
        </div>
        <button className="p-1.5 rounded-full bg-[#203f35] text-white hover:bg-opacity-90 transition-colors">
          <User size={18} />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-5 pt-2 pb-8 flex flex-col overflow-y-auto overflow-x-hidden">
        
        {/* Top Badges */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1.5 bg-[#eaf2ef] px-3 py-1 rounded-full">
            <ShieldCheck size={12} className="text-[#203f35]" />
            <span className="text-[10px] font-bold text-[#203f35]">Transparansi Metrik</span>
          </div>
          <span className="text-[10px] font-bold text-gray-400">AUDIT V2.4</span>
        </div>

        {/* Formula Box (Dark Green Card) */}
        <div className="bg-[#203f35] rounded-[24px] p-5 text-white mb-6 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2 text-white/80">
              <Calculator size={14} />
              <span className="text-[10px] font-bold tracking-wider uppercase">Formula Perhitungan Sirkular</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          </div>

          <h3 className="text-base font-extrabold mb-4">Setiap Serat Divalidasi Ilmiah</h3>

          {/* Formula Equation Grid */}
          <div className="grid grid-cols-5 gap-2 items-center bg-black/20 rounded-2xl p-3 mb-4 text-center">
            <div className="col-span-1 bg-white/10 rounded-xl p-2 flex flex-col items-center justify-center">
              <Scale size={16} className="mb-1 text-emerald-300" />
              <span className="text-[10px] font-bold">Massa (kg)</span>
              <span className="text-[8px] text-white/60">Pakaian</span>
            </div>
            <div className="col-span-1 text-center font-bold text-white/60">×</div>
            <div className="col-span-1 bg-white/10 rounded-xl p-2 flex flex-col items-center justify-center">
              <FlaskConical size={16} className="mb-1 text-emerald-300" />
              <span className="text-[10px] font-bold">Koefisien</span>
              <span className="text-[8px] text-white/60">LCA Emisi</span>
            </div>
            <div className="col-span-1 text-center font-bold text-white/60">=</div>
            <div className="col-span-1 bg-[#A84524] rounded-xl p-2 flex flex-col items-center justify-center shadow-inner">
              <Cloud size={16} className="mb-1 text-white" />
              <span className="text-[10px] font-bold">Dampak</span>
              <span className="text-[8px] text-white/80">Terselamatkan</span>
            </div>
          </div>

          <p className="text-[10px] text-white/70 leading-relaxed">
            Dihitung otomatis saat pakaian dipindai AI & diserahkan.
          </p>
        </div>

        {/* Tabs Filter */}
        <div className="flex gap-2 mb-6 bg-gray-200/60 p-1 rounded-full">
          <button 
            onClick={() => setActiveTab('semua')}
            className={`flex-1 py-2 rounded-full text-[11px] font-bold transition-all ${
              activeTab === 'semua' ? 'bg-white text-[#203f35] shadow-sm' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Semua Parameter (3)
          </button>
          <button 
            onClick={() => setActiveTab('lca')}
            className={`flex-1 py-2 rounded-full text-[11px] font-bold transition-all ${
              activeTab === 'lca' ? 'bg-white text-[#203f35] shadow-sm' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Metodologi LCA
          </button>
          <button 
            onClick={() => setActiveTab('mitra')}
            className={`flex-1 py-2 rounded-full text-[11px] font-bold transition-all ${
              activeTab === 'mitra' ? 'bg-white text-[#203f35] shadow-sm' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            Mitra Verifi
          </button>
        </div>

        {/* METRIK 01: Jejak Karbon */}
        <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-4 border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#eaf2ef] text-[#203f35] flex items-center justify-center">
                <Cloud size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">Metrik 01</span>
                <h4 className="text-xs font-bold text-gray-800">Jejak Karbon (CO₂e)</h4>
              </div>
            </div>
            <span className="bg-[#eaf2ef] text-[#203f35] text-[9px] font-bold px-2.5 py-1 rounded-full">
              Terbuka
            </span>
          </div>

          <div className="flex justify-between items-baseline mb-2">
            <span className="text-xl font-extrabold text-[#203f35]">~4,0 kg CO₂e</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Tereduksi</span>
          </div>

          <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
            Dihindari untuk setiap 1 kg tekstil katun yang didaur ulang alih-alih berakhir membusuk di TPA terbuka.
          </p>

          <div className="flex items-center gap-2 text-[11px] text-gray-600 bg-[#FDFBF7] p-2.5 rounded-xl mb-4 border border-gray-100">
            <span className="text-sm">⚡</span>
            <span>Setara absorpsi berkendara motor listrik <strong className="text-gray-800">24 km</strong></span>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <span className="text-[10px] text-gray-400 font-medium">WRAP & UNEP Textile Metric</span>
            <button className="flex items-center gap-1 text-[11px] font-bold text-[#203f35] hover:underline">
              Buka Sumber <ExternalLink size={12} />
            </button>
          </div>
        </div>

        {/* METRIK 02: Konservasi Air Bersih */}
        <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-4 border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <Droplet size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">Metrik 02</span>
                <h4 className="text-xs font-bold text-gray-800">Konservasi Air Bersih</h4>
              </div>
            </div>
            <span className="bg-[#eaf2ef] text-[#203f35] text-[9px] font-bold px-2.5 py-1 rounded-full">
              Terbuka
            </span>
          </div>

          <div className="flex justify-between items-baseline mb-2">
            <span className="text-xl font-extrabold text-blue-600">~2.300 Liter</span>
            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Terselamatkan</span>
          </div>

          <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
            Menghilangkan beban ekstraksi air tawar baku serta limbah kimia pewarnaan untuk satu potong kemeja katun baru.
          </p>

          <div className="flex items-center gap-2 text-[11px] text-gray-600 bg-[#FDFBF7] p-2.5 rounded-xl mb-4 border border-gray-100">
            <span className="text-sm">💧</span>
            <span>Cukup untuk kebutuhan hidrasi <strong className="text-gray-800">1.150 hari</strong> mahasiswa</span>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <span className="text-[10px] text-gray-400 font-medium">Water Footprint Network</span>
            <button className="flex items-center gap-1 text-[11px] font-bold text-[#203f35] hover:underline">
              Buka Sumber <ExternalLink size={12} />
            </button>
          </div>
        </div>

        {/* METRIK 03: Penyelamatan Serat */}
        <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-4 border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Recycle size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">Metrik 03</span>
                <h4 className="text-xs font-bold text-gray-800">Penyelamatan Serat</h4>
              </div>
            </div>
            <span className="bg-[#eaf2ef] text-[#203f35] text-[9px] font-bold px-2.5 py-1 rounded-full">
              Terbuka
            </span>
          </div>

          <div className="flex justify-between items-baseline mb-2">
            <span className="text-lg font-extrabold text-[#203f35]">100% Zero-Landfill</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Regenerasi</span>
          </div>

          <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
            Pakaian yang rusak dipilah mekanis oleh mitra lokal menjadi insulasi akustik, geotextile, atau benang pintal daur ulang.
          </p>

          <div className="flex items-center gap-2 text-[11px] text-gray-600 bg-[#FDFBF7] p-2.5 rounded-xl mb-4 border border-gray-100">
            <span className="text-sm">♻️</span>
            <span>Rata-rata 1 setelan diubah menjadi <strong className="text-gray-800">1 Tote Bag sirkular</strong></span>
          </div>

          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <span className="text-[10px] text-gray-400 font-medium">Ellen MacArthur Foundation</span>
            <button className="flex items-center gap-1 text-[11px] font-bold text-[#203f35] hover:underline">
              Buka Sumber <ExternalLink size={12} />
            </button>
          </div>
        </div>

        {/* Laboratorium Rekan Card */}
        <div className="bg-[#eaf2ef] rounded-[24px] p-4 flex items-center gap-4 mb-4 shadow-sm border border-[#dbece5]">
          <div className="w-12 h-12 rounded-2xl bg-gray-200 overflow-hidden flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=200&q=80" alt="Lab" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-[#203f35] mb-0.5">
              <ShieldCheck size={12} />
              <span className="text-[9px] font-bold tracking-wider uppercase">LABORATORIUM REKAN</span>
            </div>
            <h4 className="text-xs font-bold text-gray-800">Pusat Riset Material Tekstil ITB & UI</h4>
            <p className="text-[10px] text-gray-500">Pengujian komposisi berkala setiap kuartal.</p>
          </div>
        </div>

        {/* Komitmen Transparansi Terbuka */}
        <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-6 border border-gray-100">
          <div className="flex items-center gap-2 mb-2 text-[#203f35]">
            <CheckCircle2 size={16} />
            <h4 className="text-xs font-bold text-gray-800">Komitmen Transparansi Terbuka</h4>
          </div>
          <p className="text-[10px] text-gray-500 leading-relaxed">
            Angka yang disajikan merupakan estimasi konservatif bersumber dari basis data publik terakreditasi internasional. Tidak ada klaim hijau yang dilebih-lebihkan.
          </p>
        </div>

        {/* Tombol Selesai / Mengerti */}
        <div className="flex flex-col items-center">
          <button 
            onClick={() => navigate('/beranda')}
            className="w-full bg-[#A84524] hover:bg-[#8e381b] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md mb-3"
          >
            Mengerti & Kembali
          </button>
          
          <button className="text-[10px] text-gray-400 hover:text-gray-600 transition-colors">
            Ingin mengusulkan metode hitung baru? <span className="underline font-semibold text-gray-600">Kirim masukan riset</span>
          </button>
        </div>

      </main>
    </div>
  );
};

export default CaraMenghitung;