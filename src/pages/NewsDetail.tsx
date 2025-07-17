import React from "react";
import { useParams, Link } from "react-router-dom";

// Dummy data (bisa diimpor dari News.tsx jika perlu)
const allArticles = [
  // Featured News
  {
    slug: "indeks-mobil-buatan-indonesia-2025",
    title: "Indeks Mobil Buatan Indonesia 2025: Mobil Lokal Paling Populer",
    summary:
      "Indeks Mobilindo kembali merangking mobil-mobil yang dirakit di Indonesia untuk tahun 2025. Toyota Avanza dan Honda Brio tetap jadi primadona.",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
    author: "Andi Pratama",
    date: "17 Juli 2025",
    content:
      "<p>Ini adalah konten dummy untuk artikel Indeks Mobil Buatan Indonesia 2025...</p>",
  },
  {
    slug: "pilihan-hybrid-terbaik-2025",
    title: "Pilihan Hybrid Terbaik 2025 untuk Keluarga Indonesia",
    summary:
      "Beragam pilihan mobil hybrid kini hadir di Indonesia. Simak rekomendasi terbaik tahun ini.",
    img: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80",
    author: "Siti Rahmawati",
    date: "15 Juli 2025",
    content:
      "<p>Ini adalah konten dummy untuk artikel Pilihan Hybrid Terbaik 2025...</p>",
  },
  // ...tambahkan artikel lain dari News.tsx dan BlogSection jika perlu
];

const NewsDetail: React.FC = () => {
  const { slug } = useParams();
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-2xl mx-auto py-20 text-center text-red-500 font-bold text-xl">
        Artikel tidak ditemukan.
        <div className="mt-4">
          <Link to="/news" className="text-blue-600 hover:underline">
            Kembali ke News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <nav className="mb-4 text-sm text-gray-500 flex gap-2 items-center">
        <Link to="/">Beranda</Link>
        <span>/</span>
        <Link to="/news">News & Review</Link>
        <span>/</span>
        <span className="text-gray-700 font-semibold">{article.title}</span>
      </nav>
      <img
        src={article.img}
        alt={article.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <div className="text-gray-500 mb-4 text-sm">
        {article.author} | {article.date}
      </div>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content || article.summary }}
      />
    </div>
  );
};

export default NewsDetail;
