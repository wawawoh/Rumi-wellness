import Link from "next/link";
import styles from "./contact.module.css";
import Image from "next/image";
import serviceStyles from "../services/service.module.css";
export default function Contact() {
  return (
    <>
      <section className={serviceStyles.hero}>
        <h1>Contact me </h1>
      </section>
      <section className="quote">
        <blockquote>
          “Come, whoever you are...” <br />
          If you want to keep it clean and quietly spiritual, go with “If light
          is in your heart...” ~ Rumi
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
          <button className="btn-4">Send me a message</button>
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
          <button className="btn-4">Phone me</button>
        </section>
      </section>
    </>
  );
}
