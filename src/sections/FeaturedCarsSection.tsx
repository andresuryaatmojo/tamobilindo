import React from "react";
import { cars } from "../data/cars";
import CarCard from "../components/common/CarCard";

const FeaturedCarsSection: React.FC = () => (
  <section className="my-16">
    <h2 className="text-2xl font-bold mb-6 text-gray-900">The Most Searched Cars</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {cars.filter(car => car.badge === "featured").map(car => (
        <CarCard key={car.id} {...car} />
      ))}
    </div>
  </section>
);

export default FeaturedCarsSection; 