import { useState, useContext } from "react";
import AuthContext from "./AuthContext";
import { useRouter } from "next/router";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      router.push("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-md">
        <h2 className="text-2xl font-bold">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="block w-full p-2 border mt-2"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-2 border mt-2"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 w-full">
          Login
        </button>
      </form>
    </div>
  );
}
