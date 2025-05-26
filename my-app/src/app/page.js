import Image from "next/image";
import styles from "./page.module.css";
import ServiceCard from "./components/serviceCard";

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1>Rumi&#39;s Wellness</h1>
        <p>
          Relax deeply <br /> revive deeply <br /> recharge completely{" "}
        </p>
      </div>
      <section className="quote">
        <blockquote>What you are seeking is seeking you</blockquote>
      </section>
      <section className="what-is-cupping">
        <h2>What is Cupping</h2>
        <p>
          Cupping, or Hijama, is an ancient healing method used to relieve pain,
          boost circulation, and support the body’s natural detox processes. By
          creating suction on the skin using special cups, this therapy helps
          reduce inflammation, loosen tight muscles, and promote relaxation.
          Many describe it as a form of deep-tissue massage with added
          therapeutic benefits.
        </p>
        <p>Benefits of Cupping & Myofascial Decompression</p>
        <ul>
          <li>Eases muscle pain and stiffness</li>
          <li>Improves circulation and oxygen flow</li>
          <li>Reduces stress and promotes relaxation</li>
          <li>Enhances skin tone and texture</li>
          <li>Supports healing and recovery through tissue repair</li>
        </ul>
      </section>

      <section className="service-overview">
        <ServiceCard
          title={"wet cupping"}
          descrip={"something wet"}
          img={"placeholder"}
        />
        <ServiceCard
          title={"Fire Cupping"}
          descrip={"something fiery"}
          img={"placeholder"}
        />
        <ServiceCard
          title={"Deep Tissue Massage"}
          descrip={"something masagy"}
          img={"placeholder"}
        />
      </section>

      <section className="about-me">
        <Image
          src="/my-photo.jpg"
          alt="Abumama face"
          width={500}
          height={300}
        />
        <h2>meet abumama</h2>
        <p>
          Hi, I&#39;m the practitioner behind Rumi’s Wellness Clinic. I offer
          personalised cupping and massage therapy for men, either at my quiet
          space in Kingsbury (NW9) or in the comfort of your home. I&#39;m
          certified by ICAHT and registered with GRCCT (UK), with a focus on
          holistic care and performance recovery.
        </p>
      </section>
    </>
  );
}
