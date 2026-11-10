import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ShieldCheck, CheckCircle2, ChevronRight, Lock } from "lucide-react";
import { dummyKatalog, formatRupiah } from "../../data/dummyKatalog";

interface CheckoutForm {
  nama: string;
  email: string;
  telepon: string;
  alamat: string;
  tanggalSewa: string;
}

const DEMO_QR_SIZE = 25;

function createDemoQrPattern() {
  const cells = Array.from({ length: DEMO_QR_SIZE }, () =>
    Array.from({ length: DEMO_QR_SIZE }, () => Math.random() > 0.5),
  );
  const finderOrigins = [
    [0, 0],
    [DEMO_QR_SIZE - 7, 0],
    [0, DEMO_QR_SIZE - 7],
  ];

  finderOrigins.forEach(([originX, originY]) => {
    for (let y = -1; y <= 7; y += 1) {
      for (let x = -1; x <= 7; x += 1) {
        const cellX = originX + x;
        const cellY = originY + y;
        if (
          cellX < 0 ||
          cellY < 0 ||
          cellX >= DEMO_QR_SIZE ||
          cellY >= DEMO_QR_SIZE
        ) {
          continue;
        }

        const inFinder = x >= 0 && x <= 6 && y >= 0 && y <= 6;
        const isBlack =
          inFinder &&
          (x === 0 || x === 6 || y === 0 || y === 6 ||
            (x >= 2 && x <= 4 && y >= 2 && y <= 4));
        cells[cellY][cellX] = isBlack;
      }
    }
  });

  return cells;
}

function getLocalDateString() {
  const date = new Date();
  const timezoneOffset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - timezoneOffset).toISOString().slice(0, 10);
}

