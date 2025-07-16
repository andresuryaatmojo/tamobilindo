import React, { useState } from "react";
import {
  Menu,
  Search,
  User,
  Heart,
  Repeat,
  Home,
  MessageSquare,
  MapPin,
} from "lucide-react";
import { Car } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Katalog", href: "/catalog" },
  { name: "Simulasi Kredit", href: "/simulasi-kredit" },
  { name: "News & Review", href: "/news" },
  { name: "Jual Mobil", href: "/sell" },
];

const accountMenu = [
  {
    icon: <Heart size={20} className="text-pink-500" />,
    label: "Mobil Tersimpan",
  },
  {
    icon: <Search size={20} className="text-blue-500" />,
    label: "Pencarian Tersimpan",
  },
  {
    icon: <Repeat size={20} className="text-yellow-500" />,
    label: "Perbandingan Tersimpan",
  },
  {
    icon: <Home size={20} className="text-green-500" />,
    label: "Garasi Anda",
    badge: "BARU",
  },
  {
    icon: <MessageSquare size={20} className="text-purple-500" />,
    label: "Pesan",
  },
];

const lokasiList = [
  "Jakarta Selatan",
  "Jakarta Barat",
  "Jakarta Timur",
  "Jakarta Utara",
  "Jakarta Pusat",
  "Depok",
  "Tangerang",
  "Bekasi",
  "Bandung",
  "Surabaya",
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [lokasi, setLokasi] = useState(lokasiList[0]);
  const navigate = useNavigate?.() || (() => {});
  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50 font-sans border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-blue-700 hover:opacity-80 transition"
        >
          <Car size={28} className="text-blue-600" />
          <span className="tracking-wide">Mobilindo</span>
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition text-base px-2"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* User Icon */}
          <button
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition text-base"
            onClick={() => setShowAccount(true)}
            aria-label="Akun"
          >
            <span>Masuk</span>
            <User size={22} />
          </button>
          {/* Filter Lokasi */}
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <select
              className="border-none bg-transparent font-medium text-base focus:outline-none"
              value={lokasi}
              onChange={(e) => setLokasi(e.target.value)}
            >
              {lokasiList.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          {/* Hamburger with notification */}
          <button
            className="relative p-2 rounded-full hover:bg-gray-100 transition"
            onClick={() => setShowAccount(true)}
            aria-label="Menu Akun"
          >
            <Menu size={24} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-white"></span>
          </button>
        </div>
      </div>
      {/* Sidebar/Modal Account Menu */}
      {showAccount && (
        <div
          className="fixed inset-0 z-[999] flex justify-end bg-black/30"
          onClick={() => setShowAccount(false)}
        >
          <div
            className="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col animate-slide-in-right relative rounded-l-3xl"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-800"
              onClick={() => setShowAccount(false)}
              aria-label="Tutup"
            >
              ×
            </button>
            <div className="p-8 pb-4 border-b border-gray-100">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Masuk</h2>
              <p className="text-gray-600 mb-6 text-sm">
                Simpan mobil & pencarian favorit, dapatkan notifikasi harga
                turun, tambahkan mobil ke Garasi Anda, dan banyak lagi.
              </p>
              <button
                className="w-full border-2 border-gray-900 rounded-full py-2 font-semibold mb-3 hover:bg-gray-50 transition text-lg"
                onClick={() => {
                  setShowAccount(false);
                  navigate("/login");
                }}
              >
                Masuk
              </button>
              <button
                className="w-full bg-gray-900 text-white rounded-full py-2 font-semibold mb-3 hover:bg-gray-800 transition text-lg"
                onClick={() => {
                  setShowAccount(false);
                  navigate("/register");
                }}
              >
                Buat Akun
              </button>
            </div>
            <div className="flex-1 p-8 pt-4 overflow-y-auto">
              <ul className="space-y-4">
                {accountMenu.map((item, idx) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-gray-800 text-base"
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-purple-500 text-white rounded-full font-bold tracking-wide">
                        {item.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm animate-fade-in-down">
          <div className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition text-base py-2"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/login"
              className="px-5 py-2 rounded-lg font-semibold text-blue-600 border border-blue-600 hover:bg-blue-50 transition mb-2"
              onClick={() => setOpen(false)}
            >
              Masuk
            </a>
            <a
              href="/register"
              className="px-5 py-2 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow"
              onClick={() => setOpen(false)}
            >
              Daftar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
