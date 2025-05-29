import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";
import { Crimson_Text } from "next/font/google";

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Choose weights as needed
  variable: "--font-crimson", // Use CSS variable for targeting
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={crimson.variable}>
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
