import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal, Heart } from "lucide-react";
import {
  dummyKatalog,
  formatRupiah,
  type ProductCategory,
  type ProductMode,
} from "../../data/dummyKatalog";

const categories: Array<"Semua" | ProductCategory> = [
  "Semua",
  "Atasan",
  "Bawahan",
  "Luaran",
];

export default function Jelajah() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<ProductMode>("beli");
  const [category, setCategory] = useState<(typeof categories)[number]>("Semua");
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  const products = useMemo(
    () =>
      dummyKatalog.filter(
        (product) =>
          product.tipe === mode &&
          (category === "Semua" || product.kategori === category) &&
          product.nama.toLocaleLowerCase("id-ID").includes(search.toLocaleLowerCase("id-ID")),
      ),
    [category, mode, search],
  );

  const toggleFavorite = (event: React.MouseEvent, id: string) => {
    event.stopPropagation();
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id],
    );
  };

  const changeMode = (nextMode: ProductMode) => {
    setMode(nextMode);
    setCategory("Semua");
  };

  return (
    <div className="bg-[#F3EEE3] font-sans max-w-md mx-auto">
      <div className="px-6 pt-5">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-[#1B4D3E]">Jelajah</h1>
            <p className="text-[11px] text-gray-500">
              Temukan yang pas, bukan yang baru.
            </p>
          </div>
          <button
            type="button"
            aria-label="Filter produk"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[#1B4D3E]"
          >
            <SlidersHorizontal size={18} />
          </button>
        </div>

        <div className="bg-[#E2DBCF] p-1 rounded-full flex mb-6">
          <button
            type="button"
            onClick={() => changeMode("beli")}
            aria-pressed={mode === "beli"}
            className={`flex-1 py-2.5 rounded-full text-[13px] font-bold transition-all flex items-center justify-center gap-2 ${mode === "beli" ? "bg-[#1B4D3E] text-white shadow-md" : "text-gray-500"}`}
          >
            🛍️ Beli
          </button>
          <button
            type="button"
            onClick={() => changeMode("sewa")}
            aria-pressed={mode === "sewa"}
            className={`flex-1 py-2.5 rounded-full text-[13px] font-bold transition-all flex items-center justify-center gap-2 ${mode === "sewa" ? "bg-[#1B4D3E] text-white shadow-md" : "text-gray-500"}`}
          >
            📅 Sewa Lemari
          </button>
        </div>

        {mode === "sewa" && (
          <div className="bg-white rounded-3xl p-4 shadow-sm mb-5 flex items-center justify-between">
            <div className="flex items-end gap-3">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-[#1B4D3E] leading-none">
                  24
                </h2>
                <p className="text-[10px] font-bold text-gray-500">NOVEMBER</p>
              </div>
              <p className="text-[9px] text-gray-400 mb-1 border-l pl-3">
                Pilih tanggal acara
              </p>
            </div>
            <span className="text-[10px] font-bold text-[#D9714B]">
              Tanggal sewa dapat diatur saat checkout
            </span>
          </div>
        )}

        <div className="relative mb-4">
          <Search className="absolute left-4 top-3 text-gray-400" size={18} />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={
              mode === "beli"
                ? "Cari pakaian atau gaya favoritmu"
                : "Sewa kebaya, dress, jas..."
            }
            aria-label="Cari produk"
            className="w-full bg-white rounded-full py-3 pl-11 pr-4 text-sm shadow-sm outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={`px-4 py-1.5 rounded-full text-[12px] font-bold whitespace-nowrap shadow-sm ${
                category === item
                  ? "bg-[#D9714B] text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 pb-6">
            {products.map((product) => (
              <article
                key={product.id}
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/jelajah/${product.tipe}/${product.id}`)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    navigate(`/jelajah/${product.tipe}/${product.id}`);
                  }
                }}
                className="bg-white rounded-3xl p-2 pb-4 relative text-left cursor-pointer"
              >
                <span className="absolute top-4 left-4 z-10 bg-[#CDF3D8] text-[#1B4D3E] text-[9px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {product.tipe === "beli" ? "BELI" : "SEWA"}
                </span>
                <button
                  type="button"
                  aria-label={
                    favorites.includes(product.id)
                      ? `Hapus ${product.nama} dari favorit`
                      : `Tambahkan ${product.nama} ke favorit`
                  }
                  onClick={(event) => toggleFavorite(event, product.id)}
                  className="absolute top-4 right-4 z-10 w-7 h-7 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm"
                >
                  <Heart
                    size={14}
                    className={
                      favorites.includes(product.id)
                        ? "fill-[#D9714B] text-[#D9714B]"
                        : ""
                    }
                  />
                </button>
                <div className="w-full h-40 bg-gray-100 rounded-2xl mb-3 overflow-hidden">
                  <img
                    src={product.gambar}
                    alt={product.nama}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="sr-only">{product.kategori}</span>
                <div className="px-1">
                  <h3 className="font-extrabold text-[#1B4D3E] text-[13px] mb-1 line-clamp-2">
                    {product.nama}
                  </h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-gray-500">
                      Ukuran {product.ukuran}
                    </span>
                    <span className="bg-[#E8F5E9] text-[#1B4D3E] text-[9px] font-bold px-2 py-0.5 rounded-full">
                      {product.kondisi}
                    </span>
                  </div>
                  <p className="font-extrabold text-[#1B4D3E] text-[15px]">
                    {formatRupiah(product.harga)}
                    {product.tipe === "sewa" && (
                      <span className="text-[10px] font-normal text-gray-500">
                        /{product.rentalDays === 3 ? "3 hari" : "hari"}
                      </span>
                    )}
                  </p>
                  <p className="text-[8px] text-gray-400 mt-0.5">
                    {product.tipe === "beli"
                      ? "Beli - miliki selamanya"
                      : `Sewa - min. ${product.rentalDays} hari`}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl bg-white p-5 text-center text-sm text-gray-500">
            Produk belum tersedia untuk pencarian ini.
          </p>
        )}
      </div>
    </div>
  );
}