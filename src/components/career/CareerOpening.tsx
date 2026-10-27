"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";

import { ArrowTwenty } from "@/svg/ArrowIcons";
import { ArrowSvg, ButtonBlurFilter } from "@/svg";
import { cn } from "@/lib/utils";

export interface CareerCarouselItem {
  src: string;
  alt: string;
  title?: string;
  department?: string;
  type?: string;
  openRoles?: string;
  href?: string;
}

const JOB_OPENINGS: (CareerCarouselItem & { filterId: string })[] = [
  {
    src: "/assets/img/portfolio/skiper/HSBC SUMMIT 2025.webp",
    alt: "Project Manager — NOMINA Creative",
    title: "Project Manager",
    department: "Project Management",
    openRoles: "(01 Open Role)",
    type: "Full-Time",
    filterId: "buttonFilter1",
    href: "/career-project-manager",
  },
  {
    src: "/assets/img/portfolio/skiper/Super Music - Break Out Day 2024.webp",
    alt: "Production Manager — NOMINA Creative",
    title: "Production Manager",
    department: "Production & Operations",
    openRoles: "(01 Open Role)",
    type: "Full-Time",
    filterId: "buttonFilter2",
    href: "/career-production-manager",
  },
  {
    src: "/assets/img/portfolio/skiper/GRAND OPENING OCBC PREMIUM GUEST HOUSE TOMANG.webp",
    alt: "Sales & Account Manager — NOMINA Creative",
    title: "Sales & Account Manager",
    department: "Business Development",
    openRoles: "(01 Open Role)",
    type: "Full-Time",
    filterId: "buttonFilter3",
    href: "/career-sales-account-manager",
  },
  {
    src: "/assets/img/portfolio/skiper/IGDX 2024.webp",
    alt: "3D Visualizer — NOMINA Creative",
    title: "3D Visualizer",
    department: "Design & Visuals",
    openRoles: "(01 Open Role)",
    type: "Full-Time",
    filterId: "buttonFilter4",
    href: "/career-3d-visualizer",
  },
];

// 3x repetitions (12 slides) so Swiper loop mode has enough buffer to populate
// both left and right cards on initial render without missing slides
const CAROUSEL_SLIDES: CareerCarouselItem[] = [
  ...JOB_OPENINGS,
  ...JOB_OPENINGS,
  ...JOB_OPENINGS,
];

