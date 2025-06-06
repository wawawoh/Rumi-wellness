import Link from "next/link";
import styles from "./contact.module.css";
import Image from "next/image";
import serviceStyles from "../services/service.module.css";
export const metadata = {
  title: "Contact",
  keywords: [
    "whastapp",
    "massage therapy",
    "North London",
    "Dry Cupping",
    "Kingsbury healing",
  ],
};
export default function Contact() {
  return (
    <>
      <section className={serviceStyles.herotwo}>
        <h1>Get in touch</h1>
      </section>
      <section className="quote">
        <blockquote>
          "The most precious gift we can offer anyone is our attention." ~ Thich
          Nhat Hanh
        </blockquote>
      </section>
      <section className={styles.contactOptions}>
        <section className={styles.card}>
          <div>
            <h2>Whatsapp Message</h2>
            <Image
              src={"/images/whatsapp-svgrepo-com.svg"}
              width={64}
              height={64}
              alt="whatsapp icon"
            />
          </div>
          <Link className="good-button-link" href="https://wa.me/447939022878">
            <button className="btn-4">Message Me on WhatsApp</button>
          </Link>
        </section>
        <section className={styles.card}>
          <div>
            <h2>Phone Call</h2>
            <Image
              src={"/images/phone-call-svgrepo-com.svg"}
              width={64}
              height={64}
              alt="phone icon"
            />
          </div>
          <Link className="good-button-link" href="tel:+447939022878">
            <button className="btn-4">Give Me a Call</button>
          </Link>
        </section>
      </section>
    </>
  );
}
