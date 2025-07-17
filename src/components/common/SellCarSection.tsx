import React from "react";
import { useNavigate } from "react-router-dom";

const SellCarSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 md:px-0">
      {/* Your Garage */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 font-sans">
            Garasi Anda
          </h2>
          <h3 className="text-lg font-semibold mb-2">
            Tambah mobil Anda. Pantau harganya.
          </h3>
          <p className="text-gray-600 mb-6 max-w-md">
            Tambahkan mobil ke Garasi Anda untuk memantau harga pasar dan jual saat waktu terbaik.{' '}
            <a href="/" className="text-blue-600 underline font-medium">
              Pelajari Lebih Lanjut
            </a>
          </p>
          <button
            className="px-8 py-3 rounded-full border-2 border-black text-black font-semibold text-base hover:bg-gray-100 transition mb-2"
            onClick={() => navigate("/sell")}
          >
            Mulai Sekarang
          </button>
          <div className="mt-2 text-sm text-gray-500">
            Sudah punya akun?{' '}
            <a href="/login" className="text-blue-600 underline font-medium">
              Masuk.
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-72 h-44 md:w-80 md:h-52">
            <img
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80"
              alt="Car Value"
              className="w-full h-full object-cover rounded-xl shadow-lg border"
            />
            <div className="absolute top-4 left-4 bg-purple-700 text-white px-4 py-2 rounded-lg font-bold text-lg shadow">
              $19,327
            </div>
            <svg
              className="absolute bottom-4 left-4 w-40 h-12"
              viewBox="0 0 160 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                points="0,40 30,30 60,35 90,20 120,25 160,10"
                stroke="#a78bfa"
                strokeWidth="4"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
      <hr className="my-12 border-gray-200" />
      {/* Sell your car your way */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-2 font-sans">
              Jual Mobil dengan Cara Anda
            </h2>
            <div className="flex flex-col md:flex-row gap-8 mt-4 mb-6 w-full">
              <div className="flex-1 flex flex-col items-center md:items-start">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                      stroke="#7c3aed"
                      strokeWidth="2"
                    />
                    <path d="M8 10h8M8 14h4" stroke="#7c3aed" strokeWidth="2" />
                  </svg>
                </div>
                <div className="font-bold mb-1">Dapatkan Penawaran Online</div>
                <div className="text-gray-600 text-sm mb-2">
                  dan selesaikan transaksi dengan dealer lokal dengan cepat.
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start flex-1">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
                      stroke="#7c3aed"
                      strokeWidth="2"
                    />
                    <path d="M8 10h8M8 14h4" stroke="#7c3aed" strokeWidth="2" />
                  </svg>
                </div>
                <div className="font-bold mb-1">Iklankan Mobil Gratis</div>
                <div className="text-gray-600 text-sm mb-2">
                  Tentukan harga sendiri dan tampilkan mobil Anda dengan mudah.
                </div>
              </div>
            </div>
            <button
              className="px-8 py-3 rounded-full border-2 border-black text-black font-semibold text-base hover:bg-gray-100 transition mb-2"
              onClick={() => navigate("/sell")}
            >
              Mulai Sekarang
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80"
            alt="Sell Car Illustration"
            className="w-72 h-44 md:w-80 md:h-52 object-cover rounded-xl shadow-lg border"
          />
        </div>
      </div>
    </section>
  );
};

export default SellCarSection;
