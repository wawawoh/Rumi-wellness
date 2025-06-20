import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
function Navbar({ showNav, setShowNav }) {
  return (
    <div
      className={`${styles.navbar} ${
        showNav ? styles.active : styles.inactive
      }`}
    >
      <Image
        style={{ cursor: "pointer" }}
        onClick={() => setShowNav(false)}
        src="/images/cross-svgrepo-com (1).svg"
        alt="cross"
        width={64}
        height={64}
      />
      <Link onClick={() => setShowNav(false)} href="/">
        Home
      </Link>
      <Link onClick={() => setShowNav(false)} href="/treatments">
        Services
      </Link>
      <Link onClick={() => setShowNav(false)} href="/contact">
        Contact
      </Link>
      <Link onClick={() => setShowNav(false)} href="/packages">
        Packages
      </Link>
    </div>
  );
}
export default Navbar;
