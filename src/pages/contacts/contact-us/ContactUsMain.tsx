"use client"
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import ContactUsForm from '@/components/contacts/ContactUsForm';
import ContactUsAbout from '@/components/about/ContactUsAbout';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import ContactLightHero from '@/components/hero-banner/ContactLightHero';
import StaggeredMenu from "@/components/shared/StaggeredMenu/StaggeredMenu";

const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "About us", link: "/about-creative-light" },
    { label: "Career", ariaLabel: "Join our team", link: "/career-light" },
    { label: "Career Application", ariaLabel: "Job Application Form", link: "/job-application-form" },
    { label: "Portofolio", ariaLabel: "View project portfolio", link: "/portfolio-showcase-light" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact-us-light" },
];

const socialItems = [
    { label: "Instagram", link: "https://instagram.com" },
    { label: "Behance", link: "https://behance.net" },
    { label: "LinkedIn", link: "https://linkedin.com" },
];

const ContactUsMain = () => {
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
                                {/* Main Content Sections */}
                                <main>
                                    <ContactLightHero />
                                    <ContactUsForm />
                                    <ContactUsAbout />
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

export default ContactUsMain;