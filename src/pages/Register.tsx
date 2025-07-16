import React, { useState } from "react";
import { register, saveAuth } from "../api/auth";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await register(form.name, form.email, form.password);
    if (res.token) {
      saveAuth(res.token, res.user);
      setMsg("Registrasi berhasil! Anda sudah login.");
    } else {
      setMsg(res.message || "Registrasi gagal.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded shadow flex flex-col gap-4"
    >
      <input
        name="name"
        placeholder="Nama"
        onChange={handleChange}
        required
        className="border rounded px-3 py-2"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChange}
        required
        className="border rounded px-3 py-2"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
        className="border rounded px-3 py-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 font-bold"
      >
        Register
      </button>
      <div className="text-center text-sm text-green-600">{msg}</div>
    </form>
  );
};
export default Register;
