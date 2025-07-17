import React from "react";
import { Link } from "react-router-dom";

const featuredNews = [
  {
    title: "Indeks Mobil Buatan Indonesia 2025: Mobil Lokal Paling Populer",
    summary:
      "Indeks Mobilindo kembali merangking mobil-mobil yang dirakit di Indonesia untuk tahun 2025. Toyota Avanza dan Honda Brio tetap jadi primadona.",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
    author: "Andi Pratama",
    date: "17 Juli 2025",
    slug: "indeks-mobil-buatan-indonesia-2025",
  },
  {
    title: "Pilihan Hybrid Terbaik 2025 untuk Keluarga Indonesia",
    summary:
      "Beragam pilihan mobil hybrid kini hadir di Indonesia. Simak rekomendasi terbaik tahun ini.",
    img: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80",
    author: "Siti Rahmawati",
    date: "15 Juli 2025",
    slug: "pilihan-hybrid-terbaik-2025-untuk-keluarga-indonesia",
  },
  {
    title: "SUV Kompak Paling Laris 2025",
    summary:
      "SUV kompak semakin diminati. Berikut daftar SUV terlaris dan review singkatnya.",
    img: "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=400&q=80",
    author: "Budi Santoso",
    date: "14 Juli 2025",
    slug: "suv-kompak-paling-laris-2025",
  },
];

const latestNews = [
  {
    title: "Toyota Avanza 2025 Resmi Meluncur, Fitur Semakin Lengkap",
    summary:
      "Toyota Avanza generasi terbaru hadir dengan fitur keselamatan dan hiburan yang lebih canggih.",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    author: "Dewi Lestari",
    date: "13 Juli 2025",
    slug: "toyota-avanza-2025-resmi-meluncur-fitur-semakin-lengkap",
  },
  {
    title: "Promo Kredit Mobil Juli 2025, DP Mulai 10 Juta",
    summary:
      "Berbagai promo kredit menarik untuk pembelian mobil baru dan bekas di bulan Juli.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    author: "Rizky Saputra",
    date: "12 Juli 2025",
    slug: "promo-kredit-mobil-juli-2025-dp-mulai-10-juta",
  },
  {
    title: "Review Honda BR-V 2025: MPV Rasa SUV",
    summary:
      "Honda BR-V terbaru menawarkan kenyamanan MPV dengan tampilan gagah ala SUV.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80",
    author: "Fajar Nugroho",
    date: "11 Juli 2025",
    slug: "review-honda-br-v-2025-mpv-rasa-suv",
  },
];

const reviews = [
  {
    title: "Review Suzuki Ertiga Hybrid: Irit & Nyaman",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    author: "Dian Pratama",
    date: "10 Juli 2025",
    slug: "review-suzuki-ertiga-hybrid-irit-nyaman",
  },
  {
    title: "Tips Membeli Mobil Bekas Berkualitas",
    img: "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=400&q=80",
    author: "Rina Sari",
    date: "9 Juli 2025",
    slug: "tips-membeli-mobil-bekas-berkualitas",
  },
  {
    title: "Perbandingan Xpander vs Avanza vs Ertiga",
    img: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80",
    author: "Budi Santoso",
    date: "8 Juli 2025",
    slug: "perbandingan-xpander-vs-avanza-vs-ertiga",
  },
  {
    title: "Cara Jual Mobil Online Aman & Cepat",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80",
    author: "Andi Pratama",
    date: "7 Juli 2025",
    slug: "cara-jual-mobil-online-aman-cepat",
  },
];

const News: React.FC = () => (
  <div className="max-w-7xl mx-auto py-10 px-4">
    {/* Featured News */}
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Berita Unggulan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={featuredNews[0].img}
            alt={featuredNews[0].title}
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8 flex flex-col justify-end">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow">
              {featuredNews[0].title}
            </h3>
            <p className="text-white mb-4 max-w-xl drop-shadow">
              {featuredNews[0].summary}
            </p>
            <div className="text-sm text-gray-200 mb-2">
              {featuredNews[0].author} | {featuredNews[0].date}
            </div>
            <Link
              to={`/news/${featuredNews[0].slug}`}
              className="bg-white text-black px-6 py-2 rounded-full font-semibold w-max"
            >
              Baca Selengkapnya
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {featuredNews.slice(1).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-4 flex gap-4 items-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-20 object-cover rounded-lg"
              />
              <div>
                <div className="font-bold mb-1">{item.title}</div>
                <div className="text-gray-500 text-sm mb-1">
                  {item.author} | {item.date}
                </div>
                <Link
                  to={`/news/${item.slug}`}
                  className="text-blue-600 font-semibold text-sm"
                >
                  Baca
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Latest News */}
    <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-6">Berita Terbaru</h2>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <img
            src={latestNews[0].img}
            alt={latestNews[0].title}
            className="w-full h-72 object-cover"
          />
          <div className="p-6">
            <div className="text-blue-600 font-bold mb-2">News</div>
            <h3 className="text-xl font-bold mb-2">{latestNews[0].title}</h3>
            <p className="text-gray-700 mb-2">{latestNews[0].summary}</p>
            <div className="text-sm text-gray-500">
              {latestNews[0].author} | {latestNews[0].date}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latestNews.slice(1).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-4 flex gap-4 items-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-20 object-cover rounded-lg"
              />
              <div>
                <div className="font-bold mb-1">{item.title}</div>
                <div className="text-gray-500 text-sm mb-1">
                  {item.author} | {item.date}
                </div>
                <Link
                  to={`/news/${item.slug}`}
                  className="text-blue-600 font-semibold text-sm"
                >
                  Baca
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Review & Tips Terbaru</h3>
        <div className="flex flex-col gap-4">
          {reviews.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-4 flex gap-4 items-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-16 object-cover rounded-lg"
              />
              <div>
                <div className="font-bold mb-1">{item.title}</div>
                <div className="text-gray-500 text-sm mb-1">
                  {item.author} | {item.date}
                </div>
                <Link
                  to={`/news/${item.slug}`}
                  className="text-blue-600 font-semibold text-sm"
                >
                  Baca
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Review & Tips Grid */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Review & Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {reviews.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <div className="font-bold mb-1 text-center">{item.title}</div>
            <div className="text-gray-500 text-sm mb-1 text-center">
              {item.author} | {item.date}
            </div>
            <Link
              to={`/news/${item.slug}`}
              className="text-blue-600 font-semibold text-sm"
            >
              Baca
            </Link>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default News;
