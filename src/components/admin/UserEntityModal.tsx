import React, { useState, useEffect } from "react";
import { X, User, Shield, Mail, Phone } from "lucide-react";
import type { UserEntity } from "../../pages/AdminPanel";

interface UserEntityModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEntity?: UserEntity | null;
  onSave: (userEntityData: UserEntity) => void;
}

interface UserEntityFormData {
  nama: string;
  email: string;
  telepon: string;
  alamat: string;
  role: "user" | "admin" | "dealer";
  status: "active" | "inactive" | "pending";
}

const UserEntityModal: React.FC<UserEntityModalProps> = ({
  isOpen,
  onClose,
  userEntity,
  onSave,
}) => {
  const [formData, setFormData] = useState<UserEntityFormData>({
    nama: "",
    email: "",
    telepon: "",
    alamat: "",
    role: "user",
    status: "active",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (userEntity) {
      setFormData({
        nama: userEntity.nama || "",
        email: userEntity.email || "",
        telepon: userEntity.telepon || "",
        alamat: userEntity.alamat || "",
        role: userEntity.role || "user",
        status: userEntity.status || "active",
      });
      setIsEditing(true);
    } else {
      setFormData({
        nama: "",
        email: "",
        telepon: "",
        alamat: "",
        role: "user",
        status: "active",
      });
      setIsEditing(false);
    }
  }, [userEntity, isOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      userId: userEntity?.userId || Date.now().toString(),
      tanggalDaftar:
        userEntity?.tanggalDaftar || new Date().toISOString().slice(0, 10),
      lastLogin: userEntity?.lastLogin || new Date().toISOString().slice(0, 10),
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {isEditing ? "Edit User" : "Tambah User Baru"}
              </h2>
              <p className="text-sm text-gray-500">
                {isEditing
                  ? "Perbarui informasi user"
                  : "Masukkan detail user baru"}
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
          {/* Informasi Dasar */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 flex items-center">
              <User className="h-5 w-5 mr-2" />
              Informasi Dasar
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="user@email.com"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nomor Telepon
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="tel"
                  name="telepon"
                  value={formData.telepon}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="081234567890"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alamat
              </label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Masukkan alamat lengkap"
              />
            </div>
          </div>

          {/* Role dan Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Role dan Status
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="user">User</option>
                  <option value="dealer">Dealer</option>
                  <option value="admin">Admin</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  {formData.role === "user" &&
                    "User biasa dapat melihat dan mencari mobil"}
                  {formData.role === "dealer" &&
                    "Dealer dapat menambah dan mengelola mobil"}
                  {formData.role === "admin" &&
                    "Admin memiliki akses penuh ke sistem"}
                </p>
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="active">Aktif</option>
                  <option value="pending">Pending</option>
                  <option value="inactive">Nonaktif</option>
                </select>
              </div>
            </div>

            {formData.role === "dealer" && (
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-2">
                  Alamat Showroom
                </label>
                <textarea
                  rows={2}
                  className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Alamat lengkap showroom"
                />
              </div>
            )}
          </div>

          {/* Informasi Tambahan untuk Dealer */}
          {formData.role === "dealer" && (
            <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="text-md font-medium text-blue-900">
                Informasi Dealer
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">
                    NPWP
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="12.345.678.9-123.456"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">
                    SIUP
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nomor SIUP"
                  />
                </div>
              </div>
            </div>
          )}

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
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {isEditing ? "Update User" : "Tambah User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserEntityModal;
