import React from "react";
import { cars } from "../../data/cars";
import { Link } from "react-router-dom";

interface SimilarCarsProps {
  currentCarId: number;
  merk: string;
}

const SimilarCars: React.FC<SimilarCarsProps> = ({ currentCarId, merk }) => {
  // Filter mobil serupa (merk sama, bukan mobil yang sedang dilihat)
  const similar = cars
    .filter((c) => c.id !== currentCarId && c.name.split(" ")[0] === merk)
    .slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto my-12">
      <h2 className="text-2xl font-extrabold mb-4">
        Mobil Serupa di Dealer Ini
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {similar.map((car) => (
          <Link
            to={`/car/${car.id}`}
            key={car.id}
            className="min-w-[250px] bg-white rounded-xl shadow hover:shadow-lg transition p-3 flex-shrink-0"
          >
            <img
              src={`/foto-mobil/${car.name.split(" ")[0]}/${car.images?.[0]}`}
              alt={car.name}
              className="w-full h-36 object-cover rounded-lg mb-2"
            />
            <div className="font-bold">
              {car.year} {car.name}
            </div>
            <div className="text-gray-500 text-sm mb-1">- km</div>
            <div className="text-lg font-bold text-blue-700 mb-1">
              Rp {car.price.toLocaleString("id-ID")}
            </div>
            <div className="flex gap-1">
              <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-semibold">
                Terlaris
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-2">
        <Link
          to="/catalog"
          className="text-blue-700 font-semibold hover:underline"
        >
          Lihat semua mobil di dealer ini
        </Link>
      </div>
    </div>
  );
};

export default SimilarCars;
