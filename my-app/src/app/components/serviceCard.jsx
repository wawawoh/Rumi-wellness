import Image from "next/image";
function ServiceCard({ title, descrip, img }) {
  return (
    <div>
      <article>
        <h3>{title}</h3>
        <p>{descrip}</p>
      </article>
    </div>
  );
}
export default ServiceCard;
