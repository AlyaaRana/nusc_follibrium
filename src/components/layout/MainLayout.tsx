import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function MainLayout() {
  return (
    <div className="app-shell relative min-h-screen bg-[#F3EEE3] flex flex-col font-jakarta">
      {/* 
        Outlet adalah area dinamis yang akan diisi oleh konten halaman (misal: LemariList, Beranda).
        Padding bawah mengikuti tinggi navigasi dan safe area perangkat agar
        konten paling bawah tidak tertutup di Android.
      */}
      <main className="flex-1 pb-[calc(7rem+env(safe-area-inset-bottom))]">
        <Outlet />
      </main>

      {/* Navigasi Bawah yang selalu menempel */}
      <BottomNav />
    </div>
  );
}
