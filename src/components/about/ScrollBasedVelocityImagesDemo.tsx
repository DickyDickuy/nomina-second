"use client"

import React from "react";
import Image from "next/image";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/text-slider/ScrollVelocity";
import styles from "./ScrollBasedVelocityImagesDemo.module.scss";

export function ScrollBasedVelocityImagesDemo() {
  const row1Images = [
    "/assets/img/about-us/about-us/brand/client-KTM.png",
    "/assets/img/about-us/about-us/brand/client-astra.png",
    "/assets/img/about-us/about-us/brand/client-bank-bni.png",
    "/assets/img/about-us/about-us/brand/client-bank-bri.png",
    "/assets/img/about-us/about-us/brand/client-bank-bsi.png",
    "/assets/img/about-us/about-us/brand/client-bank-hsbc.png",
    "/assets/img/about-us/about-us/brand/client-djarum.png",
    "/assets/img/about-us/about-us/brand/client-dbs.png",
  ];

  const row2Images = [
    "/assets/img/about-us/about-us/brand/client-citilink.png",
    "/assets/img/about-us/about-us/brand/client-dana.png",
    "/assets/img/about-us/about-us/brand/client-flip.png",
    "/assets/img/about-us/about-us/brand/client-garuda-airline.png",
    "/assets/img/about-us/about-us/brand/client-kominfo.png",
    "/assets/img/about-us/about-us/brand/client-motogp.png",
    "/assets/img/about-us/about-us/brand/client-noice.png",
    "/assets/img/about-us/about-us/brand/client-ocbc.png",
    "/assets/img/about-us/about-us/brand/client-pokemon.png",

  ];

  return (
    <ScrollVelocityContainer style={{ padding: "40px 0 0 0", marginBottom: "120px" }}>
      {/* Row 1: Left to Right */}
      <ScrollVelocityRow baseVelocity={2.5} direction={1} style={{ marginBottom: "20px" }}>
        {row1Images.map((src, index) => (
          <div key={`row1-${index}`} className="des-brand-item-inner" style={{ margin: "0 10px" }}>
            <Image
              src={src}
              alt={`Brand ${index + 1}`}
              width={200}
              height={150}
              className={styles.brandImage}
              priority={index < 3}
            />
          </div>
        ))}
      </ScrollVelocityRow>

      {/* Row 2: Right to Left */}
      <ScrollVelocityRow baseVelocity={2.5} direction={-1}>
        {row2Images.map((src, index) => (
          <div key={`row2-${index}`} className="des-brand-item-inner" style={{ margin: "0 10px" }}>
            <Image
              src={src}
              alt={`Brand ${index + 13}`}
              width={180}
              height={80}
              className={styles.brandImage}
              priority={index < 3}
            />
          </div>
        ))}
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
  );
}

