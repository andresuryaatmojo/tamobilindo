import React from "react";

interface BasicsProps {
  basics: { label: string; value: string }[];
}
interface FeaturesProps {
  features: { category: string; items: string[] }[];
}

const CarSpecs: React.FC<{
  basics: BasicsProps["basics"];
  features: FeaturesProps["features"];
}> = ({ basics, features }) => (
  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 my-12">
    {/* Basics */}
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-800">
        Spesifikasi Utama
      </h2>
      <dl className="divide-y divide-gray-200">
        {basics.map((item) => (
          <div key={item.label} className="flex justify-between py-3">
            <dt className="font-medium text-gray-600">{item.label}</dt>
            <dd className="font-semibold text-gray-900">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
    {/* Features */}
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-800">Fitur</h2>
      {features.map((cat) => (
        <div key={cat.category} className="mb-4">
          <div className="font-bold text-indigo-700 mb-1">{cat.category}</div>
          <ul className="list-disc list-inside text-gray-800 ml-2">
            {cat.items.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default CarSpecs;
