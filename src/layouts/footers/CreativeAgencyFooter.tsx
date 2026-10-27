"use client";

import React from "react";
import { Footer } from "@/components/Footer";

interface FooterProps {
  bgColor?: string;
  className?: string;
  Zindex?: string;
}

const CreativeAgencyFooter: React.FC<FooterProps> = ({
  bgColor = "#121315",
  className = "",
  Zindex = "",
}) => {
  return (
    <Footer
      bgColor={bgColor}
      className={`${className} ${Zindex}`.trim()}
    />
  );
};

export default CreativeAgencyFooter;
