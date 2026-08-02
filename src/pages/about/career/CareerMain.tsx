"use client"
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import CareerBenifit from '@/components/benefits/CareerBenifit';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import StaggeredMenu from "@/components/shared/StaggeredMenu/StaggeredMenu";
import CareerOpening from '@/components/career/CareerOpening';

const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "About us", link: "/about-creative-light" },
    { label: "Career", ariaLabel: "Join our team", link: "/career-light" },
    { label: "Portofolio", ariaLabel: "View project portfolio", link: "/portfolio-showcase-light" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact-us-light" },
];

const socialItems = [
    { label: "Instagram", link: "https://instagram.com" },
    { label: "Behance", link: "https://behance.net" },
    { label: "LinkedIn", link: "https://linkedin.com" },
];
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import CareerBanner from '@/components/banner/CareerBanner';
import CareerLightHero from '@/components/hero-banner/CareerLightHero';
import CareerSlider from '@/components/career/CareerSlider';

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