"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./navbar";
import styles from "./header.module.css";

function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <Image src="/images/rumi-logo.jpg" alt="" width={643} height={613} />
        <h2>Rumi's Wellness</h2>

        <Image
          onClick={() => setShowNav(true)}
          src="images/burger-menu-right-svgrepo-com.svg"
          alt="BURGER"
          width={64}
          height={64}
        />

        <Navbar showNav={showNav} setShowNav={setShowNav} />
      </div>

      <div
        className={`${styles.grey} ${
          showNav ? styles.active : styles.inactive
        }`}
      ></div>
    </>
  );
}
export default Header;
