import React from "react";

const Register: React.FC = () => (
  <section className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
    <h2 className="text-2xl font-bold mb-6 text-pink-500">Daftar</h2>
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Nama Lengkap"
        className="px-4 py-2 rounded-lg border border-gray-200"
      />
      <input
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded-lg border border-gray-200"
      />
      <input
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded-lg border border-gray-200"
      />
      <button
        type="submit"
        className="bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-500 transition"
      >
        Daftar
      </button>
    </form>
    <p className="mt-4 text-sm text-gray-500">
      Sudah punya akun?{" "}
      <a href="/login" className="text-pink-500 hover:underline">
        Login
      </a>
    </p>
  </section>
);

export default Register;
