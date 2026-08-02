"use client"
import { ArrowFour } from '@/svg';
import React from 'react';

const ApplicationForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={handleSubmit} id="contact-form">
            <div className="row">
                <div className="col-lg-6">
                    <div className="tp-contact-form-input mb-20">
                        <label>Your Name*</label>
                        <input name="name" type="text" placeholder="e.g. John Doe" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="tp-contact-form-input mb-20">
                        <label>Your Email Address*</label>
                        <input name="email" type="email" placeholder="name@company.com" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <label>Why did you decide to apply here and why should we select you?*</label>
                        <textarea name="why_apply" placeholder="Tell us about your motivation and key strengths..."></textarea>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <label>Tell us about a project that you worked on and felt proud of.*</label>
                        <textarea name="project_highlight" placeholder="Describe the project goal, your role, and the impact..."></textarea>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <label>Share your portfolio link (Behance, Dribbble, GitHub, etc.)*</label>
                        <input name="portfolio" type="text" placeholder="https://behance.net/yourprofile" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="tp-contact-form-input mb-20">
                        <label>Your current salary & salary expectations*</label>
                        <input name="salary" type="text" placeholder="e.g. Current: $X,000 / Expected: $Y,000" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="tp-application-form-btn d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
                        <div className="tp-application-upload mb-15">
                            <span>Upload your CV *</span>
                            <input type="file" />
                        </div>
                        <div className="tp-application-btn mb-15 mt-10">
                            <button type="submit" className="tp-btn-yellow-green green-solid btn-60">
                                <span>
                                    <span className="text-1">Submit Now</span>
                                    <span className="text-2">Submit Now</span>
                                </span>
                                <i>
                                    <ArrowFour />
                                    <ArrowFour />
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ApplicationForm;