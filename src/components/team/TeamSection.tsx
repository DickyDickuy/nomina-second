"use client";

import styles from "./TeamSection.module.scss";
import Smooth3DSlideshow, { type Slide } from "./Smooth3DSlideshow";

/* ─── Team Data ─── */
const teamSlides: Slide[] = [
  {
    image: {
      src: "/assets/img/home-06/team/randy.png",
      alt: "Randy Yudesyaf — Chief Executive Officer at NOMINA Creative",
    },
    title: "Randy Yudesyaf",
    role: "Chief Executive Officer",
  },
  {
    image: {
      src: "/assets/img/home-06/team/risa.png",
      alt: "Risa Fatima — Chief Operating Officer at NOMINA Creative",
    },
    title: "Risa Fatima",
    role: "Chief Operating Officer",
  },
  {
    image: {
      src: "/assets/img/home-06/team/hana.png",
      alt: "Hana Benedicta — VP Operation at NOMINA Creative",
    },
    title: "Hana Benedicta",
    role: "VP Operation",
  },
  {
    image: {
      src: "/assets/img/home-06/team/agung.png",
      alt: "Agung Nugraha — VP Project at NOMINA Creative",
    },
    title: "Agung Nugraha",
    role: "VP Project",
  },
  {
    image: {
      src: "/assets/img/home-06/team/rizal.png",
      alt: "Rizal Zulvianur — Sr. Graphic Designer at NOMINA Creative",
    },
    title: "Rizal Zulvianur",
    role: "Sr. Graphic Designer",
  },
  {
    image: {
      src: "/assets/img/home-06/team/bima.png",
      alt: "Bima Nazuardi — Sr. Motion Designer at NOMINA Creative",
    },
    title: "Bima Nazuardi",
    role: "Sr. Motion Designer",
  },
  {
    image: {
      src: "/assets/img/home-06/team/riga.png",
      alt: "Riga Singawinata — Jr. Production Manager at NOMINA Creative",
    },
    title: "Riga Singawinata",
    role: "Jr. Production Manager",
  },
];

const TeamSection = () => {
  return (
    <section
      className={`${styles.section} team-section-area`}
      aria-label="Our Team"
    >
      {/* Section Header */}
      <div className={styles.header}>
        <span className={`${styles.eyebrow} tp_reveal_anim`}>The Team</span>
        <h2 className={`${styles.heading} tp_reveal_anim`} data-delay=".3">
          The Visionaries
        </h2>
      </div>

      {/* Unified Desktop & Mobile 3D Coverflow Gallery with Pixelated Effect */}
      <div className={styles.galleryWrapper}>
        <Smooth3DSlideshow slides={teamSlides} />
      </div>
    </section>
  );
};

export default TeamSection;
