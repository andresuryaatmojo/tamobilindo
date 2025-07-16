import React, { useState } from "react";

const merkList = [
  "Toyota",
  "Honda",
  "Daihatsu",
  "Suzuki",
  "Mitsubishi",
  "Nissan",
];
const modelList = {
  Toyota: ["Avanza", "Innova", "Fortuner", "Agya"],
  Honda: ["Brio", "Jazz", "Civic", "HR-V"],
  Daihatsu: ["Xenia", "Ayla", "Terios"],
  Suzuki: ["Ertiga", "Ignis", "Karimun"],
  Mitsubishi: ["Xpander", "Pajero", "Outlander"],
  Nissan: ["Livina", "March", "Serena"],
};
const hargaList = ["< 100jt", "100-200jt", "200-300jt", "> 300jt"];
const lokasiList = [
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Medan",
  "Semarang",
  "Makassar",
];
const kondisiList = ["Semua", "Baru", "Bekas"];

type MerkKey = keyof typeof modelList;

const CarFilterBar: React.FC = () => {
  const [merk, setMerk] = useState<MerkKey | "">("");
  const [model, setModel] = useState("");
  const [harga, setHarga] = useState("");
  const [lokasi, setLokasi] = useState("");
  const [kondisi, setKondisi] = useState("Semua");

  return (
    <div className="bg-blue-900 rounded-xl p-6 flex flex-wrap gap-4 items-center justify-center shadow-lg">
      <select
        className="px-4 py-2 rounded bg-white min-w-[140px]"
        value={merk}
        onChange={(e) => {
          setMerk(e.target.value as MerkKey | "");
          setModel("");
        }}
      >
        <option value="">Pilih Merk</option>
        {merkList.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      <select
        className="px-4 py-2 rounded bg-white min-w-[140px]"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        disabled={!merk}
      >
        <option value="">Pilih Model</option>
        {merk &&
          (modelList[merk as MerkKey] || []).map((md: string) => (
            <option key={md} value={md}>
              {md}
            </option>
          ))}
      </select>
      <select
        className="px-4 py-2 rounded bg-white min-w-[120px]"
        value={harga}
        onChange={(e) => setHarga(e.target.value)}
      >
        <option value="">Harga Maksimal</option>
        {hargaList.map((h) => (
          <option key={h} value={h}>
            {h}
          </option>
        ))}
      </select>
      <select
        className="px-4 py-2 rounded bg-white min-w-[120px]"
        value={lokasi}
        onChange={(e) => setLokasi(e.target.value)}
      >
        <option value="">Lokasi</option>
        {lokasiList.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>
      <select
        className="px-4 py-2 rounded bg-white min-w-[100px]"
        value={kondisi}
        onChange={(e) => setKondisi(e.target.value)}
      >
        {kondisiList.map((k) => (
          <option key={k} value={k}>
            {k}
          </option>
        ))}
      </select>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-2 rounded transition">
        Cari Mobil
      </button>
    </div>
  );
};

export default CarFilterBar;
