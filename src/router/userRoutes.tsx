import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

// --- Modul Lemari Digital ---
import LemariList from "../pages/Lemari/LemariList";
import LemariDetail from "../pages/Lemari/LemariDetail";
import PeriksaHasilAI from "../pages/Lemari/PeriksaHasilAI";
import ModalCameraDetect from "../components/modals/ModalCameraDetect";

// --- Modul Komunitas ---
import DasborDampak from "../pages/Komunitas/DasborDampak";
import KoleksiLencana from "../pages/Komunitas/KoleksiLencana";
import TantanganKomunitas from "../pages/Komunitas/TantanganKomunitas";
import GaleriGaya from "../pages/Komunitas/GaleriGaya";

// --- Modul Beranda & Jelajah ---
import { BerandaUser } from "../pages/Beranda/BerandaUser";
import Jelajah from "../pages/Beranda/Jelajah";
import DetailProdukBeli from "../pages/Beranda/DetailProdukBeli";
import DetailProdukSewa from "../pages/Beranda/DetailProdukSewa";
import Checkout from "../pages/Beranda/Checkout";

// --- Modul Jual (Baru Ditambahkan) ---
import PanduanKamera from "../pages/Jual/PanduanKamera";
import HasilAIHarga from "../pages/Jual/HasilAIHarga";
import VerifikasiKurasi from "../pages/Jual/VerifikasiKurasi";
import SiapTayang from "../pages/Jual/SiapTayang";

// --- Modul Daur Ulang (Baru Ditambahkan) ---
import PengajuanDaurUlang from "../pages/DaurUlang/PengajuanDaurUlang";
import TitikKumpul from "../pages/DaurUlang/TitikKumpul";
import PetaPerjalanan from "../pages/DaurUlang/PetaPerjalanan";
import CaraMenghitung from "../pages/DaurUlang/CaraMenghitung";

// --- Modul Sewa (Baru Ditambahkan) ---
import FotoKondisiAwal from "../pages/Sewa/FotoKondisiAwal";
import PilihBusana from "../pages/Sewa/PilihBusana";
import TarifDeposit from "../pages/Sewa/TarifDeposit";
import KalenderSewa from "../pages/Sewa/KalenderSewa";
import StatusPendapatan from "../pages/Sewa/StatusPendapatan";

export default function UserRoutes() {
  return (
    <Routes>
      {/* ==================== 1. Rute Tanpa Bottom Nav (Full Screen) ==================== */}
      
      {/* Modul Jual */}
      <Route path="/jual/panduan-kamera" element={<PanduanKamera />} />
      <Route path="/jual/hasil-ai" element={<HasilAIHarga />} />
      <Route path="/jual/verifikasi" element={<VerifikasiKurasi />} />
      <Route path="/jual/siap-tayang" element={<SiapTayang />} />

      {/* Modul Daur Ulang */}
      <Route path="/daur-ulang/pengajuan" element={<PengajuanDaurUlang />} />
      <Route path="/daur-ulang/titik-kumpul" element={<TitikKumpul />} />
      <Route path="/daur-ulang/peta-perjalanan" element={<PetaPerjalanan />} />
      <Route path="/daur-ulang/cara-menghitung" element={<CaraMenghitung />} />

      {/* Modul Sewa */}
      <Route path="/sewa/foto-kondisi" element={<FotoKondisiAwal />} />
      <Route path="/sewa/pilih-busana" element={<PilihBusana />} />
      <Route path="/sewa/tarif-deposit" element={<TarifDeposit />} />
      <Route path="/sewa/kalender" element={<KalenderSewa />} />
      <Route path="/sewa/status" element={<StatusPendapatan />} />

      {/* Modal & Sub-layar Lemari */}
      <Route path="/lemari/tambah" element={<ModalCameraDetect />} />
      <Route path="/lemari/periksa-ai" element={<PeriksaHasilAI />} />
      <Route path="/lemari/:id" element={<LemariDetail />} />

      {/* Sub-layar Komunitas */}
      <Route path="/komunitas/lencana" element={<KoleksiLencana />} />
      <Route path="/komunitas/tantangan" element={<TantanganKomunitas />} />
      <Route path="/app/komunitas/lencana" element={<KoleksiLencana />} />
      <Route path="/app/komunitas/tantangan" element={<TantanganKomunitas />} />
      <Route path="/app/komunitas/galeri" element={<GaleriGaya />} />

      {/* Layar Detail Produk Beli & Sewa */}
      <Route path="/jelajah/beli/:id" element={<DetailProdukBeli />} />
      <Route path="/jelajah/sewa/:id" element={<DetailProdukSewa />} />
      <Route path="/checkout/:mode/:id" element={<Checkout />} />

      {/* ==================== 2. Rute Dengan Bottom Nav (MainLayout) ==================== */}
      <Route element={<MainLayout />}>
        {/* Tab Beranda */}
        <Route path="/beranda" element={<BerandaUser />} />

        <Route path="/jelajah" element={<Jelajah />} />

        {/* Tab Lemari */}
        <Route path="/lemari" element={<LemariList />} />

        {/* Tab Komunitas */}
        <Route path="/komunitas" element={<DasborDampak />} />
        <Route path="/app/komunitas" element={<DasborDampak />} />
      </Route>

      <Route path="*" element={<Navigate to="/beranda" replace />} />
    </Routes>
  );
}