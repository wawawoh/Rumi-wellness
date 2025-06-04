import RealService from "../components/realService";
import styles from "./service.module.css";
import Link from "next/link";

export default function Services() {
  const DryCupping = [
    "Headache Relief",
    "Plantar Fasciitis Relief",
    "Boosting Immunity & Detox",
    "Reduce tension",
    "Reduce Inflammation",
  ];
  const temporaryImg = "/images/dry-cupping.jpg";

  const wetCupping = [
    "Stress and anxiety relief",
    "Inflammation support",
    "Injury support",
    "Sports recovery",
    "Lower back pain relief",
  ];
  const fireCupping = ["Pain Relief & Circulation", "Cleansing & Detox"];
  const sportsInjuries = [
    "Pain Relief & Circulation",
    "Cleansing & Detox",
    "Loosen tight muscles",
    "Boost recovery after workouts or injuries",
    "Reduce the chance of future strain",
  ];
  const fullBodyMassage = [
    "better sleep",
    "muscle relief",
    "less stiffness",
    "mental clarity",
    "easier movement",
  ];
  return (
    <>
      <section className={styles.hero}>
        <h1>Services I offer</h1>
      </section>
      <section className="quote">
        <blockquote>
          “Your body is precious, it is your vehicle for awakening. Treat it
          with care ~ Budda”
        </blockquote>
      </section>
      <section className={styles.container}>
        <RealService
          title={"Wet Cupping (Hijama)"}
          descrip={
            "Wet cupping, also known as Hijama, involves making small, superficial incisions on the skin to draw out stagnated blood and toxins"
          }
          img="/images/wet-cupping.jpeg"
          benefits={wetCupping}
        />

        <RealService
          title={"Dry Cupping"}
          descrip={
            "Dry cupping is an ancient healing practice I’ve been trained in. Unlike wet cupping, it doesn’t involve any incisions. Instead, suction is applied to the skin using special cups to help relieve symptons"
          }
          img="/images/dry-cupping.jpg"
          benefits={DryCupping}
        />

        <RealService
          title={"Fire Cupping"}
          descrip={
            "Fire cupping is a traditional therapy that uses heat and suction to support the body’s natural healing. A flame is briefly placed inside a glass cup to create a vacuum before the cup is applied to the skin. The heat from the cup transfers into the body, helping to release stiffness in the muscles and fascia. This gentle suction lifts the skin like a “reverse massage” to ease tension, improve circulation, and leave you feeling more relaxed and loosened."
          }
          img="/images/fire-cup.jpeg"
          benefits={fireCupping}
        />
        <RealService
          title={"Cupping for Sports Recovery & Gym Performance"}
          descrip={`From elite athletes to everyday gym-goers, cupping is widely used to support recovery, reduce muscle fatigue, and improve performance. Sports professionals like Cristiano Ronaldo, David Beckham, and Andy Murray have turned to it for its natural ability to ease tension and promote healing. Cupping works by improving circulation, reducing inflammation, and relieving tightness in overworked muscles, making it useful after intense workouts, heavy lifting, or injury. It also supports better mobility and faster recovery without relying on medication. Whether you’re dealing with post-training soreness or simply looking to stay injury-free and moving well, cupping can be a valuable part of your routine.`}
          img="/images/sports-injury.jpg"
          benefits={sportsInjuries}
        />
        <RealService
          title={"Massage Therapy"}
          descrip={
            "Whether you need a deep tissue release, a half-body focus, or a full-body reset, massage is a powerful way to let go of tension and reconnect with your body. It helps ease aches, loosen tight muscles, and leave you feeling lighter, calmer, and more at ease."
          }
          img="/images/full-body.jpg"
          benefits={fullBodyMassage}
        />
      </section>
      <Link className="good-button-link" href="/contact">
        <div className={styles.btnContainer}>
          <button className="btn-4">Book A Service</button>
        </div>
      </Link>
    </>
  );
}
