import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MessageCircle, Bookmark, Camera, ArrowLeft, ImagePlus, X } from 'lucide-react';

type GalleryTag = {
  label: string;
  type: string;
  typeColor: string;
  typeBg: string;
  dotColor: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

type GalleryPost = {
  id: number;
  type: 'Gaya' | 'Cerita' | 'Ulasan';
  name: string;
  username: string;
  location: string;
  avatarBg: string;
  avatarImg: string;
  image: string;
  imageBg: string;
  category: string;
  isOriginal: boolean;
  ecoTag?: string;
  tags: GalleryTag[];
  caption: string;
  likes: number;
  comments: number;
  action: { label: string; icon: string; color: string; bg: string; hoverBg: string };
};

export default function GaleriGaya() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [activeTab, setActiveTab] = useState<GalleryPost['type']>('Gaya');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [captionDraft, setCaptionDraft] = useState('');
  const [imageDraft, setImageDraft] = useState('');
  const [composerError, setComposerError] = useState('');

  const [posts, setPosts] = useState<GalleryPost[]>([
    {
      id: 1,
      type: 'Gaya',
      name: "Nara Rahma",
      username: "@nara",
      location: "Kampus UI, Depok",
      avatarBg: "#e4d8c6",
      avatarImg: "https://ui-avatars.com/api/?name=Nara+Rahma&background=e4d8c6&color=1A1A1A",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      imageBg: "#8c9c82",
      category: "Kasual Kampus",
      isOriginal: true,
      tags: [
        { label: "Kemeja Linen", type: "PRELOVED", typeColor: "text-[#2E6F40]", typeBg: "bg-[#E8F5E9]", dotColor: "bg-[#2E6F40]", top: "45%", left: "20%" },
        { label: "Sneakers Retro", type: "SEWA", typeColor: "text-[#D9714B]", typeBg: "bg-[#FFF0E8]", dotColor: "bg-[#D9714B]", bottom: "30%", right: "15%" }
      ] as GalleryTag[],
      caption: "Outfit ujian proposal hari ini! Kemejanya dapet swap lewat Lemari Putar UI minggu lalu, sejuk banget pas dipakai...",
      likes: 128,
      comments: 14,
      action: { label: "Ajukan Barter", icon: "barter", color: "text-[#2E6F40]", bg: "bg-[#E8F5E9]", hoverBg: "hover:bg-[#C4ECCF]" }
    },
    {
      id: 2,
      type: 'Gaya',
      name: "Dimas Anggara",
      username: "@dimas.a",
      location: "ITB, Bandung",
      avatarBg: "1A1A1A",
      avatarImg: "https://ui-avatars.com/api/?name=Dimas+Anggara&background=1A1A1A&color=fff",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
      imageBg: "#a89887",
      category: "Kantor & Magang", // Dianggap cocok untuk sidang/kantoran
      isOriginal: false,
      ecoTag: "💧 Hemat 2.700L Air",
      tags: [
        { label: "Blazer Mocha", type: "SEWA 3 HARI", typeColor: "text-[#D9714B]", typeBg: "bg-[#FFF0E8]", dotColor: "bg-[#D9714B]", top: "65%", left: "25%" }
      ] as GalleryTag[],
      caption: "Sewa blazer wisuda 3 hari buat sidang yudisium. Bersih, wangi, nggak usah beli baru cuma buat sekali pakai 🎓🔥",
      likes: 94,
      comments: 8,
      action: { label: "Sewa Serupa", icon: "sewa", color: "text-[#2E6F40]", bg: "bg-[#E8F5E9]", hoverBg: "hover:bg-[#C4ECCF]" }
    },
    {
      id: 3,
      type: 'Cerita',
      name: "Alya Putri",
      username: "@alyap",
      location: "Kampus UGM, Yogyakarta",
      avatarBg: "#e4d8c6",
      avatarImg: "https://ui-avatars.com/api/?name=Alya+Putri&background=e4d8c6&color=1A1A1A",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      imageBg: "#8c9c82",
      category: "Cerita Komunitas",
      isOriginal: false,
      ecoTag: "🌱 3 pakaian berputar",
      tags: [],
      caption: "Awalnya cuma ingin merapikan lemari. Ternyata tiga pakaian yang jarang kupakai bisa jadi favorit baru teman-teman kampus lewat acara tukar baju. Senang rasanya melihat pakaian punya cerita baru!",
      likes: 76,
      comments: 12,
      action: { label: "Baca cerita", icon: "cerita", color: "text-[#2E6F40]", bg: "bg-[#E8F5E9]", hoverBg: "hover:bg-[#C4ECCF]" }
    },
    {
      id: 4,
      type: 'Ulasan',
      name: "Raka Pratama",
      username: "@raka.p",
      location: "Kampus ITB, Bandung",
      avatarBg: "#dce9e2",
      avatarImg: "https://ui-avatars.com/api/?name=Raka+Pratama&background=dce9e2&color=1A1A1A",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
      imageBg: "#8c9c82",
      category: "Ulasan Transaksi",
      isOriginal: false,
      ecoTag: "⭐ Transaksi terverifikasi",
      tags: [],
      caption: "Proses sewanya jelas dan pemiliknya responsif. Blazer datang dalam kondisi bersih dan pas untuk presentasi. Pengalaman pertama sewa pakaian di komunitas ini memuaskan!",
      likes: 52,
      comments: 6,
      action: { label: "Jelajahi sewa", icon: "sewa", color: "text-[#2E6F40]", bg: "bg-[#E8F5E9]", hoverBg: "hover:bg-[#C4ECCF]" }
    },
  ]);

  const filteredPosts = posts.filter((post) => {
    if (post.type !== activeTab) return false;
    if (activeTab !== 'Gaya' || activeFilter === 'Semua') return true;
    return post.category === activeFilter;
  });

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setComposerError('Pilih file gambar untuk kirimanmu.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setComposerError('Ukuran foto maksimal 5 MB.');
      event.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageDraft(reader.result);
        setComposerError('');
      }
    };
    reader.onerror = () => setComposerError('Gambar gagal dibaca. Coba pilih file lain.');
    reader.readAsDataURL(file);
  };

  const publishPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!captionDraft.trim() || !imageDraft) {
      setComposerError('Tambahkan foto dan cerita singkat sebelum membagikan.');
      return;
    }

    setPosts((current) => [{
      id: Date.now(),
      type: 'Gaya',
      name: 'Kamu',
      username: '@kamu',
      location: 'Komunitas Loopwear',
      avatarBg: '#C4ECCF',
      avatarImg: 'https://ui-avatars.com/api/?name=Kamu&background=C4ECCF&color=1A1A1A',
      image: imageDraft,
      imageBg: '#8c9c82',
      category: 'Kasual Kampus',
      isOriginal: false,
      tags: [],
      caption: captionDraft.trim(),
      likes: 0,
      comments: 0,
      action: { label: 'Jelajahi gaya', icon: 'gaya', color: 'text-[#2E6F40]', bg: 'bg-[#E8F5E9]', hoverBg: 'hover:bg-[#C4ECCF]' },
    }, ...current]);
    setCaptionDraft('');
    setImageDraft('');
    setComposerError('');
    setIsComposerOpen(false);
    setActiveTab('Gaya');
    setActiveFilter('Semua');
  };

  const handlePostAction = (post: GalleryPost) => {
    if (post.type === 'Cerita') {
      setExpandedPosts((current) => current.includes(post.id) ? current.filter((id) => id !== post.id) : [...current, post.id]);
      return;
    }
    navigate('/jelajah');
  };

  return (
    <div className="bg-[#F3EEE3] font-jakarta pb-6">
      {/* Header & Tabs */}
      <div className="pt-5 px-6 pb-2 sticky top-0 bg-[#F3EEE3] z-30">
        <div className="flex justify-between items-center mb-5">
           <div className="flex items-center gap-2.5">
             <button onClick={() => navigate(-1)} className="text-[#1B4D3E]"><ArrowLeft size={24} /></button>
             <h1 className="text-[18px] font-extrabold text-[#1B4D3E]">Galeri</h1>
           </div>
           <button onClick={() => navigate(-1)} className="text-loopwear-dark active:scale-95 transition-transform">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
               <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
             </svg>
           </button>
        </div>

        <div className="flex bg-white rounded-full p-1 border border-loopwear-grey/20 shadow-sm mb-4">
          {(['Gaya', 'Cerita', 'Ulasan'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={`flex-1 py-2 rounded-full text-[12px] font-bold flex items-center justify-center gap-1.5 transition-colors ${
                activeTab === tab ? 'bg-[#1B4D3E] text-white' : 'text-loopwear-muted hover:text-loopwear-dark'
              }`}
            >
              {tab === 'Gaya' ? '📸' : tab === 'Cerita' ? '📖' : '⭐'} {tab}
            </button>
          ))}
        </div>

        {/* --- UI FILTER PILLS RAPI & MODERN --- */}
        {activeTab === 'Gaya' && <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide no-scrollbar -mx-6 px-6">
          {['Semua', 'Kasual Kampus', 'Kantor & Magang'].map((filterItem) => {
            const isActive = activeFilter === filterItem;
            return (
              <button 
                key={filterItem}
                onClick={() => setActiveFilter(filterItem)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-bold shrink-0 shadow-sm transition-all duration-200 active:scale-95 ${
                  isActive 
                    ? 'bg-[#D9714B] text-white border-transparent' 
                    : 'bg-white text-loopwear-dark border border-loopwear-grey/30 hover:bg-loopwear-grey/5'
                }`}
              >
                {filterItem === 'Semua' && isActive ? '✨ ' : ''}{filterItem}
              </button>
            );
          })}
        </div>}
      </div>

      {/* Feed List */}
      <div className="px-6 space-y-6 mt-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-3xl p-4 shadow-sm border border-loopwear-grey/20">
               {/* User Info */}
               <div className="flex justify-between items-center mb-3.5">
                  <div className="flex items-center gap-2.5">
                     <div style={{ backgroundColor: post.avatarBg }} className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center text-sm shadow-inner">
                       <img src={post.avatarImg} alt="Avatar" className="w-full h-full object-cover" />
                     </div>
                     <div>
                        <h3 className="text-[13px] font-bold text-loopwear-dark leading-tight">{post.name} <span className="text-[11px] text-loopwear-muted font-normal ml-0.5">{post.username}</span></h3>
                        <p className="text-[10px] text-loopwear-muted flex items-center gap-1 mt-0.5">📍 {post.location}</p>
                     </div>
                  </div>
                  <button type="button" aria-label="Opsi kiriman" className="text-loopwear-muted hover:text-loopwear-dark transition-colors p-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                  </button>
               </div>
               
               {/* Image Frame */}
               <div style={{ backgroundColor: post.imageBg }} className="w-full h-80 rounded-[20px] relative mb-3.5 overflow-hidden shadow-sm">
                  <img src={post.image} alt={`OOTD ${post.category}`} className="w-full h-full object-cover" />
                  
                  {post.isOriginal && (
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-sm text-[#2E6F40] px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1 shadow-sm">
                       ✓ Orisinal Terverifikasi
                    </div>
                  )}

                  {post.ecoTag && (
                    <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-sm text-[#1B4D3E] px-2.5 py-1 rounded-full text-[9px] font-bold flex items-center gap-1 shadow-sm">
                       {post.ecoTag}
                    </div>
                  )}

                  {/* Tag Items on Image */}
                  {post.tags.map((tag, idx) => (
                    <div 
                      key={idx}
                      className="absolute bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-md border border-white/50 cursor-pointer hover:scale-105 transition-transform"
                      style={{ top: tag.top, bottom: tag.bottom, left: tag.left, right: tag.right }}
                    >
                       <span className={`w-1.5 h-1.5 ${tag.dotColor} rounded-full`}></span> {tag.label} <span className={`${tag.typeBg} ${tag.typeColor} px-1.5 py-0.5 rounded text-[8px] ml-0.5`}>{tag.type}</span>
                    </div>
                  ))}
               </div>

               {/* Caption */}
               <p className="text-[12px] text-loopwear-dark leading-relaxed mb-3.5 px-0.5">
                 {expandedPosts.includes(post.id) || post.caption.length <= 90 ? post.caption : `${post.caption.slice(0, 90)}...`}
                 {post.caption.length > 90 && (
                   <button
                     type="button"
                     onClick={() => setExpandedPosts((current) => current.includes(post.id) ? current.filter((id) => id !== post.id) : [...current, post.id])}
                     className="text-loopwear-muted font-bold hover:text-loopwear-dark ml-1"
                   >
                     {expandedPosts.includes(post.id) ? 'Lebih sedikit' : 'Selengkapnya'}
                   </button>
                 )}
               </p>

               {/* Actions */}
               <div className="flex justify-between items-center pt-3.5 border-t border-loopwear-grey/15 px-0.5">
                  <div className="flex gap-4">
                     <button type="button" aria-label="Suka kiriman" onClick={() => setLikedPosts((current) => current.includes(post.id) ? current.filter((id) => id !== post.id) : [...current, post.id])} className="flex items-center gap-1.5 text-loopwear-dark text-[12px] font-bold hover:text-[#D9714B] transition-colors"><Heart size={18} fill={likedPosts.includes(post.id) || post.likes > 100 ? "#D9714B" : "none"} stroke={likedPosts.includes(post.id) || post.likes > 100 ? "#D9714B" : "currentColor"} className="mb-0.5"/> {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</button>
                     <button type="button" aria-label="Komentar" className="flex items-center gap-1.5 text-loopwear-dark text-[12px] font-bold hover:text-[#2E6F40] transition-colors"><MessageCircle size={18} className="mb-0.5"/> {post.comments}</button>
                     <button type="button" onClick={() => handlePostAction(post)} className={`flex items-center gap-1 ${post.action.color} text-[11px] font-bold ml-1 ${post.action.bg} px-2.5 py-1 rounded-full ${post.action.hoverBg} transition-colors active:scale-95`}>
                       {post.action.icon === 'barter' ? (
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
                       ) : (
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                       )} 
                       {post.action.label}
                     </button>
                  </div>
                  <button type="button" aria-label="Simpan kiriman" onClick={() => setSavedPosts((current) => current.includes(post.id) ? current.filter((id) => id !== post.id) : [...current, post.id])} className="text-loopwear-muted hover:text-loopwear-dark transition-colors"><Bookmark size={20} fill={savedPosts.includes(post.id) ? 'currentColor' : 'none'}/></button>
               </div>
            </div>
          ))
        ) : (
          /* Tampilan jika data kosong pada filter tertentu */
          <div className="bg-white rounded-3xl p-8 text-center shadow-sm border border-loopwear-grey/20">
            <div className="w-16 h-16 bg-loopwear-grey/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="text-loopwear-muted" size={24} />
            </div>
            <h3 className="text-[14px] font-bold text-loopwear-dark mb-1">Belum ada gaya dibagikan</h3>
            <p className="text-[12px] text-loopwear-muted">Jadilah yang pertama membagikan inspirasi OOTD untuk kategori ini!</p>
          </div>
        )}

        {/* Floating Add Button & Banner (Selalu Tampil) */}
        <div className="bg-[#E8F5E9] rounded-2xl p-4 flex justify-between items-center border border-[#C4ECCF] mb-6 shadow-sm">
           <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 bg-[#2E6F40] rounded-full flex items-center justify-center text-white shadow-sm text-lg">⭐</div>
              <div>
                 <h4 className="text-[13px] font-extrabold text-[#1B4D3E]">Ulasan Komunitas</h4>
                 <p className="text-[10px] text-[#2E6F40] font-medium mt-0.5">1.420 transaksi aman & terverifikasi</p>
              </div>
           </div>
           <button type="button" onClick={() => setActiveTab('Ulasan')} className="bg-white text-[#2E6F40] font-bold text-[11px] px-3.5 py-1.5 rounded-full shadow-sm hover:bg-gray-50 transition-colors active:scale-95">Lihat<br/>Semua</button>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-24 right-6 z-40">
         <button type="button" onClick={() => setIsComposerOpen(true)} className="bg-[#D9714B] text-white px-5 py-3.5 rounded-full font-extrabold shadow-lg flex items-center gap-2.5 text-[14px] active:scale-95 transition-all border-2 border-transparent hover:border-white/30 hover:bg-[#c2623e]">
            <Camera size={20} strokeWidth={2.5} /> Bagikan Gayamu
         </button>
      </div>

      {isComposerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-[#10251f]/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setIsComposerOpen(false)}
        >
          <form
            onSubmit={publishPost}
            role="dialog"
            aria-modal="true"
            aria-labelledby="composer-title"
            onClick={(event) => event.stopPropagation()}
            className="max-h-[92dvh] w-full max-w-lg space-y-5 overflow-y-auto rounded-t-[28px] bg-[#FDFBF7] p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] shadow-2xl sm:rounded-[28px] sm:p-6"
          >
            <div className="mx-auto -mt-2 mb-1 h-1 w-10 rounded-full bg-[#D9D4CA] sm:hidden" />
            <div className="flex items-start justify-between">
              <div>
                <span className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-[#E8F5E9] px-2.5 py-1 text-[10px] font-bold text-[#2E6F40]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2E6F40]" />
                  KOMUNITAS LOOPWEAR
                </span>
                <h2 id="composer-title" className="text-xl font-extrabold text-[#1B4D3E]">
                  Bagikan gayamu
                </h2>
                <p className="mt-1 text-xs text-loopwear-muted">
                  Ceritakan outfit dan inspirasi di baliknya.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsComposerOpen(false)}
                aria-label="Tutup form berbagi"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0EDE6] text-loopwear-dark transition hover:bg-[#E4DED3]"
              >
                <X size={18} />
              </button>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="community-photo" className="text-xs font-bold text-loopwear-dark">
                  Foto outfit
                </label>
                <span className="text-[10px] text-loopwear-muted">JPG, PNG • maks. 5 MB</span>
              </div>
              <input
                id="community-photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="sr-only"
              />
              {imageDraft ? (
                <div className="group relative h-56 overflow-hidden rounded-2xl bg-[#E8E2D8] sm:h-64">
                  <img
                    src={imageDraft}
                    alt="Pratinjau foto kiriman"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent p-3 pt-10">
                    <span className="text-xs font-semibold text-white">Pratinjau foto</span>
                    <div className="flex gap-2">
                      <label
                        htmlFor="community-photo"
                        className="cursor-pointer rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-[#1B4D3E]"
                      >
                        Ganti foto
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setImageDraft('');
                          setComposerError('');
                        }}
                        className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-[#8F3D28]"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <label
                  htmlFor="community-photo"
                  className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#B8CDBE] bg-[#F0F6F1] px-5 text-center transition hover:border-[#2E6F40] hover:bg-[#E8F5E9]"
                >
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2E6F40] shadow-sm">
                    <ImagePlus size={23} />
                  </span>
                  <span className="text-sm font-bold text-[#1B4D3E]">Pilih foto outfit</span>
                  <span className="mt-1 text-[11px] text-loopwear-muted">Ketuk untuk memilih dari perangkat</span>
                </label>
              )}
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="community-caption" className="text-xs font-bold text-loopwear-dark">
                  Ceritakan gayamu
                </label>
                <span className={`text-[10px] ${captionDraft.length >= 480 ? 'font-bold text-[#A84524]' : 'text-loopwear-muted'}`}>
                  {captionDraft.length}/500
                </span>
              </div>
              <textarea
                id="community-caption"
                value={captionDraft}
                onChange={(event) => {
                  setCaptionDraft(event.target.value);
                  if (composerError) setComposerError('');
                }}
                rows={3}
                maxLength={500}
                className="w-full resize-none rounded-2xl border border-loopwear-grey bg-white p-3.5 text-sm font-normal leading-relaxed outline-none transition placeholder:text-[#A7A49D] focus:border-[#2E6F40] focus:ring-2 focus:ring-[#2E6F40]/10"
                placeholder="Ceritakan inspirasi atau kisah di balik outfit ini..."
              />
            </div>

            {composerError && (
              <p role="alert" className="rounded-xl bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
                {composerError}
              </p>
            )}

            <button
              type="submit"
              disabled={!imageDraft || !captionDraft.trim()}
              className="w-full rounded-full bg-[#1B4D3E] py-3.5 text-sm font-extrabold text-white shadow-[0_6px_16px_rgba(27,77,62,0.2)] transition hover:bg-[#153e32] active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-[#AEBBB3] disabled:shadow-none"
            >
              <span className="flex items-center justify-center gap-2">
                <Camera size={17} />
                Bagikan ke Galeri
              </span>
            </button>
            <p className="text-center text-[10px] text-loopwear-muted">
              Pastikan foto dan cerita tidak memuat informasi pribadi.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}