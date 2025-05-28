import Link from "next/link";
import styles from "./contact.module.css";
import serviceStyles from "../services/service.module.css";
export default function Contact() {
  return (
    <>
      <section className={serviceStyles.hero}>
        <h1>Contact me </h1>
      </section>
      <section className="quote"></section>
      <section className="contact-options">
        <section className={styles.card}>
          <div>
            <h2>Whatsapp Message</h2>
            <img src="" alt="whatsap logo" />
          </div>
          <button>Send me a message</button>
        </section>
        <section className={styles.card}>
          <div>
            <h2>Phone Call</h2>
            <img src="" alt="phone logo" />
          </div>
          <button>Phone me yess</button>
        </section>
      </section>
    </>
  );
}
