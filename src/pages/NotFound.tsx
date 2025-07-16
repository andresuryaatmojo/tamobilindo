import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <section className="text-center py-20">
    <h2 className="text-6xl font-bold text-pink-500 mb-4">404</h2>
    <p className="text-xl text-gray-600 mb-8">Halaman tidak ditemukan</p>
    <Link
      to="/"
      className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold shadow hover:bg-yellow-400 transition"
    >
      Kembali ke Home
    </Link>
  </section>
);

export default NotFound;
