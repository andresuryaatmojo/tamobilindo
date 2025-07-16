import React, { useState } from "react";
import { motion } from "framer-motion";

const minHarga = 50000000;
const maxHarga = 500000000;
const minDpPct = 10;
const maxDpPct = 90;
const minTenor = 12;
const maxTenor = 60;
const minBunga = 2;
const maxBunga = 10;

function formatRupiah(value: number) {
  return "Rp " + value.toLocaleString("id-ID");
}

const SimulasiKredit: React.FC = () => {
  const [harga, setHarga] = useState(200000000);
  const [dpPct, setDpPct] = useState(20);
  const [tenor, setTenor] = useState(36);
  const [bunga, setBunga] = useState(5);

  // Hitung DP & sisa kredit
  const dp = Math.round((dpPct / 100) * harga);
  const sisaKredit = harga - dp;
  // Hitung bunga per tahun (flat)
  const totalBunga = sisaKredit * (bunga / 100) * (tenor / 12);
  const totalBayar = sisaKredit + totalBunga;
  const cicilanBulanan = tenor > 0 ? Math.round(totalBayar / tenor) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 mt-16 mb-16"
    >
      <h2 className="text-2xl font-extrabold mb-4 text-primary text-center font-sans">
        Simulasi Kredit Mobil
      </h2>
      <form className="flex flex-col gap-6">
        {/* Harga Mobil */}
        <div>
          <label className="block font-semibold mb-1 text-primary">
            Harga Mobil
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={minHarga}
              max={maxHarga}
              step={1000000}
              value={harga}
              onChange={(e) => setHarga(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <input
              type="number"
              min={minHarga}
              max={maxHarga}
              step={1000000}
              value={harga}
              onChange={(e) => setHarga(Number(e.target.value))}
              className="w-32 px-2 py-1 rounded-lg border border-gray-200 text-right"
            />
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {formatRupiah(minHarga)} - {formatRupiah(maxHarga)}
          </div>
        </div>
        {/* DP */}
        <div>
          <label className="block font-semibold mb-1 text-primary">
            Down Payment (DP)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={minDpPct}
              max={maxDpPct}
              step={1}
              value={dpPct}
              onChange={(e) => setDpPct(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <input
              type="number"
              min={minDpPct}
              max={maxDpPct}
              step={1}
              value={dpPct}
              onChange={(e) => setDpPct(Number(e.target.value))}
              className="w-16 px-2 py-1 rounded-lg border border-gray-200 text-right"
            />
            <span className="text-gray-500">%</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {minDpPct}% - {maxDpPct}% ({formatRupiah(dp)})
          </div>
        </div>
        {/* Tenor */}
        <div>
          <label className="block font-semibold mb-1 text-primary">
            Tenor (bulan)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={minTenor}
              max={maxTenor}
              step={1}
              value={tenor}
              onChange={(e) => setTenor(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <input
              type="number"
              min={minTenor}
              max={maxTenor}
              step={1}
              value={tenor}
              onChange={(e) => setTenor(Number(e.target.value))}
              className="w-16 px-2 py-1 rounded-lg border border-gray-200 text-right"
            />
            <span className="text-gray-500">bulan</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {minTenor} - {maxTenor} bulan
          </div>
        </div>
        {/* Bunga */}
        <div>
          <label className="block font-semibold mb-1 text-primary">
            Bunga (%)
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={minBunga}
              max={maxBunga}
              step={0.1}
              value={bunga}
              onChange={(e) => setBunga(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <input
              type="number"
              min={minBunga}
              max={maxBunga}
              step={0.1}
              value={bunga}
              onChange={(e) => setBunga(Number(e.target.value))}
              className="w-16 px-2 py-1 rounded-lg border border-gray-200 text-right"
            />
            <span className="text-gray-500">%</span>
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {minBunga}% - {maxBunga}% per tahun
          </div>
        </div>
      </form>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-white rounded-xl text-gray-700 shadow-inner"
      >
        <div className="font-bold text-lg mb-2 text-primary">
          Hasil Simulasi
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div>
            <span className="font-semibold">Cicilan Bulanan: </span>
            <span className="text-xl font-bold text-blue-600">
              {formatRupiah(cicilanBulanan)}
            </span>
          </div>
          <div>
            <span className="font-semibold">Total Bunga: </span>
            {formatRupiah(Math.round(totalBunga))}
          </div>
          <div>
            <span className="font-semibold">Total Pembayaran: </span>
            {formatRupiah(Math.round(totalBayar))}
          </div>
          <div>
            <span className="font-semibold">Down Payment (DP): </span>
            {formatRupiah(dp)}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SimulasiKredit;
