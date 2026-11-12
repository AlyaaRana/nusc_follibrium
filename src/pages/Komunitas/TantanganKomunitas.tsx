import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TantanganKomunitas() {
  const navigate = useNavigate();
  const [checkIns, setCheckIns] = useState(18);
  const [joinedChallenges, setJoinedChallenges] = useState<string[]>([]);
  const days = Array.from({ length: 30 }, (_, i) => i < checkIns);

  const toggleChallenge = (challenge: string) => {
    setJoinedChallenges((current) =>
      current.includes(challenge)
        ? current.filter((joined) => joined !== challenge)
        : [...current, challenge],
    );
  };

  return (
    <div className="bg-[#F3EEE3] font-jakarta pb-6">
      <div className="pt-5 px-6 pb-4 flex items-center gap-3">
        <button type="button" onClick={() => navigate(-1)} aria-label="Kembali" className="text-[#1B4D3E]"><ArrowLeft size={24} /></button>
        <h1 className="text-[18px] font-bold text-[#1B4D3E]">Tantangan</h1>
      </div>

      <div className="px-6 space-y-6">
        {/* Main Challenge Card */}
        <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-loopwear-grey/20">
          <div className="h-48 relative flex flex-col justify-end p-5">
             <img
               src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80"
               alt="Teman-teman memilih pakaian bersama"
               className="absolute inset-0 h-full w-full object-cover"
             />
             <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1B4D3E] px-3 py-1.5 rounded-full text-[10px] font-extrabold flex items-center gap-1">
                🍃 GAYA HIDUP
             </div>
             <div className="absolute top-4 right-4 bg-[#D9714B] text-white px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm">
                🔥 Streak Aktif
             </div>
             <div className="relative z-10 text-white">
                <h2 className="text-2xl font-extrabold mb-1 drop-shadow-md">Sebulan Tanpa Beli Baru</h2>
                <p className="text-[11px] opacity-90 font-medium">Misi kurasi lemari & sirkulasi gaya kampus</p>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="p-5">
             <div className="flex justify-between items-center mb-4">
                <span className="text-[12px] font-bold text-loopwear-dark flex items-center gap-1.5">
                  📅 Progres Harian
                </span>
                <span className="text-[12px] font-bold text-[#1B4D3E]">{checkIns} dari 30 hari ({Math.round((checkIns / 30) * 100)}%)</span>
             </div>

             {/* 30 Days Grid */}
             <div className="grid grid-cols-10 gap-1.5 mb-6">
                {days.map((isDone, idx) => (
                   <div 
                     key={idx} 
                     className={`w-full aspect-square rounded-full flex items-center justify-center ${
                       isDone 
                        ? (idx === 17 ? 'bg-[#D9714B] border-2 border-[#D9714B]/30 ring-4 ring-[#D9714B]/20' : 'bg-[#D9714B]') 
                        : 'bg-[#e4d8c6]'
                     }`}
                   >
                     {isDone && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                   </div>
                ))}
             </div>

             <div className="flex justify-between items-center mb-5 bg-[#F3EEE3] p-3 rounded-2xl">
                <div className="flex items-center gap-2">
                   <div className="flex -space-x-2">
                     <div className="w-6 h-6 rounded-full bg-[#1B4D3E] border-2 border-white flex items-center justify-center text-[10px] text-white">👤</div>
                     <div className="w-6 h-6 rounded-full bg-[#D9714B] border-2 border-white flex items-center justify-center text-[10px] text-white">👩</div>
                     <div className="w-6 h-6 rounded-full bg-loopwear-grey border-2 border-white flex items-center justify-center text-[10px] text-white">🧑</div>
                   </div>
                   <div className="text-[9px] text-loopwear-muted leading-tight">
                      +152 teman <br/> kampus
                   </div>
                </div>
                <div className="bg-[#C4ECCF]/60 text-[#1B4D3E] px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5">
                   🏆 Lencana + 20K Koin
                </div>
             </div>

             <button
               type="button"
               onClick={() => setCheckIns((current) => Math.min(current + 1, 30))}
               disabled={checkIns === 30}
               className="w-full bg-[#1B4D3E] disabled:bg-[#7a9389] text-white font-bold py-4 rounded-full shadow-md flex justify-center items-center gap-2 text-[14px] active:scale-95 transition-transform"
             >
               {checkIns === 30 ? '✅ Tantangan Selesai' : '🌿 Check-in Hari Ini 🌿'}
               <span className="bg-[#D9714B] text-white px-2 py-0.5 rounded text-[9px] ml-1">🔥 {checkIns} Hari</span>
             </button>
          </div>
        </div>

        {/* Other Challenges */}
        <div>
           <div className="flex justify-between items-end mb-4">
              <div>
                 <h3 className="font-extrabold text-[15px] text-loopwear-dark">Tantangan Lainnya</h3>
                 <p className="text-[11px] text-loopwear-muted">Ikuti misi baru bareng komunitas</p>
              </div>
              <button className="text-[11px] font-bold text-[#1B4D3E]">Lihat Semua ›</button>
           </div>

           <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              <div className="min-w-[160px] bg-white rounded-3xl p-3 shadow-sm border border-loopwear-grey/20">
                 <div className="h-28 rounded-2xl mb-3 relative flex flex-col justify-end p-2 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" alt="Pakaian yang siap ditukar" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute top-2 left-2 bg-white/90 text-loopwear-dark px-2 py-0.5 rounded text-[8px] font-bold">12-18 Nov</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <h4 className="text-white font-bold text-[12px] relative z-10 leading-tight">Tukar Lemari</h4>
                 </div>
                 <div className="flex justify-between items-center mb-3">
                    <div className="flex -space-x-1">
                       <span className="w-4 h-4 bg-[#C4ECCF] rounded-full text-[6px] flex items-center justify-center">R</span>
                       <span className="w-4 h-4 bg-[#1B4D3E] text-white rounded-full text-[6px] flex items-center justify-center">D</span>
                       <span className="w-4 h-4 bg-[#D9714B] text-white rounded-full text-[6px] flex items-center justify-center">M</span>
                    </div>
                    <span className="text-[9px] text-loopwear-muted">84 teman</span>
                 </div>
                 <button type="button" onClick={() => toggleChallenge('Tukar Lemari')} className="w-full bg-[#E8F5E9] text-[#2E6F40] font-bold py-2 rounded-xl text-[10px]">{joinedChallenges.includes('Tukar Lemari') ? '✓ Diikuti' : 'Ikut Misi'}</button>
              </div>

              <div className="min-w-[160px] bg-white rounded-3xl p-3 shadow-sm border border-loopwear-grey/20">
                 <div className="h-28 rounded-2xl mb-3 relative flex flex-col justify-end p-2 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80" alt="Tekstil dan pakaian untuk didaur ulang" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute top-2 left-2 bg-white/90 text-loopwear-dark px-2 py-0.5 rounded text-[8px] font-bold">1-30 Nov</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <h4 className="text-white font-bold text-[12px] relative z-10 leading-tight">Daur 3 Helai</h4>
                 </div>
                 <div className="flex justify-between items-center mb-3">
                    <div className="flex -space-x-1">
                       <span className="w-4 h-4 bg-[#C4ECCF] rounded-full text-[6px] flex items-center justify-center">A</span>
                       <span className="w-4 h-4 bg-[#1B4D3E] text-white rounded-full text-[6px] flex items-center justify-center">S</span>
                       <span className="w-4 h-4 bg-[#D9714B] text-white rounded-full text-[6px] flex items-center justify-center">K</span>
                    </div>
                    <span className="text-[9px] text-loopwear-muted">210 teman</span>
                 </div>
                 <button type="button" onClick={() => toggleChallenge('Daur 3 Helai')} className="w-full bg-[#E8F5E9] text-[#2E6F40] font-bold py-2 rounded-xl text-[10px]">{joinedChallenges.includes('Daur 3 Helai') ? '✓ Diikuti' : 'Ikut Misi'}</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}