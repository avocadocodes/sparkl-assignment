"use client";
import { useState, useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const auth = useContext(AuthContext);
  const router = useRouter();

  if (!auth) return null; // Prevents crashing if context is missing
  const { login } = auth;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(form);
      router.push("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-md w-96">
        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="block w-full p-3 border mt-2 rounded"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
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
          Login
        </button>
      </form>
    </div>
  );
}
