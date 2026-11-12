import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Lock, Trophy } from 'lucide-react';

export default function KoleksiLencana() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F3EEE3] font-jakarta pb-6">
      {/* Header */}
      <div className="pt-5 px-6 pb-4 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-[#1B4D3E]"><ArrowLeft size={24} /></button>
        <h1 className="text-[18px] font-bold text-[#1B4D3E]">Koleksi Lencana</h1>
      </div>

      <div className="px-6 space-y-6">
        {/* Next Badge Card */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-loopwear-grey/20">
          <div className="relative h-28 overflow-hidden rounded-2xl mb-4">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
              alt="Pakaian yang siap didaur ulang"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B4D3E]/80 to-transparent" />
            <span className="absolute bottom-3 left-4 text-white text-sm font-extrabold">Kumpulkan aksi baikmu</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#D9714B] text-[10px] font-bold flex items-center gap-1">
              📈 LENCANA BERIKUTNYA
            </span>
            <span className="bg-[#FFF0E8] text-[#D9714B] px-2 py-1 rounded-full text-[9px] font-bold">50% Tercapai</span>
          </div>
          
          <div className="flex gap-4 items-start mb-4">
             <div className="w-10 h-10 rounded-full bg-[#FFF0E8] flex items-center justify-center text-[#D9714B] text-xl shrink-0">
               ♻️
             </div>
             <div>
               <h3 className="font-bold text-[14px] text-loopwear-dark mb-1">Penggiat Daur Ulang</h3>
               <p className="text-[11px] text-loopwear-muted leading-snug">Salurkan 1 helai lagi pakaianmu untuk klaim voucher!</p>
             </div>
          </div>

          <div className="relative w-full h-2 bg-loopwear-grey/20 rounded-full overflow-hidden mb-2">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-[#D9714B] rounded-full"></div>
          </div>
          <div className="flex justify-between items-center text-[9px] font-bold">
            <span className="text-[#2E6F40] flex items-center gap-1"><CheckCircle2 size={12}/> 1 helai terkumpul</span>
            <span className="text-loopwear-muted">Target: 2 helai</span>
          </div>
        </div>

        {/* Badge Grid */}
        <div>
          <div className="flex justify-between items-center mb-4">
             <h2 className="font-extrabold text-[15px] text-loopwear-dark flex items-center gap-1">
               Semua Lencana Sirkular ✨
             </h2>
             <span className="bg-[#C4ECCF]/50 text-[#2E6F40] px-2 py-1 rounded text-[10px] font-bold">Level Sirkular</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
             {/* Unlocked Badges */}
             <div className="bg-white rounded-3xl p-4 flex flex-col items-center text-center border border-[#2E6F40]/20 shadow-sm relative">
                <div className="w-14 h-14 bg-[#E8F5E9] rounded-2xl flex items-center justify-center text-[#2E6F40] mb-3 relative">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 2v6h6"/></svg>
                   <div className="absolute -top-1 -right-1 bg-[#2E6F40] text-white rounded-full p-0.5"><CheckCircle2 size={12}/></div>
                </div>
                <span className="text-[#2E6F40] bg-[#C4ECCF]/50 px-2 py-0.5 rounded text-[8px] font-bold mb-1.5">Terbuka</span>
                <h4 className="font-bold text-[12px] text-loopwear-dark">Pemutar Perdana</h4>
                <p className="text-[9px] text-loopwear-muted mt-1">Mulai langkah pertamamu</p>
             </div>

             <div className="bg-white rounded-3xl p-4 flex flex-col items-center text-center border border-[#2E6F40]/20 shadow-sm relative">
                <div className="w-14 h-14 bg-[#E8F5E9] rounded-2xl flex items-center justify-center text-[#2E6F40] mb-3 relative">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                   <div className="absolute -top-1 -right-1 bg-[#2E6F40] text-white rounded-full p-0.5"><CheckCircle2 size={12}/></div>
                </div>
                <span className="text-[#2E6F40] bg-[#C4ECCF]/50 px-2 py-0.5 rounded text-[8px] font-bold mb-1.5">Terbuka</span>
                <h4 className="font-bold text-[12px] text-loopwear-dark">Penyewa Hemat</h4>
                <p className="text-[9px] text-loopwear-muted mt-1">Tampil kece tanpa beli baru</p>
             </div>

             <div className="bg-white rounded-3xl p-4 flex flex-col items-center text-center border border-[#2E6F40]/20 shadow-sm relative">
                <div className="w-14 h-14 bg-[#E8F5E9] rounded-2xl flex items-center justify-center text-[#2E6F40] mb-3 relative">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4v4"/><path d="M22 17l-10-8-10 8"/><path d="M17 14v4"/><path d="M7 14v4"/><circle cx="12" cy="4" r="2"/></svg>
                   <div className="absolute -top-1 -right-1 bg-[#2E6F40] text-white rounded-full p-0.5"><CheckCircle2 size={12}/></div>
                </div>
                <span className="text-[#2E6F40] bg-[#C4ECCF]/50 px-2 py-0.5 rounded text-[8px] font-bold mb-1.5">Terbuka</span>
                <h4 className="font-bold text-[12px] text-loopwear-dark">Penyelamat Lemari</h4>
                <p className="text-[9px] text-loopwear-muted mt-1">3 pakaian tersirkulasi</p>
             </div>

             {/* In Progress */}
             <div className="bg-white rounded-3xl p-4 flex flex-col items-center text-center border border-[#D9714B]/30 shadow-[0_0_15px_rgba(217,113,75,0.1)] relative">
                <div className="w-14 h-14 bg-[#FFF0E8] rounded-2xl flex items-center justify-center text-[#D9714B] mb-3">
                   <Trophy size={24} />
                </div>
                <span className="bg-[#D9714B] text-white px-2 py-0.5 rounded text-[8px] font-bold mb-1.5 shadow-sm">50% Progres</span>
                <h4 className="font-bold text-[12px] text-loopwear-dark">Penggiat Daur Ulang</h4>
                <p className="text-[9px] text-[#D9714B] font-bold mt-1">Tinggal 1 helai lagi</p>
             </div>

             {/* Locked Badges */}
             <div className="bg-[#F3EEE3] rounded-3xl p-4 flex flex-col items-center text-center border border-loopwear-grey/20 opacity-70">
                <div className="w-14 h-14 bg-[#e4d8c6] rounded-2xl flex items-center justify-center text-loopwear-muted mb-3 relative">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05M22 12A10 10 0 1 1 2 12a10 10 0 0 1 20 0Z"/></svg>
                   <div className="absolute -top-1 -right-1 bg-loopwear-grey text-white rounded-full p-0.5"><Lock size={10}/></div>
                </div>
                <span className="text-loopwear-muted bg-white px-2 py-0.5 rounded text-[8px] font-bold mb-1.5 border border-loopwear-grey/20">Terkunci</span>
                <h4 className="font-bold text-[12px] text-loopwear-muted">Mitra Terpercaya</h4>
                <p className="text-[9px] text-loopwear-muted mt-1">5x transaksi lancar</p>
             </div>

             <div className="bg-[#F3EEE3] rounded-3xl p-4 flex flex-col items-center text-center border border-loopwear-grey/20 opacity-70">
                <div className="w-14 h-14 bg-[#e4d8c6] rounded-2xl flex items-center justify-center text-loopwear-muted mb-3 relative">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                   <div className="absolute -top-1 -right-1 bg-loopwear-grey text-white rounded-full p-0.5"><Lock size={10}/></div>
                </div>
                <span className="text-loopwear-muted bg-white px-2 py-0.5 rounded text-[8px] font-bold mb-1.5 border border-loopwear-grey/20">Terkunci</span>
                <h4 className="font-bold text-[12px] text-loopwear-muted">Pahlawan Sirkular</h4>
                <p className="text-[9px] text-loopwear-muted mt-1">Hemat 50kg karbon lemari</p>
             </div>

             {[
               { name: 'Penjaga Gaya', detail: 'Bagikan 5 inspirasi OOTD', icon: '👗', unlocked: true },
               { name: 'Kolektor Poin', detail: 'Kumpulkan 500 poin', icon: '⭐', unlocked: true },
               { name: 'Sahabat Bumi', detail: 'Ikuti 3 tantangan', icon: '🌱', unlocked: true },
               { name: 'Pemburu Harta', detail: 'Temukan 10 preloved', icon: '🔎' },
               { name: 'Penyebar Kebaikan', detail: 'Ajak 3 teman bergabung', icon: '🤝' },
               { name: 'Penjaga Serat', detail: 'Daur ulang 5 pakaian', icon: '🧵' },
               { name: 'Gaya Berputar', detail: 'Sirkulasikan 10 pakaian', icon: '🔄' },
               { name: 'Kampus Lestari', detail: 'Hemat 20 kg CO₂e', icon: '🌿' },
               { name: 'Kreator Cerita', detail: 'Bagikan 3 cerita', icon: '📖' },
               { name: 'Pembeli Bijak', detail: 'Pilih preloved 5 kali', icon: '🛍️' },
               { name: 'Peminjam Setia', detail: 'Sewa 3 pakaian', icon: '🧥' },
               { name: 'Bintang Komunitas', detail: 'Dapatkan 50 suka', icon: '💚' },
             ].map((badge) => (
               <div
                 key={badge.name}
                 className={`rounded-3xl p-4 flex flex-col items-center text-center border ${
                   badge.unlocked
                     ? 'bg-white border-[#2E6F40]/20'
                     : 'bg-[#F3EEE3] border-loopwear-grey/20 opacity-70'
                 }`}
               >
                 <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-3 ${badge.unlocked ? 'bg-[#E8F5E9]' : 'bg-[#e4d8c6]'}`}>
                   {badge.icon}
                 </div>
                 <span className={`px-2 py-0.5 rounded text-[8px] font-bold mb-1.5 ${badge.unlocked ? 'text-[#2E6F40] bg-[#C4ECCF]/50' : 'text-loopwear-muted bg-white'}`}>
                   {badge.unlocked ? 'Terbuka' : 'Terkunci'}
                 </span>
                 <h4 className={`font-bold text-[12px] ${badge.unlocked ? 'text-loopwear-dark' : 'text-loopwear-muted'}`}>{badge.name}</h4>
                 <p className="text-[9px] text-loopwear-muted mt-1">{badge.detail}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Global Impact Note */}
        <div className="bg-[#C4ECCF]/40 rounded-2xl p-4 flex items-center gap-3 border border-[#2E6F40]/20">
           <div className="w-10 h-10 bg-[#1B4D3E] rounded-full flex items-center justify-center text-white shrink-0">👥</div>
           <div>
              <h4 className="text-[11px] font-bold text-[#1B4D3E]">Gerakan Kampus Hijau</h4>
              <p className="text-[10px] text-loopwear-dark/70 leading-snug">342 mahasiswa sudah bergabung memutar lemari.</p>
           </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <button type="button" onClick={() => navigate('/app/komunitas/tantangan')} className="w-full bg-[#D9714B] text-white font-bold py-3.5 rounded-full shadow-lg flex justify-center items-center gap-2 text-[13px]">
            🎁 Lihat Panduan Poin & Hadiah
          </button>
          <button type="button" onClick={() => navigate('/app/komunitas/galeri')} className="w-full bg-white text-loopwear-dark font-bold py-3.5 rounded-full border border-loopwear-grey/30 flex justify-center items-center gap-2 text-[13px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            Bagikan Lemari Prestasi
          </button>
        </div>
      </div>
    </div>
  );
}