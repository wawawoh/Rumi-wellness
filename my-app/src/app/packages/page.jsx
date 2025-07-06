import styles from "./packages.module.css";
import Link from "next/link";
import RealPackage from "../components/realPackage";
export const metadata = {
  title: "Packages",
  keywords: [
    "cupping therapy",
    "massage therapy",
    "North London",
    "myofascial decompression",
    "Kingsbury healing",
  ],
};

import homestyles from "../services/service.module.css";
export default function Packages() {
  const sunnahHijamaHas = [
    "Pre-Treatment consultation",
    "Wet cupping on Sunnah Points. (Upper back, neck, & lower back)",
    "Sterile - Single use equipment",
    "Aftercare advice and guidance",
  ];

  const fullBodyWetCuppingHas = [
    "Pre-Treatment consultation",
    "Wet cupping across multiple key areas (typically up to 15 cups, including Sunnah Points)",
    "Pre-Cupping industrial massage gun therapy",
    "Sterile, single use equipment",
    "Aftercare advice and guidance",
  ];

  const dryCuppingTherapyHas = [
    "Pre-treatment consultation",
    "Dry cupping therapy (targeted or full body)",
    "Unlimited application of hygienic vacuum cups",
    "Aftercare advice and guidance",
  ];

  const fireCuppingTherapyHas = [
    "Pre-treatment consultation",
    "Fire cupping therapy (gliding or static) across multiple key areas (e.g., back, shoulders, thighs & calves)",
    "Use of fire safe glass or bamboo cups",
    "Aftercare advice and guidance",
    "Recommended for relieving muscular tension, stiffness, and tightness.",
  ];

  const halfBodyMassageHas = [
    "Focused massage on upper body or lower body",
    "Olive oil application",
    "Industrial massage gun therapy",
    "Optional silicon cups movement",
  ];

  const fullBodyMassageHas = [
    "Massage covering major areas (back, shoulders, thighs & calves)",
    "Olive oil application",
    "Industrial massage gun therapy",
    "Optional silicone cup movement",
  ];

  const recoveryMassageHas = [
    "Full body massage with firmer pressure",
    "Focus on relieving muscle tension and tightness",
    "Olive oil application",
    "Industrial massage gun therapy",
    "Optional silicone cup movement",
  ];

  const performanceTherapyHas = [
    "Consultation and movement assessment",
    "Cupping therapy (targeted as needed)",
    "Soft tissue release with Graston IASTM tools",
    "Industrial massage gun therapy (if required)",
    "Aftercare advice and guidance",
  ];

  const injuryMuscleRecoveryTherapyHas = [
    "Consultation & assessment",
    "Targeted cupping therapy",
    "Soft tissue release using Graston IASTM tools",
    "Aftercare advice and guidance",
    "This therapy focuses on reducing inflammation, breaking down scar tissue, and supporting muscle repair",
  ];

  const combinationTherapyHas = [
    "Consultation",
    "Wet cupping on Sunnah points (Sunnah Hijama)",
    "Targeted therapy on one area (e.g., shoulders, lower back, or leg)",
    "Soft tissue release using Graston IASTM tools",
    "Aftercare advice and guidance",
    "This therapy is designed to reduce inflammation, relieve tension, and improve circulation.",
    "Normally £95 if booked separately. Save £30 with this combined therapy.",
  ];

  const deluxeWellnessResetHas = [
    "Full body massage (60 mins)",
    "Wet cupping therapy (Sunnah points or targeted area based on your needs)",
    "Targeted therapy (e.g. shoulders, lower back, or legs)",
    "Graston IASTM tool work for soft tissue release",
    "Aftercare advice and guidance",
    "A restorative session combining full body relaxation and targeted cupping therapy, designed to reset the body and mind.",
    "Normally £145 if booked separately. Save £50 with this deluxe package",
  ];

  return (
    <>
      <section className={homestyles.herothree}>
        <h1>Pricing and packages</h1>
      </section>
      <section className="quote">
        <blockquote>
          "Healing doesn't happen by chance, it happens by choice"
        </blockquote>
      </section>
      <section className="flavour">
        <h2>Our treatments</h2>
        <p>
          Choose from a range of treatments designed to support your physical,
          spiritual, and therapeutic well-being. All sessions include a
          consultation. Home visit service available upon request.
        </p>
      </section>
      <section className={styles.homeVisits}>
        <div className={styles.homediv}>
          <img src="/images/car-svgrepo-com.svg" alt="" />
          <h2>Mobile / Home Visit</h2>
        </div>

        <h3> Add-On Fee: From £20</h3>
        <p>
          If you would like to receive treatment in the comfort of your own
          home, we offer a mobile service for an additional cost. Distance is no
          issue - Feel free to contact us to discuss your location.
        </p>

        <Link className="good-button-link" href="/contact">
          <div className={styles.btnContainer}>
            <button className={`btn-4 ${styles.myButton}`}>
              <div className={styles.whatsapp}>
                <p>Check if your area is covered</p>
                <img src="/images/whatsapp-svgrepo-com.svg" alt="" />
              </div>
              {/* Check if your area is covered */}
            </button>
          </div>
        </Link>
      </section>
      <section className={styles.packagesWrapper}>
        <RealPackage
          name={"Sunnah Hijama                                   STANDARD"}
          price={"£45"}
          duration={"Approx. 30 - 45 minutes"}
          includes={sunnahHijamaHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Sunnah%20Hijama%20STANDARD.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Full Body - Wet Cupping ADVANCED"}
          price={"£60"}
          duration={"60 minutes"}
          includes={fullBodyWetCuppingHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Full%20Body%20-%20Wet%20Cupping%20ADVANCED.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Dry Cupping Therapy"}
          price={"£50"}
          duration={"45 Minutes"}
          includes={dryCuppingTherapyHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Dry%20Cupping%20Therapy.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Fire Cupping Therapy"}
          price={"£50"}
          duration={"45 minutes"}
          includes={fireCuppingTherapyHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Fire%20Cupping%20Therapy.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Half Body Massage"}
          price={"£40"}
          duration={"30 minutes"}
          includes={halfBodyMassageHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Half%20Body%20Massage.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Full Body Massage"}
          price={"£50"}
          duration={"60 minutes"}
          includes={fullBodyMassageHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Full%20Body%20Massage.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Recovery Massage"}
          price={"£60"}
          duration={"60 minutes"}
          includes={recoveryMassageHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Recovery%20Massage.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Performance Therapy"}
          price={"£50"}
          duration={"Approx. 45 - 60 minutes"}
          includes={performanceTherapyHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Performance%20Therapy.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Injury & Muscle Recovery Therapy"}
          price={"£50"}
          duration={"60 minutes"}
          includes={injuryMuscleRecoveryTherapyHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Injury%20%26%20Muscle%20Recovery%20Therapy.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Combination Therapy"}
          price={"£65"}
          duration={"60 mins"}
          includes={combinationTherapyHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Combination%20Therapy.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Deluxe Wellness Reset"}
          price={"£95"}
          duration={"Approx. 90–95 mins"}
          includes={deluxeWellnessResetHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Deluxe%20Wellness%20Reset.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />
      </section>
    </>
  );
}
