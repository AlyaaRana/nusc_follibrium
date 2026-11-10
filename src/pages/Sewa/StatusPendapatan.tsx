import React from 'react';
import { 
  ArrowLeft, 
  Check, 
  Store, 
  Lock, 
  TrendingUp, 
  Flame, 
  Star, 
  Calendar,
  ArrowRight,
  Leaf
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const dummyJadwalSewa = [
  {
    id: 1,
    nama: "Kebaya Modern Sage",
    tanggal: "22 - 24 Nov",
    status: "Sedang Dipakai",
    harga: "Rp 95k",
    statusColor: "text-red-600",
    dotColor: "bg-red-600",
    imageUrl: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    nama: "Kebaya Modern Sage",
    tanggal: "28 - 30 Nov",
    status: "Dikonfirmasi",
    harga: "Rp 95k",
    statusColor: "text-[#203f35]",
    dotColor: "bg-[#203f35]",
    imageUrl: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    nama: "Blazer Warm Clay",
    tanggal: "2 - 4 Des",
    status: "Dikonfirmasi",
    harga: "Rp 115k",
    statusColor: "text-[#203f35]",
    dotColor: "bg-[#203f35]",
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=150&q=80"
  }
];

const StatusPendapatan: React.FC = () => {
  const navigate = useNavigate();

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
          Status & Pendapatan
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-5 pt-2 pb-32 flex flex-col overflow-y-auto overflow-x-hidden">
        
        {/* Title & Badge */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#203f35]"></div>
            <h2 className="text-[15px] font-bold text-[#203f35]">Status & Pendapatan</h2>
          </div>
          <span className="bg-[#c3dfce]/60 text-[#203f35] text-[10px] font-bold px-2.5 py-1 rounded-full">
            Langkah 5 dari 5
          </span>
        </div>

        {/* Stepper Card */}
        <div className="bg-white rounded-[24px] py-4 px-2 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-5 border border-gray-100">
          <div className="flex items-start justify-between w-full relative px-2">
            {/* Active Line All Green */}
            <div className="absolute left-6 right-6 top-[11px] h-[2px] bg-[#203f35] -z-10"></div>
            
            {/* Step 1: Diajukan */}
            <div className="flex flex-col items-center gap-1.5 bg-white px-1">
              <div className="w-[22px] h-[22px] rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
                <Check size={12} strokeWidth={3} />
              </div>
              <span className="text-[9px] font-medium text-gray-500">Diajukan</span>
            </div>
            
            {/* Step 2: Diserahkan */}
            <div className="flex flex-col items-center gap-1.5 bg-white px-1">
              <div className="w-[22px] h-[22px] rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
                <Check size={12} strokeWidth={3} />
              </div>
              <span className="text-[9px] font-medium text-gray-500">Diserahkan</span>
            </div>
            
            {/* Step 3: Diproses */}
            <div className="flex flex-col items-center gap-1.5 bg-white px-1">
              <div className="w-[22px] h-[22px] rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
                <Check size={12} strokeWidth={3} />
              </div>
              <span className="text-[9px] font-medium text-gray-500">Diproses</span>
            </div>
            
            {/* Step 4: Siap Sewa (Aktif) */}
            <div className="flex flex-col items-center gap-1.5 bg-white px-1">
              <div className="w-8 h-8 rounded-full bg-[#203f35] flex items-center justify-center -mt-1.5 shadow-sm border-2 border-white">
                <Store size={14} className="text-white" />
              </div>
              <span className="text-[9px] font-bold text-[#203f35]">Siap Sewa</span>
            </div>
          </div>
        </div>

        {/* Saldo Grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Saldo Tertahan */}
          <div className="bg-white rounded-[20px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[11px] font-bold text-gray-600">Saldo Tertahan</span>
              <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center">
                <Lock size={12} />
              </div>
            </div>
            <div>
              <span className="text-lg font-extrabold text-gray-800 block">Rp 285k</span>
              <span className="text-[10px] text-gray-500">2 pesanan aktif</span>
            </div>
          </div>

          {/* Saldo Siap Cair */}
          <div className="bg-[#eaf2ef] rounded-[20px] p-4 shadow-sm border border-[#dbece5] flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[11px] font-bold text-[#203f35]">Saldo Siap Cair</span>
              <div className="w-6 h-6 rounded-full bg-[#c3dfce] text-[#203f35] flex items-center justify-center">
                <TrendingUp size={12} />
              </div>
            </div>
            <div>
              <span className="text-lg font-extrabold text-[#203f35] block">Rp 570k</span>
              <span className="text-[10px] text-[#203f35]/80">Siap tarik saldo</span>
            </div>
          </div>
        </div>

        {/* Popular Card */}
        <div className="bg-white rounded-[24px] p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 mb-6 flex gap-4 items-center">
          <div className="relative w-[76px] h-[86px] rounded-[16px] bg-gray-200 overflow-hidden flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=200&q=80" alt="Populer" className="w-full h-full object-cover" />
            <div className="absolute bottom-1 left-1 bg-[#203f35]/90 backdrop-blur px-2 py-0.5 rounded text-white text-[9px] font-bold">
              Disewa
            </div>
          </div>
          <div className="flex flex-col flex-1 py-1">
            <div className="flex items-center gap-1 text-[#A84524] mb-1">
              <Flame size={12} fill="currentColor" />
              <span className="text-[9px] font-bold tracking-wider uppercase">POPULER MINGGU INI</span>
            </div>
            <h3 className="text-sm font-bold text-gray-800 mb-0.5">Kebaya Modern Sage</h3>
            <p className="text-[10px] text-gray-500 mb-1.5">3× disewa bulan ini • Performa prima</p>
            <div className="flex items-center gap-1 text-[10px]">
              <Star size={12} className="text-yellow-500" fill="currentColor" />
              <span className="font-bold text-gray-800">5.0</span>
              <span className="text-gray-500">(98% Puas)</span>
            </div>
          </div>
        </div>

        {/* Jadwal Sewa Berjalan */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-[13px] font-bold text-gray-800">Jadwal Sewa Berjalan</h3>
            <span className="bg-[#eaf2ef] text-[#203f35] text-[10px] font-bold px-2 py-0.5 rounded-md">
              3 jadwal
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {dummyJadwalSewa.map((jadwal) => (
              <div key={jadwal.id} className="bg-white rounded-[20px] p-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 flex items-center gap-3">
                <div className="w-[52px] h-[52px] rounded-[12px] overflow-hidden bg-gray-200 flex-shrink-0">
                  <img src={jadwal.imageUrl} alt={jadwal.nama} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col flex-1 justify-center">
                  <h4 className="text-[12px] font-bold text-gray-800 mb-1 leading-tight">{jadwal.nama}</h4>
                  <div className="flex items-center gap-1 text-[10px] text-gray-500 mb-1">
                    <Calendar size={10} />
                    <span>{jadwal.tanggal}</span>
                  </div>
                  <div className={`flex items-center gap-1 text-[9px] font-bold ${jadwal.statusColor}`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${jadwal.dotColor}`}></div>
                    <span>{jadwal.status}</span>
                  </div>
                </div>
                <div className="text-[13px] font-bold text-[#203f35] pr-1">
                  {jadwal.harga}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Eco Banner Background */}
        <div className="bg-[#eaf2ef] rounded-[24px] p-4 flex gap-3 items-center border border-[#dbece5]">
          <div className="w-10 h-10 rounded-full bg-[#203f35] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
            <Leaf size={18} />
          </div>
          <p className="text-[11px] text-[#203f35] leading-relaxed">
            Kamu telah menghemat <strong className="font-extrabold">4.2 kg jejak karbon</strong> bulan ini lewat berbagi kebaya!
          </p>
        </div>

      </main>

      {/* Floating Bottom Action (Tarik Pendapatan) */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-white rounded-t-[24px] shadow-[0_-10px_40px_rgba(0,0,0,0.08)] flex justify-between items-center z-40 border-t border-gray-100">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-500 mb-0.5">Saldo Siap Dicairkan</span>
          <span className="text-xl font-extrabold text-[#203f35] leading-tight">Rp 570.000</span>
        </div>
        <button 
          onClick={() => navigate('/beranda')}
          className="bg-[#D97757] hover:bg-[#c36a4e] text-white px-5 py-3.5 rounded-full font-bold flex items-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-red-900/10"
        >
          Tarik Pendapatan <ArrowRight size={16} />
        </button>
      </div>

    </div>
  );
};

export default StatusPendapatan;