import React from 'react';
import { 
  ArrowLeft, 
  User, 
  Check, 
  RefreshCw, 
  Home,
  ShieldCheck,
  Calendar,
  Sparkles,
  ArrowUpRight,
  Leaf,
  BadgeCheck,
  Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PetaPerjalanan: React.FC = () => {
  const navigate = useNavigate();

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
          <RefreshCw size={16} className="text-[#203f35]" />
          <h1 className="text-sm font-bold text-gray-800 tracking-wide">
            Impact Verification
          </h1>
        </div>
        <button className="p-1.5 rounded-full bg-[#203f35] text-white hover:bg-opacity-90 transition-colors">
          <User size={18} />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden relative">
        
        <div className="px-5 pt-2 pb-6">
          {/* Stepper Card */}
          <div className="bg-white rounded-[24px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-6">
            <div className="flex items-start justify-between w-full px-2 relative">
              {/* Background Line */}
              <div className="absolute left-6 right-6 top-[11px] h-[2px] bg-gray-200 -z-10"></div>
              {/* Active Line (Sampai step 3) */}
              <div className="absolute left-6 right-[25%] top-[11px] h-[2px] bg-[#203f35] -z-10"></div>
              
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-1.5 bg-white px-1">
                <div className="w-[22px] h-[22px] rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-[9px] font-bold text-gray-800">Diajukan</span>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center gap-1.5 bg-white px-1">
                <div className="w-[22px] h-[22px] rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-[9px] font-bold text-gray-800">Diserahkan</span>
              </div>
              {/* Step 3 (Aktif) */}
              <div className="flex flex-col items-center gap-1.5 bg-white px-1">
                <div className="w-[22px] h-[22px] rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
                  <RefreshCw size={12} className="animate-spin-slow" />
                </div>
                <span className="text-[9px] font-bold text-[#203f35]">Diproses</span>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col items-center gap-1.5 bg-white px-1">
                <div className="w-[22px] h-[22px] rounded-full bg-white border-[1.5px] border-gray-300 text-gray-400 flex items-center justify-center">
                  <Leaf size={12} />
                </div>
                <span className="text-[9px] font-medium text-gray-400">Produk Baru</span>
              </div>
            </div>
          </div>

          {/* Title Area */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center gap-1.5 bg-[#eaf2ef] px-3 py-1.5 rounded-full mb-3">
              <RefreshCw size={12} className="text-[#203f35] animate-spin-slow" />
              <span className="text-[9px] font-bold text-[#203f35] tracking-widest uppercase">
                Sirkularitas Berjalan
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-gray-800 mb-2">Peta Perjalanan Pakaian</h2>
            <p className="text-[11px] text-gray-500 font-medium px-4 leading-relaxed">
              Jejak transformasi serat tekstil pakaianmu menjadi kreasi baru berkelanjutan
            </p>
          </div>

          {/* Cards Timeline Container */}
          <div className="relative flex flex-col gap-6 w-full mb-10 z-10">
            
            {/* Dashed Line 1 (Card 1 to 2) */}
            <svg className="absolute top-[80px] left-[30%] w-[40%] h-[60px] -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 10 0 C 10 50, 90 50, 90 100" fill="transparent" stroke="#B0BDB5" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* Dashed Line 2 (Card 2 to 3) */}
            <svg className="absolute top-[200px] left-[30%] w-[40%] h-[60px] -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M 90 0 C 90 50, 10 50, 10 100" fill="transparent" stroke="#B0BDB5" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* LANGKAH 01: Diajukan (Kiri) */}
            <div className="bg-white rounded-[24px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex gap-4 w-full">
              <div className="relative w-[72px] h-[72px] rounded-[16px] bg-gray-200 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80" alt="Baju Diajukan" className="w-full h-full object-cover rounded-[16px]" />
                <div className="absolute -top-1.5 -right-1.5 bg-[#203f35] text-white w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  <Check size={10} strokeWidth={4} />
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[9px] font-bold text-[#A84524] tracking-widest uppercase mb-1">Langkah 01</span>
                <h4 className="text-sm font-bold text-gray-800 mb-0.5">Diajukan</h4>
                <p className="text-[11px] text-gray-500 mb-1">Kemeja Katun Cokelat</p>
                <div className="flex items-center gap-1 text-gray-500">
                  <Calendar size={10} />
                  <span className="text-[9px] font-bold">Batch #PTR-8821</span>
                </div>
              </div>
            </div>

            {/* LANGKAH 02: Diproses (Kanan) */}
            <div className="bg-white rounded-[24px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex gap-4 w-full flex-row-reverse text-right">
              <div className="relative w-[72px] h-[72px] rounded-[16px] bg-gray-200 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1558459654-c430be5b0a44?auto=format&fit=crop&w=200&q=80" alt="Diproses" className="w-full h-full object-cover rounded-[16px]" />
                {/* Icon refresh di tengah gambar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white text-[#203f35] w-7 h-7 rounded-full flex items-center justify-center shadow-md">
                    <RefreshCw size={14} className="animate-spin-slow" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-end">
                <span className="text-[9px] font-bold text-[#A84524] tracking-widest uppercase mb-1">Langkah 02</span>
                <h4 className="text-sm font-bold text-gray-800 mb-0.5">Diproses oleh mitra</h4>
                <p className="text-[10px] text-gray-500 leading-tight mb-1.5 w-[90%]">
                  Penguraian serat & pemintalan benang ramah lingkungan
                </p>
                <div className="flex items-center gap-1 text-[#203f35]">
                  <span className="text-[9px] font-bold">Sedang berjalan</span>
                  <RefreshCw size={10} className="animate-spin-slow" />
                </div>
              </div>
            </div>

            {/* HASIL AKHIR: Produk Baru (Kiri) */}
            <div className="bg-white rounded-[24px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex gap-4 w-full">
              <div className="relative w-[72px] h-[72px] rounded-[16px] bg-gray-200 flex-shrink-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1597248881519-db089d3744a5?auto=format&fit=crop&w=200&q=80" alt="Produk Baru" className="w-full h-full object-cover" />
                <div className="absolute bottom-1 left-1 bg-[#203f35]/90 backdrop-blur text-white px-2 py-0.5 rounded flex items-center gap-1">
                  <Sparkles size={8} />
                  <span className="text-[8px] font-bold tracking-wider">KREASI</span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[9px] font-bold text-[#A84524] tracking-widest uppercase mb-1">Hasil Akhir</span>
                <h4 className="text-sm font-bold text-gray-800 mb-0.5">Menjadi produk baru</h4>
                <p className="text-[11px] text-gray-500 mb-0.5">Tote Bag Kanvas Sirkular</p>
                <p className="text-[9px] text-gray-400">Siap masuk lemari daur ulang</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Background Area (Soft Green) */}
        <div className="bg-[#eaf2ef]/60 flex-1 rounded-t-[32px] px-5 pt-8 pb-6 flex flex-col items-center relative z-20 -mt-6">
          
          {/* Button Kembali */}
          <button 
            onClick={() => navigate('/beranda')}
            className="w-full bg-[#A84524] hover:bg-[#8e381b] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md mb-3"
          >
            <Home size={16} />
            Kembali ke Beranda
          </button>
          
          <div className="flex items-center gap-1 text-[9px] text-gray-500 font-medium mb-5">
            <ShieldCheck size={12} className="text-gray-400" />
            <span>Terverifikasi di Jaringan Daur Ulang Kampus Putarin</span>
          </div>

          {/* Tags */}
          <div className="flex gap-2 w-full justify-center mb-5 overflow-x-auto no-scrollbar">
            <div className="bg-white px-4 py-2 rounded-xl text-[10px] font-bold text-gray-600 shadow-sm whitespace-nowrap">
              Tekstil
            </div>
            <div className="bg-white px-4 py-2 rounded-xl text-[10px] font-bold text-gray-600 shadow-sm whitespace-nowrap">
              Air Bersih
            </div>
            <div className="bg-white px-4 py-2 rounded-xl text-[10px] font-bold text-gray-600 shadow-sm whitespace-nowrap">
              Pengurangan Emisi
            </div>
          </div>

          {/* Link Hitung */}
          <button 
            onClick={() => navigate('/daur-ulang/cara-menghitung')}
            className="flex items-center gap-1.5 text-[10px] font-bold text-gray-700 hover:text-gray-900 mb-6 bg-[#dbece5] px-4 py-1.5 rounded-full"
          >
            Cara kami menghitung <ArrowUpRight size={12} />
          </button>

          {/* Reward Card */}
          <div className="w-full bg-[#dbece5] rounded-2xl p-4 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#c2dfd3] text-[#203f35] flex items-center justify-center">
                <Star size={16} fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-800">Reward Sirkular</span>
                <span className="text-[10px] text-gray-500 font-medium">Perkiraan poin setelah verifikasi</span>
              </div>
            </div>
            <BadgeCheck size={20} className="text-[#203f35]" />
          </div>

        </div>

      </main>
    </div>
  );
};

export default PetaPerjalanan;