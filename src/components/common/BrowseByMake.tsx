import React from "react";

const merkList = [
  { name: "Toyota", icon: "/toyota.png" },
  { name: "Honda", icon: "/honda.png" },
  { name: "Daihatsu", icon: "/daihatsu.png" },
  { name: "Suzuki", icon: "/suzuki.png" },
  { name: "Mitsubishi", icon: "/mitsubishi.png" },
  { name: "Nissan", icon: "/nissan.png" },
];

const BrowseByMake: React.FC = () => {
  // Remove lokasi state and lokasiList
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">
        Cari berdasarkan <span className="text-green-500">Merk</span>
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        {merkList.map((merk) => (
          <div key={merk.name} className="flex flex-col items-center">
            <img
              src={merk.icon}
              alt={merk.name}
              className="w-12 h-12 object-contain mb-2"
            />
            <span className="text-sm">{merk.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByMake;
