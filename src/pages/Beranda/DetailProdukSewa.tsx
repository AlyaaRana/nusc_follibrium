import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Share2,
  Heart,
  User,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { dummyKatalog, formatRupiah } from "../../data/dummyKatalog";

export default function DetailProdukSewa() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = dummyKatalog.find(
    (item) => item.id === id && item.tipe === "sewa",
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

  const deposit = product.deposit ?? 0;
  const total = product.harga + deposit;

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
            <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm text-gray-400">
              <Heart size={18} />
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
            ✓ Kurasi Terjamin
          </div>
        </div>

        <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur text-white text-[10px] px-3 py-1 rounded-full font-medium">
          1 / 2 ••
        </div>
      </div>

      <div className="px-6 pt-6 space-y-4">
        {/* Title Section */}
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="bg-[#E2DBCF] text-[#1B4D3E] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              TRADISIONAL MODERN
            </span>
            <span className="bg-[#E8F5E9] text-[#2E6F40] text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
              ☁️ -2.4 kg CO₂
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-[#1B4D3E] leading-tight mb-2">
            {product.nama}
          </h1>
          <p className="text-[11px] text-gray-500 mb-4">
            Material Brokat Premium Sutra & Furing Adem
          </p>

          <div className="flex items-center gap-6">
            <div>
              <p className="text-[9px] text-gray-400 font-bold mb-1">
                Harga Sewa:
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-[#1B4D3E]">
                  {formatRupiah(product.harga)}
                </span>
                <span className="text-[9px] text-[#D9714B] font-bold bg-[#FFF0E8] px-2 py-0.5 rounded-full">
                  / {product.rentalDays} hari sewa
                </span>
              </div>
            </div>
            <div className="border-l border-gray-200 pl-6">
              <p className="text-[9px] text-gray-400 font-bold mb-1">
                Beli Baru:
              </p>
              <span className="text-sm font-medium text-gray-400 line-through">
                Rp620.000
              </span>
            </div>
          </div>
        </div>

        {/* Deposit Banner */}
        <div className="bg-[#F9F8F6] border border-gray-100 rounded-2xl p-4 flex items-start gap-3">
          <div className="w-6 h-6 bg-[#1B4D3E] rounded-full flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 size={14} className="text-white" />
          </div>
          <div>
            <p className="text-[12px] font-bold text-[#1B4D3E]">
              Deposit Aman: {formatRupiah(deposit)}
            </p>
            <p className="text-[10px] text-gray-500 mt-1 leading-snug">
              100% kembali otomatis pasca inspeksi busana.
            </p>
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
                ⭐ 4.9 • Bandung • 31 ulasan
              </p>
            </div>
          </div>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">
            💬
          </button>
        </div>

        {/* Calendar Picker for Renting */}
        <div className="bg-white rounded-3xl p-5 shadow-sm">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="font-bold text-[#1B4D3E] text-sm mb-1">
                Pilih Jadwal Pemakaian
              </h3>
              <p className="text-[10px] text-gray-500">
                Sewa 3 hari, busana tiba H-1 sebelum acara
              </p>
            </div>
            <div className="flex items-center gap-2 bg-[#F9F8F6] px-3 py-1.5 rounded-full">
              <span className="text-[11px] font-bold text-[#1B4D3E]">
                Nov 2024
              </span>
              <ChevronLeft size={14} className="text-gray-400" />
              <ChevronRight size={14} className="text-[#1B4D3E]" />
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-y-4 text-center text-[11px] font-medium mb-4">
            <div className="text-gray-400">27</div>
            <div className="text-gray-400">28</div>
            <div className="text-gray-400">29</div>
            <div className="text-gray-400">30</div>
            <div className="text-[#1B4D3E]">1</div>
            <div className="text-[#1B4D3E]">2</div>
            <div className="text-[#1B4D3E]">3</div>

            <div className="text-[#1B4D3E]">4</div>
            <div className="text-[#1B4D3E]">5</div>
            <div className="text-[#1B4D3E]">6</div>
            <div className="text-[#1B4D3E]">7</div>
            <div className="text-[#1B4D3E]">8</div>
            <div className="text-[#1B4D3E]">9</div>
            <div className="text-[#1B4D3E]">10</div>

            <div className="text-[#1B4D3E]">11</div>
            <div className="text-[#1B4D3E]">12</div>
            <div className="text-[#1B4D3E]">13</div>
            <div className="text-[#1B4D3E]">14</div>
            <div className="text-gray-300 line-through">15</div>
            <div className="text-gray-300 line-through">16</div>
            <div className="text-gray-300 line-through">17</div>

            <div className="text-[#1B4D3E]">18</div>
            <div className="text-[#1B4D3E]">19</div>
            <div className="text-[#1B4D3E]">20</div>
            <div className="text-[#1B4D3E]">21</div>
            {/* Highlighted Rent Dates */}
            <div className="bg-[#D9714B] text-white rounded-l-full py-1">
              22
            </div>
            <div className="bg-[#D9714B] text-white py-1">23</div>
            <div className="bg-[#D9714B] text-white rounded-r-full py-1">
              24
            </div>

            <div className="text-[#1B4D3E]">25</div>
            <div className="text-[#1B4D3E]">26</div>
            <div className="text-[#1B4D3E]">27</div>
            <div className="text-[#1B4D3E]">28</div>
            <div className="text-[#1B4D3E]">29</div>
            <div className="text-[#1B4D3E]">30</div>
            <div className="text-gray-400">1</div>
          </div>

          <div className="flex justify-between items-center border-t border-gray-100 pt-4">
            <p className="text-[10px] font-bold text-[#1B4D3E] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D9714B] rounded-full"></span> 22 -
              24 Nov 2024
            </p>
            <span className="text-[9px] text-[#2E6F40] bg-[#E8F5E9] px-2 py-1 rounded-full font-bold">
              +2 Hari Buffer Cuci Otomatis
            </span>
          </div>
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
            TOTAL PEMBAYARAN
          </p>
          <p className="text-xl font-extrabold text-[#1B4D3E] leading-none mb-1">
            {formatRupiah(total)}
          </p>
          <p className="text-[8px] text-gray-400 font-medium">
            Termasuk Deposit {formatRupiah(deposit)}
          </p>
        </div>
        <button
          type="button"
          onClick={() => navigate(`/checkout/sewa/${product.id}`)}
          className="bg-[#D9714B] text-white font-bold text-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-[0_4px_15px_rgba(217,113,75,0.3)]"
        >
          Sewa Sekarang ➔
        </button>
      </div>
    </div>
  );
}
