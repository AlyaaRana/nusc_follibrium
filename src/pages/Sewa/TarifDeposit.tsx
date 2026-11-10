import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Check, 
  Archive,
  ShieldCheck,
  Sparkles,
  Minus,
  Plus,
  Lock,
  Shield,
  CheckCircle2,
  GraduationCap,
  PartyPopper,
  Heart,
  Camera,
  RefreshCw,
  ArrowRight,
  Circle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TarifDeposit: React.FC = () => {
  const navigate = useNavigate();
  
  // State untuk interaktivitas (opsional, agar tombol terlihat hidup)
  const [tarif, setTarif] = useState(95000);
  const [kategoriTerpilih, setKategoriTerpilih] = useState<string[]>(['Wisuda', 'Pernikahan']);

  const toggleKategori = (kategori: string) => {
    if (kategoriTerpilih.includes(kategori)) {
      setKategoriTerpilih(kategoriTerpilih.filter(k => k !== kategori));
    } else {
      setKategoriTerpilih([...kategoriTerpilih, kategori]);
    }
  };

  const kurangiTarif = () => setTarif(prev => Math.max(60000, prev - 5000));
  const tambahTarif = () => setTarif(prev => Math.min(150000, prev + 5000));

  return (
    <div className="w-full max-w-md mx-auto min-h-[100dvh] bg-[#FDFBF7] flex flex-col font-sans sm:border-x sm:border-gray-200 shadow-2xl overflow-hidden relative">
      
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
      <main className="flex-1 px-5 pt-2 pb-6 flex flex-col overflow-y-auto overflow-x-hidden">
        
        {/* Stepper Card */}
        <div className="bg-white rounded-[20px] py-4 px-2 shadow-sm mb-5 border border-gray-100">
          <div className="flex items-start justify-between w-full relative px-2">
            {/* Background Line Abu-abu */}
            <div className="absolute left-6 right-6 top-[11px] h-[2px] bg-gray-200 -z-10"></div>
            {/* Active Line Hijau Tua (sampai step 2) */}
            <div className="absolute left-6 right-[50%] top-[11px] h-[2px] bg-[#203f35] -z-10"></div>
            {/* Active Line Merah Bata (dari step 2 ke 3) */}
            <div className="absolute left-[50%] right-[25%] top-[11px] h-[2px] bg-[#203f35] -z-10"></div>
            
            {/* Step 1: Diajukan (Selesai) */}
            <div className="flex flex-col items-center gap-1.5 bg-white px-1">
              <div className="w-6 h-6 rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
                <Check size={14} strokeWidth={3} />
              </div>
              <span className="text-[9px] font-bold text-[#203f35]">Diajukan</span>
            </div>
            
            {/* Step 2: Diserahkan (Selesai) */}
            <div className="flex flex-col items-center gap-1.5 bg-white px-1">
              <div className="w-6 h-6 rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-sm">
                <Check size={14} strokeWidth={3} />
              </div>
              <span className="text-[9px] font-bold text-[#203f35]">Diserahkan</span>
            </div>
            
            {/* Step 3: Diproses (Aktif) */}
            <div className="flex flex-col items-center gap-1.5 bg-white px-1">
              <div className="w-8 h-8 rounded-full bg-[#fcece9] flex items-center justify-center -mt-1 shadow-sm border border-[#f9d7cf]">
                <Archive size={16} className="text-[#A84524]" />
              </div>
              <span className="text-[9px] font-bold text-[#A84524]">Diproses</span>
            </div>
            
            {/* Step 4: Siap Sewa (Belum) */}
            <div className="flex flex-col items-center gap-1.5 bg-white px-1">
              <div className="w-6 h-6 rounded-full bg-[#e8ecea] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#a3b1ab]"></div>
              </div>
              <span className="text-[9px] font-medium text-gray-400">Siap Sewa</span>
            </div>
          </div>
        </div>

        {/* Hero Image Card */}
        <div className="relative w-full rounded-[24px] overflow-hidden aspect-[16/9] mb-5 shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80" 
            alt="Kebaya Modern Sutra" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#203f35]"></div>
            <span className="text-[10px] font-bold text-gray-800">Prima</span>
          </div>

          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
            <ShieldCheck size={12} className="text-[#203f35]" />
            <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider">ORISINAL</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[8px] font-bold text-white/80 uppercase tracking-widest mb-0.5">Kebaya Modern Sutra</span>
              <h2 className="text-sm font-bold text-white leading-tight">Sage Green Floral Brokat</h2>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/30">
              <span className="text-[10px] font-bold text-white shadow-sm">Size S-M</span>
            </div>
          </div>
        </div>

        {/* Tarif Sewa Card */}
        <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-4 border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-1">
              <h3 className="text-sm font-bold text-gray-800">Tarif Sewa</h3>
              <span className="text-[10px] text-gray-500">(Per 3 Hari)</span>
            </div>
            <div className="bg-[#eaf2ef] px-2.5 py-1.5 rounded-full flex items-center gap-1.5">
              <Sparkles size={12} className="text-[#203f35]" />
              <span className="text-[9px] font-bold text-[#203f35]">Rekomendasi AI: Rp90k - 110k</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-1">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-[#203f35]">Rp {tarif.toLocaleString('id-ID')}</span>
              <span className="text-[11px] text-gray-500 font-medium">/ 3 hari</span>
            </div>
            <div className="flex items-center gap-2 bg-[#f0f7f4] rounded-full p-1 border border-[#dbece5]">
              <button onClick={kurangiTarif} className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-600 hover:bg-gray-50 transition-colors">
                <Minus size={16} />
              </button>
              <button onClick={tambahTarif} className="w-8 h-8 rounded-full bg-[#203f35] flex items-center justify-center shadow-sm text-white hover:bg-[#1a3028] transition-colors">
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          <p className="text-[10px] font-bold text-[#203f35] mb-5">Optimal untuk kampus Depok</p>

          {/* Slider Range */}
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-[9px] text-gray-500">
              <span>Rp 60rb (Min)</span>
              <span className="font-bold text-[#203f35]">Rata-rata Kampus Rp 95rb</span>
              <span>Rp 150rb (Maks)</span>
            </div>
            <div className="relative w-full h-2.5 bg-gray-200 rounded-full mt-1">
              {/* Highlight Rekomendasi (Rp 90k - 110k) */}
              <div className="absolute left-[33%] right-[44%] top-0 bottom-0 bg-[#c2dfd3] rounded-full"></div>
              {/* Titik Harga Terpilih */}
              <div className="absolute left-[38%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#9E4124] shadow-sm border border-white"></div>
            </div>
          </div>
        </div>

        {/* Deposit Pengaman Card */}
        <div className="bg-white rounded-[24px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] mb-4 border border-gray-100">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-1.5">
              <Lock size={16} className="text-[#203f35]" />
              <h3 className="text-sm font-bold text-gray-800">Deposit Pengaman</h3>
            </div>
            <div className="bg-[#f0f7f4] px-2 py-1 rounded-md flex items-center gap-1 border border-[#eaf2ef]">
              <Shield size={12} className="text-[#203f35]" />
              <span className="text-[9px] font-bold text-[#203f35]">Escrow Aman</span>
            </div>
          </div>

          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-gray-800 mb-1">Rp 150.000</span>
              <span className="text-[10px] text-gray-500 leading-tight w-[85%]">
                Disimpan di sistem hingga busana selesai dikembalikan.
              </span>
            </div>
            <button className="bg-[#eaf2ef] text-[#203f35] text-[11px] font-bold px-3 py-1.5 rounded-full hover:bg-[#dbece5] transition-colors">
              Sesuaikan
            </button>
          </div>

          <div className="bg-[#f0f7f4] rounded-xl p-3 flex items-start gap-2 border border-[#eaf2ef]">
            <CheckCircle2 size={14} className="text-[#203f35] mt-0.5 flex-shrink-0" />
            <p className="text-[10px] text-gray-600 font-medium leading-relaxed">
              100% kembali otomatis ke penyewa bila busana dicek utuh.
            </p>
          </div>
        </div>

        {/* Kategori Acara */}
        <div className="mb-5">
          <div className="flex justify-between items-end mb-3">
            <h3 className="text-sm font-bold text-gray-800">Kategori Acara</h3>
            <span className="text-[10px] text-gray-500">Pilih relevan</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2.5">
            {/* Wisuda */}
            <div 
              onClick={() => toggleKategori('Wisuda')}
              className={`flex justify-between items-center p-3 rounded-xl cursor-pointer transition-all border ${
                kategoriTerpilih.includes('Wisuda') ? 'bg-[#203f35] border-[#203f35] text-white' : 'bg-white border-gray-200 text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <GraduationCap size={16} />
                <span className="text-[11px] font-bold">Wisuda</span>
              </div>
              {kategoriTerpilih.includes('Wisuda') ? <CheckCircle2 size={14} /> : <Circle size={14} className="text-gray-300" />}
            </div>
            
            {/* Pernikahan */}
            <div 
              onClick={() => toggleKategori('Pernikahan')}
              className={`flex justify-between items-center p-3 rounded-xl cursor-pointer transition-all border ${
                kategoriTerpilih.includes('Pernikahan') ? 'bg-[#203f35] border-[#203f35] text-white' : 'bg-white border-gray-200 text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <PartyPopper size={16} />
                <span className="text-[11px] font-bold">Pernikahan</span>
              </div>
              {kategoriTerpilih.includes('Pernikahan') ? <CheckCircle2 size={14} /> : <Circle size={14} className="text-gray-300" />}
            </div>
            
            {/* Kondangan */}
            <div 
              onClick={() => toggleKategori('Kondangan')}
              className={`flex justify-between items-center p-3 rounded-xl cursor-pointer transition-all border ${
                kategoriTerpilih.includes('Kondangan') ? 'bg-[#203f35] border-[#203f35] text-white' : 'bg-white border-gray-200 text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Heart size={16} />
                <span className="text-[11px] font-bold">Kondangan</span>
              </div>
              {kategoriTerpilih.includes('Kondangan') ? <CheckCircle2 size={14} /> : <Circle size={14} className="text-gray-300" />}
            </div>
            
            {/* Foto Studio */}
            <div 
              onClick={() => toggleKategori('Foto Studio')}
              className={`flex justify-between items-center p-3 rounded-xl cursor-pointer transition-all border ${
                kategoriTerpilih.includes('Foto Studio') ? 'bg-[#203f35] border-[#203f35] text-white' : 'bg-white border-gray-200 text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Camera size={16} />
                <span className="text-[11px] font-bold">Foto Studio</span>
              </div>
              {kategoriTerpilih.includes('Foto Studio') ? <CheckCircle2 size={14} /> : <Circle size={14} className="text-gray-300" />}
            </div>
          </div>
        </div>

        {/* Banner Info Bawah */}
        <div className="bg-[#eaf2ef] rounded-[16px] p-4 mb-6 flex gap-3 items-center border border-[#dbece5] shadow-sm">
          <div className="w-10 h-10 rounded-full bg-[#203f35] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
            <RefreshCw size={18} />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-[#203f35] mb-0.5">Lemari yang Terus Berputar</span>
            <span className="text-[10px] text-gray-600 leading-tight">
              Disewakan 2x sudah balik modal pembelian kain brokat ini.
            </span>
          </div>
        </div>

        {/* Tombol Lanjutkan */}
        <button 
          onClick={() => navigate('/sewa/kalender')}
          className="w-full bg-[#9E4124] hover:bg-[#86371e] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md shadow-red-900/10"
        >
          Lanjutkan Kalender <ArrowRight size={16} />
        </button>

      </main>
    </div>
  );
};

export default TarifDeposit;