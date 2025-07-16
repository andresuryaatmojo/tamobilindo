import React from "react";
import { useParams, Link } from "react-router-dom";

const CarDetails: React.FC = () => {
  const { id } = useParams();
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center text-7xl mb-4">
            🚗
          </div>
          <div className="flex gap-2 mb-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-2xl"
              >
                🚗
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-pink-500 mb-2">
            Toyota Avanza 2018
          </h2>
          <p className="text-gray-600 mb-2">Hitam, 55.000 km</p>
          <p className="text-yellow-500 font-bold text-2xl mb-4">
            Rp 155.000.000
          </p>
          <ul className="mb-4 text-gray-700">
            <li>
              <b>Tahun:</b> 2018
            </li>
            <li>
              <b>Transmisi:</b> Manual
            </li>
            <li>
              <b>Bahan Bakar:</b> Bensin
            </li>
            <li>
              <b>Kondisi:</b> Sangat Baik
            </li>
            <li>
              <b>Lokasi:</b> Jakarta
            </li>
          </ul>
          <div className="flex gap-4">
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
              Ajukan Kredit
            </button>
            <button className="bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-500 transition">
              Hubungi Penjual
            </button>
          </div>
          <div className="mt-6">
            <Link to="/catalog" className="text-pink-500 hover:underline">
              Kembali ke Katalog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
