import React, { useState } from "react";
import { Car, DollarSign, ClipboardList } from "lucide-react";

const tips = {
  title: "Tips Menjual Mobil Online dengan Mudah",
  img: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80",
  desc: "Panduan dan tips agar mobil Anda cepat laku dan proses transaksi aman di era digital.",
};

const Sell: React.FC = () => {
  const [tab, setTab] = useState<"instant" | "listing">("instant");
  const [form, setForm] = useState({
    merk: "",
    model: "",
    tahun: "",
    harga: "",
    kontak: "",
  });
  const [formEst, setFormEst] = useState({
    tipe: "plat",
    plat: "",
    vin: "",
    provinsi: "",
    opsi: "instan",
  });
  return (
    <>
      {/* Section Jelajahi Opsi Anda */}
      <section className="bg-gray-50 py-10 px-2 md:px-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Jelajahi Opsi Anda</h2>
          <p className="mb-8 text-gray-600">
            Pilih cara terbaik untuk menjual mobil Anda, dapatkan estimasi harga
            instan atau pasang iklan gratis di Mobilindo.
          </p>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <ClipboardList size={32} className="text-purple-600" />
              </div>
              <div className="font-bold">Isi Data Mobil</div>
              <div className="text-sm text-gray-500">
                Masukkan plat nomor/VIN dan detail mobil Anda.
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <DollarSign size={32} className="text-green-600" />
              </div>
              <div className="font-bold">Dapatkan Estimasi</div>
              <div className="text-sm text-gray-500">
                Lihat estimasi harga jual dari dealer atau pembeli langsung.
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-2">
                <Car size={32} className="text-blue-600" />
              </div>
              <div className="font-bold">Siap Jual</div>
              <div className="text-sm text-gray-500">
                Jika sudah siap, lanjutkan proses jual mobil Anda dengan mudah.
              </div>
            </div>
          </div>
          {/* Panel Estimasi */}
          <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto mb-8">
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex gap-2 mb-2">
                <button
                  className={`flex-1 py-2 rounded-full font-semibold text-base ${
                    formEst.tipe === "plat"
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setFormEst((f) => ({ ...f, tipe: "plat" }))}
                >
                  Plat Nomor
                </button>
                <button
                  className={`flex-1 py-2 rounded-full font-semibold text-base ${
                    formEst.tipe === "vin"
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setFormEst((f) => ({ ...f, tipe: "vin" }))}
                >
                  Nomor Rangka (VIN)
                </button>
              </div>
              {formEst.tipe === "plat" ? (
                <input
                  type="text"
                  placeholder="Plat Nomor"
                  className="border rounded-lg px-4 py-2 mb-2"
                  value={formEst.plat}
                  onChange={(e) =>
                    setFormEst((f) => ({ ...f, plat: e.target.value }))
                  }
                />
              ) : (
                <input
                  type="text"
                  placeholder="Nomor Rangka (VIN)"
                  className="border rounded-lg px-4 py-2 mb-2"
                  value={formEst.vin}
                  onChange={(e) =>
                    setFormEst((f) => ({ ...f, vin: e.target.value }))
                  }
                />
              )}
              <select
                className="border rounded-lg px-4 py-2 mb-2"
                value={formEst.provinsi}
                onChange={(e) =>
                  setFormEst((f) => ({ ...f, provinsi: e.target.value }))
                }
              >
                <option value="">Pilih Provinsi</option>
                <option>DKI Jakarta</option>
                <option>Jawa Barat</option>
                <option>Jawa Tengah</option>
                <option>Jawa Timur</option>
                <option>Banten</option>
                <option>Sumatera Utara</option>
                <option>Sumatera Selatan</option>
                <option>Kalimantan Timur</option>
                <option>Bali</option>
              </select>
              <div className="flex gap-4 items-center mb-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="opsi"
                    checked={formEst.opsi === "instan"}
                    onChange={() =>
                      setFormEst((f) => ({ ...f, opsi: "instan" }))
                    }
                  />
                  <span>Penawaran Instan</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="opsi"
                    checked={formEst.opsi === "listing"}
                    onChange={() =>
                      setFormEst((f) => ({ ...f, opsi: "listing" }))
                    }
                  />
                  <span>Pasang Iklan</span>
                </label>
              </div>
            </div>
            <button className="bg-black text-white rounded-full px-8 py-3 font-bold text-lg hover:bg-gray-800 transition w-full md:w-auto">
              Dapatkan Estimasi
            </button>
          </div>
        </div>
      </section>

      {/* Section Tab Jual Mobil */}
      <section className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Jual Mobil dengan Cara Anda
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Dapatkan penawaran instan dari dealer terpercaya atau pasang iklan
            gratis untuk menjual mobil Anda sendiri di Mobilindo.
          </p>
          <div className="flex gap-4 mb-8 border-b">
            <button
              className={`px-6 py-3 font-semibold text-base border-b-2 transition ${
                tab === "instant"
                  ? "border-purple-600 text-black"
                  : "border-transparent text-gray-400"
              }`}
              onClick={() => setTab("instant")}
            >
              Dapatkan Penawaran Instan
            </button>
            <button
              className={`px-6 py-3 font-semibold text-base border-b-2 transition ${
                tab === "listing"
                  ? "border-purple-600 text-black"
                  : "border-transparent text-gray-400"
              }`}
              onClick={() => setTab("listing")}
            >
              Pasang Iklan Gratis
            </button>
          </div>
          {tab === "instant" ? (
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Dapatkan Penawaran Instan
              </h2>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✔</span> Jual mobil
                  Anda dengan cepat dan aman ke dealer rekanan Mobilindo.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✔</span> Proses
                  transparan, tanpa biaya tersembunyi, dan inspeksi profesional.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✔</span> Pembayaran
                  langsung ke rekening Anda setelah transaksi selesai.
                </li>
              </ul>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-purple-700 transition">
                Dapatkan Penawaran Instan
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-4">Pasang Iklan Gratis</h2>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✔</span> Iklankan mobil
                  Anda gratis, tanpa biaya apapun.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✔</span> Tentukan harga
                  sendiri dan jangkau ribuan pembeli potensial.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✔</span> Data Anda
                  aman, hanya pembeli serius yang bisa menghubungi Anda.
                </li>
              </ul>
              <form className="bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-4 max-w-md">
                <input
                  type="text"
                  placeholder="Merk Mobil"
                  className="border rounded-lg px-4 py-2"
                  value={form.merk}
                  onChange={(e) => setForm({ ...form, merk: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Model"
                  className="border rounded-lg px-4 py-2"
                  value={form.model}
                  onChange={(e) => setForm({ ...form, model: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Tahun"
                  className="border rounded-lg px-4 py-2"
                  value={form.tahun}
                  onChange={(e) => setForm({ ...form, tahun: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Harga yang Diinginkan (Rp)"
                  className="border rounded-lg px-4 py-2"
                  value={form.harga}
                  onChange={(e) => setForm({ ...form, harga: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Kontak (No. HP/Email)"
                  className="border rounded-lg px-4 py-2"
                  value={form.kontak}
                  onChange={(e) => setForm({ ...form, kontak: e.target.value })}
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white rounded-full px-8 py-3 font-bold text-lg hover:bg-purple-700 transition"
                >
                  Pasang Iklan
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/News/20220818020636_Car_Selling.jpg&w=600&h=400&q=75&c=1"
            alt="Ilustrasi Jual Mobil"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Section Tips */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6">
          Tips & Panduan Jual Mobil Online
        </h2>
        <div className="bg-white rounded-xl shadow flex flex-col md:flex-row items-center p-6 gap-6">
          <img
            src={tips.img}
            alt="Tips Jual Mobil"
            className="w-40 h-40 object-cover rounded-lg"
          />
          <div>
            <div className="font-bold text-lg mb-2">{tips.title}</div>
            <div className="text-gray-600 mb-2">{tips.desc}</div>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Baca Selengkapnya
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sell;
