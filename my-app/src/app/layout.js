import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
