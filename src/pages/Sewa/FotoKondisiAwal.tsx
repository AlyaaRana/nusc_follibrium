import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Check, 
  Sun,
  Camera,
  CheckCircle2,
  Circle,
  Maximize,
  Focus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const fotoPanduanSewa = [
  { id: 'depan', label: 'Depan' },
  { id: 'belakang', label: 'Belakang' },
  { id: 'label', label: 'Label' },
  { id: 'detail', label: 'Detail' }
];

const FotoKondisiAwal: React.FC = () => {
  const navigate = useNavigate();
  // State untuk melacak foto ke berapa yang sedang diambil (0 sampai 3)
  const [activePhotoStep, setActivePhotoStep] = useState(0);

  const handleAmbilFoto = () => {
    if (activePhotoStep < fotoPanduanSewa.length - 1) {
      setActivePhotoStep(prev => prev + 1);
    }
  };

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
        <h1 className="text-sm font-bold text-gray-800 tracking-wide absolute left-1/2 -translate-x-1/2">
          Sewakan Pakaian
        </h1>
        <div className="w-8"></div> {/* Spacer untuk keseimbangan flex */}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden">
        <div className="px-5 pt-2 pb-6 flex flex-col flex-1">
          
          {/* Stepper Card */}
          <div className="bg-white rounded-[20px] py-4 px-2 shadow-sm mb-6 border border-gray-100">
            <div className="flex items-start justify-between w-full relative">
              {/* Garis background abu-abu */}
              <div className="absolute left-8 right-8 top-[11px] h-[1.5px] bg-gray-200 -z-10"></div>
              
              {/* Step 1 (Aktif) */}
              <div className="flex flex-col items-center gap-1.5 bg-white px-2">
                <div className="w-[22px] h-[22px] rounded-full bg-[#A84524] text-white flex items-center justify-center shadow-sm">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-[9px] font-bold text-[#A84524]">Diajukan</span>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center gap-1.5 bg-white px-2">
                <div className="w-[22px] h-[22px] rounded-full bg-[#e8ecea] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#a3b1ab]"></div>
                </div>
                <span className="text-[9px] font-medium text-gray-400">Diserahkan</span>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center gap-1.5 bg-white px-2">
                <div className="w-[22px] h-[22px] rounded-full bg-[#e8ecea] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#a3b1ab]"></div>
                </div>
                <span className="text-[9px] font-medium text-gray-400">Diproses</span>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center gap-1.5 bg-white px-2">
                <div className="w-[22px] h-[22px] rounded-full bg-[#e8ecea] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#a3b1ab]"></div>
                </div>
                <span className="text-[9px] font-medium text-gray-400">Siap Sewa</span>
              </div>
            </div>
          </div>

          {/* Camera Viewfinder */}
          <div className="relative w-full rounded-[24px] overflow-hidden bg-gray-200 aspect-[3/4.2] shadow-sm mb-6 flex-shrink-0 border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80" 
              alt="Baju Sewa" 
              className="w-full h-full object-cover"
            />
            
            {/* Dark Gradient Overlays (Top & Bottom) for better text readability */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

            {/* Badges Atas */}
            <div className="absolute top-4 left-4 flex gap-2 w-[calc(100%-32px)] justify-between">
              <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                <span className="text-[10px] font-bold text-white tracking-wider">
                  {activePhotoStep + 1}/4 Foto Wajib
                </span>
              </div>
              <div className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Sun size={12} className="text-yellow-300" />
                <span className="text-[10px] font-medium text-white">Pencahayaan Natural Cukup</span>
              </div>
            </div>

            {/* Corner Brackets (Sudut Kamera) */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/70 rounded-tl-lg pointer-events-none"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/70 rounded-tr-lg pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/70 rounded-bl-lg pointer-events-none"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/70 rounded-br-lg pointer-events-none"></div>

            {/* Focus Ring & Dotted Silhouette Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              {/* Simulasi Siluet Baju putus-putus */}
              <div className="w-48 h-64 border-2 border-dashed border-white/40 rounded-3xl relative flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Focus size={20} className="text-white/80" />
                </div>
              </div>
            </div>

            {/* Badge Bawah (Instruksi) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 w-max">
              <Maximize size={12} className="text-white" />
              <span className="text-[10px] text-white font-medium">
                Posisikan busana di dalam siluet pandu
              </span>
            </div>
          </div>

          {/* Panduan Sudut Foto & Pills */}
          <div className="bg-[#e8f1ec]/50 rounded-[20px] p-4 flex flex-col mb-auto border border-[#dce9e2]">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-bold text-gray-800">Panduan Sudut Foto</h3>
              <span className="bg-[#c3dfce] text-[#203f35] text-[9px] font-bold px-2 py-0.5 rounded-md">
                Wajib 4 Sisi
              </span>
            </div>
            
            {/* Horizontal Scrollable Pills */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {fotoPanduanSewa.map((step, index) => {
                const isActive = index === activePhotoStep;
                const isDone = index < activePhotoStep;
                
                return (
                  <div 
                    key={step.id}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full flex-shrink-0 transition-all border ${
                      isActive || isDone
                        ? 'bg-[#295244] border-[#295244] text-white' 
                        : 'bg-white border-gray-200 text-gray-500'
                    }`}
                  >
                    {isActive || isDone ? (
                      <CheckCircle2 size={12} fill="currentColor" className="text-white" />
                    ) : (
                      <Circle size={12} className="text-gray-300" />
                    )}
                    <span className="text-[10px] font-bold">{step.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Actions */}
        <div className="px-5 pb-6 flex flex-col gap-3 z-10 bg-[#FDFBF7] pt-2">
          <button 
            onClick={handleAmbilFoto}
            className="w-full bg-[#9E4124] hover:bg-[#86371e] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-red-900/10"
          >
            <Camera size={16} />
            Ambil & Simpan Bukti Foto
          </button>
          
          <button 
            disabled={activePhotoStep < fotoPanduanSewa.length - 1}
            onClick={() => navigate('/sewa/pilih-busana')}
            className={`w-full py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-sm ${
              activePhotoStep === fotoPanduanSewa.length - 1
                ? 'bg-[#295244] hover:bg-[#203f35] text-white shadow-[#295244]/20'
                : 'bg-[#295244]/40 text-white/70 cursor-not-allowed'
            }`}
          >
            <CheckCircle2 size={16} />
            Lanjutkan Penyewaan
          </button>
        </div>

      </main>
    </div>
  );
};

export default FotoKondisiAwal;