import React from "react";

const comparisons = [
  {
    id: 1,
    left: {
      name: "Toyota Avanza 2023",
      image:
        "https://cdn.motor1.com/images/mgl/0ANJb/s1/2023-toyota-avanza.jpg",
    },
    right: {
      name: "Honda Brio 2023",
      image: "https://cdn.motor1.com/images/mgl/2A6b6/s1/2023-honda-brio.jpg",
    },
    title: "Toyota Avanza 2023 vs. Honda Brio 2023",
  },
  {
    id: 2,
    left: {
      name: "Daihatsu Xenia 2022",
      image:
        "https://cdn.motor1.com/images/mgl/8b6b6/s1/2022-daihatsu-xenia.jpg",
    },
    right: {
      name: "Mitsubishi Xpander 2022",
      image:
        "https://cdn.motor1.com/images/mgl/6b6b6/s1/2022-mitsubishi-xpander.jpg",
    },
    title: "Daihatsu Xenia 2022 vs. Mitsubishi Xpander 2022",
  },
  {
    id: 3,
    left: {
      name: "Suzuki Ertiga 2021",
      image:
        "https://cdn.motor1.com/images/mgl/4b6b6/s1/2021-suzuki-ertiga.jpg",
    },
    right: {
      name: "Toyota Innova 2021",
      image:
        "https://cdn.motor1.com/images/mgl/3b6b6/s1/2021-toyota-innova.jpg",
    },
    title: "Suzuki Ertiga 2021 vs. Toyota Innova 2021",
  },
];

const CompareVehiclesSection: React.FC = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Compare top rated vehicles
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {comparisons.map((pair) => (
          <div
            key={pair.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center min-w-[320px] max-w-md mx-auto"
            style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)" }}
          >
            <div className="flex flex-row items-center justify-center gap-4 w-full mb-4">
              <img
                src={pair.left.image}
                alt={pair.left.name}
                className="h-28 w-auto object-contain"
                style={{ transform: "scaleX(-1)" }}
              />
              <span className="text-2xl font-bold text-gray-400">vs.</span>
              <img
                src={pair.right.image}
                alt={pair.right.name}
                className="h-28 w-auto object-contain"
              />
            </div>
            <div className="text-center text-lg font-medium text-gray-800">
              {pair.title}
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-16 border-gray-200" />
    </section>
  );
};

export default CompareVehiclesSection;
