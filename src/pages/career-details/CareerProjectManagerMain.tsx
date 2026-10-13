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
    title: 'Project Manager',
    department: 'Project Management',
    location: 'Jakarta (On-site)',
    date: '13 Oct 2026',
    type: 'Full time',
    summary: 'We are looking for an experienced Project Manager to lead and orchestrate end-to-end event execution, ensuring creative visions are delivered on time, within budget, and beyond client expectations.',
    salary: 'Competitive & Negotiable',
    salarySubtext: 'Based on Experience & Track Record',
    experience: '3+ Years Experience',
    deadline: '', // Overridden by getTwoWeeksDeadline()
    responsibilities: [
        'Lead end-to-end project lifecycle from initial briefing and concept development to final event execution and post-event reporting.',
        'Develop and manage comprehensive project plans, timelines, and budgets.',
        'Coordinate cross-functional teams including creative, production, and external vendors to ensure seamless delivery.',
        'Act as the primary point of contact for clients, managing expectations and fostering strong relationships.',
    ],
    qualifications: [
        'Proven experience as a Project Manager in an event organizer, creative agency, or similar industry.',
        'Exceptional organizational, time-management, and multitasking skills.',
        'Strong leadership capabilities and problem-solving mindset under high-pressure situations.',
        'Excellent communication and negotiation skills in both Indonesian and English.',
    ],
    benefits: [
        'Dynamic and fast-paced creative work environment.',
        'Health insurance and comprehensive wellness programs.',
        'Career advancement opportunities in a growing agency.',
        'Exposure to high-profile brands and national-scale events.',
    ]
};

const CareerProjectManagerMain = () => {
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

export default CareerProjectManagerMain;
