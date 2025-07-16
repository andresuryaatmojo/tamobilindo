import React, { useState } from "react";
import { Search } from "lucide-react";
import { cars } from "../data/cars";
import { Link } from "react-router-dom";

const tipeList = [
  "Semua Tipe",
  "MPV",
  "SUV",
  "Listrik",
  "Sedan",
  "Hatchback",
  "Pick Up",
];
const merkList = [
  "Semua Merk",
  "Toyota",
  "Honda",
  "Daihatsu",
  "Suzuki",
  "Mitsubishi",
  "Nissan",
];
const modelList = [
  "Semua Model",
  "Avanza",
  "Brio",
  "Xenia",
  "Ertiga",
  "Xpander",
  "Innova",
];
const hargaList = [
  "Semua Harga",
  "< 100jt",
  "100-200jt",
  "200-300jt",
  "> 300jt",
];
const jarakList = ["10 km", "25 km", "50 km", "100 km"];
const lokasiList = [
  "Jakarta Selatan",
  "Jakarta Barat",
  "Jakarta Timur",
  "Jakarta Utara",
  "Jakarta Pusat",
  "Depok",
  "Tangerang",
  "Bekasi",
  "Bandung",
  "Surabaya",
];

const Catalog: React.FC = () => {
  const [tipe, setTipe] = useState(tipeList[0]);
  const [merk, setMerk] = useState(merkList[0]);
  const [model, setModel] = useState(modelList[0]);
  const [harga, setHarga] = useState(hargaList[0]);
  const [jarak, setJarak] = useState(jarakList[2]);
  const [lokasi, setLokasi] = useState(lokasiList[0]);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState(tipeList[0]);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Katalog Mobil Dijual
      </h1>
      {/* Hero Banner */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-8 relative">
        <img
          src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80"
          alt="Banner Mobil"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow">
            Temukan Mobil Impian Anda
          </h2>
          <p className="text-white mb-4 max-w-xl drop-shadow">
            Cari mobil baru & bekas dari berbagai merk, tipe, dan harga terbaik
            di Indonesia.
          </p>
        </div>
      </div>
      {/* Search Bar & Filter */}
      <div className="bg-white rounded-xl shadow p-6 mb-8 flex flex-col md:flex-row md:items-end gap-4">
        <div className="flex-1 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Cari mobil (misal: Avanza, Brio, SUV...)"
            className="border rounded-lg px-4 py-2 flex-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border rounded-lg px-4 py-2"
            value={tipe}
            onChange={(e) => setTipe(e.target.value)}
          >
            {tipeList.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          <select
            className="border rounded-lg px-4 py-2"
            value={merk}
            onChange={(e) => setMerk(e.target.value)}
          >
            {merkList.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
          <select
            className="border rounded-lg px-4 py-2"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            {modelList.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-4">
          <select
            className="border rounded-lg px-4 py-2"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          >
            {hargaList.map((h) => (
              <option key={h}>{h}</option>
            ))}
          </select>
          <select
            className="border rounded-lg px-4 py-2"
            value={jarak}
            onChange={(e) => setJarak(e.target.value)}
          >
            {jarakList.map((j) => (
              <option key={j}>{j}</option>
            ))}
          </select>
          <select
            className="border rounded-lg px-4 py-2"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
          >
            {lokasiList.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </div>
        <button className="bg-purple-600 text-white px-8 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-purple-700 transition mt-2 md:mt-0">
          <Search size={20} /> Cari
        </button>
      </div>
      {/* Tab Filter */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {tipeList.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap border transition text-base ${
              tab === t
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      {/* Dummy List Mobil */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => {
          const merk = car.name.split(" ")[0];
          const imgSrc =
            car.images && car.images.length > 0
              ? `/foto-mobil/${merk}/${car.images[0]}`
              : car.image;
          return (
            <div
              key={car.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center group"
            >
              <img
                src={imgSrc}
                alt={car.name}
                className="w-full h-32 object-contain mb-4 group-hover:scale-105 transition"
                loading="lazy"
              />
              <div className="font-bold text-lg mb-1">
                {car.name} {car.year}
              </div>
              <div className="text-gray-500 text-sm mb-2">
                {car.specs.engine} | {car.specs.transmission} | {car.specs.fuel}
              </div>
              <div className="font-bold text-primary text-xl mb-2">
                Rp {car.price.toLocaleString("id-ID")}
              </div>
              <Link
                to={`/car/${car.id}`}
                className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow hover:bg-purple-700 transition"
              >
                Lihat Detail
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
