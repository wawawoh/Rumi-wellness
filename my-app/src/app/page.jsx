import Image from "next/image";
import styles from "./page.module.css";
import ServiceCard from "./components/serviceCard";
import homeStyles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className={homeStyles.hero}>
        <h1>Rumi&#39;s Wellness</h1>
        <p>
          Relax deeply. <br /> Revive Fully. <br /> Recharge completely.
        </p>
        <button>Let's book an appointment</button>
      </div>
      <section className="quote">
        <blockquote>"What you are seeking is seeking you" ~ Rumi </blockquote>
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
      </section>
      <section>
        <h2>Benefits of Cupping & Myofascial Decompression</h2>
        <ul>
          <li>Eases muscle pain and stiffness</li>
          <li>Improves circulation and oxygen flow</li>
          <li>Reduces stress and promotes relaxation</li>
          <li>Enhances skin tone and texture</li>
          <li>Supports healing and recovery through tissue repair</li>
        </ul>
      </section>

      <section className={homeStyles.serviceCards}>
        <h2>We do...</h2>
        <ServiceCard
          title={"wet cupping"}
          descrip={"blood letting"}
          img={"placeholder"}
        />
        <ServiceCard
          title={"Fire Cupping"}
          descrip={"Heat Therapy "}
          img={"placeholder"}
        />
        <ServiceCard
          title={"Deep Tissue Massage"}
          descrip={"Muscle Relief"}
          img={"placeholder"}
        />
        <button className="btn-4">see all my services</button>
      </section>

      <section className={homeStyles.aboutMe}>
        <Image
          src="/images/abu.jpeg"
          alt="Abumama face"
          width={500}
          height={300}
        />
        <h2>Meet Abubakar</h2>
        <p>
          Hi, I’m the practitioner behind Rumi’s Wellness Clinic — where healing
          isn’t just a treatment, but a whole experience. I offer personalized
          cupping and massage therapy for men, either at my peaceful space in
          Kingsbury or in the comfort of your home.
        </p>

        <p>
          Certified by ICAHT and registered with the GRCC UK, my approach is
          rooted in holistic care and performance therapy.
        </p>

        <p>
          At Rumi’s, the focus is not just on relieving pain or tension, it’s
          about creating a space where you can unplug, reset, and reconnect. The
          atmosphere is designed to help you slow down and breathe deeply.
        </p>
        <p>
          Whether you're looking to ease muscle soreness, boost circulation, or
          simply take a mindful pause, this is your time to relax, revive, and
          recharge.
        </p>
        <p>Welcome to Rumi’s — where ancient wisdom meets modern healing.</p>
      </section>
    </>
  );
}
