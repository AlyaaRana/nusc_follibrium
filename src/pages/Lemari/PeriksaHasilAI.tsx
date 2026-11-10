import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PeriksaHasilAI() {
  const navigate = useNavigate();
  const location = useLocation();

  const fallbackImage =
    'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80';
  const capturedImage = location.state?.capturedImage;
  const imageSrc =
    typeof capturedImage === 'string' && capturedImage.length > 0
      ? capturedImage
      : fallbackImage;

  // --- State Interaktif ---
  const [kategori, setKategori] = useState('Kemeja Lengan Panjang');
  const [isEditingKategori, setIsEditingKategori] = useState(false);

  const colors = [
    { name: 'Warm Ecru (Krem)', bg: 'bg-[#f4eade]', textDark: true },
    { name: 'Terracotta', bg: 'bg-[#D9714B]', textDark: false },
    { name: 'Sage Green', bg: 'bg-[#8c9c82]', textDark: false },
    { name: 'Forest Green', bg: 'bg-[#2E6F40]', textDark: false },
    { name: 'Midnight Black', bg: 'bg-[#2a2a2a]', textDark: false },
  ];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const [motif, setMotif] = useState('Polos Minimalis');
  const [isEditingMotif, setIsEditingMotif] = useState(false);

  const [bahan, setBahan] = useState('100% Katun Linen Prima');
  const [isEditingBahan, setIsEditingBahan] = useState(false);

  const sizeOptions = ['S', 'M', 'L', 'XL', 'All Size'];
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    /* 1. Tambahkan pb-36 di container utama agar konten terbawah tidak tertutup sticky bar */
    <div className="min-h-screen bg-[#F3EEE3] flex flex-col font-jakarta pb-36 relative">
      {/* Header */}
      <div className="pt-5 px-6 pb-4 flex items-center justify-between">
            <button onClick={() => navigate(-1)} className="text-loopwear-dark">
               <ArrowLeft size={24} />
            </button>
            <h1 className="text-[16px] font-bold text-loopwear-dark">Periksa Hasil AI</h1>
            
            {/* Icon Profile User Circular */}
            <div className="w-9 h-9 bg-[#1B4D3E] rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
               <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
               >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
               </svg>
            </div>
            </div>
      

      {/* Main Content Scrollable Area */}
      <div className="px-6 flex-1 space-y-4">
        {/* Image Overview Card */}
        <div className="bg-[#e4d8c6] rounded-3xl h-48 relative overflow-hidden shadow-sm border border-loopwear-grey/30 flex items-center justify-center">
          <img
            src={imageSrc}
            alt="Foto pakaian yang sedang diperiksa"
            className="w-full h-full object-cover"
          />

          {/* AI Tags on Image */}
          <div className="absolute top-3 left-3 bg-[#2E6F40] text-white px-2 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
            ✨ Akurasi AI 98%
          </div>
          <div className="absolute top-10 right-4 bg-white text-[#2E6F40] px-2 py-1 rounded-full text-[10px] font-bold shadow-sm">
            • Kerah Tegak 100%
          </div>
          <div className="absolute top-24 left-16 bg-white text-[#D9714B] px-2 py-1 rounded-full text-[10px] font-bold shadow-sm">
            • {bahan}
          </div>
          <div className="absolute bottom-3 right-3 bg-white text-[#2E6F40] px-3 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1 shadow-sm">
            📏 LD ~52 cm
          </div>
        </div>

        {/* Form Fields - Kategori */}
        <div className="bg-white rounded-3xl p-4 flex items-center gap-4 shadow-sm border border-loopwear-grey/30">
          <div className="w-12 h-12 bg-[#C4ECCF]/60 rounded-2xl flex items-center justify-center text-[#1B4D3E] shrink-0">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 4v4" />
              <path d="M22 17l-10-8-10 8" />
              <path d="M17 14v4" />
              <path d="M7 14v4" />
              <circle cx="12" cy="4" r="2" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-[9px] font-bold text-loopwear-muted mb-0.5 tracking-wider">KATEGORI</p>
            {isEditingKategori ? (
              <select
                value={kategori}
                onChange={(e) => {
                  setKategori(e.target.value);
                  setIsEditingKategori(false);
                }}
                className="font-bold text-[14px] text-loopwear-dark bg-[#F3EEE3] px-2 py-1 rounded-lg w-full outline-none border border-[#2E6F40]"
                autoFocus
              >
                <option value="Kemeja Lengan Panjang">Kemeja Lengan Panjang</option>
                <option value="Kemeja Lengan Pendek">Kemeja Lengan Pendek</option>
                <option value="Blazer / Outwear">Blazer / Outwear</option>
                <option value="Kaos / T-Shirt">Kaos / T-Shirt</option>
              </select>
            ) : (
              <h4 className="font-bold text-[15px] text-loopwear-dark">{kategori}</h4>
            )}
          </div>
          <button
            onClick={() => setIsEditingKategori(!isEditingKategori)}
            className="text-loopwear-green bg-[#E8F5E9] p-2 rounded-full cursor-pointer text-xs"
          >
            ✏️
          </button>
        </div>

        {/* Warna Selection */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-loopwear-grey/30">
          <div className="flex justify-between items-center mb-3">
            <p className="text-[10px] font-bold text-loopwear-muted tracking-wider flex items-center gap-1">
              <span>🎨</span> WARNA UTAMA
            </p>
            <span className="bg-[#E8F5E9] text-[#2E6F40] px-2 py-1 rounded-full text-[10px] font-bold">
              {selectedColor.name}
            </span>
          </div>
          <div className="flex gap-3">
            {colors.map((color) => {
              const isSelected = selectedColor.name === color.name;
              return (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full ${color.bg} transition-transform flex items-center justify-center ${
                    isSelected ? 'border-2 border-[#2E6F40] p-0.5 scale-105' : 'opacity-80'
                  }`}
                >
                  {isSelected && (
                    <div className={`w-full h-full ${color.bg} rounded-full flex items-center justify-center ${color.textDark ? 'text-[#2E6F40]' : 'text-white'} text-xs font-bold`}>
                      ✓
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Split Fields */}
        <div className="flex gap-4">
          <div className="flex-1 bg-white rounded-3xl p-4 shadow-sm border border-loopwear-grey/30">
            <div className="flex justify-between items-center mb-1">
              <p className="text-[9px] font-bold text-loopwear-muted tracking-wider flex items-center gap-1">
                <span>▨</span> MOTIF
              </p>
              <button onClick={() => setIsEditingMotif(!isEditingMotif)} className="text-[10px]">
                ✏️
              </button>
            </div>
            {isEditingMotif ? (
              <input
                type="text"
                value={motif}
                onChange={(e) => setMotif(e.target.value)}
                onBlur={() => setIsEditingMotif(false)}
                className="font-bold text-[13px] text-loopwear-dark border-b border-[#2E6F40] w-full outline-none"
                autoFocus
              />
            ) : (
              <h4 className="font-bold text-[13px] text-loopwear-dark truncate">{motif}</h4>
            )}
          </div>

          <div className="flex-1 bg-white rounded-3xl p-4 shadow-sm border border-loopwear-grey/30">
            <div className="flex justify-between items-center mb-1">
              <p className="text-[9px] font-bold text-loopwear-muted tracking-wider flex items-center gap-1">
                <span>🌿</span> BAHAN
              </p>
              <button onClick={() => setIsEditingBahan(!isEditingBahan)} className="text-[10px]">
                ✏️
              </button>
            </div>
            {isEditingBahan ? (
              <input
                type="text"
                value={bahan}
                onChange={(e) => setBahan(e.target.value)}
                onBlur={() => setIsEditingBahan(false)}
                className="font-bold text-[13px] text-loopwear-dark border-b border-[#2E6F40] w-full outline-none"
                autoFocus
              />
            ) : (
              <h4 className="font-bold text-[13px] text-loopwear-dark truncate">{bahan}</h4>
            )}
          </div>
        </div>

        {/* 2. Tambahkan mb-8 / mb-10 di card paling bawah ini sebagai jarak aman ekstra */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border border-loopwear-grey/30 mb-10">
          <div className="flex justify-between items-center mb-3">
            <p className="text-[10px] font-bold text-loopwear-muted tracking-wider flex items-center gap-1">
              <span>📏</span> UKURAN & POTONGAN
            </p>
            <span className="text-[10px] font-bold text-loopwear-dark">Regular Fit</span>
          </div>
          <div className="flex gap-2">
            {sizeOptions.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex-1 py-2 rounded-xl text-[12px] font-bold transition-colors ${
                    isSelected
                      ? 'bg-[#2E6F40] text-white shadow-md'
                      : 'bg-[#F3EEE3] text-loopwear-dark border border-loopwear-grey/50'
                  }`}
                >
                  {size} {isSelected && '✓'}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Fixed Bottom Actions (Selalu menempel di bawah viewport) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 px-6 bg-white pt-4 pb-8 rounded-t-3xl border-t border-loopwear-grey/20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <button
          onClick={() => navigate('/lemari')}
          className="w-full bg-[#D9714B] text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-transform text-[15px] flex justify-center items-center gap-2 mb-3 cursor-pointer"
        >
          <span className="text-white bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </span>{' '}
          Simpan ke Lemari
        </button>
        <button
          onClick={() => navigate('/lemari/tambah')}
          className="w-full text-center text-[12px] font-bold text-[#2E6F40] flex justify-center items-center gap-1.5 cursor-pointer"
        >
          <span>📸</span> Foto Ulang
        </button>
      </div>
    </div>
  );
}