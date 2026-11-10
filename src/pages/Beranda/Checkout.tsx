import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
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
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#F3EEE3] p-6 text-center">
        <p className="font-bold text-[#1B4D3E]">Pesanan tidak ditemukan.</p>
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
      <div className="min-h-screen bg-[#F3EEE3] px-6 flex items-center justify-center">
        <section className="w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F5E9] text-3xl text-[#1B4D3E]">
            ✓
          </div>
          <h1 className="text-2xl font-extrabold text-[#1B4D3E]">
            Simulasi berhasil
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            Ini hanya demo. Pesanan dan pembayaran belum dikirim ke backend atau
            diproses oleh Xendit.
          </p>
          <button
            type="button"
            onClick={() => navigate("/jelajah")}
            className="mt-6 w-full rounded-full bg-[#1B4D3E] px-5 py-3 text-sm font-bold text-white"
          >
            Kembali ke Jelajah
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3EEE3] font-sans pb-8">
      <main className="mx-auto max-w-md px-5 pt-5">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-5 flex items-center gap-2 text-sm font-bold text-[#1B4D3E]"
        >
          <ArrowLeft size={18} />
          Kembali
        </button>
        <h1 className="text-2xl font-extrabold text-[#1B4D3E]">Checkout</h1>
        <p className="mt-1 text-xs text-gray-500">
          Periksa pesanan dan lengkapi data untuk simulasi checkout.
        </p>

        <section className="mt-5 flex gap-3 rounded-3xl bg-white p-3 shadow-sm">
          <img
            src={product.gambar}
            alt={product.nama}
            className="h-24 w-20 rounded-2xl object-cover"
          />
          <div className="min-w-0 flex-1 py-1">
            <span className="rounded-full bg-[#E8F5E9] px-2 py-1 text-[9px] font-bold uppercase text-[#1B4D3E]">
              {product.tipe === "beli" ? "Beli" : "Sewa"}
            </span>
            <h2 className="mt-2 text-sm font-extrabold text-[#1B4D3E]">
              {product.nama}
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Ukuran {product.ukuran} · {product.kondisi}
            </p>
            <p className="mt-1 text-sm font-extrabold text-[#1B4D3E]">
              {formatRupiah(product.harga)}
              {product.tipe === "sewa" && (
                <span className="text-xs font-medium text-gray-500">
                  {" "}
                  / {product.rentalDays} hari
                </span>
              )}
            </p>
          </div>
        </section>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          {paymentStep === "details" && (
            <section className="space-y-3 rounded-3xl bg-white p-5 shadow-sm">
              <h2 className="font-bold text-[#1B4D3E]">Data pemesan</h2>
              <label className="block text-xs font-semibold text-gray-600">
                Nama lengkap
                <input
                  name="nama"
                  value={form.nama}
                  onChange={updateForm}
                  autoComplete="name"
                  required
                  className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#1B4D3E]"
                />
              </label>
              <label className="block text-xs font-semibold text-gray-600">
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateForm}
                  autoComplete="email"
                  required
                  className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#1B4D3E]"
                />
              </label>
              <label className="block text-xs font-semibold text-gray-600">
                Nomor telepon
                <input
                  name="telepon"
                  type="tel"
                  value={form.telepon}
                  onChange={updateForm}
                  autoComplete="tel"
                  required
                  className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#1B4D3E]"
                />
              </label>
              <label className="block text-xs font-semibold text-gray-600">
                Alamat pengiriman
                <textarea
                  name="alamat"
                  value={form.alamat}
                  onChange={updateForm}
                  autoComplete="street-address"
                  required
                  rows={3}
                  className="mt-1 w-full resize-none rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#1B4D3E]"
                />
              </label>
              {product.tipe === "sewa" && (
                <label className="block text-xs font-semibold text-gray-600">
                  Tanggal mulai sewa
                  <input
                    name="tanggalSewa"
                    type="date"
                    value={form.tanggalSewa}
                    onChange={updateForm}
                    min={getLocalDateString()}
                    required
                    className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#1B4D3E]"
                  />
                </label>
              )}
            </section>
          )}

          <section className="space-y-3 rounded-3xl bg-white p-5 shadow-sm">
            <h2 className="font-bold text-[#1B4D3E]">
              {paymentStep === "details" ? "Ringkasan pembayaran" : "Metode pembayaran"}
            </h2>
            {paymentStep === "payment" && (
              <>
                <p className="rounded-2xl bg-amber-50 p-3 text-xs leading-relaxed text-amber-800">
                  Mode demo aktif. Pilihan di bawah hanya simulasi dan tidak
                  membuat transaksi sungguhan.
                </p>
                {[
                  ["qris", "QRIS (simulasi)"],
                  ["virtual-account", "Virtual Account (simulasi)"],
                  ["ewallet", "E-Wallet (simulasi)"],
                ].map(([value, label]) => (
                  <label
                    key={value}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-3 text-sm text-gray-700"
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={value}
                      checked={paymentMethod === value}
                      onChange={(event) => setPaymentMethod(event.target.value)}
                      className="accent-[#1B4D3E]"
                    />
                    {label}
                  </label>
                ))}
              </>
            )}
            {paymentStep === "details" && (
              <>
                <div className="flex justify-between gap-3 text-xs text-gray-600">
                  <span>
                    {product.tipe === "beli" ? "Harga produk" : "Biaya sewa"}
                  </span>
                  <span>{formatRupiah(product.harga)}</span>
                </div>
                {deposit > 0 && (
                  <div className="flex justify-between gap-3 text-xs text-gray-600">
                    <span>Deposit (dikembalikan setelah inspeksi)</span>
                    <span>{formatRupiah(deposit)}</span>
                  </div>
                )}
                <div className="flex justify-between border-t border-gray-100 pt-3 font-extrabold text-[#1B4D3E]">
                  <span>Total sementara</span>
                  <span>{formatRupiah(total)}</span>
                </div>
                <p className="text-[10px] leading-relaxed text-gray-400">
                  Total ini masih dummy. Ongkir dan total final akan dihitung
                  oleh backend saat integrasi pembayaran diaktifkan.
                </p>
              </>
            )}
            {paymentStep !== "details" && (
              <div className="flex justify-between border-t border-gray-100 pt-3 font-extrabold text-[#1B4D3E]">
                <span>Total simulasi</span>
                <span>{formatRupiah(total)}</span>
              </div>
            )}
          </section>

          {paymentStep === "instructions" && (
            <section className="rounded-3xl bg-white p-5 text-center shadow-sm">
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-amber-800">
                Instruksi pembayaran demo
              </span>
              <h2 className="mt-3 text-lg font-extrabold text-[#1B4D3E]">
                {paymentMethod === "qris"
                  ? "Scan QRIS"
                  : paymentMethod === "virtual-account"
                    ? "Transfer Virtual Account"
                    : "Bayar dengan E-Wallet"}
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Selesaikan pembayaran sebelum 23:59 WIB
              </p>
              <p className="mt-4 text-[10px] font-bold uppercase text-gray-400">
                Total pembayaran
              </p>
              <p className="text-2xl font-extrabold text-[#1B4D3E]">
                {formatRupiah(total)}
              </p>
              {paymentMethod === "qris" ? (
                <div className="mx-auto mt-5 w-52 rounded-2xl border-4 border-[#1B4D3E] bg-white p-2">
                  <svg
                    role="img"
                    aria-label="QR acak untuk demo, bukan kode pembayaran dan tidak dapat digunakan"
                    viewBox={`0 0 ${DEMO_QR_SIZE} ${DEMO_QR_SIZE}`}
                    className="block h-full w-full"
                    shapeRendering="crispEdges"
                  >
                    <rect
                      width={DEMO_QR_SIZE}
                      height={DEMO_QR_SIZE}
                      fill="white"
                    />
                    {demoQrPattern.flatMap((row, y) =>
                      row.flatMap((isDark, x) =>
                        isDark ? (
                          <rect
                            key={`${x}-${y}`}
                            x={x}
                            y={y}
                            width="1"
                            height="1"
                            fill="#1B4D3E"
                          />
                        ) : [],
                      ),
                    )}
                  </svg>
                  <span className="mt-2 block rounded-lg bg-amber-100 px-2 py-1 text-[9px] font-extrabold tracking-wider text-amber-800">
                    QRIS DEMO · TIDAK BISA DIPINDAI
                  </span>
                </div>
              ) : (
                <div className="mt-5 rounded-2xl bg-[#F3EEE3] p-4">
                  <p className="text-[10px] font-bold uppercase text-gray-400">
                    {paymentMethod === "virtual-account"
                      ? "Nomor VA dummy"
                      : "Kode pembayaran dummy"}
                  </p>
                  <p className="mt-2 font-mono text-lg font-extrabold tracking-wider text-[#1B4D3E]">
                    {paymentMethod === "virtual-account"
                      ? "8808 1234 5678 9012"
                      : "LW-DEMO-123456"}
                  </p>
                </div>
              )}
              <p className="mt-4 text-[10px] leading-relaxed text-gray-400">
                Kode ini hanya tampilan simulasi. Jangan digunakan untuk
                pembayaran sungguhan.
              </p>
            </section>
          )}

          {paymentStep !== "instructions" && (
            <div className="rounded-2xl bg-[#E8F5E9] p-4 text-xs leading-relaxed text-[#1B4D3E]">
              <p className="flex items-center gap-2 font-bold">
                <ShieldCheck size={16} />
                {paymentStep === "details"
                  ? "Checkout demo"
                  : "Tidak ada tagihan nyata"}
              </p>
              <p className="mt-1">
                {paymentStep === "details"
                  ? "Belum terhubung ke Xendit. Lanjutkan untuk melihat simulasi metode pembayaran."
                  : `Metode dipilih: ${paymentMethod}. Integrasi Xendit memerlukan backend.`}
              </p>
            </div>
          )}

          {paymentStep === "details" ? (
            <button
              type="submit"
              className="w-full rounded-full bg-[#D9714B] px-5 py-3.5 text-sm font-bold text-white shadow-[0_4px_15px_rgba(217,113,75,0.3)]"
            >
              Lanjut ke pembayaran (simulasi)
            </button>
          ) : paymentStep === "payment" ? (
            <button
              type="button"
              onClick={() => setPaymentStep("instructions")}
              className="w-full rounded-full bg-[#D9714B] px-5 py-3.5 text-sm font-bold text-white shadow-[0_4px_15px_rgba(217,113,75,0.3)]"
            >
              Lihat instruksi pembayaran (demo)
            </button>
          ) : (
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setPaymentStep("success")}
                className="w-full rounded-full bg-[#D9714B] px-5 py-3.5 text-sm font-bold text-white shadow-[0_4px_15px_rgba(217,113,75,0.3)]"
              >
                Simulasikan pembayaran berhasil
              </button>
              <button
                type="button"
                onClick={() => setPaymentStep("payment")}
                className="w-full rounded-full border border-[#1B4D3E] px-5 py-3 text-sm font-bold text-[#1B4D3E]"
              >
                Ganti metode pembayaran
              </button>
            </div>
          )}
        </form>
      </main>
    </div>
  );
}
