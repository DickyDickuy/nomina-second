"use client";

import { useMemo } from "react";
import thumbImg from "../../../public/assets/img/event/career_banner_real.jpg";
import CursorAndBackgroundProvider from "@/components/provider/CustomCursorProvider";
import ScrollSmoothProvider from "@/components/provider/ScrollSmoothProvider";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import AboutUsBanner from '@/components/banner/AboutUsBanner';
import CareerDetailsDynamic, { JobDetailsData } from "@/components/career/CareerDetailsDynamic";

const getTwoWeeksDeadline = () => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
};

const jobData: JobDetailsData = {
    title: 'Sales and Account Manager',
    department: 'Business Development & Client Relations',
    location: 'Jakarta (On-site)',
    date: '13 Oct 2026',
    type: 'Full time',
    summary: 'We are looking for a proactive Sales and Account Manager to drive business growth, acquire new corporate clients, and nurture long-term partnerships for Nomina’s event and brand activation services.',
    salary: 'Competitive & Negotiable',
    salarySubtext: 'Based on Experience + Commission',
    experience: '2+ Years Experience',
    deadline: '', // Overridden by getTwoWeeksDeadline()
    responsibilities: [
        'Identify and pursue new business opportunities, pitching Nomina’s creative and event organizer services to prospective clients.',
        'Build, maintain, and nurture strong, long-lasting client relationships.',
        'Collaborate with the creative and project teams to develop compelling proposals and pitch decks.',
        'Monitor market trends, competitor activities, and industry developments to refine sales strategies.',
    ],
    qualifications: [
        'Proven track record in B2B sales, account management, or business development within the creative, agency, or events industry.',
        'Strong presentation, persuasion, and negotiation skills.',
        'Extensive network of corporate clients and brand managers in Jakarta.',
        'Target-oriented mindset with the ability to close deals effectively.',
    ],
    benefits: [
        'Competitive base salary with an attractive commission structure.',
        'Health insurance and professional development opportunities.',
        'Flexible and highly collaborative agency environment.',
        'Direct involvement in shaping the agency’s business growth.',
    ]
};

const CareerSalesAccountManagerMain = () => {
    const currentJobData = useMemo(() => ({
        ...jobData,
        deadline: getTwoWeeksDeadline()
    }), []);

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
                                    <AboutUsBanner image={thumbImg} />
                                    <CareerDetailsDynamic data={currentJobData} />
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

export default CareerSalesAccountManagerMain;
