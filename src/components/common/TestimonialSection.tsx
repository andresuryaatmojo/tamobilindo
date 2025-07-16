import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Andi Pratama",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    car: "Toyota Avanza 2020",
    review: "Pelayanan sangat ramah, proses cepat, mobil sesuai deskripsi. Sangat puas beli di Mobilindo!",
    rating: 5
  },
  {
    name: "Siti Rahmawati",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    car: "Honda Brio 2019",
    review: "Harga bersaing, banyak pilihan mobil, dan simulasi kreditnya sangat membantu!",
    rating: 4
  },
  {
    name: "Budi Santoso",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    car: "Daihatsu Xenia 2018",
    review: "Situsnya mudah digunakan, respon admin cepat, mobil langsung bisa dibawa pulang.",
    rating: 5
  }
];

const stats = [
  { label: "Mobil Terjual", value: "2.500+" },
  { label: "Pelanggan Puas", value: "1.900+" },
  { label: "Dealer Terdaftar", value: "120+" },
];

const TestimonialSection: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setTimeout(next, 6000);
    return () => clearTimeout(timer);
  }, [idx]);

  return (
    <section className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary font-sans">Apa Kata Pelanggan?</h2>
      <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <img src={testimonials[idx].photo} alt={testimonials[idx].name} className="w-20 h-20 rounded-full object-cover border-4 border-accent mb-4" />
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className={i < testimonials[idx].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
              ))}
            </div>
            <p className="text-lg font-medium mb-2">"{testimonials[idx].review}"</p>
            <div className="text-primary font-bold">{testimonials[idx].name}</div>
            <div className="text-muted text-sm">Pembeli {testimonials[idx].car}</div>
          </motion.div>
        </AnimatePresence>
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-secondary/80 hover:bg-secondary text-primary rounded-full p-2 shadow z-10" aria-label="Sebelumnya"><ChevronLeft size={22} /></button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary/80 hover:bg-secondary text-primary rounded-full p-2 shadow z-10" aria-label="Selanjutnya"><ChevronRight size={22} /></button>
      </div>
      <div className="flex justify-center gap-8 mt-10">
        {stats.map(stat => (
          <div key={stat.label} className="flex flex-col items-center">
            <div className="text-2xl font-bold text-primary">{stat.value}</div>
            <div className="text-muted text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection; 