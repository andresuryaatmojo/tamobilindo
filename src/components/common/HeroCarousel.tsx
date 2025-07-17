import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80", // city skyline
    title: "Temukan Mobil Impianmu di Kota Besar!",
    desc: "Jual beli mobil bekas & baru dengan mudah, cepat, dan aman di seluruh Indonesia.",
    price: "Mulai Rp 100jt",
    cta: "Lihat Katalog",
    ctaLink: "/catalog",
  },
  {
    image:
      "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=1200&q=80",
    title: "Promo Kredit Mobil Bunga Rendah",
    desc: "Dapatkan simulasi kredit terbaik untuk mobil pilihanmu.",
    price: "Cicilan 2jt/bln",
    cta: "Simulasi Kredit",
    ctaLink: "/#simulasi",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=1200&q=80",
    title: "Jual Mobil Bekasmu Lebih Mudah",
    desc: "Pasang iklan gratis, mobil cepat laku!",
    price: "Gratis Pasang Iklan",
    cta: "Jual Mobil",
    ctaLink: "/sell",
  },
];

const HeroCarousel: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const navigate = useNavigate();
  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  const handleCTAClick = (link: string) => {
    if (link.startsWith("/#")) {
      const anchor = link.substring(2);
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(link);
    }
  };

  useEffect(() => {
    const timer = setTimeout(next, 5000);
    return () => clearTimeout(timer);
  }, [idx]);

  return (
    <div className="relative w-full h-[340px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl mb-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={slides[idx].image}
            alt={slides[idx].title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white max-w-lg">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-white text-green-600 font-bold text-lg px-5 py-2 rounded-full shadow-lg border-4 border-green-400/40">
                {slides[idx].price}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              {slides[idx].title}
            </h1>
            <p className="text-lg md:text-xl mb-6 font-medium drop-shadow">
              {slides[idx].desc}
            </p>
            <button
              onClick={() => handleCTAClick(slides[idx].ctaLink)}
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full text-lg shadow-lg transition"
            >
              {slides[idx].cta}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-blue-900 rounded-full p-2 shadow-lg z-10"
        aria-label="Sebelumnya"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-blue-900 rounded-full p-2 shadow-lg z-10"
        aria-label="Selanjutnya"
      >
        <ChevronRight size={28} />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full border-2 ${
              i === idx
                ? "bg-green-500 border-green-500"
                : "bg-white/70 border-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
