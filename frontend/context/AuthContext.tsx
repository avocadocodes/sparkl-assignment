"use client";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


interface User {
  username: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (credentials: { username: string; password: string }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() =>
    typeof window !== "undefined" ? localStorage.getItem("token") : null
  );

  useEffect(() => {
    if (token) {
      setUser(jwtDecode(token) as User);
    }
  }, [token]);

  const login = async (credentials: { username: string; password: string }) => {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/`, credentials);
    setToken(data.access);
    localStorage.setItem("token", data.access);
    setUser(jwtDecode(data.access) as User);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  return <AuthContext.Provider value={{ user, token, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
