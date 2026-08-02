"use client";

import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ApplicationForm from '@/components/forms/ApplicationForm';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import StaggeredMenu from "@/components/shared/StaggeredMenu/StaggeredMenu";
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import JobApplicationHero from '@/components/hero-banner/JobApplicationHero';

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

const JobApplicationForm = () => {
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
                                    <JobApplicationHero />

                                    <div className="tp-application-aera pt-100 pb-140">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div className="col-lg-12">
                                                    <div className="tp-contact-form-wrap tp-application-form-wrap">
                                                        <ApplicationForm />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default JobApplicationForm;