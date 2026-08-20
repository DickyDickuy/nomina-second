"use client";

import React, { Suspense } from 'react';
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ApplicationForm from '@/components/forms/ApplicationForm';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import CreativeAgencyFooter from '@/layouts/footers/CreativeAgencyFooter';
import JobApplicationHero from '@/components/hero-banner/JobApplicationHero';

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
                                                        <Suspense fallback={<div className="text-center py-5">Loading application form...</div>}>
                                                            <ApplicationForm />
                                                        </Suspense>
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