const Carousel_003 = ({
  images,
  className,
  showPagination = true,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  images: CareerCarouselItem[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (targetIdx: number) => {
    if (!swiperInstance || swiperInstance.destroyed) return;
    const currentReal = swiperInstance.realIndex % JOB_OPENINGS.length;
    if (currentReal === targetIdx) return;

    const N = JOB_OPENINGS.length;
    let diff = targetIdx - currentReal;
    // Calculate shortest path around the circle [-N/2, N/2]
    if (diff > N / 2) diff -= N;
    if (diff < -N / 2) diff += N;

    if (diff === 1) {
      // 1 step forward (e.g. from slide 4 to slide 1: slides right by 1)
      swiperInstance.slideNext();
    } else if (diff === -1) {
      // 1 step backward (e.g. from slide 1 to slide 4: slides left by 1)
      swiperInstance.slidePrev();
    } else {
      // Find the nearest DOM clone slide matching targetIdx
      let bestIndex = -1;
      let minDistance = Infinity;
      swiperInstance.slides.forEach((slideEl, domIndex) => {
        const slideIndex = Number(
          slideEl.getAttribute("data-swiper-slide-index")
        );
        if (slideIndex === targetIdx) {
          const dist = Math.abs(domIndex - swiperInstance.activeIndex);
          if (dist < minDistance) {
            minDistance = dist;
            bestIndex = domIndex;
          }
        }
      });

      if (bestIndex !== -1) {
        swiperInstance.slideTo(bestIndex);
      } else {
        swiperInstance.slideToLoop(targetIdx);
      }
    }
  };

  const css = `
  .Carousal_003 {
    width: 100%;
    height: 350px;
    padding-bottom: 50px !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
  }

  .swiper-pagination-bullet {
    background-color: #000 !important;
  }
`;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.3,
      }}
      className={cn("relative w-full max-w-4xl mx-auto px-5", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) =>
            setActiveIndex(swiper.realIndex % JOB_OPENINGS.length)
          }
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                  delay: 2000,
                  disableOnInteraction: false,
                }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          slideToClickedSlide={true}
          loop={loop}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={
            showNavigation
              ? {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Navigation]}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} className="relative cursor-pointer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-full w-full object-cover"
                src={item.src}
                alt={item.alt}
              />

              {/* Clean Bottom Overlay matching the reference */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-5"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0.88) 100%)",
                }}
              >
                {item.title && (
                  <h3 className="font-heading text-sm sm:text-base text-white uppercase tracking-wider mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                )}
                {item.href && (
                  <Link
                    href={item.href}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 w-fit px-3 py-1.5 rounded-full bg-white text-nomina-black hover:bg-nomina-orange hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>

        {/* 4 Clearly Visible Circular Pagination Dots */}
        {showPagination && (
          <div className="flex items-center justify-center gap-3 mt-6 z-10 relative">
            {JOB_OPENINGS.map((job, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleDotClick(idx)}
                className="p-1.5 focus:outline-none cursor-pointer group flex items-center justify-center border-0 bg-transparent"
                aria-label={`Go to role ${idx + 1}: ${job.title}`}
              >
                <span
                  className={cn(
                    "block transition-all duration-300",
                    activeIndex === idx
                      ? "w-3 h-3 bg-black scale-110 shadow-sm"
                      : "w-3 h-3 bg-[#d1d5db] border border-black/20 group-hover:bg-[#9ca3af]"
                  )}
                  style={{ borderRadius: "50%" }}
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Skiper49 = () => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-white py-6">
      <Carousel_003
        className=""
        images={CAROUSEL_SLIDES}
        showPagination
        loop
      />
    </div>
  );
};

export { Skiper49, Carousel_003 };

const CareerOpening = () => {
  const ApplyButton = ({
    filterId,
    link,
  }: {
    filterId: string;
    link: string;
  }) => (
    <Link href={link} className="tp-btn-black btn-red-bg">
      <span className="tp-btn-black-filter-blur">
        <ButtonBlurFilter filterId={filterId} />
      </span>
      <span
        className="tp-btn-black-filter d-inline-flex align-items-center"
        style={{ filter: `url(#${filterId})` }}
      >
        <span className="tp-btn-black-text">Apply Now</span>
        <span className="tp-btn-black-circle">
          <ArrowSvg />
        </span>
      </span>
    </Link>
  );

  return (
    <section className="tp-career-opening-ptb pt-120 pb-80 bg-white">
      <div className="container container-1230">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-benefit-heading mb-60">
              <div className="ar-about-us-4-title-box tp_fade_anim d-flex align-items-center mb-15">
                <span className="tp-section-subtitle pre">Join Nomina</span>
                <div className="ar-about-us-4-icon">
                  <ArrowTwenty />
                </div>
              </div>
              <h2 className="tp-section-title lts tp_fade_anim">
                Current Openings
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Skiper49 / Carousel_003 Coverflow Slider */}
      <div className="mb-70">
        <Skiper49 />
      </div>

      {/* Clean Role Table List */}
      <div className="container container-1230">
        <div className="tp-career-opening-item d-none d-lg-block">
          <div className="row">
            <div className="col-lg-4">
              <div className="tp-career-opening-heading">
                <span>Position</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tp-career-opening-heading">
                <span>Roles</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tp-career-opening-heading">
                <span>Type</span>
              </div>
            </div>
          </div>
        </div>

        {JOB_OPENINGS.map((job, index) => (
          <div key={index} className="tp-career-opening-item ptb tp_fade_anim">
            <div className="row align-items-center">
              <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                <div className="tp-career-opening-title">
                  <h3 className="tp-career-opening-title-name">
                    <Link href={job.href || "/career"}>{job.title}</Link>
                  </h3>
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                <div className="tp-career-opening-role">
                  <span>{job.openRoles}</span>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="tp-career-opening-Type d-flex flex-column flex-sm-row justify-content-sm-between align-items-start align-items-sm-center gap-3 gap-sm-0">
                  <span>{job.type}</span>
                  <div className="tp-career-opening-btn">
                    <ApplyButton
                      filterId={job.filterId}
                      link={job.href || "/career"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerOpening;
