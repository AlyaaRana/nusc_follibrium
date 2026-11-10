import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Share2,
  Heart,
  User,
  CheckCircle2,
  Search,
} from "lucide-react";
import { dummyKatalog, formatRupiah } from "../../data/dummyKatalog";

export default function DetailProdukBeli() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = dummyKatalog.find(
    (item) => item.id === id && item.tipe === "beli",
  );

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#F3EEE3] p-6 text-center">
        <p className="font-bold text-[#1B4D3E]">Produk tidak ditemukan.</p>
        <button
          type="button"
          onClick={() => navigate("/jelajah")}
          className="rounded-full bg-[#1B4D3E] px-5 py-2 text-sm font-bold text-white"
        >
          Kembali ke Jelajah
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3EEE3] font-sans pb-28 max-w-md mx-auto relative shadow-xl">
      {/* Hero Image */}
      <div className="w-full h-96 relative">
        <img
          src={product.gambar}
          alt={product.nama}
          className="w-full h-full object-cover rounded-b-[40px]"
        />

        {/* Top Floating Nav */}
        <div className="absolute top-12 left-6 right-6 flex justify-between items-center">
          <button type="button" onClick={() => navigate(-1)} className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-[#1B4D3E]">
            <ArrowLeft size={20} />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-[#1B4D3E]">
              <Share2 size={18} />
            </button>
            <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-[#D9714B]">
              <Heart size={18} fill="currentColor" />
            </button>
            <button className="w-10 h-10 bg-[#1B4D3E] rounded-full flex items-center justify-center shadow-sm text-white">
              <User size={18} />
            </button>
          </div>
        </div>

        {/* Badges on Image */}
        <div className="absolute top-28 left-6 flex gap-2">
          <div className="bg-[#1B4D3E]/90 backdrop-blur text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
            ⭐ Kondisi Prima (9.5/10)
          </div>
          <div className="bg-white/90 backdrop-blur text-[#2E6F40] text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
            🌿 100% Katun Linen
          </div>
        </div>

        {/* Carousel indicator */}
        <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur text-white text-[10px] px-3 py-1 rounded-full font-medium">
          1 / 3 •••
        </div>
      </div>

      <div className="px-6 pt-6 space-y-4">
        {/* Title Section */}
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">
              KOLEKSI EARTHY MINIMALIS
            </span>
            <span className="bg-[#E2DBCF] text-[#1B4D3E] text-[11px] font-extrabold px-3 py-1 rounded-full">
              SIZE {product.ukuran}
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#1B4D3E] leading-tight mb-3">
            {product.nama}
          </h1>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-[#1B4D3E]">
              {formatRupiah(product.harga)}
            </span>
            <span className="text-sm text-gray-400 line-through">
              Rp329.000
            </span>
            <span className="text-[9px] text-[#D9714B] font-bold bg-[#FFF0E8] px-2 py-0.5 rounded-full">
              Hemat 59%
            </span>
          </div>
        </div>

        {/* Seller Info */}
        <div className="bg-white rounded-2xl p-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#E8F5E9] rounded-full flex items-center justify-center text-[#2E6F40] font-bold text-sm">
              AP
            </div>
            <div>
              <h3 className="font-bold text-[#1B4D3E] text-[13px] flex items-center gap-1">
                Hana{" "}
                <CheckCircle2
                  size={12}
                  className="text-[#D9714B]"
                  fill="#D9714B"
                  color="white"
                />
              </h3>
              <p className="text-[10px] text-gray-500">
                ⭐ 4.9 • Bandung • 24 ulasan
              </p>
            </div>
          </div>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">
            💬
          </button>
        </div>

        {/* AI Size Recommendation */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-[#1B4D3E] text-sm">
              Cocok untuk ukuranmu
            </h3>
            <span className="bg-[#E8F5E9] text-[#2E6F40] text-[10px] font-bold px-2 py-1 rounded-full">
              Tepat (Regular Fit)
            </span>
          </div>

          <div className="relative w-full h-1 bg-gray-200 rounded-full mb-6">
            <div className="absolute left-0 top-0 h-1 bg-[#1B4D3E] rounded-full w-1/2"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FEE12B] rounded-full border-4 border-[#1B4D3E]"></div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 font-medium mb-6">
            <span>S (Ketat)</span>
            <span className="text-[#1B4D3E] font-bold border border-gray-200 px-3 py-1 rounded-full shadow-sm">
              M (Pas Proporsional)
            </span>
            <span>L (Longgar)</span>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <h4 className="text-[10px] font-bold text-gray-400 mb-2 uppercase">
              CATATAN KURASI
            </h4>
            <div className="flex items-start justify-between">
              <p className="text-[12px] text-[#1B4D3E] font-medium flex gap-2">
                <span className="text-[#D9714B]">•</span> Sedikit serat timbul
                mikro di ujung lengan
              </p>
              <div className="w-10 h-10 bg-gray-200 rounded-lg relative overflow-hidden flex items-center justify-center">
                <Search size={14} className="text-white absolute z-10" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-5">
            <div className="flex-1 bg-[#F9F8F6] p-3 rounded-2xl text-center">
              <p className="text-[9px] text-gray-400 font-bold mb-1">
                LEBAR DADA
              </p>
              <p className="text-sm font-extrabold text-[#1B4D3E]">102 cm</p>
            </div>
            <div className="flex-1 bg-[#F9F8F6] p-3 rounded-2xl text-center">
              <p className="text-[9px] text-gray-400 font-bold mb-1">PANJANG</p>
              <p className="text-sm font-extrabold text-[#1B4D3E]">70 cm</p>
            </div>
            <div className="flex-1 bg-[#F9F8F6] p-3 rounded-2xl text-center">
              <p className="text-[9px] text-gray-400 font-bold mb-1">
                LEBAR BAHU
              </p>
              <p className="text-sm font-extrabold text-[#1B4D3E]">44 cm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-100 p-4 flex justify-between items-center z-50">
        <div>
          <p className="text-[9px] font-bold text-gray-400 mb-0.5 uppercase tracking-wider">
            TOTAL BELANJA
          </p>
          <p className="text-xl font-extrabold text-[#1B4D3E] leading-none mb-1">
            {formatRupiah(product.harga)}
          </p>
          <p className="text-[8px] text-[#2E6F40] font-medium">
            Bebas pengembalian 24 jam
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate(`/checkout/beli/${product.id}`)}
          className="bg-[#D9714B] text-white font-bold text-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-[0_4px_15px_rgba(217,113,75,0.3)]"
        >
          Beli Sekarang ➔
        </button>
      </div>
    </div>
  );
}
