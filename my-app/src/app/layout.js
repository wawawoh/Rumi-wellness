import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"], // weights you want
  variable: "--font-noto", // CSS variable name you want
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={notoSans.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ancizar+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
