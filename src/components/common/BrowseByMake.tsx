import React, { useState } from "react";
import { MapPin, Search } from "lucide-react";

const merkList = [
  { name: "Toyota", icon: "/toyota.png" },
  { name: "Honda", icon: "/honda.png" },
  { name: "Daihatsu", icon: "/daihatsu.png" },
  { name: "Suzuki", icon: "/suzuki.png" },
  { name: "Mitsubishi", icon: "/mitsubishi.png" },
  { name: "Nissan", icon: "/nissan.png" },
];

const lokasiList = [
  "Jakarta Selatan",
  "Jakarta Barat",
  "Jakarta Timur",
  "Jakarta Utara",
  "Jakarta Pusat",
  "Depok",
  "Tangerang",
  "Bekasi",
  "Bandung",
  "Surabaya",
];

const BrowseByMake: React.FC = () => {
  const [lokasi, setLokasi] = useState(lokasiList[0]);
  return (
    <div className="mt-10">
      <div className="flex items-center gap-8 mb-4">
        <div className="flex items-center gap-2">
          <Search size={22} />
          <span className="font-medium">Cari</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={22} />
          <select
            className="border-none bg-transparent font-medium text-base focus:outline-none"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
          >
            {lokasiList.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>
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
