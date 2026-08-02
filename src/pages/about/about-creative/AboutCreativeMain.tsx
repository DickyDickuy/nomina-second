"use client";

import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import StaggeredMenu from "@/components/shared/StaggeredMenu/StaggeredMenu";
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import HomeMainTextSlider from '@/components/text-slider/HomeMainTextSlider';
import { ScrollBasedVelocityImagesDemo } from '@/components/about/ScrollBasedVelocityImagesDemo';
import TeamSection from '@/components/team/TeamSection';
import CreativeAboutTwo from '@/components/about/CreativeAboutTwo';
import HomeMainBanner from '@/components/banner/HomeMainBanner';
import CreativeAbout from '@/components/about/CreativeAbout';

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

const AboutCreativeMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider bgColor="#ffffff" customClass="">
                <AnimationWrapper>
                    <div className="tp-vertical-lines-overlay" aria-hidden="true" />
                    <div className="tp-vertical-lines-content">
                        <BackToTop />
                        <div id="smooth-wrapper">
                            <div id="smooth-content">
                                <main>
                                    <CreativeAbout />
                                    <HomeMainTextSlider bgColor='' titleCls='tp-about-us-2-text-title' direction={1} baseVelocity={0.8} />
                                    <CreativeAboutTwo />
                                    <HomeMainBanner ColorStyleCls='pink-style' />
                                    <HomeMainTextSlider bgColor='pink-bg' direction={-1} baseVelocity={0.8} />
                                    <ScrollBasedVelocityImagesDemo />
                                    <TeamSection />
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

export default AboutCreativeMain;