import React from 'react';
import { 
  ArrowLeft, 
  User, 
  Check, 
  Package, 
  Store, 
  ShieldCheck, 
  Sparkles, 
  Leaf, 
  Camera, 
  RefreshCw, 
  Activity, 
  Wallet, 
  ClipboardCheck, 
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VerifikasiKurasi: React.FC = () => {
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
          Verifikasi Kurasi
        </h1>
        <button className="p-1.5 rounded-full bg-[#203f35] text-white hover:bg-opacity-90 transition-colors">
          <User size={18} />
        </button>
      </header>

      {/* Main Scrollable Content */}
      <main className="flex-1 px-5 pt-2 flex flex-col overflow-y-auto overflow-x-hidden">
        
        {/* Sub-header Standar Mutu */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-1.5 bg-[#eaf2ef] px-3 py-1.5 rounded-full">
            <ShieldCheck size={14} className="text-[#203f35]" />
            <span className="text-[10px] font-bold text-[#203f35]">Standar Mutu LOOPWEAR</span>
          </div>
          <span className="text-[10px] font-medium text-gray-500">ID: #LP-8842</span>
        </div>

        {/* Stepper Progress */}
        <div className="flex items-center justify-between w-full px-4 mb-6 relative">
          {/* Garis background abu-abu penuh */}
          <div className="absolute left-8 right-8 top-3.5 h-[3px] bg-gray-200 -z-10 rounded-full"></div>
          {/* Garis progress hijau tua (aktif s.d Kurasi) */}
          <div className="absolute left-8 right-[50%] top-3.5 h-[3px] bg-[#203f35] -z-10 rounded-full"></div>
          
          {/* Step 1: Pra-kurasi AI (Selesai) */}
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-7 h-7 rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
              <Check size={16} strokeWidth={3} />
            </div>
            <span className="text-[10px] font-bold text-gray-800">Pra-kurasi AI</span>
          </div>

          {/* Step 2: Kurasi (Aktif) */}
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-7 h-7 rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
              <Package size={14} />
            </div>
            <span className="text-[10px] font-bold text-gray-800">Kurasi</span>
          </div>

          {/* Step 3: Tayang (Belum) */}
          <div className="flex flex-col items-center gap-1.5 bg-[#FDFBF7] px-1">
            <div className="w-7 h-7 rounded-full bg-white border-2 border-gray-300 text-gray-400 flex items-center justify-center">
              <Store size={14} />
            </div>
            <span className="text-[10px] font-medium text-gray-400">Tayang</span>
          </div>
        </div>

        {/* Image Card Pakaian */}
        <div className="relative w-full rounded-[24px] overflow-hidden bg-gray-200 aspect-[4/4] shadow-sm mb-6">
          <img 
            src="https://images.unsplash.com/photo-1434389678278-be43e4ff6482?auto=format&fit=crop&w=600&q=80" 
            alt="Pakaian Terverifikasi" 
            className="w-full h-full object-cover"
          />
          
          {/* Badge Kiri Atas */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <ShieldCheck size={14} className="text-[#203f35]" />
            <span className="text-[10px] font-bold text-gray-800">Orisinal Terverifikasi</span>
          </div>

          {/* Badge Kanan Atas */}
          <div className="absolute top-4 right-4 bg-[#eaf2ef]/95 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <Sparkles size={12} className="text-[#203f35]" />
            <span className="text-[10px] font-bold text-[#203f35]">98% Cocok</span>
          </div>

          {/* Overlay Bawah: Nama & Size */}
          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center shadow-sm">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-800 leading-tight mb-1">
                Uniqlo U Vintage Boxy Overshirt
              </span>
              <span className="text-[11px] text-gray-500">
                Size L • Earth Terracotta Neutral
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#eaf2ef] flex items-center justify-center flex-shrink-0">
              <Check size={16} strokeWidth={3} className="text-[#203f35]" />
            </div>
          </div>
        </div>

        {/* Section: Tingkat Kondisi */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold text-gray-800">Tingkat Kondisi</h3>
            <span className="text-[10px] font-medium text-[#203f35]">Kurasi Terkunci</span>
          </div>
          
          <div className="bg-[#203f35] rounded-2xl p-4 flex items-center gap-4 shadow-sm mb-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
              <Leaf size={20} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-lg font-extrabold text-white">Prima</span>
                <span className="bg-[#eaf2ef] text-[#203f35] text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider">
                  A+ GRADE
                </span>
              </div>
              <span className="text-[11px] text-white/80">
                Ditetapkan kurator LOOPWEAR
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1.5 bg-[#eaf2ef] px-2.5 py-1 rounded-md">
              <Camera size={12} className="text-[#203f35]" />
              <span className="text-[10px] font-bold text-[#203f35]">Dicek lewat foto</span>
            </div>
          </div>
        </div>

        {/* Tombol Setujui Harga & Tayangkan */}
        <button 
          onClick={() => navigate('/jual/siap-tayang')}
          className="w-full bg-[#8C3A21] hover:bg-[#732f1a] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md mb-6"
        >
          <RefreshCw size={16} />
          Setujui Harga & Tayangkan
        </button>

        {/* 2 Grid Info: Skor AI & Estimasi Cair */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-bold text-gray-500">Skor AI</span>
              <div className="w-6 h-6 rounded-full bg-[#eaf2ef] flex items-center justify-center text-[#203f35]">
                <Activity size={12} />
              </div>
            </div>
            <div>
              <span className="text-2xl font-extrabold text-[#203f35] block mb-1">98%</span>
              <span className="text-[10px] font-medium text-gray-500">Akurasi serat & jahitan</span>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-bold text-gray-500">Estimasi Cair</span>
              <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-[#8C3A21]">
                <Wallet size={12} />
              </div>
            </div>
            <div>
              <span className="text-lg font-extrabold text-[#8C3A21] block mb-1">Rp 166.250</span>
              <span className="text-[10px] font-medium text-gray-500">Bersih ke rekening dompet</span>
            </div>
          </div>
        </div>

        {/* Rincian Standar Kurasi */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <ClipboardCheck size={18} className="text-[#203f35]" />
              <h3 className="text-sm font-bold text-gray-800">Rincian Standar Kurasi</h3>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <span className="text-[10px] font-bold">4 Parameter</span>
              <ChevronDown size={14} />
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* Item 1 */}
            <div className="bg-[#f0f7f4] rounded-xl p-3.5 flex gap-3 items-start">
              <CheckCircle2 size={16} className="text-[#203f35] mt-0.5 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800 mb-1">Bebas Noda & Bau Apek</span>
                <span className="text-[10px] text-gray-600 leading-relaxed">
                  Kain segar, tanpa discoloration pada kerah dan manset.
                </span>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="bg-[#f0f7f4] rounded-xl p-3.5 flex gap-3 items-start">
              <CheckCircle2 size={16} className="text-[#203f35] mt-0.5 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800 mb-1">Kancing & Resleting Utuh</span>
                <span className="text-[10px] text-gray-600 leading-relaxed">
                  Semua kancing orisinal terpasang presisi tanpa cacat mekanik.
                </span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-[#f0f7f4] rounded-xl p-3.5 flex gap-3 items-start">
              <CheckCircle2 size={16} className="text-[#203f35] mt-0.5 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800 mb-1">Label Tag Asli Terbaca</span>
                <span className="text-[10px] text-gray-600 leading-relaxed">
                  Tag kerah dan petunjuk cuci terbaca jelas menandakan autentik.
                </span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="bg-[#f0f7f4] rounded-xl p-3.5 flex gap-3 items-start">
              <CheckCircle2 size={16} className="text-[#203f35] mt-0.5 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800 mb-1">Bahan Tidak Melar / Sobek</span>
                <span className="text-[10px] text-gray-600 leading-relaxed">
                  Struktur jahitan benang kuat tanpa benang lepas atau lobang halus.
                </span>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default VerifikasiKurasi;