import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ModalCameraDetect() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');

  // Menyalakan stream kamera saat komponen di-mount
  useEffect(() => {
    let currentStream: MediaStream | null = null;

    async function startCamera() {
      try {
        setCameraError(null);
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false,
        });

        currentStream = mediaStream;
        setStream(mediaStream);

        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (err) {
        console.error('Kamera gagal diakses:', err);
        setCameraError('Kamera tidak dapat diakses atau izin ditolak oleh browser.');
      }
    }

    if (!capturedImage) {
      startCamera();
    }

    return () => {
      if (currentStream) {
        currentStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [facingMode, capturedImage]);

  // Ganti kamera depan / belakang
  const toggleCamera = () => {
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
  };

  // Mengambil gambar snapshot dari video stream
  const capturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg');
      setCapturedImage(dataUrl);

      // Hentikan stream kamera saat foto berhasil diambil
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    }
  };

  // Foto ulang
  const retakePhoto = () => {
    setCapturedImage(null);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex flex-col justify-end font-jakarta">
      {/* Main Bottom Sheet */}
      <div className="bg-[#F3EEE3] w-full h-[85vh] rounded-t-[32px] flex flex-col relative overflow-hidden">
        {/* Handle & Title */}
        <div className="w-12 h-1.5 bg-loopwear-grey rounded-full mx-auto mt-3 mb-4"></div>
        <div className="px-6 flex justify-between items-center mb-4">
          <div>
            <h2 className="text-[18px] font-bold text-loopwear-dark flex items-center gap-2">
              Tambah Pakaian <span className="bg-[#C4ECCF] text-[#2E6F40] px-2 py-0.5 rounded text-[9px]">LOOPWEAR</span>
            </h2>
            <p className="text-[11px] text-loopwear-muted">Pilih cara input pakaianmu</p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-loopwear-grey/50 shadow-sm text-loopwear-muted"
          >
            ✕
          </button>
        </div>

        {/* 3 Tab Mode */}
        <div className="px-6 flex gap-3 mb-4">
          <button className="flex-1 bg-[#E8F5E9] border-2 border-[#2E6F40] rounded-2xl py-3 flex flex-col items-center relative">
            <span className="absolute -top-2 bg-[#D9714B] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> LIVE
            </span>
            <span className="text-[#2E6F40] text-xl mb-1">📸</span>
            <span className="text-[10px] font-bold text-[#2E6F40]">Kamera AI</span>
          </button>
          <button className="flex-1 bg-white border border-loopwear-grey/50 rounded-2xl py-3 flex flex-col items-center opacity-70">
            <span className="text-loopwear-dark text-xl mb-1">🏷️</span>
            <span className="text-[10px] font-bold text-loopwear-dark">Pindai Label</span>
          </button>
          <button className="flex-1 bg-white border border-loopwear-grey/50 rounded-2xl py-3 flex flex-col items-center opacity-70">
            <span className="text-loopwear-dark text-xl mb-1">⚡</span>
            <span className="text-[10px] font-bold text-loopwear-dark">Input Cepat</span>
          </button>
        </div>

        {/* Real Camera Viewfinder / Captured Photo Display */}
        <div className="flex-1 mx-6 relative rounded-3xl overflow-hidden bg-black flex flex-col items-center justify-center shadow-inner">
          {capturedImage ? (
            <img src={capturedImage} alt="Hasil Foto Pakaian" className="w-full h-full object-cover" />
          ) : cameraError ? (
            <div className="text-white text-center p-6 flex flex-col items-center">
              <span className="text-3xl mb-2">⚠️</span>
              <p className="text-xs mb-3 text-white/80">{cameraError}</p>
              <button
                onClick={() => setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'))}
                className="text-[11px] bg-[#D9714B] text-white px-4 py-2 rounded-full font-bold shadow-md"
              >
                Coba Lagi
              </button>
            </div>
          ) : (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover"
            />
          )}

          {/* Camera Status Overlay */}
          <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded text-[9px] font-bold flex items-center gap-1 z-10">
            <span className={`w-1.5 h-1.5 rounded-full ${capturedImage ? 'bg-amber-400' : stream ? 'bg-green-400' : 'bg-red-400'}`}></span>
            {capturedImage ? 'FOTO TERAMBIL' : stream ? '4:5 • KAMERA AKTIF' : 'MENGHUBUNGKAN...'}
          </div>

          {/* Bounding Box / Scan UI Overlay */}
          <div className="w-48 h-64 border-2 border-dashed border-white/50 absolute z-10 pointer-events-none flex items-center justify-center">
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-white/80 rounded-tl-lg"></div>
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-[#C4ECCF] rounded-tr-lg"></div>
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-[#D9714B] rounded-bl-lg"></div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-white/80 rounded-br-lg"></div>

            <div className="w-full absolute top-8 h-0.5 bg-[#D9714B] shadow-[0_0_8px_#D9714B] animate-bounce"></div>
            {!capturedImage && <div className="text-white/30 text-6xl">👕</div>}
          </div>

          {/* AI Live Results Overlays */}
          <div className="absolute bottom-28 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-2 z-10">
            <span>📏</span> LD: 52cm • P: 71cm
          </div>
          <div className="absolute bottom-20 bg-[#2E6F40]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-2 shadow-lg border border-white/20 z-10">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> ✨ Deteksi AI • Kemeja Linen Katun (98%)
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between px-6 pb-4 z-10">
            <div className="w-12 h-12 bg-white/20 rounded-xl border border-white/30 flex items-center justify-center text-[9px] text-white overflow-hidden">
              {capturedImage ? (
                <img src={capturedImage} alt="Preview Thumbnail" className="w-full h-full object-cover" />
              ) : (
                'Live'
              )}
            </div>

            {capturedImage ? (
              <button
                onClick={retakePhoto}
                className="bg-white text-loopwear-dark px-4 py-2 rounded-full text-[11px] font-bold shadow-md active:scale-95 transition-transform"
              >
                🔄 Ulangi Foto
              </button>
            ) : (
              <button
                onClick={capturePhoto}
                disabled={!stream}
                className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center active:scale-95 transition-transform disabled:opacity-50"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-[#D9714B] text-2xl">💮</span>
                </div>
              </button>
            )}

            <button
              onClick={toggleCamera}
              className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-white active:scale-95 transition-transform"
            >
              🔄
            </button>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 bg-[#F3EEE3]">
          <div className="flex justify-center items-center gap-2 text-[10px] text-loopwear-muted mb-4 font-semibold">
            <span>💡</span> Cahaya merata • Letakkan pakaian mendatar
          </div>
          <button
            onClick={() => navigate('/lemari/periksa-ai', { state: { capturedImage } })}
            className="w-full bg-[#D9714B] text-white font-bold py-4 rounded-full shadow-lg active:scale-95 transition-transform text-[15px]"
          >
            Lanjut ke Periksa Hasil AI →
          </button>
        </div>
      </div>
    </div>
  );
}