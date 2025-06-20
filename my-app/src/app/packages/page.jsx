import styles from "./packages.module.css";
import Link from "next/link";

import homestyles from "../services/service.module.css";
export default function Packages() {
  const basicSunnahCupping = [
    "consultation",
    "wet cupping on sunnah points (up to 12 cups)",
  ];

  return (
    <>
      <section className={homestyles.herothree}>
        <h1>Pricing and packages</h1>
      </section>
      <section className="quote">
        <blockquote>
          "Healing doesn't happen by chance, it happens by choice"
        </blockquote>
      </section>
      <section className="flavour">
        <h2>Our treatments</h2>
        <p>
          Choose from a range of treatments designed to support your physical,
          spiritual, and therapeutic well-being. All sessions include a
          consultation. Home visit service available upon request.
        </p>
      </section>
      <section className={styles.homeVisits}>
        <h2>
          Mobile / Home Visit <br /> Additional £20
        </h2>
        <p>
          If you'd like to receive treatment in the comfort of your own home
          (within the local area), we offer mobile services for an added fee.
        </p>

        <button className={styles.whatsapp}>
          <span>Check if your area is covered</span>
          <img src="/images/whatsapp-svgrepo-com.svg" alt="" />
        </button>
      </section>
      <section class="packages-wrapper"></section>
    </>
  );
}
