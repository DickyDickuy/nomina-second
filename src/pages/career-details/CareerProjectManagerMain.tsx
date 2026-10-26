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
    summary: 'Lead end-to-end event execution, turning creative visions into high-impact experiences delivered on time, within budget, and beyond client expectations.',
    salary: 'Competitive & Negotiable',
    salarySubtext: 'Based on Experience & Track Record',
    experience: '3+ Years Experience',
    deadline: '', // Overridden by getTwoWeeksDeadline()
    responsibilities: [
        'Project Leadership: Drive the full project lifecycle from briefing and concept development to execution and post-event reporting.',
        'Planning & Budgeting: Manage project roadmaps, timelines, and financial allocations.',
        'Team Coordination: Orchestrate internal creative, production, and third-party vendor teams for seamless execution.',
        'Client Management: Serve as the primary point of contact, building long-term partnerships and managing expectations.',
    ],
    qualifications: [
        'Proven project management track record in an event agency, creative firm, or live production environment.',
        'Strong leadership, organizational skills, and decisive problem-solving under pressure.',
        'Professional fluency in English and Indonesian (written and spoken).',
    ],
    benefits: [
        'Dynamic, fast-paced agency culture.',
        'Comprehensive health and wellness coverage.',
        'Clear opportunities for career advancement.',
        'Direct exposure to high-profile brands and national-scale events.',
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
