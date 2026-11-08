import React from "react";
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

// --- Modul Beranda & Jelajah (Disesuaikan dengan folder kamu) ---
import { BerandaUser } from "../pages/Beranda/BerandaUser";
import Jelajah from "../pages/Beranda/Jelajah";
import DetailProdukBeli from "../pages/Beranda/DetailProdukBeli";
import DetailProdukSewa from "../pages/Beranda/DetailProdukSewa";

export default function UserRoutes() {
  return (
    <Routes>
      {/* ==================== 1. Rute Tanpa Bottom Nav (Full Screen) ==================== */}
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
