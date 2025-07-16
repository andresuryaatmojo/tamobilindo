import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const HeroSection: React.FC = () => (
  <section className="relative flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-12 bg-gradient-to-r from-blue-50 to-white rounded-3xl mb-12 overflow-hidden font-sans">
    <div className="flex-1 z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Temukan Mobil Impian Anda
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Jual beli mobil bekas dengan mudah, cepat, dan aman
      </p>
      <form className="flex flex-wrap gap-3 items-center bg-white rounded-xl shadow-lg p-4 mb-6">
        <select className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 min-w-[120px]">
          <option>Lokasi</option>
          <option>Jakarta</option>
          <option>Bandung</option>
          <option>Surabaya</option>
        </select>
        <select className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 min-w-[120px]">
          <option>Tipe</option>
          <option>SUV</option>
          <option>Sedan</option>
          <option>Hatchback</option>
          <option>MPV</option>
        </select>
        <select className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 min-w-[120px]">
          <option>Harga</option>
          <option>&lt; 100jt</option>
          <option>100-200jt</option>
          <option>200-300jt</option>
          <option>&gt; 300jt</option>
        </select>
        <select className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 min-w-[120px]">
          <option>Tahun</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
        </select>
        <button
          type="submit"
          className="flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-700 transition ml-2"
        >
          <Search size={20} />
          Search
        </button>
      </form>
    </div>
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 flex justify-center md:justify-end w-full mt-8 md:mt-0"
    >
      <img
        src="https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=600&q=80"
        alt="Modern Car"
        className="w-full max-w-md rounded-2xl shadow-lg object-cover"
        loading="lazy"
      />
    </motion.div>
  </section>
);

export default HeroSection;
