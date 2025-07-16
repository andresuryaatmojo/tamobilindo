import React from 'react';

const Profile: React.FC = () => (
  <section className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-8">
    <h2 className="text-2xl font-bold mb-6 text-pink-500">Profil Pengguna</h2>
    <div className="flex flex-col items-center gap-4">
      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl mb-2">👤</div>
      <div className="text-lg font-semibold">Nama User</div>
      <div className="text-gray-500">user@email.com</div>
      <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">Edit Profil</button>
    </div>
  </section>
);

export default Profile; 