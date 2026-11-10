export type ProductMode = "beli" | "sewa";
export type ProductCategory = "Atasan" | "Bawahan" | "Luaran";

export interface CatalogProduct {
  id: string;
  nama: string;
  tipe: ProductMode;
  kategori: ProductCategory;
  harga: number;
  ukuran: string;
  kondisi: string;
  gambar: string;
  rentalDays?: number;
  deposit?: number;
}

export const dummyKatalog: CatalogProduct[] = [
  {
    id: "kemeja-linen",
    nama: "Kemeja Linen Katun Natural",
    tipe: "beli",
    kategori: "Atasan",
    harga: 135000,
    ukuran: "M",
    kondisi: "Prima",
    gambar:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "polo-rajut",
    nama: "Polo Rajut",
    tipe: "beli",
    kategori: "Atasan",
    harga: 75000,
    ukuran: "L",
    kondisi: "Layak",
    gambar:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "jins-lurus",
    nama: "Jins Lurus",
    tipe: "beli",
    kategori: "Bawahan",
    harga: 160000,
    ukuran: "28",
    kondisi: "Baik",
    gambar:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "blazer-beli",
    nama: "Blazer Mocha",
    tipe: "beli",
    kategori: "Luaran",
    harga: 175000,
    ukuran: "M",
    kondisi: "Baik",
    gambar:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kebaya-salvia",
    nama: "Kebaya Modern Hijau Salvia",
    tipe: "sewa",
    kategori: "Atasan",
    harga: 95000,
    ukuran: "M",
    kondisi: "Prima",
    gambar:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    rentalDays: 3,
    deposit: 150000,
  },
  {
    id: "blazer-sewa",
    nama: "Blazer Mocha",
    tipe: "sewa",
    kategori: "Luaran",
    harga: 35000,
    ukuran: "L",
    kondisi: "Baik",
    gambar:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    rentalDays: 1,
    deposit: 100000,
  },
  {
    id: "dress-sewa",
    nama: "Dress Pesta Klasik",
    tipe: "sewa",
    kategori: "Luaran",
    harga: 65000,
    ukuran: "M",
    kondisi: "Prima",
    gambar:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    rentalDays: 1,
    deposit: 125000,
  },
];

export function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}