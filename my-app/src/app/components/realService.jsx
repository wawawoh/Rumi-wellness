"use client";
import Image from "next/image";
function RealService({ title, descrip, img, benefits }) {
  const listItems = benefits.map((benefit, index) => (
    <li key={index}>{benefit}</li>
  ));
  return (
    <div>
      <Image
        src={img}
        alt="A description of the photo"
        width={500}
        height={300}
      />
      <h3>{title}</h3>
      <p>{descrip}</p>
      <button>read more</button>
      <section className="read-more">
        <ul className="benefits-list">{listItems}</ul>
      </section>
    </div>
  );
}
export default RealService;
