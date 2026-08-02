"use client";

import thumbImg from "../../../public/assets/img/event/career_banner_real.jpg";
import CursorAndBackgroundProvider from "@/components/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/components/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import StaggeredMenu from "@/components/shared/StaggeredMenu/StaggeredMenu";
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import AboutUsBanner from '@/components/banner/AboutUsBanner';
import CareerDetailsDynamic, { JobDetailsData } from "@/components/career/CareerDetailsDynamic";

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

const jobData: JobDetailsData = {
    title: 'Account Executive',
    department: 'Client Services / Partnerships',
    location: 'Jakarta (Hybrid)',
    date: '25 Jul 2026',
    type: 'Full time (Hybrid)',
    summary: 'We are seeking an Account Executive to manage Nomina\'s client relationships, align event goals, prepare corporate pitches, and lead partnership deals for creative events and brand activations.',
    salary: 'Rp 8.000.000 - Rp 12.000.000 (Monthly)',
    experience: '2+ Years Experience',
    deadline: '31 Aug 2026',
    responsibilities: [
        'Act as the primary point of contact for clients, ensuring clear communication throughout event lifecycles.',
        'Prepare professional proposals, budgets, and sponsorship presentations.',
        'Identify and pitch Nomina’s creative services to new potential corporate partners.',
        'Coordinate with internal creative, design, and production teams to deliver projects on scope.',
        'Maintain strong long-term relationships with existing corporate accounts.'
    ],
    qualifications: [
        'Bachelor\'s degree in Marketing, Communications, Business, or related fields.',
        'Minimum 2 years of experience as an Account Executive, preferably in Event Organizer (EO) or Creative Agency.',
        'Excellent pitching, negotiation, and communication skills.',
        'Ability to manage project timelines and multiple client accounts simultaneously.',
        'Proficiency in Google Workspace (Slides, Sheets) and pitch presentations.'
    ]
};

const AccountExecutiveMain = () => {
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
                                    <AboutUsBanner image={thumbImg} spacingCls='pt-100' />
                                    <CareerDetailsDynamic data={jobData} />
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

export default AccountExecutiveMain;
