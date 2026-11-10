import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Check, 
  RefreshCw, 
  Calendar as CalendarIcon, 
  Eye, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Leaf,
  SprayCan
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const KalenderSewa: React.FC = () => {
  const navigate = useNavigate();
  const [isBufferActive, setIsBufferActive] = useState(true);

  // Array struktur kalender presisi sesuai gambar (November 2024)
  // Tipe: 'kosong', 'biasa', 'tersewa', 'buffer', 'siap'
  const calendarDays = [
    { date: 28, type: 'kosong' }, { date: 29, type: 'kosong' }, { date: 30, type: 'kosong' }, { date: 31, type: 'kosong' },
    { date: 1, type: 'biasa' }, { date: 2, type: 'biasa' }, { date: 3, type: 'biasa' },
    { date: 4, type: 'biasa' }, { date: 5, type: 'biasa' }, { date: 6, type: 'biasa' },
    { date: 7, type: 'tersewa' }, { date: 8, type: 'tersewa' }, { date: 9, type: 'tersewa' }, { date: 10, type: 'tersewa' },
    { date: 11, type: 'buffer' }, { date: 12, type: 'buffer' }, 
    { date: 13, type: 'siap' }, { date: 14, type: 'siap' }, { date: 15, type: 'siap' }, { date: 16, type: 'siap' }, { date: 17, type: 'siap' },
    { date: 18, type: 'siap' }, { date: 19, type: 'siap' }, { date: 20, type: 'siap' }, { date: 21, type: 'siap' },
    { date: 22, type: 'tersewa' }, { date: 23, type: 'tersewa' }, { date: 24, type: 'tersewa' },
    { date: 25, type: 'buffer' }, { date: 26, type: 'buffer' },
    { date: 27, type: 'siap' }, { date: 28, type: 'siap' }, { date: 29, type: 'siap' }, { date: 30, type: 'siap' },
    { date: 1, type: 'kosong' }
  ];

  return (
    <div className="w-full max-w-md mx-auto min-h-[100dvh] bg-[#FDFBF7] flex flex-col font-sans sm:border-x sm:border-gray-200 shadow-2xl relative overflow-hidden">
      
      {/* Header */}
      <header className="flex items-center px-4 py-4 bg-[#FDFBF7] sticky top-0 z-30 flex-shrink-0">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors mr-2"
        >
          <ArrowLeft size={22} className="text-gray-800" />
        </button>
        <h1 className="text-[15px] font-bold text-gray-800 tracking-wide">
          Rental Duration Select
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-5 pt-2 pb-24 flex flex-col overflow-y-auto overflow-x-hidden">
        
        {/* Stepper Card */}
        <div className="bg-white rounded-[20px] py-4 px-2 shadow-sm mb-4 border border-gray-100">
          <div className="flex items-start justify-between w-full relative px-2">
            <div className="absolute left-6 right-6 top-[11px] h-[2px] bg-gray-200 -z-10"></div>
            <div className="absolute left-6 right-[25%] top-[11px] h-[2px] bg-[#203f35] -z-10"></div>
            
            <div className="flex flex-col items-center gap-1.5 bg-white px-1">
              <div className="w-6 h-6 rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
                <Check size={14} strokeWidth={3} />
              </div>
              <span className="text-[9px] font-medium text-gray-500">Diajukan</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5 bg-white px-1">
              <div className="w-6 h-6 rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
                <Check size={14} strokeWidth={3} />
              </div>
              <span className="text-[9px] font-medium text-gray-500">Diserahkan</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5 bg-white px-1">
              <div className="w-7 h-7 rounded-full bg-[#9E4124] text-white flex items-center justify-center -mt-0.5 shadow-sm border border-[#FDFBF7]">
                <RefreshCw size={14} />
              </div>
              <span className="text-[9px] font-bold text-[#9E4124]">Diproses</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5 bg-white px-1">
              <div className="w-6 h-6 rounded-full bg-[#eaf2ef] text-[#203f35]/40 flex items-center justify-center">
                <CalendarIcon size={12} />
              </div>
              <span className="text-[9px] font-medium text-gray-400">Siap Sewa</span>
            </div>
          </div>
        </div>

        {/* Item Summary Card */}
        <div className="bg-white rounded-[20px] p-3 flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-4 border border-gray-100">
          <div className="w-14 h-14 rounded-[12px] overflow-hidden bg-gray-200 flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=200&q=80" alt="Kebaya Modern" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-1.5 mb-1">
              <div className="flex items-center gap-1 bg-[#eaf2ef] px-2 py-0.5 rounded-full">
                <div className="w-1 h-1 rounded-full bg-[#203f35]"></div>
                <span className="text-[8px] font-bold text-[#203f35]">Prima</span>
              </div>
              <span className="text-[9px] text-gray-500 font-medium">Ukuran M</span>
            </div>
            <h3 className="text-xs font-bold text-gray-800 leading-tight">Kebaya Modern Hijau Salvia</h3>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="text-sm font-extrabold text-[#9E4124]">Rp 95.000</span>
              <span className="text-[9px] text-gray-500">/ 3 hari</span>
            </div>
          </div>
          <button className="w-8 h-8 rounded-full bg-[#eaf2ef]/60 flex items-center justify-center text-[#203f35] flex-shrink-0 transition-colors hover:bg-[#dbece5]">
            <Eye size={14} />
          </button>
        </div>

        {/* Calendar Card */}
        <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-4 border border-gray-100">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-2">
              <CalendarIcon size={18} className="text-[#203f35]" />
              <h2 className="text-sm font-bold text-gray-800">November 2024</h2>
            </div>
            <div className="flex gap-1.5">
              <button className="w-7 h-7 rounded-full bg-[#f4f7f5] flex items-center justify-center text-gray-500 hover:bg-[#eaf2ef] transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button className="w-7 h-7 rounded-full bg-[#f4f7f5] flex items-center justify-center text-gray-500 hover:bg-[#eaf2ef] transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 gap-1 text-center mb-3">
            {['Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sb', 'Mg'].map((day) => (
              <span key={day} className="text-[11px] font-medium text-gray-500">{day}</span>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1.5 text-center mb-5">
            {calendarDays.map((day, idx) => {
              let style = "";
              let dot = false;
              let bufferIcon = false;

              if (day.type === 'kosong') style = "text-gray-300 font-medium bg-transparent";
              if (day.type === 'biasa') style = "text-gray-800 font-bold bg-transparent";
              if (day.type === 'tersewa') {
                style = "bg-[#8C3A21] text-white font-bold rounded-lg shadow-sm";
                dot = true;
              }
              if (day.type === 'buffer') {
                style = "bg-[#fdece8] text-[#A84524] font-bold rounded-lg";
                bufferIcon = true;
              }
              if (day.type === 'siap') style = "bg-[#eaf2ef] text-[#203f35] font-bold rounded-lg";

              return (
                <div key={idx} className={`relative flex flex-col items-center justify-center h-10 transition-all ${style}`}>
                  <span className="text-xs">{day.date}</span>
                  {dot && <div className="absolute bottom-1.5 w-1 h-1 bg-white/70 rounded-full"></div>}
                  {bufferIcon && <SprayCan size={8} className="absolute bottom-1.5 opacity-70" />}
                </div>
              );
            })}
          </div>

          {/* Calendar Legend */}
          <div className="flex justify-between items-center px-1">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8C3A21]"></div>
              <span className="text-[10px] font-bold text-gray-700">Tersewa</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#A84524]/60 border-2 border-[#fdece8]"></div>
              <span className="text-[10px] font-bold text-gray-700">Buffer Cuci (2H)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#c3dfce]"></div>
              <span className="text-[10px] font-bold text-gray-700">Siap Sewa</span>
            </div>
          </div>
        </div>

        {/* Buffer Cuci Toggle Card */}
        <div className="bg-white rounded-[24px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-4 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#eaf2ef] text-[#203f35] flex items-center justify-center">
                <SprayCan size={18} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-gray-800">Buffer cuci 2 hari mitra</h3>
                <span className="text-[10px] text-gray-500 font-medium">Otomatis jeda pasca-sewa</span>
              </div>
            </div>
            
            {/* Toggle Switch */}
            <div 
              onClick={() => setIsBufferActive(!isBufferActive)}
              className={`w-11 h-6 rounded-full flex items-center px-1 cursor-pointer transition-colors ${
                isBufferActive ? 'bg-[#1a3028]' : 'bg-gray-300'
              }`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${isBufferActive ? 'translate-x-5' : 'translate-x-0'}`}></div>
            </div>
          </div>

          <div className="bg-[#f0f7f4] rounded-xl p-3 flex gap-2 border border-[#eaf2ef]">
            <ShieldCheck size={14} className="text-[#203f35] flex-shrink-0 mt-0.5" />
            <p className="text-[10px] text-gray-600 font-medium leading-relaxed">
              Perputaran terjaga higienis melalui laundry partner <strong className="text-gray-800">LOOPWEAR CleanLab</strong> tanpa biaya administrasi tambahan bagi pemilik.
            </p>
          </div>
        </div>

        {/* Estimasi Sirkulasi Box */}
        <div className="bg-[#eaf2ef] rounded-[16px] p-4 flex justify-between items-center border border-[#dbece5]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#c3dfce] flex items-center justify-center text-[#203f35]">
              <Leaf size={12} />
            </div>
            <span className="text-[11px] font-bold text-gray-800">Estimasi sirkulasi: 4 kali / bulan</span>
          </div>
          <span className="text-[10px] font-bold text-[#203f35]">Potensi Rp380k</span>
        </div>

      </main>

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7] to-transparent pt-10 z-20">
        <button 
          onClick={() => navigate('/sewa/status')}
          className="w-full bg-[#9E4124] hover:bg-[#86371e] text-white py-3.5 rounded-full font-bold transition-all active:scale-[0.98] shadow-md shadow-red-900/10"
        >
          Simpan & Lanjutkan
        </button>
      </div>

    </div>
  );
};

export default KalenderSewa;