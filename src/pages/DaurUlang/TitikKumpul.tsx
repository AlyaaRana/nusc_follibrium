import React, { useState } from 'react';
import { 
  ArrowLeft, 
  User, 
  Check, 
  Package, 
  Recycle, 
  Archive, 
  Truck, 
  MapPin, 
  QrCode, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { dummyTitikKumpul } from '../../data/dummyDaurUlang';

const TitikKumpul: React.FC = () => {
  const navigate = useNavigate();
  // State untuk memilih metode penyerahan
  const [metode, setMetode] = useState<'antar' | 'jemput'>('antar');

  // Mengambil data titik kumpul dari file dummy
  const titik = dummyTitikKumpul[0];

  return (
    <div className="w-full max-w-md mx-auto min-h-[100dvh] bg-[#FDFBF7] flex flex-col font-sans sm:border-x sm:border-gray-200 shadow-2xl overflow-hidden relative">
      
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
            Drop Off Station Locator
          </h1>
        </div>
        <button className="p-1.5 rounded-full bg-[#203f35] text-white hover:bg-opacity-90 transition-colors">
          <User size={18} />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-5 pt-2 pb-24 flex flex-col overflow-y-auto">
        
        {/* Stepper Progress */}
        <div className="flex items-start justify-between w-full px-2 mb-8 relative">
          {/* Garis background abu-abu penuh */}
          <div className="absolute left-6 right-6 top-3 h-[2px] bg-gray-200 -z-10"></div>
          {/* Garis progress (Hijau tua untuk step 1, Merah bata untuk step 2) */}
          <div className="absolute left-6 right-[75%] top-3 h-[2px] bg-[#203f35] -z-10"></div>
          <div className="absolute left-[25%] right-[50%] top-3 h-[2px] bg-[#A84524] -z-10"></div>
          
          {/* Step 1: Diajukan (Selesai) */}
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-6 h-6 rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
              <Check size={14} strokeWidth={3} />
            </div>
            <span className="text-[9px] font-bold text-gray-400">Diajukan</span>
          </div>
          {/* Step 2: Diserahkan (Aktif) */}
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-8 h-8 rounded-full bg-[#fdece8] text-[#A84524] flex items-center justify-center -mt-1 shadow-sm border border-[#f9d7cf]">
              <Package size={16} className="fill-[#A84524] text-white" />
            </div>
            <span className="text-[9px] font-bold text-[#A84524]">Diserahkan</span>
          </div>
          {/* Step 3: Diproses (Belum) */}
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            </div>
            <span className="text-[9px] font-medium text-gray-400">Diproses</span>
          </div>
          {/* Step 4: Produk Baru (Belum) */}
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            </div>
            <span className="text-[9px] font-medium text-gray-400">Produk Baru</span>
          </div>
        </div>

        {/* Judul & Badge */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 bg-[#eaf2ef] w-max px-2.5 py-1 rounded-md mb-3">
            <Recycle size={12} className="text-[#203f35]" />
            <span className="text-[9px] font-bold text-[#203f35] tracking-wide">Siklus Serat Sirkular</span>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-800 mb-1 tracking-tight">Metode Penyerahan</h2>
          <p className="text-xs text-gray-500 font-medium">Pilih cara serah pakaian</p>
        </div>

        {/* Opsi Metode */}
        <div className="flex flex-col gap-3 mb-8">
          {/* Opsi 1: Antar ke titik kumpul */}
          <div 
            onClick={() => setMetode('antar')}
            className={`relative flex items-center justify-between p-4 rounded-[16px] cursor-pointer transition-all border ${
              metode === 'antar' 
                ? 'bg-white border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]' 
                : 'bg-[#eaf2ef]/60 border-transparent hover:bg-[#eaf2ef]'
            }`}
          >
            {metode === 'antar' && (
              <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#A84524] rounded-r-md"></div>
            )}
            <div className="flex items-center gap-4 pl-2">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                metode === 'antar' ? 'bg-[#eaf2ef] text-[#203f35]' : 'bg-white text-gray-400'
              }`}>
                <Archive size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-800">Antar ke titik kumpul</span>
                <span className="text-[11px] text-gray-500 mt-0.5">Kampus UI Depok & ITB Ganesha</span>
              </div>
            </div>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              metode === 'antar' ? 'bg-[#A84524] text-white' : 'bg-gray-200'
            }`}>
              {metode === 'antar' && <Check size={12} strokeWidth={4} />}
            </div>
          </div>

          {/* Opsi 2: Jemput */}
          <div 
            onClick={() => setMetode('jemput')}
            className={`flex items-center justify-between p-4 rounded-[16px] cursor-pointer transition-all border ${
              metode === 'jemput' 
                ? 'bg-white border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]' 
                : 'bg-[#eaf2ef]/50 border-transparent hover:bg-[#eaf2ef]'
            }`}
          >
            {metode === 'jemput' && (
              <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#A84524] rounded-r-md"></div>
            )}
            <div className="flex items-center gap-4 pl-2">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                metode === 'jemput' ? 'bg-[#eaf2ef] text-[#203f35]' : 'bg-transparent border border-gray-200 text-gray-500'
              }`}>
                <Truck size={20} />
              </div>
              <div className="flex flex-col">
                <span className={`text-sm font-bold ${metode === 'jemput' ? 'text-gray-800' : 'text-gray-600'}`}>
                  Jemput
                </span>
                <span className="text-[11px] text-gray-400 mt-0.5">Jemput tersedia sesuai kota</span>
              </div>
            </div>
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
              metode === 'jemput' ? 'bg-[#A84524] text-white' : 'bg-[#dbe7e2]'
            }`}>
              {metode === 'jemput' && <Check size={12} strokeWidth={4} />}
            </div>
          </div>
        </div>

        {/* Card Lokasi (Hanya muncul jika pilih 'antar') */}
        {metode === 'antar' && (
          <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-100 mb-6">
            <div className="p-4 flex justify-between items-center bg-[#f0f7f4]/50 border-b border-gray-50">
              <div className="flex items-center gap-2 text-[#203f35]">
                <MapPin size={18} fill="currentColor" className="text-white border-[#203f35] stroke-[#203f35] stroke-2" />
                <h3 className="text-sm font-bold text-gray-800">{titik.nama}</h3>
              </div>
              <div className="bg-[#203f35] text-white text-[10px] font-bold px-2 py-1 rounded-md">
                {titik.jarak}
              </div>
            </div>
            
            <div className="relative w-full aspect-[16/9] bg-gray-200">
              <img 
                src={titik.imageUrl} 
                alt="Lokasi Loker" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 size={12} className="text-[#203f35]" />
                <span className="text-[10px] font-bold text-gray-800">{titik.tipe}</span>
              </div>
              <div className="absolute bottom-3 left-3 bg-[#111]/70 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                <span className="text-[10px] text-white font-medium">{titik.fitur[0]}</span>
              </div>
            </div>

            <div className="p-4 flex justify-between items-center text-[#203f35] bg-[#fdfdfc]">
              <div className="flex items-center gap-2">
                <QrCode size={18} />
                <span className="text-[11px] font-medium text-gray-600">{titik.fitur[1]}</span>
              </div>
              <span className="text-[11px] font-bold cursor-pointer hover:underline">Petunjuk Arah</span>
            </div>
          </div>
        )}

      </main>

      {/* Area Tombol Konfirmasi (Sticky di bawah) */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7] to-transparent pt-10">
        <button 
          onClick={() => navigate('/daur-ulang/peta-perjalanan')}
          className="w-full bg-[#A84524] hover:bg-[#8e381b] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-red-900/10"
        >
          Konfirmasi Penyerahan <ArrowRight size={18} />
        </button>
      </div>

    </div>
  );
};

export default TitikKumpul;