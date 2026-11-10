import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Compass, Shirt, Users, RefreshCw, X, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  // State untuk mengontrol visibilitas Bottom Sheet "Putar"
  const [isPutarOpen, setIsPutarOpen] = useState(false);

  // Helper untuk mengecek tab yang sedang aktif
  const isActive = (path: string) => {
    if (path === '/app' && location.pathname === '/app') return true;
    if (path !== '/app' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Fungsi navigasi yang menutup Bottom Sheet terlebih dahulu
  const handlePutarNavigate = (path: string) => {
    setIsPutarOpen(false);
    navigate(path);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto">
        <div className="relative h-[88px] flex items-center justify-between px-6 pt-4 pb-2 bg-white rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] border-t border-loopwear-grey/20">
          
          <button onClick={() => navigate('/beranda')} className="flex flex-col items-center justify-center flex-1 gap-1">
            <Home size={24} className={isActive('/beranda') ? 'text-[#2E6F40]' : 'text-gray-400'} />
            <span className={clsx("text-[10px] font-bold", isActive('/beranda') ? "text-[#2E6F40]" : "text-gray-400")}>Beranda</span>
          </button>
          
          <button onClick={() => navigate('/jelajah')} className="flex flex-col items-center justify-center flex-1 gap-1">
            <Compass size={24} className={isActive('/jelajah') ? 'text-[#2E6F40]' : 'text-gray-400'} />
            <span className={clsx("text-[10px] font-bold", isActive('/jelajah') ? "text-[#2E6F40]" : "text-gray-400")}>Jelajah</span>
          </button>
          
          <div className="flex-[1.5]"></div>
          
          <button onClick={() => navigate('/lemari')} className="flex flex-col items-center justify-center flex-1 gap-1">
            <Shirt size={24} className={isActive('/lemari') ? 'text-[#2E6F40]' : 'text-gray-400'} />
            <span className={clsx("text-[10px] font-bold", isActive('/lemari') ? "text-[#2E6F40]" : "text-gray-400")}>Lemari</span>
          </button>
          
          <button onClick={() => navigate('/app/komunitas')} className="flex flex-col items-center justify-center flex-1 gap-1">
            <Users size={24} className={isActive('/app/komunitas') ? 'text-[#2E6F40]' : 'text-gray-400'} />
            <span className={clsx("text-[10px] font-bold", isActive('/app/komunitas') ? "text-[#2E6F40]" : "text-gray-400")}>Komunitas</span>
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
          <div className="flex flex-col items-center">
            <button 
              type="button"
              onClick={() => setIsPutarOpen(true)} 
              className="w-16 h-16 bg-[#D9714B] rounded-full flex items-center justify-center text-white border-4 border-[#F3EEE3] shadow-[0_8px_24px_rgba(217,113,75,0.4)] active:scale-95 transition-transform duration-200 z-50"
            >
              <RefreshCw size={28} strokeWidth={2.5} className={isPutarOpen ? 'animate-spin-slow' : ''} />
            </button>
            <span className="text-[11px] font-extrabold text-[#D9714B] mt-1 drop-shadow-sm">Putar</span>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* Bottom Sheet Modal "Putar" (Muncul saat tombol ditekan)        */}
      {/* ============================================================== */}
      {isPutarOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end font-jakarta max-w-md mx-auto">
          {/* Overlay Background Gelap - Klik area ini untuk menutup */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsPutarOpen(false)}
          ></div>

          <div className="bg-[#F3EEE3] w-full rounded-t-[32px] flex flex-col relative overflow-hidden animate-slide-up pb-8 shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">
            
            <div className="w-12 h-1 bg-[#8c9c82]/40 rounded-full mx-auto mt-4 mb-4"></div>
            
            <div className="px-6 flex justify-between items-start mb-6">
              <div>
                <h2 className="text-[22px] font-extrabold text-[#1B4D3E] leading-tight w-48">Mau diapakan pakaianmu?</h2>
                <p className="text-[11px] text-gray-500 mt-2">Satu pakaian, banyak kemungkinan.</p>
              </div>
              <button 
                onClick={() => setIsPutarOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#1B4D3E] hover:bg-[#E8F5E9] transition-colors"
              >
                <X size={20} />
              </button>
          </div>

            <div className="px-6 space-y-3">
              
              {/* Opsi 1: Jual */}
              <button 
                onClick={() => handlePutarNavigate('/jual/panduan-kamera')}
                className="w-full bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100 active:scale-[0.98] transition-transform text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E8F5E9] rounded-2xl flex items-center justify-center text-[#1B4D3E]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#1B4D3E] text-[15px]">Jual</h3>
                    <p className="text-[11px] text-gray-500 mt-0.5">Beri pemilik baru, tambah uang saku.</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-[#1B4D3E]" />
              </button>

              {/* Opsi 2: Sewakan */}
              <button 
                onClick={() => handlePutarNavigate('/sewa/foto-kondisi')}
                className="w-full bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100 active:scale-[0.98] transition-transform text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFF0E8] rounded-2xl flex items-center justify-center text-[#D9714B]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#1B4D3E] text-[15px]">Sewakan</h3>
                    <p className="text-[11px] text-gray-500 mt-0.5">Bagikan gaya, dapatkan penghasilan.</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-[#1B4D3E]" />
              </button>

              {/* Opsi 3: Daur Ulang */}
              <button 
                onClick={() => handlePutarNavigate('/daur-ulang/pengajuan')}
                className="w-full bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100 active:scale-[0.98] transition-transform text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F3E5AB] rounded-2xl flex items-center justify-center text-[#1B4D3E]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#1B4D3E] text-[15px]">Daur Ulang</h3>
                    <p className="text-[11px] text-gray-500 mt-0.5">Ubah yang tak terpakai jadi berarti.</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-[#1B4D3E]" />
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}