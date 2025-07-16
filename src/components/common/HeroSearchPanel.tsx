import React, { useState } from "react";
import { Search } from "lucide-react";

const makes = ["Toyota", "Honda", "Daihatsu", "Suzuki", "Mitsubishi", "Nissan"];
const models = ["Avanza", "Brio", "Xenia", "Ertiga", "Xpander", "Livina"];
const distances = ["10 km", "25 km", "50 km", "100 km"];

const HeroSearchPanel: React.FC = () => {
  const [tab, setTab] = useState<"shop" | "sell">("shop");
  const [search, setSearch] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [distance, setDistance] = useState(distances[2]);
  const [zip, setZip] = useState("");

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-12 z-20 w-[95vw] max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 flex flex-col gap-4 border border-gray-100">
        <div className="flex gap-2 mb-2">
          <button
            className={`flex-1 py-2 rounded-full font-bold text-lg transition border-b-2 ${
              tab === "shop"
                ? "border-purple-500 text-gray-900"
                : "border-transparent text-gray-400"
            }`}
            onClick={() => setTab("shop")}
          >
            Cari Mobil Dijual
          </button>
          <button
            className={`flex-1 py-2 rounded-full font-bold text-lg transition border-b-2 ${
              tab === "sell"
                ? "border-purple-500 text-gray-900"
                : "border-transparent text-gray-400"
            }`}
            onClick={() => setTab("sell")}
          >
            Jual Mobil Anda
          </button>
        </div>
        {tab === "shop" ? (
          <>
            <div className="relative mb-2">
              <input
                type="text"
                className="w-full rounded-full border border-gray-200 px-5 py-3 pr-12 text-base focus:ring-2 focus:ring-purple-400 outline-none shadow"
                placeholder='Try "Avanza 2018 under 200jt"'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={22}
              />
            </div>
            <div className="flex items-center justify-center text-gray-400 text-xs mb-2">
              — Or search by —
            </div>
            <div className="flex flex-col gap-3">
              <select
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base"
                value={make}
                onChange={(e) => setMake(e.target.value)}
              >
                <option value="">Make</option>
                {makes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <select
                className="w-full rounded-lg border border-gray-200 px-4 py-2 text-base"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                <option value="">Model</option>
                {models.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
              <div className="flex gap-2">
                <select
                  className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-base"
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                >
                  {distances.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-base"
                  placeholder="ZIP"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
            </div>
            <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-full text-lg shadow-lg transition">
              Show 309 matches
            </button>
          </>
        ) : (
          <>
            <div className="flex gap-2 mb-2">
              <button className="flex-1 py-2 rounded-full font-semibold text-base bg-black text-white">
                Plat Nomor
              </button>
              <button className="flex-1 py-2 rounded-full font-semibold text-base border border-gray-300">
                Nomor Rangka
              </button>
            </div>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-base"
                placeholder="Plat Nomor"
              />
              <select className="w-24 rounded-lg border border-gray-200 px-2 py-2 text-base">
                <option>Provinsi</option>
                <option>DKI</option>
                <option>Jabar</option>
                <option>Jatim</option>
              </select>
            </div>
            <div className="mb-2">
              <div className="font-semibold text-sm mb-1">
                Estimasi harga mobil untuk:
              </div>
              <div className="flex gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="offer"
                    defaultChecked
                    className="accent-purple-600"
                  />
                  <span className="text-sm">Penawaran Instan</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="offer"
                    className="accent-purple-600"
                  />
                  <span className="text-sm">Jual Sendiri</span>
                </label>
              </div>
            </div>
            <button className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-full text-lg shadow-lg transition">
              Get estimate
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroSearchPanel;
