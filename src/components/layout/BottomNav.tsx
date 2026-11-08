import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Compass, Shirt, Users, RefreshCw } from "lucide-react";
import clsx from "clsx"; // Jika kamu menggunakan utility clsx untuk class kondisional

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  // Tab aktif jika pathname sama persis atau berada di bawah salah satu path
  // (mis. /jelajah/beli/1 tetap menandai tab Jelajah)
  const isActive = (...paths: string[]) =>
    paths.some(
      (path) =>
        location.pathname === path || location.pathname.startsWith(path + "/"),
    );

  const berandaAktif = isActive("/beranda");
  const jelajahAktif = isActive("/jelajah");
  const lemariAktif = isActive("/lemari");
  const komunitasAktif = isActive("/komunitas", "/app/komunitas");

  return (
    <nav
      className="bottom-nav fixed bottom-0 left-0 right-0 z-50"
      aria-label="Navigasi utama"
    >
      {/* Latar Belakang Melengkung Kustom (Custom Curve Background) */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 375 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_-4px_16px_rgba(0,0,0,0.05)]"
          preserveAspectRatio="none"
        >
          {/* Path ini menciptakan lengkungan di tengah untuk menampung tombol Putar */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M149.333 11.7589C157.065 6.6433 166.425 4 176 4C198.091 4 216 21.9086 216 44C216 52.8366 213.134 61.0042 208.336 67.5855C216.516 67.8576 224.773 68 233.111 68H355C366.046 68 375 76.9543 375 88V120H0V88C0 76.9543 8.95431 68 20 68H118.889C128.468 68 137.935 67.7942 147.284 67.3879C142.277 60.9126 139.261 52.8021 139.261 44C139.261 31.4217 143.082 19.9863 149.333 11.7589Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* Area Tombol Navigasi dan Tombol Melayang */}
      <div className="relative h-[88px] flex items-center justify-between px-4 sm:px-6 pt-4 pb-[calc(0.5rem+env(safe-area-inset-bottom))] bg-white rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] border-t border-loopwear-grey/20">
        {/* Tombol Beranda */}
        <button
          type="button"
          onClick={() => navigate("/beranda")}
          className="flex flex-col items-center justify-center flex-1 gap-1"
        >
          <Home
            size={24}
            strokeWidth={berandaAktif ? 2.5 : 2}
            className={
              berandaAktif ? "text-loopwear-green" : "text-loopwear-dark"
            }
          />
          <span
            className={clsx(
              "text-[10px] font-bold",
              berandaAktif ? "text-loopwear-green" : "text-loopwear-dark",
            )}
          >
            Beranda
          </span>
        </button>

        {/* Tombol Jelajah */}
        <button
          type="button"
          onClick={() => navigate("/jelajah")}
          className="flex flex-col items-center justify-center flex-1 gap-1"
        >
          <Compass
            size={24}
            strokeWidth={jelajahAktif ? 2.5 : 2}
            className={
              jelajahAktif ? "text-loopwear-green" : "text-loopwear-dark"
            }
          />
          <span
            className={clsx(
              "text-[10px] font-bold",
              jelajahAktif ? "text-loopwear-green" : "text-loopwear-dark",
            )}
          >
            Jelajah
          </span>
        </button>

        {/* Jarak Kosong untuk Tombol Putar di Tengah */}
        <div className="flex-[1.5]"></div>

        {/* Tombol Lemari */}
        <button
          type="button"
          onClick={() => navigate("/lemari")}
          className="flex flex-col items-center justify-center flex-1 gap-1"
        >
          <Shirt
            size={24}
            strokeWidth={lemariAktif ? 2.5 : 2}
            className={
              lemariAktif ? "text-loopwear-green" : "text-loopwear-dark"
            }
          />
          <span
            className={clsx(
              "text-[10px] font-bold",
              lemariAktif ? "text-loopwear-green" : "text-loopwear-dark",
            )}
          >
            Lemari
          </span>
        </button>

        {/* Tombol Komunitas */}
        <button
          type="button"
          onClick={() => navigate("/komunitas")}
          className="flex flex-col items-center justify-center flex-1 gap-1"
        >
          <Users
            size={24}
            strokeWidth={komunitasAktif ? 2.5 : 2}
            className={
              komunitasAktif ? "text-loopwear-green" : "text-loopwear-dark"
            }
          />
          <span
            className={clsx(
              "text-[10px] font-bold",
              komunitasAktif ? "text-loopwear-green" : "text-loopwear-dark",
            )}
          >
            Komunitas
          </span>
        </button>
      </div>

      {/* Tombol Melayang (Floating Action Button) "Putar" */}
      {/* Ditempatkan dengan posisi absolut (absolute positioning) agar tepat berada di cekungan (cutout) lengkung (curve) navigasi bawah. */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-6">
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={() => navigate("/app/putar")} // Atau untuk membuka Modal BottomSheet Putar
            className="w-16 h-16 bg-loopwear-orange rounded-full flex items-center justify-center text-white border-4 border-[#F3EEE3] shadow-[0_8px_24px_rgba(217,113,75,0.4)] active:scale-95 transition-transform duration-200 z-50"
          >
            <RefreshCw size={28} strokeWidth={2.5} />
          </button>
          <span className="text-[11px] font-extrabold text-loopwear-orange mt-1 drop-shadow-sm">
            Putar
          </span>
        </div>
      </div>
    </nav>
  );
}
