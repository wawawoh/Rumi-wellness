"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./navbar";
import styles from "./header.module.css";
import Link from "next/link";

function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <img src="/images/rumi-logo.webp" alt="" width={643} height={613} />
        <h2>Rumi's Wellness</h2>
        <div className={styles.burger}>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => setShowNav(true)}
            src="/images/burger-menu-right-svgrepo-com.svg"
            alt="BURGER"
            width={64}
            height={64}
          />
        </div>
        <div className={styles.desktopNav}>
          <Link href="/">Home</Link>
          <Link href="/services">Treatments</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/packages">Packages</Link>
        </div>

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
