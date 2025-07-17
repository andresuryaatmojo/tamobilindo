import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "Tips Membeli Mobil Bekas Berkualitas",
    summary:
      "Panduan lengkap memilih mobil bekas yang aman, nyaman, dan sesuai kebutuhan.",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=400&q=80",
    date: "10 Mei 2024",
    link: "/blog/tips-mobil-bekas",
  },
  {
    title: "Cara Simulasi Kredit Mobil dengan Mudah",
    summary:
      "Langkah-langkah praktis menghitung cicilan mobil impian Anda secara transparan.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    date: "2 Mei 2024",
    link: "/blog/simulasi-kredit",
  },
  {
    title: "Perawatan Mobil Agar Tetap Prima",
    summary:
      "Tips perawatan rutin agar mobil bekas Anda tetap awet dan performa maksimal.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    date: "25 April 2024",
    link: "/blog/perawatan-mobil",
  },
];

const BlogSection: React.FC = () => {
  const navigate = useNavigate();

  const handleBlogClick = (link: string) => {
    // Ambil slug dari link (setelah /blog/ atau /news/)
    const slug = link.split("/").pop();
    navigate(`/news/${slug}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-4 font-sans">
          Artikel & Tips Otomotif
        </h2>
        <p className="text-center text-muted mb-10">
          Dapatkan informasi, tips, dan inspirasi seputar dunia otomotif.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow p-6 flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <span className="text-xs text-gray-400 mb-2">{blog.date}</span>
              <h3 className="text-lg font-bold text-primary mb-2">
                {blog.title}
              </h3>
              <p className="text-muted text-sm mb-4 flex-1">{blog.summary}</p>
              <button
                onClick={() => handleBlogClick(blog.link)}
                className="inline-block bg-primary text-white px-5 py-2 rounded-full font-semibold text-sm shadow hover:bg-secondary transition self-start"
              >
                Baca Selengkapnya
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
