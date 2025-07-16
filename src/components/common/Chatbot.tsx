import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X, Loader2 } from "lucide-react";

// Dummy data mobil
const cars = [
  {
    name: "Toyota Avanza 2018",
    price: 155000000,
    year: 2018,
    location: "Jakarta",
    badge: "featured",
  },
  {
    name: "Honda Brio 2020",
    price: 175000000,
    year: 2020,
    location: "Bandung",
    badge: "featured",
  },
  {
    name: "Daihatsu Xenia 2019",
    price: 145000000,
    year: 2019,
    location: "Surabaya",
    badge: "featured",
  },
];

function formatRupiah(value: number) {
  return "Rp " + value.toLocaleString("id-ID");
}

// FAQ sederhana
const faqs: Record<string, string> = {
  "apa itu dp":
    "DP (Down Payment) adalah uang muka yang dibayarkan di awal saat membeli mobil secara kredit.",
  "apa itu tenor":
    "Tenor adalah jangka waktu cicilan kredit yang dipilih, biasanya dalam bulan.",
  "apa itu kredit mobil":
    "Kredit mobil adalah fasilitas pembiayaan untuk membeli mobil dengan cara mencicil.",
};

function detectIntent(text: string) {
  const t = text.toLowerCase();
  if (t.includes("cari") || t.includes("mobil")) return "search_car";
  if (t.includes("simulasi") || t.includes("cicilan") || t.includes("kredit"))
    return "simulasi_kredit";
  if (t.includes("harga")) return "tanya_harga";
  if (
    t.startsWith("apa itu") ||
    t.includes("faq") ||
    t.includes("dp") ||
    t.includes("tenor")
  )
    return "faq";
  return "default";
}

function handleBotReply(userMsg: string): string {
  const intent = detectIntent(userMsg);
  if (intent === "search_car") {
    // Cari mobil berdasarkan kata kunci
    const found = cars.find((car) =>
      userMsg.toLowerCase().includes(car.name.toLowerCase().split(" ")[1])
    );
    if (found) {
      return `Mobil ditemukan: ${found.name}, harga ${formatRupiah(
        found.price
      )}, lokasi ${found.location}.`;
    }
    return "Mobil yang Anda cari belum tersedia di database kami.";
  }
  if (intent === "tanya_harga") {
    const found = cars.find((car) =>
      userMsg.toLowerCase().includes(car.name.toLowerCase().split(" ")[1])
    );
    if (found) {
      return `Harga ${found.name}: ${formatRupiah(found.price)}.`;
    }
    return "Mohon sebutkan merk/model mobil yang ingin ditanyakan harganya.";
  }
  if (intent === "simulasi_kredit") {
    // Ekstrak angka dari pesan user
    const angka = userMsg.match(/\d+/g);
    let harga = 200000000,
      dpPct = 20,
      tenor = 36,
      bunga = 5;
    if (angka) {
      if (angka.length >= 1) harga = parseInt(angka[0] + "000000");
      if (angka.length >= 2) dpPct = parseInt(angka[1]);
      if (angka.length >= 3) tenor = parseInt(angka[2]);
    }
    const dp = Math.round((dpPct / 100) * harga);
    const sisaKredit = harga - dp;
    const totalBunga = sisaKredit * (bunga / 100) * (tenor / 12);
    const totalBayar = sisaKredit + totalBunga;
    const cicilanBulanan = tenor > 0 ? Math.round(totalBayar / tenor) : 0;
    return `Simulasi kredit:\nHarga: ${formatRupiah(
      harga
    )}\nDP: ${dpPct}% (${formatRupiah(
      dp
    )})\nTenor: ${tenor} bulan\nBunga: ${bunga}%/tahun\nCicilan: ${formatRupiah(
      cicilanBulanan
    )}/bulan.`;
  }
  if (intent === "faq") {
    for (const key in faqs) {
      if (userMsg.toLowerCase().includes(key)) return faqs[key];
    }
    return "Silakan tanyakan seputar DP, tenor, atau kredit mobil.";
  }
  return "Maaf, saya belum mengerti pertanyaan Anda. Silakan tanyakan seputar mobil, harga, simulasi kredit, atau FAQ.";
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: handleBotReply(input) },
      ]);
      setTyping(false);
    }, 900);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ y: { duration: 2, repeat: Infinity } }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg z-50"
        onClick={() => setOpen((o) => !o)}
        aria-label="Buka Chatbot"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 font-bold text-center">
            AI Chatbot
          </div>
          <div
            ref={chatRef}
            className="flex-1 p-4 space-y-2 overflow-y-auto max-h-72 text-sm bg-gray-50"
          >
            {messages.length === 0 && !typing && (
              <div className="text-gray-400 text-center">
                Tanyakan apapun tentang mobil atau kredit!
              </div>
            )}
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.from === "user" ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <span
                  className={
                    msg.from === "user"
                      ? "inline-block bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-2xl px-4 py-2 mb-1 shadow"
                      : "inline-block bg-white text-gray-800 rounded-2xl px-4 py-2 mb-1 shadow border border-gray-200"
                  }
                >
                  {msg.text}
                </span>
              </motion.div>
            ))}
            {typing && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex justify-start"
              >
                <span className="inline-flex items-center gap-2 bg-white text-gray-500 rounded-2xl px-4 py-2 mb-1 shadow border border-gray-200">
                  <Loader2 className="animate-spin" size={16} />
                  Bot sedang mengetik...
                </span>
              </motion.div>
            )}
          </div>
          <form
            onSubmit={handleSend}
            className="flex border-t border-gray-200 bg-white"
          >
            <input
              type="text"
              className="flex-1 px-3 py-2 outline-none bg-transparent"
              placeholder="Ketik pesan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus={open}
            />
            <button type="submit" className="px-4 text-pink-500 font-bold">
              Kirim
            </button>
          </form>
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
