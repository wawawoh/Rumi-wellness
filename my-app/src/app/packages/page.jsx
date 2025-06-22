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
  const deepTissueFullBodyMassageHas = [
    "Deep, slow-pressure full body massage",
    "More intense and focused treatment",
    "Suitable for athletes or clients with chronic muscle tightness",
  ];

  const fullBodyMassageHas = [
    "Massage covering major areas: back, shoulders, arms, and legs",
  ];

  const halfBodyMassageHas = [
    "Focused massage on one area (e.g. back, shoulders, or legs)",
  ];

  const fullBodyFireCuppingHas = [
    "Cupping across multiple areas (e.g. back, shoulders, thighs, calves)",
    "Up to 18 cups",
    "Pre-treatment massage gun therapy",
  ];

  const halfBodyFireCuppingHas = [
    "Cupping focused on one area (e.g. back, shoulders, or legs)",
    "Up to 10 cups",
  ];

  const fullBodyDryCuppingHas = [
    "Consultation",
    "Dry cupping across multiple areas",
  ];

  const halfBodyDryCuppingHas = [
    "Consultation",
    "Cupping focused on one area (e.g. back, shoulders, or legs)",
  ];

  const basicSunnahCuppingHas = [
    "Consultation",
    "Wet cupping on sunnah points (up to 12 cups)",
  ];

  const fullBodyWetCuppingHas = [
    "Consultation",
    "Up to 25 cups applied across the body",
    "Pre-treatment massage gun therapy",
  ];

  const targetedInjuryRecoveryHas = [
    "Consultation and assessment",
    "Manual therapy and hands-on treatment",
    "Use of Graston IASTM tools",
    "Use of industrial-grade massage gun",
  ];

  const gymPerformanceSupportHas = [
    "Consultation and movement assessment",
    "Cupping therapy",
    "Industrial-grade massage gun therapy",
    "Graston IASTM tools",
  ];

  const combinationTherapyHas = [
    "Consultation",
    "Wet cupping on sunnah points (up to 12 cups)",
    "Targeted treatment on one area (e.g. shoulder, leg, neck)",
    "Use of industrial massage gun and Graston tools (if required)",
  ];

  const deluxeWellnessResetHas = [
    "Full body massage (60 minutes)",
    "Wet cupping on sunnah points (up to 12 cups)",
    "Targeted treatment on one area",
    "Use of massage gun and Graston tools (if required)",
  ];

  const eliteAthleteRecoveryHas = [
    "Full consultation & movement assessment",
    "Cupping therapy (wet or dry as required)",
    "Industrial-grade massage gun therapy",
    "Graston IASTM tools",
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
        <h2>
          Mobile / Home Visit <br /> Additional £20
        </h2>
        <p>
          If you'd like to receive treatment in the comfort of your own home
          (within the local area), we offer mobile services for an added fee.
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
          name={"Basic Sunnah Cupping"}
          price={"£45"}
          duration={"25–30 minutes"}
          includes={basicSunnahCuppingHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Basic%20Sunnah%20Cupping.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />
        <RealPackage
          name={"Full Body Wet Cupping"}
          price={"£60"}
          duration={"40–45 minutes"}
          includes={fullBodyWetCuppingHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Full%20Body%20Wet%20Cupping.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />
        <RealPackage
          name={"Half Body Dry Cupping"}
          price={"£40"}
          duration={"20–25 minutes"}
          includes={halfBodyDryCuppingHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Half%20Body%20Dry%20Cupping.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Full Body Dry Cupping"}
          price={"£50"}
          duration={"35–40 minutes"}
          includes={fullBodyDryCuppingHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Full%20Body%20Dry%20Cupping.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Half Body Fire Cupping"}
          price={"£40"}
          duration={"20–25 minutes"}
          includes={halfBodyFireCuppingHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Half%20Body%20Fire%20Cupping.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />
        <RealPackage
          name={"Full Body Fire Cupping"}
          price={"£50"}
          duration={"35–40 minutes"}
          includes={fullBodyFireCuppingHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Full%20Body%20Fire%20Cupping.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />
        <RealPackage
          name={"Half Body Massage"}
          price={"£35"}
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
          name={"Deep Tissue Full Body Massage"}
          price={"£65"}
          duration={"60 minutes"}
          includes={deepTissueFullBodyMassageHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Deep%20Tissue%20Full%20Body%20Massage.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Gym Performance Support"}
          price={"£50"}
          duration={"45–60 minutes"}
          includes={gymPerformanceSupportHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Gym%20Performance%20Support.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Targeted Injury Recovery"}
          price={"£50"}
          duration={"30–35 minutes"}
          includes={targetedInjuryRecoveryHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Targeted%20Injury%20Recovery.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Combination Therapy"}
          price={"£65"}
          duration={"40–45 minutes"}
          includes={combinationTherapyHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Combination%20Therapy.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />

        <RealPackage
          name={"Deluxe Wellness Reset"}
          price={"£95"}
          duration={"Approx. 90–95 minutes"}
          includes={deluxeWellnessResetHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Deluxe%20Wellness%20Reset.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />
        <RealPackage
          name={"Elite Athlete Recovery"}
          price={"£130"}
          duration={"60–75 minutes"}
          includes={eliteAthleteRecoveryHas}
          link={
            "https://api.whatsapp.com/send?phone=447939022878&text=Hi,%20I%E2%80%99m%20interested%20in%20booking%20the%20Elite%20Athlete%20Recovery.%20Can%20you%20let%20me%20know%20your%20availability?"
          }
        />
      </section>
    </>
  );
}
