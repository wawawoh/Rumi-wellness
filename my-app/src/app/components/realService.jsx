"use client";
import Image from "next/image";
import styles from "./realService.module.css";
import { useState } from "react";
function RealService({ title, descrip, img, benefits }) {
  const listItems = benefits.map((benefit, index) => (
    <li key={index}>{benefit}</li>
  ));
  const [active, setActive] = useState(false);
  return (
    <div className={styles.moduleCard}>
      <Image
        src={img}
        alt="A description of the photo"
        width={500}
        height={300}
      />
      <h3>{title}</h3>
      <p>{descrip}</p>
      <button onClick={() => setActive((prev) => !prev)}>
        {active ? "Hide Benefits" : "View Benefits"}
      </button>
      <section
        className={`${styles.readMore} ${
          active ? styles.active : styles.inactive
        }`}
      >
        <ul className="benefits-list">{listItems}</ul>
      </section>
    </div>
  );
}
export default RealService;
