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
    title: 'Production Manager',
    department: 'Production & Operations',
    location: 'Jakarta (On-site)',
    date: '13 Oct 2026',
    type: 'Full time',
    summary: 'We are seeking a detail-oriented Production Manager to oversee the technical and structural execution of events, managing vendors, stage builds, audio-visual setups, and on-site logistics.',
    salary: 'Competitive & Negotiable',
    salarySubtext: 'Based on Experience & Expertise',
    experience: '4+ Years Experience',
    deadline: '', // Overridden by getTwoWeeksDeadline()
    responsibilities: [
        'Oversee all technical and physical production aspects of events, including staging, lighting, audio, and visual installations.',
        'Source, negotiate with, and manage third-party vendors and suppliers.',
        'Ensure all structures and technical setups comply with safety regulations and quality standards.',
        'Supervise the load-in, build-up, show run, and dismantling phases on-site.',
    ],
    qualifications: [
        'Extensive background in event production, technical direction, or stage management.',
        'Deep understanding of technical equipment (sound, lighting, LED screens) and custom booth/stage fabrication.',
        'Ability to read technical drawings and 3D renders to translate them into reality.',
        'Strong crisis management skills and physical stamina for demanding on-site schedules.',
    ],
    benefits: [
        'Hands-on role with direct impact on spectacular event executions.',
        'Health insurance and wellness coverage.',
        'Collaborative environment with top-tier creative and technical teams.',
        'Opportunities to work with the latest event technologies.',
    ]
};

const CareerProductionManagerMain = () => {
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

export default CareerProductionManagerMain;
