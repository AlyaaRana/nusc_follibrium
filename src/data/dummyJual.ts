// src/data/dummyJual.ts

export interface FotoPakaian {
  id: string;
  label: string;
  isUploaded: boolean;
  imageUrl: string | null;
}

export interface HasilAI {
  kategori: string;
  warna: string;
  bahan: string;
  hargaRekomendasi: number;
  rentangBawah: number;
  rentangAtas: number;
}

export interface DetailKurasi {
  namaProduk: string;
  tingkatKondisi: string;
  persentaseKondisi: number;
  hargaJual: number;
  persentaseBiayaLayanan: number;
  biayaLayanan: number;
  pendapatanBersih: number;
  rincianKondisi: string[];
}

export interface ProdukTayang {
  namaKatalog: string;
  harga: number;
  likes: number;
  views: number;
  imageUrl: string;
}

// 1. Data untuk Layar: Jual - Panduan Kamera
// Mengacu pada instruksi "5 sudut wajib" di gambar alur
export const dummyPanduanKamera: FotoPakaian[] = [
  { id: "foto-1", label: "Depan", isUploaded: true, imageUrl: "/assets/dummy-baju-depan.jpg" },
  { id: "foto-2", label: "Belakang", isUploaded: false, imageUrl: null },
  { id: "foto-3", label: "Label", isUploaded: false, imageUrl: null },
  { id: "foto-4", label: "Detail", isUploaded: false, imageUrl: null },
  { id: "foto-5", label: "Cacat", isUploaded: false, imageUrl: null },
];

// 2. Data untuk Layar: Jual - Hasil AI & Harga
export const dummyHasilAIHarga: HasilAI = {
  kategori: "Kemeja Kasual",
  warna: "Warna Oranye",
  bahan: "Bahan Linen",
  hargaRekomendasi: 175000,
  rentangBawah: 150000,
  rentangAtas: 200000,
};

// 3. Data untuk Layar: Jual - Verifikasi Kurasi
export const dummyVerifikasiKurasi: DetailKurasi = {
  namaProduk: "Uniqlo U Vintage Boxy Oversize",
  tingkatKondisi: "Prime",
  persentaseKondisi: 95,
  hargaJual: 175000,
  persentaseBiayaLayanan: 5, // 5%
  biayaLayanan: 8750, // 5% dari 175.000
  pendapatanBersih: 166250, // 175.000 - 8.750
  rincianKondisi: [
    "Kancing & Resleting Utuh (Berfungsi normal & tidak ada kancing lepas/hilang)",
    "Label Merek Terbaca (Tulisan merek dan instruksi perawatan jelas)",
    "Bebas Noda / Sobek (Tidak ada noda membandel atau kain robek/berserabut)"
  ]
};

// 4. Data untuk Layar: Jual - Siap Tayang
export const dummySiapTayang: ProdukTayang = {
  namaKatalog: "Kemeja Uniqlo Terracotta",
  harga: 175000,
  likes: 0,
  views: 0,
  imageUrl: "/assets/dummy-baju-tayang.jpg"
};