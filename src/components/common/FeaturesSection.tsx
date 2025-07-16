import React from "react";
import { motion } from "framer-motion";
import { ThumbsUp, BadgeDollarSign, ShieldCheck, Headset } from "lucide-react";

const features = [
  {
    title: "Proses Mudah & Cepat",
    desc: "Transaksi jual beli mobil tanpa ribet, cukup beberapa langkah saja.",
    icon: <ThumbsUp size={32} className="text-primary" />,
  },
  {
    title: "Harga Transparan",
    desc: "Harga jujur, tanpa biaya tersembunyi. Semua info jelas di awal.",
    icon: <BadgeDollarSign size={32} className="text-primary" />,
  },
  {
    title: "Mobil Berkualitas",
    desc: "Setiap mobil telah melalui inspeksi ketat dan siap pakai.",
    icon: <ShieldCheck size={32} className="text-primary" />,
  },
  {
    title: "Dukungan Konsultasi",
    desc: "Tim kami siap membantu Anda memilih mobil & kredit terbaik.",
    icon: <Headset size={32} className="text-primary" />,
  },
];

const FeaturesSection: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-4 font-sans">
        Kenapa Pilih Mobilindo?
      </h2>
      <p className="text-center text-muted mb-10">
        Kami berkomitmen memberikan pengalaman terbaik untuk Anda.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow p-8 text-center flex flex-col items-center"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-bold mb-2 text-primary">
              {feature.title}
            </h3>
            <p className="text-muted text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
