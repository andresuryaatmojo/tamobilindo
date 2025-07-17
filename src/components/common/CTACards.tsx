import React from "react";
import { motion } from "framer-motion";
import { Car, Calculator, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ctas = [
  {
    title: "Jual Mobil",
    desc: "Jual mobil bekas Anda dengan proses mudah, cepat, dan harga terbaik.",
    icon: <Car size={36} className="text-primary" />,
    link: "/sell",
    color: "from-blue-100 to-blue-50",
  },
  {
    title: "Simulasi Kredit",
    desc: "Hitung cicilan mobil impian Anda secara instan dan transparan.",
    icon: <Calculator size={36} className="text-primary" />,
    link: "#simulasi-kredit",
    color: "from-green-100 to-green-50",
  },
  {
    title: "Konsultasi Gratis",
    desc: "Dapatkan konsultasi gratis seputar pembelian, penjualan, dan kredit mobil.",
    icon: <MessageCircle size={36} className="text-primary" />,
    link: "/chatbot",
    color: "from-yellow-100 to-yellow-50",
  },
];

const CTACards: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    if (link === "/chatbot") {
      // For chatbot, we can trigger the chatbot to open
      const chatbotButton = document.querySelector(
        '[aria-label="Buka Chatbot"]'
      ) as HTMLButtonElement;
      if (chatbotButton) {
        chatbotButton.click();
      }
    } else {
      navigate(link);
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctas.map((cta, idx) => (
            <motion.div
              key={cta.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`block bg-gradient-to-br ${cta.color} rounded-2xl shadow-lg hover:shadow-xl transition p-8 text-center group cursor-pointer`}
              onClick={() => handleClick(cta.link)}
            >
              <div className="flex justify-center mb-4">{cta.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary group-hover:underline">
                {cta.title}
              </h3>
              <p className="text-muted mb-4">{cta.desc}</p>
              <span className="inline-block bg-primary text-white px-5 py-2 rounded-full font-semibold text-sm shadow group-hover:bg-secondary transition">
                {cta.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTACards;
