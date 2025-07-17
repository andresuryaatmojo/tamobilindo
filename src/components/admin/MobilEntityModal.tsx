import React, { useState, useEffect } from "react";
import { X, Upload, Car } from "lucide-react";
import type { MobilEntity } from "../../pages/AdminPanel";

interface MobilEntityModalProps {
  isOpen: boolean;
  onClose: () => void;
  mobilEntity?: MobilEntity | null;
  onSave: (mobilEntityData: MobilEntity) => void;
}

interface MobilEntityFormData {
  brand: string;
  model: string;
  tahun: number;
  harga: number;
  lokasi: string;
  status: "active" | "sold" | "pending";
  deskripsi: string;
  spesifikasi: {
    kilometer: number;
    jenisBahanBakar: string;
    transmisi: string;
    status: string;
  };
}

const MobilEntityModal: React.FC<MobilEntityModalProps> = ({
  isOpen,
  onClose,
  mobilEntity,
  onSave,
}) => {
  const [formData, setFormData] = useState<MobilEntityFormData>({
    brand: "",
    model: "",
    tahun: new Date().getFullYear(),
    harga: 0,
    lokasi: "",
    status: "active",
    deskripsi: "",
    spesifikasi: {
      kilometer: 0,
      jenisBahanBakar: "",
      transmisi: "",
      status: "",
    },
  });

  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  useEffect(() => {
    if (mobilEntity) {
      setFormData({
        brand: mobilEntity.brand || "",
        model: mobilEntity.model || "",
        tahun: mobilEntity.tahun || new Date().getFullYear(),
        harga: mobilEntity.harga || 0,
        lokasi: mobilEntity.lokasi || "",
        status: mobilEntity.status || "active",
        deskripsi: mobilEntity.deskripsi || "",
        spesifikasi:
          mobilEntity.spesifikasi && typeof mobilEntity.spesifikasi === "object"
            ? {
                kilometer: (mobilEntity.spesifikasi as any).kilometer ?? 0,
                jenisBahanBakar:
                  (mobilEntity.spesifikasi as any).jenisBahanBakar ?? "",
                transmisi: (mobilEntity.spesifikasi as any).transmisi ?? "",
                status: (mobilEntity.spesifikasi as any).status ?? "",
              }
            : {
                kilometer: 0,
                jenisBahanBakar: "",
                transmisi: "",
                status: "",
              },
      });
    } else {
      setFormData({
        brand: "",
        model: "",
        tahun: new Date().getFullYear(),
        harga: 0,
        lokasi: "",
        status: "active",
        deskripsi: "",
        spesifikasi: {
          kilometer: 0,
          jenisBahanBakar: "",
          transmisi: "",
          status: "",
        },
      });
    }
    setImages([]);
    setPreviewImages([]);
  }, [mobilEntity, isOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "harga" || name === "tahun" || name === "kilometer"
          ? Number(value)
          : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages((prev) => [...prev, ...files]);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImages((prev) => [...prev, e.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      mobilId: mobilEntity?.mobilId || Date.now().toString(),
    });
    onClose();
  };

  const popularBrands = [
    "Toyota",
    "Honda",
    "Suzuki",
    "Daihatsu",
    "Mitsubishi",
    "Nissan",
    "Mazda",
    "Hyundai",
    "Kia",
    "Wuling",
    "MG",
  ];

  const popularLocations = [
    "Jakarta Selatan",
    "Jakarta Utara",
    "Jakarta Barat",
    "Jakarta Timur",
    "Jakarta Pusat",
    "Bandung",
    "Surabaya",
    "Medan",
    "Semarang",
    "Yogyakarta",
    "Malang",
    "Palembang",
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-pink-100 rounded-lg">
              <Car className="h-6 w-6 text-pink-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {mobilEntity ? "Edit Mobil" : "Tambah Mobil Baru"}
              </h2>
              <p className="text-sm text-gray-500">
                {mobilEntity
                  ? "Perbarui informasi mobil"
                  : "Masukkan detail mobil baru"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Informasi Dasar */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Informasi Dasar
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand *
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Contoh: Toyota"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Model *
                </label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Contoh: Avanza"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tahun *
                  </label>
                  <input
                    type="number"
                    name="tahun"
                    value={formData.tahun}
                    onChange={handleInputChange}
                    required
                    min="1990"
                    max={new Date().getFullYear() + 1}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lokasi *
                  </label>
                  <select
                    name="lokasi"
                    value={formData.lokasi}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="">Pilih Lokasi</option>
                    {popularLocations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Harga (IDR) *
                </label>
                <input
                  type="number"
                  name="harga"
                  value={formData.harga}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="250000000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status *
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="active">Aktif</option>
                  <option value="pending">Pending</option>
                  <option value="sold">Terjual</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi
                </label>
                <textarea
                  name="deskripsi"
                  value={formData.deskripsi}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Deskripsikan kondisi dan fitur mobil..."
                />
              </div>
            </div>

            {/* Spesifikasi Teknis */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">
                Spesifikasi Teknis
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kilometer (KM)
                </label>
                <input
                  type="number"
                  name="kilometer"
                  value={formData.spesifikasi.kilometer}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="50000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jenis Bahan Bakar
                </label>
                <select
                  name="jenisBahanBakar"
                  value={formData.spesifikasi.jenisBahanBakar}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="Bensin">Bensin</option>
                  <option value="Solar">Solar</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Listrik">Listrik</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Transmisi
                </label>
                <select
                  name="transmisi"
                  value={formData.spesifikasi.transmisi}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="Manual">Manual</option>
                  <option value="Automatic">Automatic</option>
                  <option value="CVT">CVT</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status *
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="active">Aktif</option>
                  <option value="pending">Pending</option>
                  <option value="sold">Terjual</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deskripsi
                </label>
                <textarea
                  name="deskripsi"
                  value={formData.deskripsi}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Deskripsikan kondisi dan fitur mobil..."
                />
              </div>
            </div>
          </div>

          {/* Upload Gambar */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Foto Mobil</h3>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <span className="mt-2 block text-sm font-medium text-gray-900">
                      Upload Foto Mobil
                    </span>
                    <span className="mt-1 block text-xs text-gray-500">
                      PNG, JPG, GIF hingga 10MB
                    </span>
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="sr-only"
                  />
                </div>
              </div>
            </div>

            {/* Preview Images */}
            {previewImages.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {previewImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            >
              {mobilEntity ? "Update Mobil" : "Tambah Mobil"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MobilEntityModal;
