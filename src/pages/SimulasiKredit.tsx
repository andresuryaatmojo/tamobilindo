import React, { useState } from "react";
import SimulasiKredit from "../components/common/SimulasiKredit";

const angsuranTabs = [
  { label: "Angsuran Dibawah Rp 2 Juta", key: "<2jt" },
  { label: "Angsuran Dibawah Rp 5 Juta", key: "<5jt" },
  { label: "Angsuran Dibawah Rp 10 Juta", key: "<10jt" },
  { label: "Angsuran Di Atas 10 Juta", key: ">10jt" },
];
const dpTabs = [
  { label: "DP Dibawah Rp 5 Juta", key: "<5jt" },
  { label: "DP Dibawah Rp 10 Juta", key: "<10jt" },
  { label: "DP Dibawah Rp 20 Juta", key: "<20jt" },
  { label: "DP Dibawah Rp 30 Juta", key: "<30jt" },
  { label: "DP Dibawah Rp 50 Juta", key: "<50jt" },
];

// Dummy data for car cards
const cars = [
  {
    id: 1,
    name: "Toyota Kijang Innova Zenix Hybrid EV",
    price: "Rp 473,4 - 625,3 Juta",
    installment: "Rp 11,13 Juta x 36",
    rating: 4.5,
    reviews: 2,
    promo: true,
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/14/2922/toyota-innova-zenix-2023-exterior-2.jpg",
    badge: "HEV",
    info: true,
  },
  {
    id: 2,
    name: "Daihatsu Sigra",
    price: "Rp 141,5 - 187,1 Juta",
    installment: "Rp 3,33 Juta x 36",
    rating: 4.77,
    reviews: 147,
    promo: true,
    image:
      "https://imgcdn.oto.com/large/gallery/exterior/14/2922/daihatsu-sigra-2023-exterior-2.jpg",
    badge: null,
    info: true,
  },
];

const SimulasiKreditPage: React.FC = () => {
  const [activeAngsuranTab, setActiveAngsuranTab] = useState(
    angsuranTabs[0].key
  );
  const [activeDPTab, setActiveDPTab] = useState(dpTabs[0].key);

  return (
    <div className="bg-blue-50 min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 pt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-2 text-gray-900 drop-shadow-lg">
          Kalkulator Simulasi Kredit Mobil
        </h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Hitung EMI pinjaman mobil dengan menggunakan Kalkulator EMI Pinjaman
          Mobil Mobilindo. Anda harus memasukkan jumlah pinjaman, masa tenor,
          suku bunga, dan klik Ajukan Pinjaman untuk memeriksa EMI.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <SimulasiKredit />
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Mobil Dalam Anggaran EMI Anda
            </h2>
            <div className="flex gap-2 mb-6 flex-wrap justify-center">
              {angsuranTabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all border ${
                    activeAngsuranTab === tab.key
                      ? "bg-blue-100 text-blue-600 border-blue-300"
                      : "bg-gray-50 text-gray-700 border-gray-200"
                  }`}
                  onClick={() => setActiveAngsuranTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="flex gap-6 overflow-x-auto pb-2">
              {cars.map((car) => (
                <div
                  key={car.id}
                  className="min-w-[320px] bg-white rounded-xl shadow-md p-4 flex flex-col gap-2 border border-gray-100"
                >
                  <div className="relative">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-36 object-cover rounded-lg mb-2"
                    />
                    {car.badge && (
                      <span className="absolute top-2 left-2 bg-blue-400 text-white text-xs font-bold px-2 py-1 rounded">
                        {car.badge}
                      </span>
                    )}
                  </div>
                  <div className="font-bold text-gray-800 text-base mb-1">
                    {car.name}
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    {car.price}
                    {car.info && (
                      <span
                        className="ml-1 text-blue-400 cursor-pointer"
                        title="Info harga"
                      >
                        i
                      </span>
                    )}
                  </div>
                  <div className="text-gray-600 text-sm mb-1">
                    Angsuran : {car.installment}
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 text-sm mb-1">
                    <span>★</span>
                    <span className="font-semibold">{car.rating}</span>
                    <span className="text-gray-500">
                      ({car.reviews} Ulasan)
                    </span>
                  </div>
                  {car.promo && (
                    <div className="text-pink-600 font-semibold text-sm cursor-pointer">
                      Lihat Promo
                    </div>
                  )}
                </div>
              ))}
              <div className="min-w-[320px] flex flex-col items-center justify-center bg-blue-50 rounded-xl border-2 border-dashed border-blue-200 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-3xl text-blue-500">→</span>
                </div>
                <div className="font-bold text-gray-700 mb-2">
                  VIEW ALL MOBIL <br /> ANGSURAN DIBAWAH RP 2 JUTA
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                Mobil Dalam Anggaran DP Anda
              </h2>
              <div className="flex gap-2 mb-6 flex-wrap justify-center">
                {dpTabs.map((tab) => (
                  <button
                    key={tab.key}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all border ${
                      activeDPTab === tab.key
                        ? "bg-blue-100 text-blue-600 border-blue-300"
                        : "bg-gray-50 text-gray-700 border-gray-200"
                    }`}
                    onClick={() => setActiveDPTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-6 overflow-x-auto pb-2">
                {cars.map((car) => (
                  <div
                    key={car.id}
                    className="min-w-[320px] bg-white rounded-xl shadow-md p-4 flex flex-col gap-2 border border-gray-100"
                  >
                    <div className="relative">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-36 object-cover rounded-lg mb-2"
                      />
                      {car.badge && (
                        <span className="absolute top-2 left-2 bg-blue-400 text-white text-xs font-bold px-2 py-1 rounded">
                          {car.badge}
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-gray-800 text-base mb-1">
                      {car.name}
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-1">
                      {car.price}
                      {car.info && (
                        <span
                          className="ml-1 text-blue-400 cursor-pointer"
                          title="Info harga"
                        >
                          i
                        </span>
                      )}
                    </div>
                    <div className="text-gray-600 text-sm mb-1">
                      Angsuran : {car.installment}
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500 text-sm mb-1">
                      <span>★</span>
                      <span className="font-semibold">{car.rating}</span>
                      <span className="text-gray-500">
                        ({car.reviews} Ulasan)
                      </span>
                    </div>
                    {car.promo && (
                      <div className="text-pink-600 font-semibold text-sm cursor-pointer">
                        Lihat Promo
                      </div>
                    )}
                  </div>
                ))}
                <div className="min-w-[320px] flex flex-col items-center justify-center bg-blue-50 rounded-xl border-2 border-dashed border-blue-200 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-3xl text-blue-500">→</span>
                  </div>
                  <div className="font-bold text-gray-700 mb-2">
                    VIEW ALL MOBIL DP <br /> DIBAWAH RP 5 JUTA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-10 max-w-3xl mx-auto">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              *Harga dasar (Total biaya) dihitung berdasarkan harga model
              populer tersedia di area pilihan Anda
            </li>
            <li>
              *Simulasi belum termasuk biaya-biaya seperti biaya asuransi, biaya
              Admin, biaya Provisi, dll
            </li>
            <li>
              *Simulasi yang muncul hanyalah gambaran umum dan bukan merupakan
              simulasi sebenarnya. Simulasi terakhir yang akan ditentukan oleh
              pemodal.
            </li>
            <li>
              *Jangka waktu cicilan pembiayaan mobil baru umumnya 5 tahun. Hanya
              beberapa pemodal yang memberikan kredit lebih dari 5 tahun dengan
              syarat dan ketentuan tertentu.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimulasiKreditPage;
