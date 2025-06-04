import Image from "next/image";
import styles from "./page.module.css";
import ServiceCard from "./components/serviceCard";
import homeStyles from "./home.module.css";
import Link from "next/link";
export const metadata = {
  title: "HomePage",
  keywords: [
    "cupping therapy",
    "massage therapy",
    "North London",
    "myofascial decompression",
    "Kingsbury healing",
  ],
};

export default function Home() {
  return (
    <>
      <div className={homeStyles.hero}>
        <h1>Rumi&#39;s Wellness</h1>
        <p>
          Relax deeply. <br /> Revive Fully. <br /> Recharge completely.
        </p>
        <Link className="button-link" href="/contact">
          <button>Let's book an appointment</button>
        </Link>
      </div>
      <section className="quote">
        <blockquote>"What you are seeking is seeking you" ~ Rumi </blockquote>
      </section>
      <section className="what-is-cupping">
        <h2>What is Cupping</h2>
        <p>
          Cupping Therapy (Hijama) is an ancient healing practice known for
          relieving pain, improving circulation, and supporting the body’s
          natural detoxification process. By applying gentle suction to the skin
          using specialised cups, this therapy helps reduce inflammation,
          release muscle tension, and encourage deep relaxation.
        </p>
      </section>
      <section>
        <h2>Benefits of Cupping & Myofascial Decompression</h2>
        <ul>
          <li>Relieves muscle tension, pain, and stiffness</li>
          <li>Boosts blood circulation and oxygen delivery</li>
          <li>Reduces stress and encourages deep relaxation</li>
          <li>Improves skin tone, texture, and elasticity</li>
          <li>Accelerates healing by supporting tissue repair</li>
        </ul>
      </section>

      <section className={homeStyles.serviceCards}>
        <h2>We Offer</h2>
        <ServiceCard
          title={"Wet cupping"}
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
        <Link className="good-button-link" href="/services">
          <button className="btn-4">See all my services</button>
        </Link>
      </section>

      <section className={homeStyles.aboutMe}>
        <Image
          src="/images/abu.jpeg"
          alt="Abumama face"
          width={500}
          height={300}
        />
        <div className={homeStyles.ac}>
          <h2>Meet Abubakar</h2>
          <p>
            {" "}
            Hi, I’m the practitioner behind Rumi’s Wellness Clinic, where
            healing is more than just a treatment. It’s a complete experience. I
            offer personalised cupping and massage therapy for men, either in my
            peaceful space in Kingsbury or in the comfort of your home.
          </p>

          <p>I’m certified by ICAHT and registered with the GRCC UK.</p>

          <p>
            At Rumi’s, the focus isn’t just on easing pain or releasing tension,
            it’s about creating a space where you can unplug, reset, and
            reconnect. The atmosphere is designed to help you slow down, breathe
            deeply, and find stillness. “The quieter you become, the more you
            can hear.” – Ram Dass
          </p>

          <p>
            Whether you're dealing with pain, carrying an injury, or just need a
            moment away from stress, this is your time to relax, revive, and
            recharge.
          </p>

          <p>Welcome to Rumi’s — where ancient wisdom meets modern healing.</p>
        </div>
      </section>
    </>
  );
}
