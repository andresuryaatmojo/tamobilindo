import React, { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: BookingFormData) => void;
}

export interface BookingFormData {
  nama: string;
  email: string;
  telepon: string;
  tanggal: string;
  jam: string;
  testDrive: boolean;
  catatan: string;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [form, setForm] = useState<BookingFormData>({
    nama: "",
    email: "",
    telepon: "",
    tanggal: "",
    jam: "",
    testDrive: false,
    catatan: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000)); // Simulasi loading
    setLoading(false);
    setSuccess(true);
    onSubmit(form);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative animate-fade-in">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-800"
          onClick={onClose}
          aria-label="Tutup"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Buat Janji / Test Drive
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Nama Lengkap *
            </label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Nama lengkap"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Email aktif"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nomor HP *</label>
            <input
              type="tel"
              name="telepon"
              value={form.telepon}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="08xxxxxxxxxx"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Tanggal *
              </label>
              <input
                type="date"
                name="tanggal"
                value={form.tanggal}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Jam *</label>
              <input
                type="time"
                name="jam"
                value={form.jam}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Test Drive?
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="testDrive"
                checked={form.testDrive}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-purple-600"
              />
              <span>Ya, saya ingin test drive</span>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Catatan</label>
            <textarea
              name="catatan"
              value={form.catatan}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Catatan tambahan (opsional)"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white rounded-lg py-2 font-bold text-lg hover:bg-purple-700 transition mt-2 disabled:opacity-60"
            disabled={loading}
          >
            {loading
              ? "Mengirim..."
              : success
              ? "Berhasil!"
              : "Kirim Permintaan"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
