import React from "react";

const Login: React.FC = () => (
  <section className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
    <h2 className="text-2xl font-bold mb-6 text-pink-500">Masuk</h2>
    <form className="flex flex-col gap-4">
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
        className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
      >
        Masuk
      </button>
    </form>
    <p className="mt-4 text-sm text-gray-500">
      Belum punya akun?{" "}
      <a href="/register" className="text-pink-500 hover:underline">
        Daftar
      </a>
    </p>
  </section>
);

export default Login;
