import React from "react";
import { motion } from "framer-motion";
import CarCard from "./CarCard";

// Dummy data mobil unggulan
const featuredCars = [
  {
    name: "Toyota Avanza 2018",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80",
    year: 2018,
    price: 155000000,
    specs: { engine: "1.3L", transmission: "Manual", fuel: "Bensin" },
    badge: "featured",
  },
  {
    name: "Honda Brio 2020",
    image:
      "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80",
    year: 2020,
    price: 175000000,
    specs: { engine: "1.2L", transmission: "Automatic", fuel: "Bensin" },
    badge: "featured",
  },
  {
    name: "Daihatsu Xenia 2019",
    image:
      "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=400&q=80",
    year: 2019,
    price: 145000000,
    specs: { engine: "1.3L", transmission: "Manual", fuel: "Bensin" },
    badge: "featured",
  },
];

const FeaturedCarsSection: React.FC = () => (
  <section className="py-16 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-4 font-sans">
        Mobil Pilihan Kami
      </h2>
      <p className="text-center text-muted mb-10">
        Temukan mobil bekas berkualitas terbaik, siap pakai, dan harga bersaing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredCars.map((car, idx) => (
          <motion.div
            key={car.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <CarCard {...car} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedCarsSection;
