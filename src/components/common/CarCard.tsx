import React from "react";
import { motion } from "framer-motion";
import { Car } from "lucide-react";

interface CarCardProps {
  name: string;
  image: string;
  year: number;
  price: number;
  specs: { engine: string; transmission: string; fuel: string };
  badge?: string;
}

const formatRupiah = (value: number) =>
  "Rp " + value.toLocaleString("id-ID");

const CarCard: React.FC<CarCardProps> = ({ name, image, year, price, specs, badge }) => (
  <motion.div
    whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(59,130,246,0.10)" }}
    className="bg-white rounded-xl shadow-lg p-4 flex flex-col gap-3 transition-all duration-300 cursor-pointer"
  >
    <div className="relative">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-2 bg-gray-100"
        loading="lazy"
      />
      {badge && (
        <span className={`absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow ${badge === "latest" ? "bg-green-500" : "bg-blue-500"}`}>
          {badge === "latest" ? "Latest" : "Featured"}
        </span>
      )}
    </div>
    <div className="flex items-center gap-2">
      <Car className="text-blue-500" size={20} />
      <span className="font-bold text-lg text-gray-900">{name}</span>
      <span className="ml-auto text-sm text-gray-500">{year}</span>
    </div>
    <div className="font-bold text-xl text-blue-600">{formatRupiah(price)}</div>
    <div className="flex gap-3 text-xs text-gray-500">
      <span>Engine: {specs.engine}</span>
      <span>• {specs.transmission}</span>
      <span>• {specs.fuel}</span>
    </div>
    <button className="mt-2 bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition">View Details</button>
  </motion.div>
);

export default CarCard; 