import RealService from "../components/realService";
import styles from "./service.module.css";
import Link from "next/link";

export default function Services() {
  const DryCupping = [
    "Headache Relief",
    "Plantar Fasciitis Relief",
    "Boosting Immunity & Detox",
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
        <h1>My services</h1>
      </section>
      <section className="quote">
        <blockquote>
          “Your body is precious, it is your vehicle for awakening. Treat it
          with care ~ Budda”
        </blockquote>
      </section>
      <section className={styles.container}>
        <RealService
          title={"Wet Cupping"}
          descrip={
            "Wet cupping, or Hijama, gently removes stagnant blood and toxins from the body. It’s often used to ease pain, clear inflammation, and support natural healing."
          }
          img="/images/wet-cupping.jpeg"
          benefits={wetCupping}
        />

        <RealService
          title={"Dry Cupping"}
          descrip={
            "Dry cupping is also another ancient medicinal practice, which our practitioners have several years’ experience in. Unlike Wet Cupping, Dry Cupping does not involve drawing out toxic and stagnated blood through incisions."
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
          title={"Sports Injuries"}
          descrip={
            "The heat combined with suction helps bring blood to sore or overworked areas, speeding up healing and keeping the body moving more freely."
          }
          img="/images/sports-injury.jpg"
          benefits={sportsInjuries}
        />
        <RealService
          title={"Full Body Massage"}
          descrip={
            "Relax and undwind as I massage your pains and aches away. A full body massage that will leave you unwinded and refreshed."
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
