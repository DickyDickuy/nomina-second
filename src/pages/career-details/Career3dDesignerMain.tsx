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
    title: '3D Visualizer',
    department: 'Design & Visuals',
    location: 'Jakarta (On-site)',
    date: '12 Oct 2026',
    type: 'Full time',
    summary: 'Create immersive visual experiences, spatial stage designs, and interactive digital assets for NOMINA’s creative projects and brand activations.',
    salary: 'Competitive & Negotiable',
    salarySubtext: 'Based on Experience & Portfolio',
    experience: '1+ Years Experience',
    deadline: '26 Oct 2026',
    responsibilities: [
        'Spatial & Stage Design: Craft 3D stages, custom booths, and immersive spatial environments for live events.',
        'Motion Graphics: Create 3D motion graphics and dynamic animations for digital displays and screen setups.',
        'Concept Visualization: Collaborate alongside Creative Directors to translate high-level brand concepts into realistic renders.',
        'Asset Production: Prepare technical 3D assets and high-resolution renders for production and construction teams.',
    ],
    qualifications: [
        'Proficiency in industry-standard 3D software (Blender, Cinema 4D, Maya, or equivalent).',
        'Strong mastery of lighting, texturing, spatial composition, and rendering.',
        'Experience in event stage design, spatial branding, or architectural visualization is preferred.',
        'Strong artistic sensibility with a keen eye for technical detail.',
    ],
    benefits: [
        'Creative, dynamic, and collaborative agency environment.',
        'Comprehensive health insurance and wellness coverage.',
        'Ongoing opportunities for professional growth and training.',
        'Direct access to high-performance hardware and cutting-edge design software.',
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

