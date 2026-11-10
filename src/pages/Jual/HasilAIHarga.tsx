import React from 'react';
import { 
  ArrowLeft, 
  User, 
  Check, 
  Package, 
  Store, 
  Camera, 
  Sparkles, 
  TrendingUp, 
  Grid, 
  Palette, 
  Leaf,
  Info,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Jika menggunakan react-router

const HasilAIHarga: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md mx-auto min-h-[100dvh] bg-[#FDFBF7] flex flex-col font-sans sm:border-x sm:border-gray-200 shadow-2xl overflow-hidden pb-8">
      
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4 bg-[#FDFBF7] sticky top-0 z-20 flex-shrink-0">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={22} className="text-gray-800" />
        </button>
        <h1 className="text-base font-bold text-gray-800 tracking-wide">
          Detail Pakaian
        </h1>
        <button className="p-1.5 rounded-full bg-[#203f35] text-white hover:bg-opacity-90 transition-colors">
          <User size={18} />
        </button>
      </header>

      {/* Main Scrollable Content */}
      <main className="flex-1 px-5 pt-2 flex flex-col overflow-y-auto overflow-x-hidden">
        
        {/* Stepper Progress */}
        <div className="flex items-center justify-between w-full px-4 mb-6 relative">
          {/* Garis background abu-abu */}
          <div className="absolute left-8 right-8 top-3.5 h-[3px] bg-gray-200 -z-10 rounded-full"></div>
          {/* Garis progress hijau tua (aktif) */}
          <div className="absolute left-8 right-[50%] top-3.5 h-[3px] bg-[#203f35] -z-10 rounded-full"></div>
          
          {/* Step 1: Pra-kurasi AI (Aktif) */}
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-7 h-7 rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
              <Check size={16} strokeWidth={3} />
            </div>
            <span className="text-[10px] font-bold text-gray-800">Pra-kurasi AI</span>
          </div>

          {/* Step 2: Kurasi */}
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-7 h-7 rounded-full bg-white border-2 border-gray-300 text-gray-400 flex items-center justify-center">
              <Package size={14} />
            </div>
            <span className="text-[10px] font-medium text-gray-400">Kurasi</span>
          </div>

          {/* Step 3: Tayang */}
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-7 h-7 rounded-full bg-white border-2 border-gray-300 text-gray-400 flex items-center justify-center">
              <Store size={14} />
            </div>
            <span className="text-[10px] font-medium text-gray-400">Tayang</span>
          </div>
        </div>

        {/* Image Card AI Lens */}
        <div className="relative w-full rounded-[24px] overflow-hidden bg-gray-200 aspect-[4/4.5] shadow-sm mb-5">
          <img 
            src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80"
            alt="Pakaian Terdeteksi" 
            className="w-full h-full object-cover"
          />
          
          {/* Badge Kiri Atas: Terverifikasi AI Lens */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <Check size={14} className="text-[#203f35]" strokeWidth={3} />
            <span className="text-[10px] font-bold text-gray-800">Terverifikasi AI Lens</span>
          </div>

          {/* Badge Kanan Atas: Kamera */}
          <button className="absolute top-4 right-4 w-8 h-8 bg-white/95 backdrop-blur rounded-full flex items-center justify-center shadow-sm">
            <Camera size={16} className="text-gray-700" />
          </button>

          {/* Overlay Bawah: Hasil Deteksi */}
          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                <Sparkles size={12} />
              </div>
              <span className="text-xs font-semibold text-gray-800 max-w-[140px] leading-tight">
                Hasil deteksi otomatis siap dikoreksi
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold text-[#203f35]">98%</span>
              <span className="text-[10px] text-gray-600">cocok</span>
            </div>
          </div>
        </div>

        {/* 3 Grid Info AI */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
              <Grid size={16} />
            </div>
            <span className="text-[9px] text-gray-500 font-bold mb-0.5 uppercase tracking-wider">Kategori</span>
            <span className="text-[11px] font-bold text-gray-800 text-center">Kemeja Kasual</span>
          </div>
          
          <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-2">
              <Palette size={16} />
            </div>
            <span className="text-[9px] text-gray-500 font-bold mb-0.5 uppercase tracking-wider">Warna</span>
            <span className="text-[11px] font-bold text-gray-800 text-center">Krem Hangat</span>
          </div>

          <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center shadow-sm">
            <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-2">
              <Leaf size={16} />
            </div>
            <span className="text-[9px] text-gray-500 font-bold mb-0.5 uppercase tracking-wider">Bahan</span>
            <span className="text-[11px] font-bold text-gray-800 text-center">Katun Linen</span>
          </div>
        </div>

        {/* Section Harga */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              Rekomendasi Algoritma Pasar
            </span>
            <div className="flex items-center gap-1 text-gray-600">
              <TrendingUp size={12} />
              <span className="text-[10px] font-medium">Cepat Laku</span>
            </div>
          </div>
          
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-3xl font-extrabold text-[#203f35]">Rp 175.000</span>
            <span className="text-xs font-semibold bg-gray-200/60 text-gray-600 px-2 py-1 rounded-md">
              Rentang: 150rb - 200rb
            </span>
          </div>
          
          {/* Visual Slider/Bar Harga */}
          <div className="w-full h-2.5 bg-gray-200 rounded-full relative overflow-hidden">
            {/* Range Hijau di tengah */}
            <div className="absolute left-[30%] right-[30%] top-0 bottom-0 bg-[#e0eae6] border-x border-[#203f35]"></div>
            {/* Titik Harga saat ini */}
            <div className="absolute left-[50%] top-0 bottom-0 w-1.5 bg-[#203f35] rounded-full shadow-sm"></div>
          </div>
        </div>

        {/* Tombol Lanjut ke Kurasi */}
        <button 
          onClick={() => navigate('/jual/verifikasi')}
          className="w-full bg-[#A84524] hover:bg-[#8e381b] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md mb-6"
        >
          Lanjut ke Kurasi <ArrowRight size={18} />
        </button>

        {/* Rincian Estimasi Pencairan */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
          <p className="text-[10px] text-gray-500 font-medium mb-1">
            Tahap berikutnya: Pilih opsi tukar (Putar) atau jual langsung
          </p>
          <div className="flex items-center gap-1.5 mb-4">
            <Store size={16} className="text-gray-700" />
            <h3 className="text-sm font-bold text-gray-800">Rincian Estimasi Pencairan</h3>
          </div>

          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-gray-600 font-medium">Harga Penjualan Pakaian</span>
            <span className="text-sm font-bold text-gray-800">Rp 175.000</span>
          </div>

          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-1 text-gray-600">
              <span className="text-xs font-medium">Biaya Layanan Rekber (5%)</span>
              <Info size={12} className="text-gray-400" />
            </div>
            <span className="text-sm font-bold text-red-500">-Rp 8.750</span>
          </div>

          {/* Kotak Hasil Bersih */}
          <div className="bg-[#f0f7f4] rounded-2xl p-4 flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#203f35]">Estimasi Bersih Masuk Saldo</span>
              <span className="text-[10px] text-[#203f35]/70">Langsung cair via QRIS/BCA</span>
            </div>
            <span className="text-base font-extrabold text-[#203f35]">Rp 166.250</span>
          </div>
        </div>

      </main>
    </div>
  );
};

export default HasilAIHarga;