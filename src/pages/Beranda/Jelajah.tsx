import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Heart,
  MapPin,
  Calendar,
} from "lucide-react";

export default function Jelajah() {
  const [mode, setMode] = useState<"beli" | "sewa">("beli");

  return (
    <div className="min-h-screen bg-[#F3EEE3] font-sans pb-24 max-w-md mx-auto shadow-xl">
      <div className="px-6 pt-5">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-[#1B4D3E]">Jelajah</h1>
            <p className="text-[11px] text-gray-500">
              Temukan yang pas, bukan yang baru.
            </p>
          </div>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[#1B4D3E]">
            <SlidersHorizontal size={18} />
          </button>
        </div>

        {/* Toggle Switch */}
        <div className="bg-[#E2DBCF] p-1 rounded-full flex mb-6">
          <button
            onClick={() => setMode("beli")}
            className={`flex-1 py-2.5 rounded-full text-[13px] font-bold transition-all flex items-center justify-center gap-2 ${mode === "beli" ? "bg-[#1B4D3E] text-white shadow-md" : "text-gray-500"}`}
          >
            🛍️ Beli
          </button>
          <button
            onClick={() => setMode("sewa")}
            className={`flex-1 py-2.5 rounded-full text-[13px] font-bold transition-all flex items-center justify-center gap-2 ${mode === "sewa" ? "bg-[#1B4D3E] text-white shadow-md" : "text-gray-500"}`}
          >
            📅 Sewa Lemari
          </button>
        </div>

        {mode === "beli" ? (
          <>
            {/* Mode Beli Filters */}
            <div className="relative mb-5">
              <Search
                className="absolute left-4 top-3 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Cari pakaian atau gaya favoritmu"
                className="w-full bg-white rounded-full py-3 pl-11 pr-4 text-sm shadow-sm outline-none placeholder:text-gray-400"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6 mb-4">
              <button className="bg-[#D9714B] text-white px-5 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap shadow-sm">
                Semua
              </button>
              <button className="bg-white text-gray-600 px-5 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap shadow-sm">
                Atasan
              </button>
              <button className="bg-white text-gray-600 px-5 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap shadow-sm">
                Bawahan
              </button>
              <button className="bg-white text-gray-600 px-5 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap shadow-sm">
                Luaran
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Mode Sewa Filters */}
            <div className="bg-white rounded-3xl p-4 shadow-sm mb-5 flex items-center justify-between">
              <div className="flex items-end gap-3">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-[#1B4D3E] leading-none">
                    24
                  </h2>
                  <p className="text-[10px] font-bold text-gray-500">
                    NOVEMBER
                  </p>
                </div>
                <p className="text-[9px] text-gray-400 mb-1 border-l pl-3">
                  Pilih tanggal acara
                </p>
              </div>
              <div className="flex gap-2 text-[10px] font-bold text-gray-400">
                <div className="flex flex-col items-center">
                  <span className="mb-1">S</span>
                  <span>20</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="mb-1">S</span>
                  <span>21</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="mb-1">R</span>
                  <span>22</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="mb-1">K</span>
                  <span>23</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="mb-1 text-[#D9714B]">J</span>
                  <span className="bg-[#D9714B] text-white w-5 h-5 rounded-full flex items-center justify-center">
                    24
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="mb-1">S</span>
                  <span className="bg-[#E8F5E9] text-[#2E6F40] w-5 h-5 rounded-full flex items-center justify-center">
                    25
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="mb-1">M</span>
                  <span>26</span>
                </div>
              </div>
            </div>

            <div className="relative mb-4">
              <Search
                className="absolute left-4 top-3 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Sewa kebaya, dress, jas..."
                className="w-full bg-white rounded-full py-3 pl-11 pr-10 text-sm shadow-sm outline-none"
              />
              <SlidersHorizontal
                className="absolute right-4 top-3 text-gray-400"
                size={16}
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6 mb-4">
              <button className="bg-[#D9714B] text-white px-4 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap shadow-sm flex items-center gap-1">
                Kota: Bandung ✕
              </button>
              <button className="bg-white text-gray-600 px-4 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap shadow-sm border border-gray-200">
                Ukuran: All (M) ⌄
              </button>
              <button className="bg-white text-gray-600 px-4 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap shadow-sm border border-gray-200">
                Kebaya
              </button>
            </div>
          </>
        )}

        {/* Grid Items (Shared for visual simplicity, text adjusts slightly based on mode in real app) */}
        <div className="grid grid-cols-2 gap-4 pb-10">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-2 pb-4 shadow-sm relative">
            <button className="absolute top-4 right-4 z-10 w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm">
              <Heart size={14} />
            </button>
            <div className="w-full h-40 bg-gray-100 rounded-2xl mb-3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=300&q=80"
                alt="Kemeja Linen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-1">
              <h3 className="font-extrabold text-[#1B4D3E] text-[13px] mb-1">
                Kemeja Linen
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-gray-500">Ukuran M</span>
                <span className="bg-[#1B4D3E] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                  Prima
                </span>
              </div>
              <p className="font-extrabold text-[#1B4D3E] text-[15px]">
                Rp135.000
              </p>
              <p className="text-[8px] text-gray-400 mt-0.5">
                Beli - miliki selamanya
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-2 pb-4 shadow-sm relative">
            <button className="absolute top-4 right-4 z-10 w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm">
              <Heart size={14} />
            </button>
            <div className="w-full h-40 bg-gray-100 rounded-2xl mb-3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=300&q=80"
                alt="Blazer Mocha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-1">
              <h3 className="font-extrabold text-[#1B4D3E] text-[13px] mb-1">
                Blazer Mocha
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-gray-500">Ukuran M</span>
                <span className="bg-[#C4ECCF] text-[#1B4D3E] text-[9px] font-bold px-2 py-0.5 rounded-full">
                  Baik
                </span>
              </div>
              <p className="font-extrabold text-[#1B4D3E] text-[15px]">
                Rp35.000
                <span className="text-[10px] font-normal text-gray-500">
                  /hari
                </span>
              </p>
              <p className="text-[8px] text-gray-400 mt-0.5">
                Sewa - min. 3 hari
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-2 pb-4 shadow-sm relative">
            <button className="absolute top-4 right-4 z-10 w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm">
              <Heart size={14} />
            </button>
            <div className="w-full h-40 bg-gray-100 rounded-2xl mb-3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=300&q=80"
                alt="Jins Lurus"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-1">
              <h3 className="font-extrabold text-[#1B4D3E] text-[13px] mb-1">
                Jins Lurus
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-gray-500">Ukuran 28</span>
                <span className="bg-[#C4ECCF] text-[#1B4D3E] text-[9px] font-bold px-2 py-0.5 rounded-full">
                  Baik
                </span>
              </div>
              <p className="font-extrabold text-[#1B4D3E] text-[15px]">
                Rp160.000
              </p>
              <p className="text-[8px] text-gray-400 mt-0.5">
                Beli - miliki selamanya
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-2 pb-4 shadow-sm relative">
            <button className="absolute top-4 right-4 z-10 w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm">
              <Heart size={14} />
            </button>
            <div className="w-full h-40 bg-gray-100 rounded-2xl mb-3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=300&q=80"
                alt="Polo Rajut"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-1">
              <h3 className="font-extrabold text-[#1B4D3E] text-[13px] mb-1">
                Polo Rajut
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-gray-500">Ukuran L</span>
                <span className="bg-[#D9714B] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                  Layak
                </span>
              </div>
              <p className="font-extrabold text-[#1B4D3E] text-[15px]">
                Rp75.000
              </p>
              <p className="text-[8px] text-gray-400 mt-0.5">
                Beli - miliki selamanya
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
