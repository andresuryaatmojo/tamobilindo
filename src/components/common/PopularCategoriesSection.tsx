import React, { useState } from "react";

const categories = [
  "Listrik",
  "SUV",
  "MPV",
  "Sedan",
  "Pick Up",
  "Hatchback",
  "Diesel",
  "Hybrid",
];

type Car = { name: string; img: string; link: string };

type CarsDummyType = {
  [key: string]: Car[];
};

const carsDummy: CarsDummyType = {
  Listrik: [
    {
      name: "Wuling Air EV",
      img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80",
      link: "#",
    },
    {
      name: "Hyundai Ioniq 5",
      img: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80",
      link: "#",
    },
    {
      name: "DFSK Gelora E",
      img: "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=400&q=80",
      link: "#",
    },
  ],
  SUV: [
    {
      name: "Toyota Fortuner",
      img: "https://cdn.motor1.com/images/mgl/0ANJb/s1/2023-toyota-fortuner.jpg",
      link: "#",
    },
    {
      name: "Mitsubishi Pajero Sport",
      img: "https://cdn.motor1.com/images/mgl/6b6b6/s1/2022-mitsubishi-pajero-sport.jpg",
      link: "#",
    },
    {
      name: "Honda CR-V",
      img: "https://cdn.motor1.com/images/mgl/2A6b6/s1/2023-honda-crv.jpg",
      link: "#",
    },
  ],
  MPV: [
    {
      name: "Toyota Avanza",
      img: "https://cdn.motor1.com/images/mgl/0ANJb/s1/2023-toyota-avanza.jpg",
      link: "#",
    },
    {
      name: "Daihatsu Xenia",
      img: "https://cdn.motor1.com/images/mgl/8b6b6/s1/2022-daihatsu-xenia.jpg",
      link: "#",
    },
    {
      name: "Suzuki Ertiga",
      img: "https://cdn.motor1.com/images/mgl/4b6b6/s1/2021-suzuki-ertiga.jpg",
      link: "#",
    },
    {
      name: "Mitsubishi Xpander",
      img: "https://cdn.motor1.com/images/mgl/6b6b6/s1/2022-mitsubishi-xpander.jpg",
      link: "#",
    },
  ],
  Sedan: [
    {
      name: "Toyota Camry",
      img: "https://cdn.motor1.com/images/mgl/3b6b6/s1/2021-toyota-camry.jpg",
      link: "#",
    },
    {
      name: "Honda Civic",
      img: "https://cdn.motor1.com/images/mgl/2A6b6/s1/2023-honda-civic.jpg",
      link: "#",
    },
  ],
  "Pick Up": [
    {
      name: "Toyota Hilux",
      img: "https://cdn.motor1.com/images/mgl/0ANJb/s1/2023-toyota-hilux.jpg",
      link: "#",
    },
    {
      name: "Mitsubishi L300",
      img: "https://cdn.motor1.com/images/mgl/6b6b6/s1/2022-mitsubishi-l300.jpg",
      link: "#",
    },
  ],
  Hatchback: [
    {
      name: "Honda Brio",
      img: "https://cdn.motor1.com/images/mgl/2A6b6/s1/2023-honda-brio.jpg",
      link: "#",
    },
    {
      name: "Toyota Yaris",
      img: "https://cdn.motor1.com/images/mgl/0ANJb/s1/2023-toyota-yaris.jpg",
      link: "#",
    },
  ],
  Diesel: [
    {
      name: "Isuzu Panther",
      img: "https://cdn.motor1.com/images/mgl/8b6b6/s1/isuzu-panther.jpg",
      link: "#",
    },
    {
      name: "Toyota Kijang Innova Diesel",
      img: "https://cdn.motor1.com/images/mgl/3b6b6/s1/2021-toyota-innova.jpg",
      link: "#",
    },
  ],
  Hybrid: [
    {
      name: "Toyota Corolla Cross Hybrid",
      img: "https://cdn.motor1.com/images/mgl/0ANJb/s1/2023-toyota-corolla-cross-hybrid.jpg",
      link: "#",
    },
    {
      name: "Honda CR-V Hybrid",
      img: "https://cdn.motor1.com/images/mgl/2A6b6/s1/2023-honda-crv-hybrid.jpg",
      link: "#",
    },
  ],
};

const PopularCategoriesSection: React.FC = () => {
  const [selected, setSelected] = useState<string>(categories[0]);
  const cars: Car[] = carsDummy[selected] || [];

  return (
    <section className="py-14 px-2 md:px-0 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6 font-sans">
        Kategori Populer
      </h2>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-5 py-2 rounded-full font-semibold whitespace-nowrap border transition text-base ${
              selected === cat
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.length === 0 ? (
          <div className="col-span-full text-center text-gray-400 py-12">
            Belum ada mobil di kategori ini.
          </div>
        ) : (
          cars.map((car: Car, idx: number) => (
            <div
              key={car.name}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center group"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-32 object-contain mb-4 group-hover:scale-105 transition"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/no-image.png";
                }}
              />
              <div className="font-bold text-lg mb-1">{car.name}</div>
              <a
                href={car.link}
                className="mt-2 inline-block bg-black text-white px-6 py-2 rounded-full font-semibold text-sm shadow hover:bg-gray-800 transition"
              >
                Lihat Mobil
              </a>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default PopularCategoriesSection;
