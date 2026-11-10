import React, { useState } from 'react';
import { ArrowLeft, Camera, User, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Data dummy dengan 5 gambar berbeda untuk setiap sudut wajib
const dummyPanduanKamera = [
  { id: "foto-1", label: "Depan", imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80" },
  { id: "foto-2", label: "Belakang", imageUrl: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=500&q=80" },
  { id: "foto-3", label: "Label", imageUrl: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=500&q=80" },
  { id: "foto-4", label: "Detail", imageUrl: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=500&q=80" },
  { id: "foto-5", label: "Cacat", imageUrl: "https://images.unsplash.com/photo-1584024443958-693db158c894?auto=format&fit=crop&w=500&q=80" },
];

const PanduanKamera: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  // Fungsi saat tombol Ambil Foto ditekan
  const handleAmbilFoto = () => {
    if (activeStep < dummyPanduanKamera.length - 1) {
      // Lanjut ke foto berikutnya
      setActiveStep(prev => prev + 1);
    } else {
      // Jika ini adalah foto terakhir (Cacat)
      alert("Semua foto berhasil diambil! Mengunggah ke sistem AI...");
      navigate('/jual/hasil-ai');
    }
  };

  return (
    // Menggunakan max-w-md (layar HP mentok di lebar wajar), min-h-[100dvh] agar pas 1 layar full tanpa scroll berlebih
    <div className="w-full max-w-md mx-auto min-h-[100dvh] bg-[#FDFBF7] flex flex-col font-sans sm:border-x sm:border-gray-200 shadow-2xl overflow-hidden">
      
      {/* Header (Tinggi Tetap) */}
      <header className="flex justify-between items-center px-4 py-4 bg-[#FDFBF7] z-10 flex-shrink-0">
        <button className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors">
          <ArrowLeft size={22} className="text-gray-800" />
        </button>
        <div className="text-center flex flex-col">
          <span className="text-[10px] text-gray-500 font-medium tracking-wide">Jual Pakaian</span>
          <h1 className="text-base font-semibold text-gray-800 tracking-wide">
            Foto Pakaian
          </h1>
        </div>
        <button className="p-1.5 rounded-full bg-[#C25F39] text-white hover:bg-opacity-90 transition-colors">
          <User size={18} />
        </button>
      </header>

      {/* Main Content (Fleksibel memanjang) */}
      <main className="flex-1 px-5 pt-2 pb-6 flex flex-col items-center justify-between overflow-y-auto">
        
        <div className="w-full flex flex-col items-center">
          <p className="text-xs text-gray-500 mb-4">Bidik sesuai siluet</p>

          {/* Image Preview Card (Ukuran maksimal dibatasi agar tidak melar di HP lebar) */}
          <div className="w-full max-w-[340px] relative rounded-2xl overflow-hidden bg-gray-200 aspect-[3/4] mb-8 shadow-sm">
            <img
              src={dummyPanduanKamera[activeStep].imageUrl} 
              alt={`Preview ${dummyPanduanKamera[activeStep].label}`}
              className="w-full h-full object-cover transition-all duration-300"
            />

            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            <div className="absolute inset-4 border-2 border-dashed border-white/70 rounded-lg pointer-events-none transition-all duration-300"></div>

            {/* Badge AI Detect */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C25F39] animate-pulse"></span>
              <span className="text-[9px] font-bold text-gray-800 uppercase tracking-widest">
                AI DETECT
              </span>
            </div>

            {/* Indikator Angka Gambar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5">
              <Camera size={12} className="text-white" />
              <span className="text-[10px] font-medium text-white tracking-widest">
                {activeStep + 1} / {dummyPanduanKamera.length}
              </span>
            </div>
          </div>
        </div>

        {/* Stepper / Indikator 5 Sudut Wajib */}
        {/* Tidak lagi memiliki fungsi onClick, hanya sebagai display visual */}
        <div className="w-full max-w-[340px] mt-auto">
          <div className="flex justify-between items-center relative px-2">
            {/* Garis penghubung */}
            <div className="absolute top-[10px] left-4 right-4 h-[1px] bg-gray-300 -z-10"></div>
            
            {dummyPanduanKamera.map((step, index) => {
              const isCompleted = index < activeStep;
              const isActive = index === activeStep;

              return (
                <div key={step.id} className="flex flex-col items-center gap-2 bg-[#FDFBF7]">
                  <div
                    className={`w-[22px] h-[22px] rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                      isCompleted 
                        ? 'bg-[#C25F39] text-white scale-110' 
                        : isActive
                          ? 'bg-[#C25F39] border-2 border-[#C25F39] scale-110'
                          : 'bg-white border-[1.5px] border-gray-300'
                    }`}
                  >
                    {isCompleted ? (
                      <Check size={12} strokeWidth={3} />
                    ) : isActive ? (
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    ) : (
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    )}
                  </div>
                  
                  <span
                    className={`text-[10px] text-center transition-colors ${
                      isActive || isCompleted
                        ? 'font-semibold text-gray-800' 
                        : 'text-gray-400 font-medium'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </main>

      {/* Bottom Action Area (Tinggi Tetap di Bawah) */}
      {/* Menggunakan border-t agar terpisah rapi dari konten utama */}
      <div className="p-5 bg-[#FDFBF7] border-t border-gray-100 flex-shrink-0 z-10">
        <button 
          onClick={handleAmbilFoto}
          className="w-full bg-[#C25F39] hover:bg-[#a65030] text-white py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-orange-900/20 text-sm"
        >
          {activeStep === dummyPanduanKamera.length - 1 ? (
            <>
              <Check size={18} />
              Selesai & Lanjut
            </>
          ) : (
            <>
              <Camera size={18} />
              Ambil Foto {dummyPanduanKamera[activeStep].label}
            </>
          )}
        </button>
      </div>
      
    </div>
  );
};

export default PanduanKamera;