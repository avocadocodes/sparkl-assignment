import Navbar from "../components/Navbar";
import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <div className="container mx-auto p-6">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
