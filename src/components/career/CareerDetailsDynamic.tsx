import React from 'react';
import { CalenderIcon, CategoryIcon, ExperienceIcon, TimingIcon } from '@/svg/CareerIcons';
import Link from 'next/link';

export interface JobDetailsData {
    title: string;
    department: string;
    location: string;
    date: string;
    type: string;
    summary: string;
    salary: string;
    salarySubtext?: string;
    experience: string;
    deadline: string;
    responsibilities: string[];
    qualifications: string[];
    benefits?: string[];
}

interface CareerDetailsDynamicProps {
    data: JobDetailsData;
}

const DEFAULT_BENEFITS = [
    'Full health insurance & outpatient benefits.',
    'Flexible working environment and hybrid schedules.',
    'Professional training and development budget.',
    'Annual wellness stipends.',
    'Performance bonus package.',
];

const CareerDetailsDynamic: React.FC<CareerDetailsDynamicProps> = ({ data }) => {
    const benefitsList = data.benefits && data.benefits.length > 0 ? data.benefits : DEFAULT_BENEFITS;

    return (
        <section className="tp-career-details-ptb pt-120 pb-100">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="tp-career-details-wrapper pb-40">
                            <div className="tp-career-details-top pb-40">
                                <span className="tp-career-details-subtitle">{data.department}</span>
                                <h1 className="tp-career-details-title tp_fade_anim">{data.title}</h1>
                                <div className="tp-career-details-info d-flex align-items-center">
                                    <div className="tp-career-details-info-item">
                                        <span>Location:</span>
                                        <p className="tp-career-details-info-val mb-0">{data.location}</p>
                                    </div>
                                    <div className="tp-career-details-info-item">
                                        <span>Date:</span>
                                        <p className="tp-career-details-info-val mb-0">{data.date}</p>
                                    </div>
                                    <div className="tp-career-details-info-item">
                                        <span>Job Type</span>
                                        <p className="tp-career-details-info-val mb-0">{data.type}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-career-details-wrap">
                                <div className="tp-career-details-summary-highlight mb-50 tp_fade_anim">
                                    <h2 className="tp-career-details-title-2 tp-career-summary-label">Job Summary</h2>
                                    <p className="tp-career-summary-text mb-0">{data.summary}</p>
                                </div>

                                <h2 className="tp-career-details-title-2 tp_fade_anim">Key Responsibilities</h2>
                                <div className="tp-career-details-list pb-50">
                                    <ul>
                                        {data.responsibilities.map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>

                                <h2 className="tp-career-details-title-2 tp_fade_anim">Qualifications</h2>
                                <div className="tp-career-details-list pb-50">
                                    <ul>
                                        {data.qualifications.map((qual, i) => (
                                            <li key={i}>{qual}</li>
                                        ))}
                                    </ul>
                                </div>

                                <h2 className="tp-career-details-title-2 tp_fade_anim">Perks &amp; Benefits</h2>
                                <div className="tp-career-details-list pb-20">
                                    <ul>
                                        {benefitsList.map((benefit, i) => (
                                            <li key={i}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-career-details-sidebar">
                            <div className="tp-career-details-sidebar-box">
                                <div className="tp-career-details-sidebar-heading">
                                    <span>Salary</span>
                                    <h2 className="tp-career-details-sidebar-title">{data.salary}</h2>
                                    {data.salarySubtext && (
                                        <p className="tp-career-details-sidebar-subtext mb-0">{data.salarySubtext}</p>
                                    )}
                                </div>

                                <div className="tp-career-details-sidebar-item d-flex">
                                    <div className="tp-career-details-sidebar-item-icon">
                                        <span><ExperienceIcon /></span>
                                    </div>
                                    <div className="tp-career-details-sidebar-item-content">
                                        <span>Experience</span>
                                        <p className="tp-career-details-sidebar-val mb-0">{data.experience}</p>
                                    </div>
                                </div>

                                <div className="tp-career-details-sidebar-item d-flex">
                                    <div className="tp-career-details-sidebar-item-icon">
                                        <span><TimingIcon /></span>
                                    </div>
                                    <div className="tp-career-details-sidebar-item-content">
                                        <span>Working Hours</span>
                                        <p className="tp-career-details-sidebar-val mb-0">09 AM to 06 PM</p>
                                    </div>
                                </div>

                                <div className="tp-career-details-sidebar-item d-flex">
                                    <div className="tp-career-details-sidebar-item-icon">
                                        <span><CategoryIcon /></span>
                                    </div>
                                    <div className="tp-career-details-sidebar-item-content">
                                        <span>Job Category</span>
                                        <p className="tp-career-details-sidebar-val mb-0">{data.department}</p>
                                    </div>
                                </div>

                                <div className="tp-career-details-sidebar-item d-flex">
                                    <div className="tp-career-details-sidebar-item-icon">
                                        <span><CalenderIcon /></span>
                                    </div>
                                    <div className="tp-career-details-sidebar-item-content">
                                        <span>Working Days</span>
                                        <p className="tp-career-details-sidebar-val mb-0">Weekly 5 Days (Mon to Fri)</p>
                                    </div>
                                </div>

                                <div className="tp-career-details-sidebar-item d-flex">
                                    <div className="tp-career-details-sidebar-item-icon">
                                        <span><TimingIcon /></span>
                                    </div>
                                    <div className="tp-career-details-sidebar-item-content">
                                        <span>Deadline</span>
                                        <p className="tp-career-details-sidebar-val mb-0">{data.deadline}</p>
                                    </div>
                                </div>

                                <div className="tp-career-details-sidebar-btn">
                                    <Link href={`/job-application?jobId=${encodeURIComponent(data.title.toLowerCase().replace(/\s+/g, '-'))}`}>Apply for the Job</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerDetailsDynamic;
