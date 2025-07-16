import React, { useState } from "react";
import { Car, DollarSign, ClipboardList, CheckCircle } from "lucide-react";
import { Button } from "../components/common/Button";

const tips = {
  title: "Tips Menjual Mobil Online dengan Mudah",
  img: "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80",
  desc: "Panduan dan tips agar mobil Anda cepat laku dan proses transaksi aman di era digital.",
};

const Sell: React.FC = () => {
  const [tab, setTab] = useState<"instant" | "listing">("instant");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    merk: "",
    model: "",
    tahun: "",
    harga: "",
    kontak: "",
  });
  const [formEst, setFormEst] = useState({
    tipe: "plat",
    plat: "",
    vin: "",
    provinsi: "",
    opsi: "instan",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 3000);
  };

  return (
    <>
      {/* Section Jelajahi Opsi Anda */}
      <section className="bg-neutral-light py-10 px-2 md:px-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-text">Jelajahi Opsi Anda</h2>
          <p className="mb-8 text-text-light">
            Pilih cara terbaik untuk menjual mobil Anda, dapatkan estimasi harga
            instan atau pasang iklan gratis di Mobilindo.
          </p>
          {/* ... Steps ... */}
        </div>
      </section>

      {/* Section Tab Jual Mobil */}
      <section className="max-w-6xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-text">
            Jual Mobil dengan Cara Anda
          </h1>
          <p className="text-lg text-text-light mb-8">
            Dapatkan penawaran instan dari dealer terpercaya atau pasang iklan
            gratis untuk menjual mobil Anda sendiri di Mobilindo.
          </p>
          <div className="flex gap-4 mb-8 border-b">
            <Button variant="ghost" onClick={() => setTab("instant")} className={tab === 'instant' ? 'border-b-2 border-primary rounded-none' : ''}>Dapatkan Penawaran Instan</Button>
            <Button variant="ghost" onClick={() => setTab("listing")} className={tab === 'listing' ? 'border-b-2 border-primary rounded-none' : ''}>Pasang Iklan Gratis</Button>
          </div>
          {tab === "instant" ? (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-text">Dapatkan Penawaran Instan</h2>
              {/* ... content ... */}
              <Button variant="primary" size="lg">Dapatkan Penawaran Instan</Button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-text">Pasang Iklan Gratis</h2>
              {/* ... content ... */}
              {isSubmitted ? (
                <div className="bg-status-success/10 text-status-success border border-status-success/20 rounded-lg p-6 flex flex-col items-center text-center">
                  <CheckCircle className="w-16 h-16 mb-4" />
                  <h3 className="text-2xl font-bold">Iklan Terkirim!</h3>
                  <p className="mt-2">Tim kami akan segera meninjau iklan Anda. Terima kasih telah menggunakan Mobilindo.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="bg-neutral rounded-xl shadow p-6 flex flex-col gap-4 max-w-md">
                  <input type="text" placeholder="Merk Mobil" className="border rounded-lg px-4 py-2" value={form.merk} onChange={(e) => setForm({ ...form, merk: e.target.value })} />
                  <input type="text" placeholder="Model" className="border rounded-lg px-4 py-2" value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} />
                  <input type="number" placeholder="Tahun" className="border rounded-lg px-4 py-2" value={form.tahun} onChange={(e) => setForm({ ...form, tahun: e.target.value })} />
                  <input type="text" placeholder="Harga yang Diinginkan (Rp)" className="border rounded-lg px-4 py-2" value={form.harga} onChange={(e) => setForm({ ...form, harga: e.target.value })} />
                  <input type="text" placeholder="Kontak (No. HP/Email)" className="border rounded-lg px-4 py-2" value={form.kontak} onChange={(e) => setForm({ ...form, kontak: e.target.value })} />
                  <Button type="submit" variant="primary" size="lg" isLoading={isLoading}>
                    {isLoading ? 'Mengirim Iklan...' : 'Pasang Iklan'}
                  </Button>
                </form>
              )}
            </div>
          )}
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/News/20220818020636_Car_Selling.jpg&w=600&h=400&q=75&c=1" alt="Ilustrasi Jual Mobil" className="w-full max-w-md rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Section Tips */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-text">Tips & Panduan Jual Mobil Online</h2>
        <div className="bg-white rounded-xl shadow flex flex-col md:flex-row items-center p-6 gap-6">
          <img src={tips.img} alt="Tips Jual Mobil" className="w-40 h-40 object-cover rounded-lg" />
          <div>
            <div className="font-bold text-lg mb-2 text-text">{tips.title}</div>
            <div className="text-text-light mb-2">{tips.desc}</div>
            <Button variant="link">Baca Selengkapnya</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sell;
