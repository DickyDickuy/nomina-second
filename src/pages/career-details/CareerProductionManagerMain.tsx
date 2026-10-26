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
    summary: 'Oversee technical and structural event execution, managing stage builds, AV installations, vendor logistics, and on-site production.',
    salary: 'Competitive & Negotiable',
    salarySubtext: 'Based on Experience & Expertise',
    experience: '4+ Years Experience',
    deadline: '', // Overridden by getTwoWeeksDeadline()
    responsibilities: [
        'Technical Production: Oversee all staging, lighting, audio, and visual installations for physical event setups.',
        'Vendor Management: Source, negotiate with, and direct third-party vendors and equipment suppliers.',
        'Quality & Safety: Ensure technical setups comply with safety standards and design specifications.',
        'On-Site Supervision: Direct the full load-in, build-up, show-run, and dismantling operations on-site.',
    ],
    qualifications: [
        'Proven track record in event production, technical direction, or stage management.',
        'Deep expertise in AV equipment (sound, lighting, LED screens) and custom stage/booth fabrication.',
        'Ability to interpret technical drawings and 3D renders into physical builds.',
        'Strong crisis management skills and physical stamina for demanding on-site operations.',
    ],
    benefits: [
        'Hands-on leadership role with direct impact on high-profile live events.',
        'Comprehensive health and wellness coverage.',
        'Collaborative culture working alongside top-tier creative and technical teams.',
        'Direct access to cutting-edge event technologies and production tools.',
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
