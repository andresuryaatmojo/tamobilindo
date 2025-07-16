import React from "react";
import { marketComparison } from "../../data/marketComparison";

interface Props {
  carPrice: number;
}

const MarketComparison: React.FC<Props> = ({ carPrice }) => {
  const prices = marketComparison.map((m) => m.avgPrice);
  const min = Math.min(...prices, carPrice);
  const max = Math.max(...prices, carPrice);

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-2xl p-8 my-12">
      <h3 className="text-2xl font-extrabold mb-6 text-gray-800">
        Komparasi Harga Pasar
      </h3>
      <div className="overflow-hidden rounded-xl shadow">
        <table className="w-full text-base">
          <thead>
            <tr className="bg-indigo-50">
              <th className="py-3 px-4 text-left font-bold">Marketplace</th>
              <th className="py-3 px-4 text-right font-bold">
                Harga Rata-rata
              </th>
              <th className="py-3 px-4 text-right font-bold">Selisih</th>
            </tr>
          </thead>
          <tbody>
            {marketComparison.map((market) => (
              <tr key={market.source} className="hover:bg-indigo-50 transition">
                <td className="py-3 px-4">{market.source}</td>
                <td className="py-3 px-4 text-right">
                  Rp {market.avgPrice.toLocaleString()}
                </td>
                <td
                  className={`py-3 px-4 text-right font-bold ${
                    carPrice < market.avgPrice
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {carPrice > market.avgPrice
                    ? `+Rp ${(carPrice - market.avgPrice).toLocaleString()}`
                    : `-Rp ${(market.avgPrice - carPrice).toLocaleString()}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Slider modern dengan marker custom dan tooltip */}
      <div className="relative mt-8 mb-2">
        <div className="flex justify-between text-sm mb-1 text-gray-500 font-medium">
          <span>Rp {min.toLocaleString()}</span>
          <span>Rp {max.toLocaleString()}</span>
        </div>
        <div className="relative h-4 bg-gradient-to-r from-green-300 via-yellow-200 to-red-300 rounded-full shadow-inner">
          <div
            className="absolute top-1/2 -translate-y-1/2 group"
            style={{
              left: `calc(${((carPrice - min) / (max - min)) * 100}% - 18px)`,
            }}
          >
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-indigo-700 text-white text-xs px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition">
              Rp {carPrice.toLocaleString()}
            </div>
            {/* Marker */}
            <div className="w-9 h-9 bg-indigo-600 border-4 border-white rounded-full shadow-lg flex items-center justify-center text-white text-xl">
              🚗
            </div>
          </div>
        </div>
        <div className="text-center mt-4 font-extrabold text-2xl text-indigo-700 drop-shadow">
          Harga mobil ini: Rp {carPrice.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default MarketComparison;