export default function Checkout() {
  const navigate = useNavigate();
  const { mode, id } = useParams();
  const product = dummyKatalog.find(
    (item) => item.id === id && item.tipe === mode,
  );
  const [form, setForm] = useState<CheckoutForm>({
    nama: "",
    email: "",
    telepon: "",
    alamat: "",
    tanggalSewa: "",
  });
  const [paymentStep, setPaymentStep] = useState<
    "details" | "payment" | "instructions" | "success"
  >("details");
  const [paymentMethod, setPaymentMethod] = useState("qris");
  const [demoQrPattern] = useState(createDemoQrPattern);

  if (!product || (mode !== "beli" && mode !== "sewa")) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#F3EEE3] p-6 text-center font-sans">
        <p className="font-bold text-[#1B4D3E]">Pesanan tidak ditemukan.</p>
        <button
          type="button"
          onClick={() => navigate("/jelajah")}
          className="rounded-full bg-[#1B4D3E] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#14392e]"
        >
          Kembali ke Jelajah
        </button>
      </div>
    );
  }

  const deposit = product.tipe === "sewa" ? (product.deposit ?? 0) : 0;
  const total = product.harga + deposit;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPaymentStep("payment");
  };

  const updateForm = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  if (paymentStep === "success") {
    return (
      <div className="min-h-screen bg-[#F3EEE3] px-6 flex items-center justify-center font-sans">
        <section className="w-full max-w-md rounded-[32px] bg-white p-8 text-center shadow-lg border border-[#E2DBCF]/50">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#CDF3D8] text-4xl text-[#1B4D3E]">
            ✓
          </div>
          <h1 className="text-2xl font-extrabold text-[#1B4D3E]">
            Simulasi Berhasil!
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            Transaksi demo Loopwear kamu telah selesai diproses secara lokal.
          </p>
          <button
            type="button"
            onClick={() => navigate("/jelajah")}
            className="mt-7 w-full rounded-full bg-[#1B4D3E] px-5 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-[#14392e]"
          >
            Kembali ke Beranda Jelajah
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3EEE3] font-sans pb-16">
      <main className="mx-auto max-w-md px-5 pt-6">
        {/* Header Nav */}
        <div className="flex items-center justify-between mb-6">
          <button
            type="button"
            onClick={() => {
              if (paymentStep === "payment") setPaymentStep("details");
              else if (paymentStep === "instructions") setPaymentStep("payment");
              else navigate(-1);
            }}
            className="flex items-center gap-2 text-sm font-bold text-[#1B4D3E] bg-white/80 backdrop-blur px-3.5 py-2 rounded-full shadow-sm transition-all hover:bg-white"
          >
            <ArrowLeft size={16} />
            <span>Kembali</span>
          </button>

          <div className="flex items-center gap-1.5 bg-[#E2DBCF]/60 px-3 py-1.5 rounded-full">
            <Lock size={12} className="text-[#1B4D3E]" />
            <span className="text-[11px] font-bold text-[#1B4D3E]">Secure Checkout</span>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-6 px-2">
          {[
            { id: "details", label: "Data Diri" },
            { id: "payment", label: "Pembayaran" },
            { id: "instructions", label: "Konfirmasi" },
          ].map((step, idx) => {
            const isActive = paymentStep === step.id || (paymentStep === "instructions" && step.id === "payment");
            const isPassed = 
              (paymentStep === "payment" && step.id === "details") ||
              (paymentStep === "instructions" && (step.id === "details" || step.id === "payment"));

            return (
              <div key={step.id} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  isActive || isPassed ? "bg-[#1B4D3E] text-white" : "bg-[#E2DBCF] text-gray-500"
                }`}>
                  {isPassed ? "✓" : idx + 1}
                </div>
                <span className={`text-xs font-bold hidden sm:inline ${isActive ? "text-[#1B4D3E]" : "text-gray-400"}`}>
                  {step.label}
                </span>
                {idx < 2 && <div className="w-6 sm:w-10 h-0.5 bg-[#E2DBCF]" />}
              </div>
            );
          })}
        </div>

        {/* Product Summary Card */}
        <section className="flex gap-4 rounded-[24px] bg-white p-4 shadow-sm border border-[#E2DBCF]/40 mb-5">
          <img
            src={product.gambar}
            alt={product.nama}
            className="h-24 w-20 rounded-2xl object-cover shrink-0 shadow-sm"
          />
          <div className="min-w-0 flex-1 flex flex-col justify-between py-0.5">
            <div>
              <span className="inline-block rounded-full bg-[#CDF3D8] px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-[#1B4D3E]">
                {product.tipe === "beli" ? "Beli · Miliki Selamanya" : `Sewa · ${product.rentalDays} Hari`}
              </span>
              <h2 className="mt-1.5 text-sm font-extrabold text-[#1B4D3E] line-clamp-1">
                {product.nama}
              </h2>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Ukuran {product.ukuran} · <span className="text-[#1B4D3E] font-medium">{product.kondisi}</span>
              </p>
            </div>
            <p className="text-sm font-extrabold text-[#1B4D3E] mt-1">
              {formatRupiah(product.harga)}
              {product.tipe === "sewa" && (
                <span className="text-[10px] font-normal text-gray-500"> / {product.rentalDays} hari</span>
              )}
            </p>
          </div>
        </section>

        {/* Form / Content Wrapper */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {paymentStep === "details" && (
            <section className="space-y-4 rounded-[24px] bg-white p-6 shadow-sm border border-[#E2DBCF]/40">
              <div className="border-b border-gray-100 pb-3">
                <h2 className="font-extrabold text-base text-[#1B4D3E]">Informasi Pengiriman</h2>
                <p className="text-[11px] text-gray-400">Lengkapi alamat dan kontak tujuan pengiriman barang.</p>
              </div>

              <div className="space-y-3.5">
                <label className="block text-xs font-bold text-[#1B4D3E]">
                  Nama Lengkap
                  <input
                    name="nama"
                    value={form.nama}
                    onChange={updateForm}
                    placeholder="Masukkan nama penerima"
                    autoComplete="name"
                    required
                    className="mt-1.5 w-full rounded-2xl bg-[#F8F6F0] border border-transparent px-4 py-3 text-sm font-normal text-gray-800 outline-none transition-all focus:bg-white focus:border-[#1B4D3E]"
                  />
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <label className="block text-xs font-bold text-[#1B4D3E]">
                    Email
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={updateForm}
                      placeholder="nama@email.com"
                      autoComplete="email"
                      required
                      className="mt-1.5 w-full rounded-2xl bg-[#F8F6F0] border border-transparent px-4 py-3 text-sm font-normal text-gray-800 outline-none transition-all focus:bg-white focus:border-[#1B4D3E]"
                    />
                  </label>

                  <label className="block text-xs font-bold text-[#1B4D3E]">
                    Nomor Telepon / WhatsApp
                    <input
                      name="telepon"
                      type="tel"
                      value={form.telepon}
                      onChange={updateForm}
                      placeholder="08xxxxxxxxxx"
                      autoComplete="tel"
                      required
                      className="mt-1.5 w-full rounded-2xl bg-[#F8F6F0] border border-transparent px-4 py-3 text-sm font-normal text-gray-800 outline-none transition-all focus:bg-white focus:border-[#1B4D3E]"
                    />
                  </label>
                </div>

                <label className="block text-xs font-bold text-[#1B4D3E]">
                  Alamat Lengkap Pengiriman
                  <textarea
                    name="alamat"
                    value={form.alamat}
                    onChange={updateForm}
                    placeholder="Nama jalan, nomor rumah, RT/RW, kecamatan, kota..."
                    autoComplete="street-address"
                    required
                    rows={3}
                    className="mt-1.5 w-full resize-none rounded-2xl bg-[#F8F6F0] border border-transparent px-4 py-3 text-sm font-normal text-gray-800 outline-none transition-all focus:bg-white focus:border-[#1B4D3E]"
                  />
                </label>

                {product.tipe === "sewa" && (
                  <label className="block text-xs font-bold text-[#1B4D3E]">
                    Tanggal Mulai Sewa (Acara)
                    <input
                      name="tanggalSewa"
                      type="date"
                      value={form.tanggalSewa}
                      onChange={updateForm}
                      min={getLocalDateString()}
                      required
                      className="mt-1.5 w-full rounded-2xl bg-[#F8F6F0] border border-transparent px-4 py-3 text-sm font-normal text-gray-800 outline-none transition-all focus:bg-white focus:border-[#1B4D3E]"
                    />
                  </label>
                )}
              </div>
            </section>
          )}

          {paymentStep === "payment" && (
            <section className="space-y-4 rounded-[24px] bg-white p-6 shadow-sm border border-[#E2DBCF]/40 animate-fadeIn">
              <div className="border-b border-gray-100 pb-3">
                <h2 className="font-extrabold text-base text-[#1B4D3E]">Metode Pembayaran</h2>
                <p className="text-[11px] text-gray-400">Pilih simulasi kanal pembayaran yang ingin digunakan.</p>
              </div>

              <div className="rounded-2xl bg-[#FFF9E6] p-3.5 text-xs text-amber-800 border border-amber-200/60 flex items-start gap-2.5">
                <span className="text-base leading-none">💡</span>
                <p className="leading-relaxed">
                  <strong className="font-bold">Mode Demo Aktif:</strong> Transaksi ini menggunakan gateway simulasi lokal dan tidak mendebit dana asli.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                {[
                  ["qris", "QRIS", "Scan instan via GoPay, OVO, Dana, BCA, dll."],
                  ["virtual-account", "Virtual Account Bank", "Transfer otomatis BCA, Mandiri, BNI, BRI"],
                  ["ewallet", "E-Wallet Instant", "Direct debit Gopay / ShopeePay / OVO"],
                ].map(([value, title, desc]) => (
                  <label
                    key={value}
                    className={`flex cursor-pointer items-start gap-3.5 rounded-2xl border p-4 transition-all ${
                      paymentMethod === value
                        ? "border-[#1B4D3E] bg-[#1B4D3E]/5 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={value}
                      checked={paymentMethod === value}
                      onChange={(event) => setPaymentMethod(event.target.value)}
                      className="mt-1 accent-[#1B4D3E] scale-110"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-extrabold text-[#1B4D3E]">{title}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </section>
          )}

          {paymentStep === "instructions" && (
            <section className="rounded-[24px] bg-white p-6 text-center shadow-sm border border-[#E2DBCF]/40 animate-fadeIn">
              <span className="inline-flex rounded-full bg-amber-100 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-800 mb-2">
                Instruksi Pembayaran Demo
              </span>
              <h2 className="text-lg font-extrabold text-[#1B4D3E]">
                {paymentMethod === "qris"
                  ? "Scan QRIS Simulasi"
                  : paymentMethod === "virtual-account"
                  ? "Nomor Virtual Account"
                  : "Kode Pembayaran E-Wallet"}
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Selesaikan simulasi pembayaran sebelum waktu habis.
              </p>

              <div className="my-5 py-4 bg-[#F8F6F0] rounded-2xl">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Total Tagihan</p>
                <p className="text-2xl font-extrabold text-[#1B4D3E] mt-0.5">
                  {formatRupiah(total)}
                </p>
              </div>

              {paymentMethod === "qris" ? (
                <div className="mx-auto w-56 rounded-2xl border-4 border-[#1B4D3E] bg-white p-3 shadow-md">
                  <svg
                    role="img"
                    aria-label="QR acak untuk demo, bukan kode pembayaran asli"
                    viewBox={`0 0 ${DEMO_QR_SIZE} ${DEMO_QR_SIZE}`}
                    className="block h-full w-full rounded-lg"
                    shapeRendering="crispEdges"
                  >
                    <rect width={DEMO_QR_SIZE} height={DEMO_QR_SIZE} fill="white" />
                    {demoQrPattern.flatMap((row, y) =>
                      row.flatMap((isDark, x) =>
                        isDark ? (
                          <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#1B4D3E" />
                        ) : [],
                      ),
                    )}
                  </svg>
                  <span className="mt-2.5 block rounded-xl bg-amber-100 px-2 py-1.5 text-[9px] font-extrabold tracking-wider text-amber-800">
                    QRIS DEMO · TIDAK BISA DIPINDAI
                  </span>
                </div>
              ) : (
                <div className="rounded-2xl bg-[#F8F6F0] p-4 border border-gray-200">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    {paymentMethod === "virtual-account" ? "Nomor VA Bank Demo" : "Kode Bayar E-Wallet"}
                  </p>
                  <p className="mt-2 font-mono text-xl font-extrabold tracking-wider text-[#1B4D3E] bg-white py-2 rounded-xl border border-gray-200 shadow-inner">
                    {paymentMethod === "virtual-account" ? "8808 2902 6201 26" : "LW-DEMO-2026"}
                  </p>
                </div>
              )}

              <p className="mt-5 text-[11px] leading-relaxed text-gray-400 px-4">
                Ini adalah layar instruksi demo dari Loopwear. Klik tombol di bawah untuk mengonfirmasi pembayaran simulasi.
              </p>
            </section>
          )}

          {/* Price Breakdown / Summary Box */}
          <section className="rounded-[24px] bg-white p-5 shadow-sm border border-[#E2DBCF]/40 space-y-2.5">
            <h3 className="font-extrabold text-xs text-[#1B4D3E] uppercase tracking-wider mb-3">Rincian Biaya</h3>
            <div className="flex justify-between gap-3 text-xs text-gray-600">
              <span>{product.tipe === "beli" ? "Harga Produk" : "Biaya Sewa"}</span>
              <span className="font-semibold text-[#1B4D3E]">{formatRupiah(product.harga)}</span>
            </div>
            {deposit > 0 && (
              <div className="flex justify-between gap-3 text-xs text-gray-600">
                <span>Deposit Jaminan (Refundable)</span>
                <span className="font-semibold text-[#1B4D3E]">{formatRupiah(deposit)}</span>
              </div>
            )}
            <div className="flex justify-between border-t border-gray-100 pt-3 font-extrabold text-sm text-[#1B4D3E]">
              <span>Total Pembayaran</span>
              <span className="text-base text-[#D9714B]">{formatRupiah(total)}</span>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="pt-2">
            {paymentStep === "details" ? (
              <button
                type="submit"
                className="w-full rounded-full bg-[#D9714B] px-5 py-4 text-sm font-bold text-white shadow-[0_4px_20px_rgba(217,113,75,0.35)] transition-all hover:bg-[#c2623f] flex items-center justify-center gap-2"
              >
                <span>Lanjut ke Pembayaran</span>
                <ChevronRight size={16} />
              </button>
            ) : paymentStep === "payment" ? (
              <button
                type="button"
                onClick={() => setPaymentStep("instructions")}
                className="w-full rounded-full bg-[#D9714B] px-5 py-4 text-sm font-bold text-white shadow-[0_4px_20px_rgba(217,113,75,0.35)] transition-all hover:bg-[#c2623f] flex items-center justify-center gap-2"
              >
                <span>Lihat Instruksi Pembayaran</span>
                <ChevronRight size={16} />
              </button>
            ) : (
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => setPaymentStep("success")}
                  className="w-full rounded-full bg-[#D9714B] px-5 py-4 text-sm font-bold text-white shadow-[0_4px_20px_rgba(217,113,75,0.35)] transition-all hover:bg-[#c2623f]"
                >
                  Simulasikan Pembayaran Berhasil
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentStep("payment")}
                  className="w-full rounded-full border-2 border-[#1B4D3E] px-5 py-3 text-sm font-bold text-[#1B4D3E] transition-all hover:bg-[#1B4D3E]/5"
                >
                  Ganti Metode Pembayaran
                </button>
              </div>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}