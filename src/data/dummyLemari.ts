export interface ItemPakaian {
  id: number;
  nama: string;
  kategori: string;
  warna: string;
  bahan: string;
  ukuran: string;
  mutu: 'Prima' | 'Baik' | 'Layak';
  harga?: string;
  status: string;
  img: string;
  frekuensiPakai: number;
  rekomendasiAI: 'Simpan' | 'Jual' | 'Sewakan' | 'Daur Ulang';
  alasanAI: string;
}

export const dummyPakaian: ItemPakaian[] = [
  { 
    id: 1, 
    nama: 'Kemeja Katun Linen', 
    kategori: 'Kemeja Lengan Panjang',
    warna: 'Warm Ecru (Krem)',
    bahan: '100% Katun Linen Prima',
    ukuran: 'M', 
    mutu: 'Prima', 
    harga: 'Rp125.000', 
    status: 'Jual - Draf', 
    img: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80',
    frekuensiPakai: 8,
    rekomendasiAI: 'Jual',
    alasanAI: 'Jarang dipakai dalam 3 bulan terakhir. Nilai jual kembali masih tinggi (Kondisi Prima).'
  },
  { 
    id: 2, 
    nama: 'Blazer Mocha', 
    kategori: 'Blazer / Outerwear',
    warna: 'Mocha Brown',
    bahan: 'Polyester Wool Blend',
    ukuran: 'M', 
    mutu: 'Baik', 
    harga: 'Rp35.000/hari', 
    status: 'Sewakan - Tersedia', 
    img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80',
    frekuensiPakai: 3,
    rekomendasiAI: 'Sewakan',
    alasanAI: 'Busana formal dengan frekuensi pakai rendah. Sangat cocok disewakan untuk acara kampus.'
  },
  { 
    id: 3, 
    nama: 'Polo Rajut', 
    kategori: 'Kaos / Polo',
    warna: 'Sage Green',
    bahan: 'Rajut Katun',
    ukuran: 'L', 
    mutu: 'Layak', 
    harga: 'paket ±1,5 kg', 
    status: 'Daur Ulang - Menunggu jemput', 
    img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80',
    frekuensiPakai: 25,
    rekomendasiAI: 'Daur Ulang',
    alasanAI: 'Intensitas pemakaian tinggi (>20x) dan warna mulai pudar. Direkomendasikan daur ulang serat.'
  },
  { 
    id: 4, 
    nama: 'Outer Denim', 
    kategori: 'Jaket / Denim',
    warna: 'Indigo Blue',
    bahan: '100% Denim Heavyweight',
    ukuran: 'L', 
    mutu: 'Prima', 
    harga: 'Rp180.000', 
    status: 'Jual - Aktif', 
    img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80',
    frekuensiPakai: 5,
    rekomendasiAI: 'Jual',
    alasanAI: 'Kondisi fisik masih sangat prima dan memiliki peminat tinggi di pasar preloved.'
  },
  { 
    id: 5, 
    nama: 'Kebaya Modern', 
    kategori: 'Busana Acara / Kebaya',
    warna: 'Salvia Green',
    bahan: 'Tile & Brokat Terkurasi',
    ukuran: 'S', 
    mutu: 'Prima', 
    harga: 'Rp95.000/3 hari', 
    status: 'Sewakan - Disewa', 
    img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=600&q=80',
    frekuensiPakai: 2,
    rekomendasiAI: 'Sewakan',
    alasanAI: 'Permintaan sewa tinggi untuk acara wisuda dan pernikahan.'
  },
  {
    id: 6,
    nama: 'Kaos Oversized Minimalis',
    kategori: 'Kaos / T-Shirt',
    warna: 'Midnight Black',
    bahan: 'Katun Combed 24s',
    ukuran: 'XL',
    mutu: 'Baik',
    harga: 'Dipakai Harian',
    status: 'Simpan - Dipakai',
    img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
    frekuensiPakai: 14,
    rekomendasiAI: 'Simpan',
    alasanAI: 'Masih sering dipakai harian (rotasi aktif) dan dalam kondisi nyaman.'
  }
];