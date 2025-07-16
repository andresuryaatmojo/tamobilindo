import React, { useState } from "react";

type BotMessage = {
  type: "bot" | "user";
  content: string;
  options?: string[];
};

const initialBotMessage: BotMessage = {
  type: "bot",
  content: "👋 Halo! Saya AI Assistant Mobilindo. Saya bisa membantu Anda:",
  options: [
    "🔍 Cari mobil sesuai kebutuhan",
    "💰 Bandingkan harga dengan platform lain",
    "📊 Simulasi kredit dan pembiayaan",
    "📋 Info spesifikasi detail mobil",
    "❓ Bantuan umum & FAQ",
  ],
};

const mockAnalyzeIntent = async (msg: string) => {
  if (msg.includes("cari") || msg.includes("rekomendasi"))
    return {
      category: "car_search",
      parameters: { budget: "200jt", bodyType: "SUV" },
    };
  if (msg.includes("banding") || msg.includes("harga"))
    return { category: "price_comparison", carModel: "Avanza" };
  if (msg.includes("kredit") || msg.includes("cicilan"))
    return {
      category: "credit_simulation",
      financialData: { price: 200000000, dp: 40000000, tenor: 48 },
    };
  if (msg.includes("spesifikasi") || msg.includes("fitur"))
    return { category: "specification_inquiry", carId: "avanza-2020" };
  return { category: "general" };
};

const ChatbotService: React.FC = () => {
  const [messages, setMessages] = useState<BotMessage[]>([initialBotMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUserInput = async (userMessage: string) => {
    setMessages((msgs) => [...msgs, { type: "user", content: userMessage }]);
    setLoading(true);
    const intent = await mockAnalyzeIntent(userMessage.toLowerCase());
    let botMsg: BotMessage;
    switch (intent.category) {
      case "car_search":
        if (intent.parameters) {
          botMsg = {
            type: "bot",
            content: `Berikut rekomendasi mobil sesuai kebutuhan Anda (budget: ${intent.parameters.budget}, tipe: ${intent.parameters.bodyType}):\n- Toyota Rush 2021 (Rp 210jt)\n- Daihatsu Terios 2020 (Rp 195jt)\n- Honda BR-V 2019 (Rp 220jt)`,
          };
        } else {
          botMsg = {
            type: "bot",
            content: "Mohon masukkan kriteria pencarian mobil Anda.",
          };
        }
        break;
      case "price_comparison":
        botMsg = {
          type: "bot",
          content: `Perbandingan harga ${intent.carModel}:\n- Mobilindo: Rp 210jt\n- OLX: Rp 215jt\n- Carmudi: Rp 212jt\n- Mobil123: Rp 213jt`,
        };
        break;
      case "credit_simulation":
        if (intent.financialData) {
          botMsg = {
            type: "bot",
            content: `Simulasi kredit untuk harga Rp ${intent.financialData.price.toLocaleString()}:\nDP: Rp ${intent.financialData.dp.toLocaleString()}\nTenor: ${
              intent.financialData.tenor
            } bulan\nCicilan: Rp 4.200.000/bln (estimasi)`,
          };
        } else {
          botMsg = {
            type: "bot",
            content: "Mohon masukkan data kredit yang lengkap.",
          };
        }
        break;
      case "specification_inquiry":
        botMsg = {
          type: "bot",
          content: `Spesifikasi Toyota Avanza 2020:\n- Mesin: 1.3L, 4 silinder\n- Transmisi: Manual/AT\n- Fitur: ABS, Airbag, AC Double Blower, dll.`,
        };
        break;
      default:
        botMsg = {
          type: "bot",
          content:
            "Silakan pilih menu atau ketik pertanyaan Anda. Saya siap membantu!",
        };
    }
    setTimeout(() => {
      setMessages((msgs) => [...msgs, botMsg]);
      setLoading(false);
    }, 1000);
  };

  const handleOptionClick = (option: string) => {
    setInput(option);
    handleUserInput(option);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleUserInput(input);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 w-96 max-w-full bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 font-sans">
      <div className="bg-primary text-white px-4 py-3 font-bold">
        AI Chatbot Mobilindo
      </div>
      <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-96 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.type === "user" ? "text-right" : "text-left"}
          >
            <div
              className={
                msg.type === "user"
                  ? "inline-block bg-accent text-primary rounded-xl px-3 py-2 mb-1"
                  : "inline-block bg-gray-100 text-gray-700 rounded-xl px-3 py-2 mb-1"
              }
            >
              {msg.content.split("\n").map((line: string, idx: number) => (
                <div key={idx}>{line}</div>
              ))}
            </div>
            {msg.options && (
              <div className="flex flex-wrap gap-2 mt-2">
                {msg.options.map((opt: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(opt)}
                    className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-semibold hover:bg-accent/80 transition"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="text-muted text-center">AI sedang mengetik...</div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex border-t border-gray-200">
        <input
          type="text"
          className="flex-1 px-3 py-2 outline-none"
          placeholder="Ketik pesan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="px-4 text-primary font-bold">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default ChatbotService;
