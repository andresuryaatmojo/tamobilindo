import React from "react";

const Dashboard: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold mb-6 text-pink-500">Dashboard</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
        <div className="text-4xl mb-2">🚗</div>
        <div className="text-lg font-semibold">Total Mobil</div>
        <div className="text-2xl font-bold text-pink-500">12</div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
        <div className="text-4xl mb-2">💰</div>
        <div className="text-lg font-semibold">Total Penjualan</div>
        <div className="text-2xl font-bold text-yellow-500">
          Rp 1.200.000.000
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
        <div className="text-4xl mb-2">⭐</div>
        <div className="text-lg font-semibold">Rating Rata-rata</div>
        <div className="text-2xl font-bold text-pink-500">4.8</div>
      </div>
    </div>
  </section>
);

export default Dashboard;
