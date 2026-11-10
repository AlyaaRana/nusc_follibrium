import React from 'react';
import { 
  ArrowLeft, 
  User, 
  Check, 
  Leaf, 
  Star, 
  ShieldCheck, 
  MapPin, 
  Eye, 
  Heart, 
  ArrowRightLeft, 
  ArrowRight, 
  Share2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SiapTayang: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md mx-auto min-h-[100dvh] bg-[#FDFBF7] flex flex-col font-sans sm:border-x sm:border-gray-200 shadow-2xl overflow-hidden pb-6">
      
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4 bg-[#FDFBF7] flex-shrink-0">
        <button 
          onClick={() => navigate('/beranda')} 
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={22} className="text-gray-800" />
        </button>
        <h1 className="text-base font-bold text-gray-800 tracking-wide">
          Berhasil Tayang
        </h1>
        <button className="p-1.5 rounded-full bg-[#203f35] text-white hover:bg-opacity-90 transition-colors">
          <User size={18} />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-5 pt-4 flex flex-col items-center overflow-y-auto">
        
        {/* Ikon Sukses Animasi/Statis */}
        <div className="relative flex justify-center items-center mb-4">
          <div className="w-[84px] h-[84px] rounded-full border-[2.5px] border-dashed border-[#203f35]/30 flex items-center justify-center bg-[#eaf2ef]/50">
            <div className="w-14 h-14 rounded-full bg-[#203f35] text-white flex items-center justify-center shadow-lg">
              <Check size={28} strokeWidth={3} />
            </div>
          </div>
          {/* Badge notifikasi merah kecil di ujung ikon */}
          <div className="absolute top-1 right-2 w-5 h-5 bg-[#C25F39] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-[#FDFBF7]">
            <Check size={10} strokeWidth={4} />
          </div>
        </div>

        {/* Teks Keberhasilan */}
        <h2 className="text-xl font-extrabold text-[#203f35] mb-1">Berhasil Tayang!</h2>
        <p className="text-xs text-gray-500 mb-6 text-center">
          Pakaianmu siap menemukan pemilik baru.
        </p>

        {/* Kartu Pratinjau Katalog */}
        <div className="w-full bg-white rounded-[24px] p-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] mb-6 border border-gray-100">
          
          {/* Area Gambar dengan Badge */}
          <div className="relative w-full aspect-square rounded-[16px] overflow-hidden bg-gray-200 mb-4">
            <img 
              src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80"
              alt="Kemeja Linen Terracotta" 
              className="w-full h-full object-cover"
            />
            
            {/* Badge Kiri Atas: Prima */}
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <Leaf size={12} className="text-[#203f35]" />
              <span className="text-[10px] font-bold text-[#203f35]">Prima</span>
              <Star size={10} className="text-yellow-500" fill="currentColor" />
            </div>

            {/* Badge Kanan Atas: Terverifikasi */}
            <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <ShieldCheck size={12} className="text-[#203f35]" />
              <span className="text-[10px] font-bold text-gray-800">Terverifikasi</span>
            </div>
          </div>

          {/* Info Pakaian */}
          <div className="px-1 mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-sm font-bold text-gray-800 w-[60%] leading-tight">
                Kemeja Linen Terracotta
              </h3>
              <div className="flex flex-col items-end">
                <span className="text-sm font-extrabold text-[#203f35]">Rp 175.000</span>
                <span className="text-[9px] font-bold bg-[#ffeae6] text-[#C25F39] px-1.5 py-0.5 rounded uppercase mt-0.5 tracking-wide">
                  Bisa Barter
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
              <MapPin size={12} />
              <span>Kampus UI Depok</span>
              <span className="text-gray-300">•</span>
              <span>Ukuran M</span>
            </div>
          </div>

          {/* Baris Statistik */}
          <div className="bg-[#f0f7f4] rounded-xl py-2.5 px-4 flex justify-between items-center text-[11px] font-medium text-[#203f35]">
            <div className="flex items-center gap-1.5">
              <Eye size={14} className="text-gray-500" />
              <span>0 Dilihat</span>
            </div>
            <div className="w-[1px] h-4 bg-gray-300"></div>
            <div className="flex items-center gap-1.5">
              <Heart size={14} className="text-red-500" fill="currentColor" />
              <span>0 Suka</span>
            </div>
            <div className="w-[1px] h-4 bg-gray-300"></div>
            <div className="flex items-center gap-1.5">
              <ArrowRightLeft size={14} className="text-gray-500" />
              <span>0 Tawaran</span>
            </div>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="w-full mt-auto flex flex-col gap-3">
          <button 
            onClick={() => navigate('/jelajah')}
            className="w-full bg-[#8C3A21] hover:bg-[#732f1a] text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md"
          >
            Lihat di Katalog <ArrowRight size={16} />
          </button>
          
          <p className="text-[9px] text-center text-gray-400 -mt-1 px-4 leading-relaxed">
            Bagikan tautan etalase ke grup angkatanmu untuk peluang terjual 3x lebih cepat.
          </p>

          <button className="w-full bg-[#eaf2ef] hover:bg-[#dbe7e2] text-[#203f35] py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            <Share2 size={16} />
            Bagikan ke Teman Kampus
          </button>
        </div>

      </main>
    </div>
  );
};

export default SiapTayang;