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
    title: '3D Visualisation',
    department: 'Design & Visuals',
    location: 'Jakarta (On-site)',
    date: '12 Oct 2026',
    type: 'Full time',
    summary: 'We are seeking a 3D Visualisation specialist to create immersive visual experiences, stage designs, and interactive event assets for Nomina’s creative projects and brand activations.',
    salary: 'Competitive & Negotiable',
    salarySubtext: 'Based on Experience & Portfolio',
    experience: '1+ Years Experience',
    deadline: '26 Oct 2026',
    responsibilities: [
        'Design 3D stages, booths, and spatial environments for events.',
        'Create 3D motion graphics and animations for digital displays.',
        'Collaborate with the creative director to visualize brand concepts.',
        'Prepare 3D assets for production and technical rendering.',
    ],
    qualifications: [
        'Proficiency in 3D software (Blender, Cinema 4D, Maya, or similar).',
        'Strong understanding of lighting, texturing, and rendering.',
        'Experience with event stage design or architectural visualization is a plus.',
        'Creative flair and attention to detail.',
    ],
    benefits: [
        'Creative and dynamic work environment.',
        'Health insurance and wellness programs.',
        'Opportunities for professional growth and training.',
        'Access to cutting-edge design tools and hardware.',
    ]
};

const Career3dDesignerMain = () => {
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

export default Career3dDesignerMain;

