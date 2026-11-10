import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Check, 
  Leaf, 
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { dummyBusanaSewa } from '../../data/dummySewa';

const PilihBusana: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Semua');
  // State untuk item yang dipilih (misal default memilih item pertama)
  const [selectedItem, setSelectedItem] = useState<string>('b-1');

  const filters = ['Semua', 'Kebaya', 'Jas Formal', 'Gaun Pesta'];

  const filteredData = activeFilter === 'Semua' 
    ? dummyBusanaSewa 
    : dummyBusanaSewa.filter(item => item.kategori === activeFilter);

  return (
    <div className="w-full max-w-md mx-auto min-h-[100dvh] bg-[#FDFBF7] flex flex-col font-sans sm:border-x sm:border-gray-200 shadow-2xl relative">
      
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4 bg-[#FDFBF7] sticky top-0 z-30 flex-shrink-0">
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft size={22} className="text-gray-800" />
        </button>
        <h1 className="text-sm font-bold text-gray-800 tracking-wide absolute left-1/2 -translate-x-1/2">
          Rental Item Detail
        </h1>
        <div className="w-8"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden pb-24">
        
        <div className="px-5 pt-2">
          {/* Stepper Card */}
          <div className="bg-white rounded-[20px] py-4 px-2 shadow-sm mb-6 border border-gray-100">
            <div className="flex items-start justify-between w-full relative">
              <div className="absolute left-8 right-8 top-[11px] h-[1.5px] bg-gray-200 -z-10"></div>
              
              <div className="flex flex-col items-center gap-1.5 bg-white px-2">
                <div className="w-[22px] h-[22px] rounded-full bg-[#A84524] text-white flex items-center justify-center shadow-sm">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-[9px] font-bold text-[#A84524]">Diajukan</span>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 bg-white px-2">
                <div className="w-[22px] h-[22px] rounded-full bg-[#e8ecea] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#a3b1ab]"></div>
                </div>
                <span className="text-[9px] font-medium text-gray-400">Diserahkan</span>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 bg-white px-2">
                <div className="w-[22px] h-[22px] rounded-full bg-[#e8ecea] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#a3b1ab]"></div>
                </div>
                <span className="text-[9px] font-medium text-gray-400">Diproses</span>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 bg-white px-2">
                <div className="w-[22px] h-[22px] rounded-full bg-[#e8ecea] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#a3b1ab]"></div>
                </div>
                <span className="text-[9px] font-medium text-gray-400">Siap Sewa</span>
              </div>
            </div>
          </div>

          {/* Title Area */}
          <div className="mb-4">
            <span className="text-[10px] text-gray-500 font-medium">Dari Lemari Digitalmu</span>
            <h2 className="text-xl font-extrabold text-gray-800">Pilih Busana Disewa</h2>
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar mb-5 pb-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-all ${
                  activeFilter === filter
                    ? 'bg-[#203f35] text-white shadow-sm'
                    : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50'
                }`}
              >
                {filter === 'Semua' ? `Semua (${dummyBusanaSewa.length})` : filter}
              </button>
            ))}
          </div>

          {/* Grid Layout (2 Kolom) */}
          <div className="grid grid-cols-2 gap-4">
            {filteredData.map((item) => {
              const isSelected = selectedItem === item.id;
              
              return (
                <div 
                  key={item.id} 
                  onClick={() => setSelectedItem(item.id)}
                  className="flex flex-col cursor-pointer group"
                >
                  <div className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-2 transition-all ${
                    isSelected ? 'ring-2 ring-[#203f35] ring-offset-2 ring-offset-[#FDFBF7]' : 'ring-1 ring-gray-100'
                  }`}>
                    <img 
                      src={item.imageUrl} 
                      alt={item.nama} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Badge Kondisi (Kiri Atas) */}
                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                      <Leaf size={10} className={item.kondisi === 'Prima' ? 'text-[#203f35]' : 'text-green-500'} />
                      <span className="text-[8px] font-bold text-gray-800">{item.kondisi}</span>
                    </div>

                    {/* Badge Ukuran (Kanan Bawah) */}
                    <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur px-2 py-1 rounded-md shadow-sm">
                      <span className="text-[9px] font-bold text-gray-800">{item.ukuran}</span>
                    </div>

                    {/* Checkmark Overlay (Muncul jika dipilih) */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 bg-[#203f35] text-white rounded-full p-0.5 shadow-md">
                        <CheckCircle2 size={16} fill="currentColor" className="text-white" />
                      </div>
                    )}
                  </div>

                  {/* Info Teks */}
                  <div className="flex flex-col px-1">
                    <h3 className="text-[11px] font-bold text-gray-800 leading-tight mb-0.5">{item.nama}</h3>
                    <p className="text-[10px] text-gray-500 font-medium">
                      Rp {item.harga.toLocaleString('id-ID').replace(',00', '')}k <span className="text-[9px]">/3hr</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      {/* Floating Bottom Action */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7] to-transparent pt-10 z-20">
        
        {/* Banner Info */}
        <div className="bg-[#eaf2ef] rounded-2xl p-3 mb-4 flex gap-3 items-center border border-[#dbece5] shadow-sm">
          <div className="w-8 h-8 rounded-full bg-[#c3dfce] flex items-center justify-center text-[#203f35] flex-shrink-0">
            <RefreshCw size={14} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-[#203f35]">Lemari yang Terus Berputar</span>
            <span className="text-[9px] text-[#203f35]/80 leading-tight">
              Sewa aktif terlindungi deposit & verifikasi KTP.
            </span>
          </div>
        </div>

        <button 
          onClick={() => navigate('/sewa/tarif-deposit')}
          className="w-full bg-[#A84524] hover:bg-[#8e381b] text-white py-3.5 rounded-full font-bold transition-all active:scale-[0.98] shadow-md shadow-red-900/10"
        >
          Lanjutkan
        </button>
      </div>

    </div>
  );
};

export default PilihBusana;