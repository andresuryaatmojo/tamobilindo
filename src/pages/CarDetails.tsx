import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { cars } from "../data/cars";
import { Heart, Share2 } from "lucide-react";
import MarketComparison from "../components/common/MarketComparison";
import CarSpecs from "../components/common/CarSpecs";
import ConsumerReviews from "../components/common/ConsumerReviews";
import SimilarCars from "../components/common/SimilarCars";
import BookingModal, {
  BookingFormData,
} from "../components/common/BookingModal";

const CarDetails: React.FC = () => {
  const { id } = useParams();
  const car = useMemo(
    () => cars.find((c) => String(c.id) === String(id)),
    [id]
  );
  const merk = car?.name.split(" ")[0] || "";
  const [mainImgIdx, setMainImgIdx] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    subjek: "Cek ketersediaan",
    komentar: "",
  });
  const [selectedSales, setSelectedSales] = useState(0);
  const [formMsg, setFormMsg] = useState("");
  const [showBooking, setShowBooking] = useState(false);
  const [bookingMsg, setBookingMsg] = useState("");

  // Dummy salespeople
  const salespeople = [
    {
      nama: "Sondra Byrum",
      jabatan: "Resepsionis",
      rating: 4.9,
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
      review: 8,
    },
    {
      nama: "Robert Webb",
      jabatan: "Sales Associate",
      rating: 4.7,
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      review: 12,
    },
  ];

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormMsg("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.");
    setTimeout(() => setFormMsg(""), 3000);
  };

  if (!car) {
    return (
      <div className="text-center py-20 text-red-500 font-bold text-xl">
        Mobil tidak ditemukan.
      </div>
    );
  }
  // Estimasi cicilan sederhana (dummy) - setelah car pasti ada
  const estimasiCicilan = Math.round(car.price / 60 / 1000) * 1000;

  const getImgPath = (img: string) => `/foto-mobil/${merk}/${img}`;
  const images = car.images || [];

  // Navigasi galeri di modal
  const nextImg = () => setMainImgIdx((idx) => (idx + 1) % images.length);
  const prevImg = () =>
    setMainImgIdx((idx) => (idx - 1 + images.length) % images.length);

  return (
    <section className="max-w-6xl mx-auto py-8 px-4">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-gray-500 flex gap-2 items-center">
        <Link to="/">Beranda</Link>
        <span>/</span>
        <Link to="/catalog">Katalog Mobil</Link>
        <span>/</span>
        <span className="text-gray-700 font-semibold">{car.name}</span>
      </nav>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Gallery */}
        <div className="flex-1">
          <div
            className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center mb-4 overflow-hidden cursor-zoom-in"
            onClick={() => setShowModal(true)}
            title="Klik untuk perbesar"
          >
            {images.length > 0 ? (
              <img
                src={getImgPath(images[mainImgIdx])}
                alt={car.name}
                className="object-contain h-full w-full transition-transform duration-200 hover:scale-105"
                loading="lazy"
              />
            ) : (
              <span className="text-7xl">🚗</span>
            )}
          </div>
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {images.map((img, i) => (
              <img
                key={i}
                src={getImgPath(img)}
                alt={car.name + " " + (i + 1)}
                className={`w-20 h-16 object-cover rounded-lg border cursor-pointer ${
                  mainImgIdx === i
                    ? "ring-2 ring-purple-500"
                    : "border-gray-200"
                }`}
                loading="lazy"
                onClick={() => setMainImgIdx(i)}
              />
            ))}
          </div>
        </div>
        {/* Info Panel & Sidebar */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Info Panel */}
          <div className="bg-white rounded-2xl shadow p-6 mb-4">
            <h2 className="text-3xl font-bold text-blue-700 mb-2">
              {car.name}
            </h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-green-600 font-bold text-2xl">
                Rp {car.price.toLocaleString("id-ID")}
              </span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold ml-2">
                Good Deal
              </span>
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold ml-2">
                American-Made Index
              </span>
            </div>
            <div className="text-gray-500 mb-2">
              Estimasi cicilan:{" "}
              <b>Rp {estimasiCicilan.toLocaleString("id-ID")}/bln</b>
            </div>
            <ul className="mb-4 text-gray-700">
              <li>
                <b>Mesin:</b> {car.specs.engine}
              </li>
              <li>
                <b>Transmisi:</b> {car.specs.transmission}
              </li>
              <li>
                <b>Bahan Bakar:</b> {car.specs.fuel}
              </li>
            </ul>
            <div className="flex gap-4 mb-2">
              <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100 transition">
                <Heart size={20} /> Simpan
              </button>
              <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition">
                <Share2 size={20} /> Bagikan
              </button>
              <button
                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition"
                onClick={() => setShowBooking(true)}
                type="button"
              >
                Buat Janji / Test Drive
              </button>
            </div>
          </div>
          {/* Sidebar Next Steps */}
          <aside className="bg-gray-50 rounded-2xl shadow p-6 md:sticky md:top-24 flex flex-col gap-4">
            <div className="mb-2">
              <button className="w-full bg-black text-white rounded-lg py-3 font-bold text-lg mb-2 hover:bg-gray-800 transition">
                Dapatkan Penawaran Instan untuk Trade-in
              </button>
              <a href="/" className="text-blue-600 text-sm hover:underline">
                Pelajari lebih lanjut
              </a>
            </div>
            <div className="mb-2">
              <div className="font-bold mb-1">Kontak Penjual</div>
              <div className="text-lg font-semibold mb-1">(021) 1234-5678</div>
            </div>
            <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="nama"
                placeholder="Nama Lengkap"
                className="border rounded px-3 py-2"
                value={form.nama}
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border rounded px-3 py-2"
                value={form.email}
                onChange={handleFormChange}
                required
              />
              <input
                type="tel"
                name="telepon"
                placeholder="Telepon (opsional)"
                className="border rounded px-3 py-2"
                value={form.telepon}
                onChange={handleFormChange}
              />
              <select
                name="subjek"
                className="border rounded px-3 py-2"
                value={form.subjek}
                onChange={handleFormChange}
              >
                <option>Cek ketersediaan</option>
                <option>Tanya harga</option>
                <option>Test drive</option>
                <option>Lainnya</option>
              </select>
              <textarea
                name="komentar"
                placeholder="Komentar"
                className="border rounded px-3 py-2"
                value={form.komentar}
                onChange={handleFormChange}
              />
              <div className="font-semibold mt-2 mb-1">Pilih Sales</div>
              <div className="flex gap-2 mb-2">
                {salespeople.map((s, idx) => (
                  <button
                    type="button"
                    key={s.nama}
                    onClick={() => setSelectedSales(idx)}
                    className={`flex flex-col items-center px-2 py-1 rounded-lg border ${
                      selectedSales === idx
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={s.foto}
                      alt={s.nama}
                      className="w-10 h-10 rounded-full mb-1"
                    />
                    <span className="text-xs font-bold">
                      {s.nama.split(" ")[0]}
                    </span>
                    <span className="text-[10px] text-gray-500">
                      {s.jabatan}
                    </span>
                    <span className="text-yellow-500 text-xs">
                      ★ {s.rating}
                    </span>
                  </button>
                ))}
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white rounded-lg py-2 font-bold text-lg hover:bg-purple-700 transition"
              >
                Cek Ketersediaan
              </button>
              {formMsg && (
                <div className="text-green-600 text-sm mt-2">{formMsg}</div>
              )}
            </form>
          </aside>
        </div>
      </div>
      {/* Modal Fullscreen Gallery */}
      {showModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
          onClick={() => setShowModal(false)}
        >
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              prevImg();
            }}
          >
            &lt;
          </button>
          <img
            src={getImgPath(images[mainImgIdx])}
            alt={car.name}
            className="max-h-[80vh] max-w-[90vw] object-contain shadow-2xl rounded-xl border-4 border-white"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              nextImg();
            }}
          >
            &gt;
          </button>
        </div>
      )}
      <MarketComparison carPrice={car.price} />
      {/* Spesifikasi dan Fitur */}
      <CarSpecs
        basics={[
          { label: "Tahun", value: car.year?.toString() || "-" },
          { label: "Warna", value: "Putih" },
          { label: "Mesin", value: car.specs?.engine || "-" },
          { label: "Transmisi", value: car.specs?.transmission || "-" },
          { label: "Bahan Bakar", value: car.specs?.fuel || "-" },
          { label: "Kapasitas", value: "7 Penumpang" },
          { label: "Odometer", value: "45.000 km" },
        ]}
        features={[
          {
            category: "Kenyamanan",
            items: [
              "AC Dual Zone",
              "Power Steering",
              "Keyless Entry",
              "Power Window",
            ],
          },
          {
            category: "Keamanan",
            items: ["ABS", "Airbag Ganda", "Alarm", "Immobilizer"],
          },
          {
            category: "Hiburan",
            items: ["Bluetooth", "USB Port", "Radio FM", "Speaker 4"],
          },
        ]}
      />
      <ConsumerReviews />
      <SimilarCars currentCarId={car.id} merk={merk} />
      <BookingModal
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
        onSubmit={(data: BookingFormData) => {
          setBookingMsg("Permintaan booking berhasil dikirim!");
          setTimeout(() => setBookingMsg(""), 3000);
        }}
      />
      {bookingMsg && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-[9999] font-bold animate-fade-in">
          {bookingMsg}
        </div>
      )}
    </section>
  );
};

export default CarDetails;
