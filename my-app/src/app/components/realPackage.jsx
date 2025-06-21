import styles from "./realPackage.module.css";
import buttonStyles from "../packages/packages.module.css";
import Link from "next/link";
export default function RealPackage({ name, price, duration, includes, link }) {
  return (
    <article className={styles.package}>
      <h3>{name}</h3>
      <p>{duration}</p>
      <h4>{price}</h4>

      <p>This session includes:</p>
      <ul>
        {includes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className={styles.btn}>
        <Link className="good-button-link" href={link}>
          <div className={styles.btnContainer}>
            <button className={`btn-4 ${buttonStyles.myButton}`}>
              <div className={buttonStyles.whatsapp}>
                <p>Check availability </p>
                <img src="/images/whatsapp-svgrepo-com.svg" alt="" />
              </div>
              {/* Check if your area is covered */}
            </button>
          </div>
        </Link>
      </div>
    </article>
  );
}
