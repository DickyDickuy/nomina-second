"use client";

import React from "react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/text-slider/ScrollVelocity";

// Slide data array
const slideData = [
  "UI Design",
  "Design Agency",
  "Strategy",
  "Digital Solution",
  "Business Growth",
  "Development",
  "IT Company",
  "SEO Agency",
  "Consulting",
  "Branding",
];

interface HomeMainTextSliderProps {
  bgColor?: string;
  titleCls?: string;
  baseVelocity?: number;
  direction?: 1 | -1;
}

const HomeMainTextSlider = ({
  bgColor = "red-bg-2",
  titleCls = "tp-text-slide-title",
  baseVelocity = 0.8,
  direction = 1,
}: HomeMainTextSliderProps) => {
  return (
    <div className="tp-text-slide-area">
      <div className={`tp-text-slide-wrapper ${bgColor}`} style={{ overflow: "hidden", padding: "18px 0" }}>
        <ScrollVelocityContainer>
          <ScrollVelocityRow baseVelocity={baseVelocity} direction={direction}>
            {slideData.map((title, index) => (
              <div
                key={index}
                className="tp-text-slide-item"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  marginRight: "20px",
                }}
              >
                <span className={titleCls}>{title}</span>
              </div>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
    </div>
  );
};

export default HomeMainTextSlider;