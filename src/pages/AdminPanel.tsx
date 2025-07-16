import React from "react";

const AdminPanel: React.FC = () => (
  <section>
    <h2 className="text-2xl font-bold mb-6 text-pink-500">Admin Panel</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Manajemen Mobil</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Tambah Mobil</li>
          <li>Edit Mobil</li>
          <li>Hapus Mobil</li>
        </ul>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-2">Manajemen User</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Daftar User</li>
          <li>Verifikasi User</li>
          <li>Hapus User</li>
        </ul>
      </div>
    </div>
  </section>
);

export default AdminPanel;
