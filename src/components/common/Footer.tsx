import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const featuredCars = [
  { name: "Toyota Avanza", price: "Rp 150jt", img: "/toyota.png" },
  { name: "Honda Brio", price: "Rp 120jt", img: "/honda.png" },
  { name: "Daihatsu Xenia", price: "Rp 110jt", img: "/daihatsu.png" },
];

const Footer: React.FC = () => (
  <footer className="bg-primary text-white pt-12 pb-6 mt-16 font-sans">
    {/* CTA Section */}
    <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
      <div>
        <h3 className="text-2xl font-bold mb-2">
          Ingin Jual Mobil Lebih Cepat?
        </h3>
        <p className="text-secondary mb-4">
          Pasang iklan gratis, jangkau ribuan pembeli potensial!
        </p>
        <a
          href="/sell"
          className="bg-accent text-primary font-bold px-8 py-3 rounded-full shadow hover:bg-accent/80 transition"
        >
          Pasang Iklan Sekarang
        </a>
      </div>
      <form className="flex flex-col md:flex-row items-center gap-2">
        <input
          type="email"
          placeholder="Email untuk promo & info mobil baru"
          className="px-4 py-2 rounded-lg text-primary outline-none"
        />
        <button
          type="submit"
          className="bg-secondary text-primary font-bold px-6 py-2 rounded-lg hover:bg-accent transition"
        >
          Langganan
        </button>
      </form>
    </div>
    <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-secondary/30 pt-10">
      {/* Company Info */}
      <div>
        <h4 className="font-bold mb-2">Mobilindo</h4>
        <p className="text-secondary text-sm mb-4">
          Marketplace mobil bekas & baru terpercaya di Indonesia.
        </p>
        <div className="flex gap-3 mb-2">
          <a href="/" aria-label="Facebook" className="hover:text-accent">
            <Facebook size={20} />
          </a>
          <a href="/" aria-label="Instagram" className="hover:text-accent">
            <Instagram size={20} />
          </a>
          <a href="/" aria-label="Twitter" className="hover:text-accent">
            <Twitter size={20} />
          </a>
          <a
            href="mailto:info@mobilindo.co.id"
            aria-label="Email"
            className="hover:text-accent"
          >
            <Mail size={20} />
          </a>
        </div>
        <div className="text-xs text-muted">
          © {new Date().getFullYear()} Mobilindo. Seluruh hak cipta.
        </div>
      </div>
      {/* Business Hours */}
      <div>
        <h4 className="font-bold mb-2">Jam Operasional</h4>
        <ul className="text-secondary text-sm">
          <li>Senin - Jumat: 08.00 - 20.00</li>
          <li>Sabtu: 09.00 - 18.00</li>
          <li>Minggu & Libur: 10.00 - 16.00</li>
        </ul>
      </div>
      {/* Featured Cars */}
      <div>
        <h4 className="font-bold mb-2">Mobil Unggulan</h4>
        <ul className="text-secondary text-sm space-y-2">
          {featuredCars.map((car) => (
            <li key={car.name} className="flex items-center gap-2">
              <img
                src={car.img}
                alt={car.name}
                className="w-8 h-8 object-contain rounded"
              />
              <span>{car.name}</span>
              <span className="ml-auto bg-accent text-primary font-bold px-2 py-1 rounded-full text-xs">
                {car.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* Contact/Newsletter */}
      <div>
        <h4 className="font-bold mb-2">Kontak & Alamat</h4>
        <p className="text-secondary text-sm mb-2">
          Jl. Otista Raya No. 123, Jakarta
        </p>
        <p className="text-secondary text-sm mb-2">Telp: (021) 123-4567</p>
        <p className="text-secondary text-sm mb-2">
          Email: info@mobilindo.co.id
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
