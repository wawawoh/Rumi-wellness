import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

function Footer() {
  return (
    <section className={styles.footer}>
      <Image src="/images/rumi-logo.jpg" alt="" width={643} height={613} />
      <Link href="/">Home</Link>
      <Link href="/services">Treatments</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/packages">Packages</Link>
      <h5>Follow me! </h5>

      <Link
        aria-label="link to instagram "
        href="https://www.instagram.com/rumiswellness?igsh=eDZrdzV5Y2R1YWpr"
      >
        <Image
          className={styles.social}
          src="/images/instagram-svgrepo-com.svg"
          alt="instagram icon "
          width={64}
          height={64}
        />
      </Link>
    </section>
  );
}
export default Footer;
