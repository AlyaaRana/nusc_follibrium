import React from 'react';
import { 
  ArrowLeft, 
  User, 
  Check, 
  Sun,
  PenLine,
  XCircle,
  Recycle,
  ChevronRight,
  ArrowRight,
  Scan
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { dummyPengajuan } from '../../data/dummyDaurUlang';

const PengajuanDaurUlang: React.FC = () => {
  const navigate = useNavigate();

  // Pola ketebalan garis untuk simulasi barcode agar terlihat realistis
  const barcodePattern = [3, 1, 4, 2, 1, 1, 3, 2, 2, 1, 4, 1, 3, 2, 1, 2, 1, 1, 4, 2, 1, 3, 2, 2, 1, 1, 4, 2, 1, 3, 1, 2, 3, 1, 2, 1];

  return (
    <div className="w-full max-w-md mx-auto min-h-[100dvh] bg-[#FDFBF7] flex flex-col font-sans sm:border-x sm:border-gray-200 shadow-2xl overflow-hidden">
      
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4 bg-[#FDFBF7] sticky top-0 z-20 flex-shrink-0">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={22} className="text-gray-800" />
        </button>
        <div className="flex items-center gap-2">
          <Recycle size={18} className="text-[#203f35]" />
          <h1 className="text-base font-bold text-gray-800 tracking-wide">
            Recycling Intake Form
          </h1>
        </div>
        <button className="p-1.5 rounded-full bg-[#203f35] text-white hover:bg-opacity-90 transition-colors">
          <User size={18} />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-5 pt-2 pb-8 flex flex-col overflow-y-auto">
        
        {/* Stepper (4 Langkah) */}
        <div className="flex items-start justify-between w-full px-2 mb-6 relative">
          <div className="absolute left-6 right-6 top-3 h-[2px] bg-gray-200 -z-10"></div>
          <div className="absolute left-6 right-[75%] top-3 h-[2px] bg-[#203f35] -z-10"></div>
          
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-6 h-6 rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
              <Check size={14} strokeWidth={3} />
            </div>
            <span className="text-[9px] font-bold text-gray-800">Diajukan</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <span className="text-[9px] font-medium text-gray-400">Diserahkan</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <span className="text-[9px] font-medium text-gray-400">Diproses</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
            <span className="text-[9px] font-medium text-gray-400">Produk Baru</span>
          </div>
        </div>

        {/* Gambar & Material */}
        <div className="relative w-full rounded-[20px] overflow-hidden bg-gray-200 aspect-[4/3] shadow-sm mb-4">
          <img 
            src={dummyPengajuan.imageUrl} 
            alt="Pakaian" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1.5 rounded-md flex items-center gap-1.5 shadow-sm">
            <span className="text-[10px] font-bold text-gray-800">Dugaan bahan dari foto</span>
          </div>
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
            <Sun size={12} className="text-[#203f35]" />
            <span className="text-[10px] font-bold text-gray-800">{dummyPengajuan.kualitasCahaya}</span>
          </div>
        </div>

        {/* Info Bahan */}
        <div className="bg-[#eaf2ef] rounded-xl p-3 flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-[#203f35]">
            <Recycle size={16} />
            <span className="text-xs text-gray-600">Bahan: <span className="font-bold text-gray-800">{dummyPengajuan.bahan}</span></span>
          </div>
          <button className="bg-white p-1.5 rounded-full shadow-sm"><PenLine size={12} className="text-[#203f35]" /></button>
        </div>

        {/* Penilaian AI Card */}
        <div className="bg-white rounded-[24px] p-4 shadow-sm border border-gray-100 mb-6 relative overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-2">
              <User size={16} className="text-[#203f35]" /> Penilaian AI LOOPWEAR
            </h3>
            <span className="text-[9px] font-bold text-[#203f35] bg-[#eaf2ef] px-2 py-1 rounded-md">
              Terverifikasi
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* Kondisi Fisik - Background Merah */}
            <div className="flex items-center gap-3 bg-red-50 rounded-xl p-3">
              <div className="w-6 h-6 rounded-full bg-white text-red-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-red-100">
                <XCircle size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-medium text-gray-700">Kondisi Serat Fisik</span>
                <span className="text-[11px] font-bold text-red-700">{dummyPengajuan.kondisiFisik}</span>
              </div>
            </div>
            
            {/* Rekomendasi - Background Hijau */}
            <div className="flex items-center gap-3 bg-[#eaf2ef] rounded-xl p-3">
              <div className="w-6 h-6 rounded-full bg-white text-[#203f35] flex items-center justify-center flex-shrink-0 shadow-sm border border-[#d1e0d9]">
                <Recycle size={14} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-medium text-gray-700">Rekomendasi Sirkularitas</span>
                <span className="text-[11px] font-bold text-[#203f35]">{dummyPengajuan.rekomendasi}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100">
            <button className="flex justify-between items-center w-full text-[10px] text-gray-500 font-medium hover:text-gray-800 transition-colors">
              Masih ingin menjual atau menyewakan? <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Tombol Lanjut */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <button 
            onClick={() => navigate('/daur-ulang/titik-kumpul')}
            className="w-full bg-[#A84524] hover:bg-[#8e381b] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md"
          >
            Lanjut Penyerahan <ArrowRight size={16} />
          </button>
          <div className="flex items-center gap-1.5 text-[10px] text-[#203f35] font-medium bg-[#eaf2ef] px-3 py-1 rounded-full">
            <span className="w-3 h-3 rounded-full bg-[#A84524] text-white flex items-center justify-center text-[8px] font-bold">$</span>
            <span>Perkiraan <span className="font-bold">+{dummyPengajuan.estimasiPoin} Poin</span> setelah verifikasi</span>
          </div>
        </div>

        {/* Area Barcode dengan Background Hijau Muda */}
        <div className="bg-[#e8f2ee] rounded-[24px] p-5 shadow-sm border border-[#dbece5] flex flex-col items-center justify-center text-center">
          <span className="text-xl font-extrabold tracking-[0.15em] text-[#1a3028] mb-3">
            # P T R - 8 8 2 1
          </span>
          
          {/* Card Putih untuk Barcode */}
          <div className="bg-white w-full rounded-[16px] p-4 shadow-sm flex flex-col items-center">
            
            {/* Simulasi Barcode Realistis */}
            <div className="flex justify-center items-center h-14 w-full mb-3">
              {barcodePattern.map((width, index) => (
                <div 
                  key={index} 
                  className="h-full bg-[#111] mx-[1px]" 
                  style={{ width: `${width * 1.5}px` }}
                ></div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-1.5 text-gray-700">
              <Scan size={14} />
              <span className="text-[10px] font-bold">
                Scan barcode ini di Drop-box Loker Pintar
              </span>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default PengajuanDaurUlang;