import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  User,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { Infinity as InfinityIcon } from "lucide-react";
import hangerIcon from "../../assets/hanger.png";
import background from "../../assets/background.png";

const pilihanKamu = [
  {
    id: 1,
    nama: "Kemeja Linen",
    kondisi: "Prima",
    harga: "Rp135.000",
    satuan: "",
    ukuran: "M",
    tipe: "beli",
    gambar:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    nama: "Blazer Mocha",
    kondisi: "Baik",
    harga: "Rp35k",
    satuan: "/hari",
    ukuran: "L",
    tipe: "sewa",
    gambar:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80",
  },
];

export function BerandaUser() {
  const navigate = useNavigate();
  const [favorit, setFavorit] = useState<Record<number, boolean>>({});

  const toggleFavorit = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorit((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    
    <div className="min-h-screen bg-[#F3EEE3] font-sans pb-6 max-w-md mx-auto relative overflow-hidden">
      <div className="px-6 pt-5 pb-4">
        {/* Header Profil */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              <div
                className="w-30 h-30 bg-contain bg-no-repeat bg-right opacity-80"
                style={{ backgroundImage: `url('${background}')` }}
              ></div>
            </div>
            <div>
              <h1 className="text-[16px] font-extrabold text-[#1B4D3E] tracking-wide leading-tight">
                LOOPWEAR
              </h1>
              <p className="text-[10px] text-gray-500">
                Lemari yang Terus Berputar
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm relative">
              <Heart size={18} className="text-[#1B4D3E]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D9714B] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                1
              </span>
            </button>
            <button className="w-9 h-9 bg-[#1B4D3E] rounded-full flex items-center justify-center shadow-sm">
              <User size={18} className="text-white" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-3xl font-extrabold text-[#1B4D3E] mb-1">
              Pagi, Nara ☀️
            </h2>
            <p className="text-[10px] font-bold text-gray-500 flex items-center gap-1 uppercase tracking-wider">
              KAMPUS UI, DEPOK
            </p>
          </div>
          <div className="text-right">
            {/* Mengganti background image dari URL ke lokal (hangerIcon) */}
            <div
              className="w-16 h-10 bg-contain bg-no-repeat bg-right opacity-80"
              style={{ backgroundImage: `url('${hangerIcon}')` }}
            ></div>
          </div>
        </div>

        {/* Aktivitas Berjalan */}
        <div className="bg-white rounded-3xl p-4 shadow-sm mb-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#2E6F40] rounded-full"></span>
              <h3 className="font-bold text-[#1B4D3E] text-sm">
                Aktivitas Berjalan
              </h3>
              <span className="bg-[#E8F5E9] text-[#2E6F40] text-[9px] px-2 py-0.5 rounded-full font-bold">
                Sedang Aktif
              </span>
            </div>
            <button className="text-[10px] text-gray-400 font-medium flex items-center">
              Lihat Semua (2) <ChevronRight size={12} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-200 rounded-xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=100&q=80"
                  alt="Kebaya"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 left-0 right-0 bg-[#D9714B] text-white text-[8px] font-bold text-center py-0.5">
                  SEWA
                </span>
              </div>
              <div>
                <h4 className="font-bold text-[#1B4D3E] text-[13px] flex items-center gap-2">
                  Kebaya (Wisuda){" "}
                  <span className="bg-[#E8F5E9] text-[#2E6F40] text-[9px] px-1.5 py-0.5 rounded">
                    {" "}
                    Dikirim
                  </span>
                </h4>
                <p className="text-[10px] text-[#D9714B] font-medium mt-0.5 flex items-center gap-1">
                  ⏰ Estimasi tiba besok, 23 Nov
                </p>
              </div>
            </div>
            <button className="bg-[#D9714B] text-white text-[11px] font-bold px-4 py-2 rounded-full shadow-sm">
              Lacak ➔
            </button>
          </div>
        </div>

        {/* Ekosistem Sirkular Visual */}
        <div className="relative mb-8 aspect-[543/425] w-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[#3A7A5C] via-[#2F6A52] to-[#295E49] shadow-lg">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(255,255,255,0.22),transparent_45%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(140,95,45,0.55),transparent_40%)]" />

          <div className="relative z-20 flex items-center justify-between px-4 pt-4">
            <div className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-[10px] font-bold tracking-wide text-white backdrop-blur">
              <InfinityIcon size={13} strokeWidth={2.5} />
              EKOSISTEM SIRKULAR
            </div>
            <span className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-white/60">
              ✦ LOOP ZERO
            </span>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-[54%] h-[62%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-white/25" />
          <div className="pointer-events-none absolute left-1/2 top-[54%] h-[42%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dashed border-white/20" />

          <div className="absolute left-1/2 top-[54%] z-10 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.25)]">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C6EFD3]">
              <InfinityIcon
                size={22}
                strokeWidth={2.5}
                className="text-[#2E6F4F]"
              />
            </div>
            <span className="mt-1 text-[9px] font-extrabold tracking-wide text-[#2E6F4F]">
              PUTAR
            </span>
          </div>

          <div className="absolute left-[9%] top-[22%] z-10 h-14 w-14 -rotate-6 rounded-2xl border-[3px] border-white bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=200&q=80"
              alt="Jual"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          <div className="absolute left-[34%] top-[17%] z-20 flex items-center gap-1 rounded-full bg-[#9C3F1F] px-2.5 py-1 text-[11px] font-bold text-white shadow-md">
            🏷️ Jual
          </div>

          <span className="absolute right-[15%] top-[25%] z-10 rotate-45 text-base">
            👟
          </span>

          <div className="absolute right-[3%] top-[46%] z-20 flex items-center gap-1 rounded-full bg-[#CDF3D8] px-2.5 py-1.5 text-[11px] font-bold text-[#1B3D2E] shadow-md">
            ♻️ Daur Ulang
          </div>

          <div className="absolute right-[8%] top-[62%] z-10 h-14 w-14 rotate-6 rounded-2xl border-[3px] border-white bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=200&q=80"
              alt="Sewa"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          <span className="absolute left-[17%] top-[69%] z-10 text-base">
            👜
          </span>

          <div className="absolute left-[46%] top-[75%] z-20 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#1B3D2E] shadow-md">
            📅 Sewa
          </div>

          <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1 text-[10px] font-bold text-[#B9E4C6]">
            🌱 Bebas Fast-Fashion
          </div>
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1 text-[10px] font-bold text-white/90">
            Tukar Lemari <ArrowRight size={12} />
          </div>
        </div>

        {/* Pilihan Kamu */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-extrabold text-[#1B4D3E] text-xl flex items-center gap-2">
            <span className="text-sm">✨</span> Pilihan Kamu
          </h3>
          <button className="text-[12px] text-[#1B4D3E] font-bold flex items-center gap-1">
            Semua <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {pilihanKamu.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/jelajah/${item.tipe}/${item.id}`)}
              className="bg-white rounded-3xl p-2 shadow-sm relative cursor-pointer"
            >
              <button
                onClick={(e) => toggleFavorit(e, item.id)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#1B4D3E] shadow-sm"
              >
                <Heart
                  size={15}
                  className={
                    favorit[item.id] ? "fill-[#D9714B] text-[#D9714B]" : ""
                  }
                />
              </button>
              <div className="absolute top-4 left-4 z-10 bg-[#CDF3D8] text-[#1B4D3E] text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 bg-[#2E6F40] rounded-full"></span>{" "}
                {item.kondisi}
              </div>
              <div className="w-full h-44 bg-gray-100 rounded-[20px] mb-3 overflow-hidden">
                <img
                  src={item.gambar}
                  alt={item.nama}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-2 pb-2">
                <h4 className="font-bold text-[#1B1B1B] text-[14px] leading-tight">
                  {item.nama}
                </h4>
                <div className="flex items-end justify-between mt-1">
                  <p
                    className={`font-extrabold text-[15px] ${item.tipe === "sewa" ? "text-[#1B4D3E]" : "text-[#9C3F1F]"}`}
                  >
                    {item.harga}
                    {item.satuan && (
                      <span className="text-[11px] font-medium text-gray-500">
                        {item.satuan}
                      </span>
                    )}
                  </p>
                  <span className="text-[11px] font-bold text-gray-600">
                    {item.ukuran}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sewa Acaramu */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-extrabold text-[#1B1B1B] text-xl flex items-center gap-2">
            <span className="text-base">🎟️</span> Sewa Acaramu
          </h3>
          <span className="bg-[#CDF3D8] text-[#1B4D3E] text-[11px] font-bold px-3 py-1 rounded-full">
            Aktif
          </span>
        </div>

        <div className="bg-white rounded-3xl shadow-sm flex items-stretch overflow-hidden mb-6">
          <div className="w-[104px] shrink-0 bg-[#FDEBE6] flex flex-col items-center justify-center py-4 border-r-2 border-dashed border-[#E9CFC6]">
            <span className="bg-[#9C3F1F] text-white text-[11px] font-bold px-3 py-1 rounded-full">
              Wisuda
            </span>
            <span className="text-4xl font-extrabold text-[#9C3F1F] leading-none mt-2">
              24
            </span>
            <span className="text-[13px] font-bold text-[#9C3F1F] tracking-wide mt-0.5">
              NOV
            </span>
          </div>

          <div className="flex-1 flex items-center gap-3 p-3 min-w-0">
            <div className="w-14 h-16 shrink-0 rounded-xl overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=200&q=80"
                alt="Kebaya Salvia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-bold text-[#1B1B1B] text-[14px] leading-tight truncate">
                Kebaya Salvia
              </h4>
              <p className="text-[12px] font-bold text-[#1B4D3E] mt-0.5">
                Rp95.000{" "}
                <span className="font-medium text-gray-500">/ 3 hr</span>
              </p>
              <p className="text-[11px] font-bold text-[#9C3F1F] mt-0.5">
                ⏳ 12 hari lagi
              </p>
            </div>
            <button className="shrink-0 bg-[#9C3F1F] text-white text-[13px] font-bold px-4 py-2.5 rounded-full shadow-sm">
              Booking
            </button>
          </div>
        </div>
      </div>
      {/* Menghapus block bottom nav karena ini rute dengan bottom nav (MainLayout) dan tidak akan dirender lagi */}
    </div>
  );
}