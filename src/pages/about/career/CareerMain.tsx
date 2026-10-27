"use client";

import CursorAndBackgroundProvider from "@/components/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/components/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import CareerOpening from "@/components/career/CareerOpening";
import CreativeAgencyFooter from "@/layouts/footers/CreativeAgencyFooter";
import CareerBanner from "@/components/banner/CareerBanner";
import CareerLightHero from "@/components/hero-banner/CareerLightHero";

const CareerMain = () => {
  return (
    <ScrollSmoothProvider>
      <CursorAndBackgroundProvider bgColor="#ffffff" customClass="">
        <AnimationWrapper>
          <div className="tp-vertical-lines-overlay" aria-hidden="true" />
          <div className="tp-vertical-lines-content">
            {/* Global Components */}
            <BackToTop />
            <div id="smooth-wrapper">
              <div id="smooth-content">
                <main>
                  <CareerLightHero />
                  <CareerBanner />
                  <CareerOpening />
                </main>
                <CreativeAgencyFooter />
              </div>
            </div>
          </div>
        </AnimationWrapper>
      </CursorAndBackgroundProvider>
    </ScrollSmoothProvider>
  );
};

export default CareerMain;
