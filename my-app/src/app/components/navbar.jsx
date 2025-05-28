import Link from "next/link";
import styles from "./navbar.module.css";
function Navbar({ showNav, setShowNav }) {
  return (
    <div className={` ${showNav ? styles.active : styles.inactive}`}>
      <p onClick={() => setShowNav(false)}>cross </p>
      <Link onClick={() => setShowNav(false)} href="/">
        Home
      </Link>
      <Link onClick={() => setShowNav(false)} href="/services">
        servies
      </Link>
      <Link onClick={() => setShowNav(false)} href="/contact">
        Contact
      </Link>
    </div>
  );
}
export default Navbar;
