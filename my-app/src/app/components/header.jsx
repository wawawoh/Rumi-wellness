"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./navbar";

function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <img
        src="https://picsum.photos/200/300"
        alt="b"
        width="200"
        height="300"
      />
      <h1>this is the header</h1>
      <p onClick={() => setShowNav(true)}>burger</p>

      <Navbar showNav={showNav} setShowNav={setShowNav} />
    </div>
  );
}
export default Header;
