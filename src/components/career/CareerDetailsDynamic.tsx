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
    experience: string;
    deadline: string;
    responsibilities: string[];
    qualifications: string[];
}

interface CareerDetailsDynamicProps {
    data: JobDetailsData;
}

const CareerDetailsDynamic: React.FC<CareerDetailsDynamicProps> = ({ data }) => {
    return (
        <section className="tp-career-details-ptb pt-120 pb-100">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="tp-career-details-wrapper pb-40">
                            <div className="tp-career-details-top pb-80">
                                <span className="tp-career-details-subtitle">{data.department}</span>
                                <h1 className="tp-career-details-title">{data.title}</h1>
                                <div className="tp-career-details-info d-flex align-items-center">
                                    <div className="tp-career-details-info-item">
                                        <span>Location:</span>
                                        <h5>{data.location}</h5>
                                    </div>
                                    <div className="tp-career-details-info-item">
                                        <span>Date:</span>
                                        <h5>{data.date}</h5>
                                    </div>
                                    <div className="tp-career-details-info-item">
                                        <span>Job Type</span>
                                        <h5>{data.type}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="tp-career-details-wrap">
                                <h4 className="tp-career-details-title-2">Job Summary</h4>
                                <p className="pb-50">{data.summary}</p>

                                <h4 className="tp-career-details-title-2">Key Responsibilities</h4>
                                <div className="tp-career-details-list pb-50">
                                    <ul>
                                        {data.responsibilities.map((resp, i) => (
                                            <li key={i}>{resp}</li>
                                        ))}
                                    </ul>
                                </div>

                                <h4 className="tp-career-details-title-2">Qualifications</h4>
                                <div className="tp-career-details-list pb-50">
                                    <ul>
                                        {data.qualifications.map((qual, i) => (
                                            <li key={i}>{qual}</li>
                                        ))}
                                    </ul>
                                </div>

                                <h4 className="tp-career-details-title-2">Perks & Benefits</h4>
                                <div className="tp-career-details-list pb-20">
                                    <ul>
                                        <li>Full health insurance & outpatient benefits.</li>
                                        <li>Flexible working environment and hybrid schedules.</li>
                                        <li>Professional training and development budget.</li>
                                        <li>Annual wellness stipends.</li>
                                        <li>Performance bonus package.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="tp-career-details-sidebar">
                            <div className="tp-career-details-sidebar-box">
                                <div className="tp-career-details-sidebar-heading">
                                    <span>Avg. Salary</span>
                                    <h4 className="tp-career-details-sidebar-title">{data.salary}</h4>
                                </div>

                                <div className="tp-career-details-sidebar-item d-flex">
                                    <div className="tp-career-details-sidebar-item-icon">
                                        <span><ExperienceIcon /></span>
                                    </div>
                                    <div className="tp-career-details-sidebar-item-content">
                                        <span>Experience</span>
                                        <h5>{data.experience}</h5>
                                    </div>
                                </div>

                                <div className="tp-career-details-sidebar-item d-flex">
                                    <div className="tp-career-details-sidebar-item-icon">
                                        <span><TimingIcon /></span>
                                    </div>
                                    <div className="tp-career-details-sidebar-item-content">
                                        <span>Working Hours</span>
                                        <h5>09 AM to 06 PM</h5>
                                    </div>
                                </div>

                                <div className="tp-career-details-sidebar-item d-flex">
                                    <div className="tp-career-details-sidebar-item-icon">
                                        <span><CategoryIcon /></span>
                                    </div>
                                    <div className="tp-career-details-sidebar-item-content">
                                        <span>Job Category</span>
                                        <h5>{data.department}</h5>
                                    </div>
                                </div>

                                <div className="tp-career-details-sidebar-item d-flex">
                                    <div className="tp-career-details-sidebar-item-icon">
                                        <span><CalenderIcon /></span>
                                    </div>
                                    <div className="tp-career-details-sidebar-item-content">
                                        <span>Working Days</span>
                                        <h5>Weekly 5 Days (Mon to Fri)</h5>
                                    </div>
                                </div>

                                <div className="tp-career-details-sidebar-item d-flex">
                                    <div className="tp-career-details-sidebar-item-icon">
                                        <span><TimingIcon /></span>
                                    </div>
                                    <div className="tp-career-details-sidebar-item-content">
                                        <span>Deadline</span>
                                        <h5>{data.deadline}</h5>
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
