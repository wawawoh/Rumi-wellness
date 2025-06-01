import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

function Footer() {
  return (
    <section className={styles.footer}>
      <Image src="/images/rumi-logo.jpg" alt="" width={643} height={613} />
      <Link href="/">Home</Link>
      <Link href="/services">Servies</Link>
      <Link href="/contact">Contact</Link>
      <h5>Follow me! </h5>

      <a
        aria-label="link to instagram "
        href="https://www.instagram.com/rumiswellness?igsh=eDZrdzV5Y2R1YWpr"
      >
        <img
          className={styles.social}
          src="/images/instagram-svgrepo-com.svg"
          alt=""
        />
      </a>
    </section>
  );
}
export default Footer;
