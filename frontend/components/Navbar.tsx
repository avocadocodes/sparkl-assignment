"use client";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Link from "next/link";

export default function Navbar() {
  const auth = useContext(AuthContext);

  // Ensure context is available before destructuring
  if (!auth) return null;

  const { user, logout } = auth;

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Online Quiz System</h1>
      <div className="flex gap-4">
        {user ? (
          <>
            <span>{user.username}</span>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <Link href="/auth/login" className="bg-green-500 px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
  
}
