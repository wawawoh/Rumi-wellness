import RealService from "../components/realService";
export default function Services() {
  const DryCupping = [
    "Headache Relief",
    "Plantar Fasciitis Relief",
    "Boosting Immunity & Detox",
  ];
  const temporaryImg = "/images/simon-humler--AakIaAPV0w-unsplash.jpg";

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
      <section className="hero">
        <h1>My services</h1>
      </section>
      <section className="quote"></section>
      <section className="services-container">
        <RealService
          title={"Dry Cupping"}
          descrip={
            "Dry cupping is also another ancient medicinal practice, which our practitioners have several years’ experience in. Unlike Wet Cupping, Dry Cupping does not involve drawing out toxic and stagnated blood through incisions."
          }
          img={temporaryImg}
          benefits={DryCupping}
        />
        <RealService
          title={"Wet Cupping"}
          descrip={
            "Wet cupping, or Hijama, gently removes stagnant blood and toxins from the body. It’s often used to ease pain, clear inflammation, and support natural healing."
          }
          img={temporaryImg}
          benefits={wetCupping}
        />
        <RealService
          title={"Fire Cupping"}
          descrip={
            "Fire cupping is a traditional therapy that uses heat and suction to support the body’s natural healing. It’s often described as a “reverse massage” Instead of applying pressure, it gently lifts the skin and muscles to release tension, improve circulation, and help you feel more balanced."
          }
          img={temporaryImg}
          benefits={fireCupping}
        />
        <RealService
          title={"Sports Injuries"}
          descrip={
            "The heat combined with suction helps bring blood to sore or overworked areas, speeding up healing and keeping the body moving more freely."
          }
          img={temporaryImg}
          benefits={sportsInjuries}
        />
        <RealService
          title={"Full Body Massage"}
          descrip={"Take your clothes off Your body works hard let reover"}
          img={temporaryImg}
          benefits={fullBodyMassage}
        />
      </section>
    </>
  );
}
