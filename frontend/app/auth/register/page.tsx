"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register/`, form);
      alert("Registration successful! You can now login.");
      router.push("/auth/login");
    } catch (err) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-md w-96">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Register</h2>
        <input
          type="text"
          placeholder="Username"
          className="block w-full p-3 border mt-2 rounded"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="block w-full p-3 border mt-2 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-3 border mt-2 rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 w-full rounded shadow hover:bg-blue-700 transition">
          Register
        </button>
      </form>
    </div>
  );
}
