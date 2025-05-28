import Image from "next/image";
import styles from "./serviceCard.module.css";
function ServiceCard({ title, descrip, img }) {
  return (
    <div className={styles.div}>
      <article>
        <h3>{title}</h3>
        <p>{descrip}</p>
      </article>
      <img src="/images/tree11-svgrepo-com.svg" alt="" />
    </div>
  );
}
export default ServiceCard;
