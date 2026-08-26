"use client";

import React, { useState, useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowFour, CheckIcon } from '@/svg';
import { submitApplication } from '@/actions/submit-application';

const OPEN_POSITIONS = [
    { id: 'account-executive', title: 'Account Executive' },
    { id: '3d-designer', title: '3D Designer' },
    { id: 'general', title: 'General Application' },
];

const ApplicationFormInner = ({ onReset }: { onReset: () => void }) => {
    const searchParams = useSearchParams();
    const [state, formAction, isPending] = useActionState(submitApplication, {});
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const queryJobId = searchParams?.get('jobId') || 'general';
    const matchedJob = OPEN_POSITIONS.find(
        (p) => p.id.toLowerCase() === queryJobId.toLowerCase()
    );
    const initialJob = matchedJob ? matchedJob.id : queryJobId;
    const [userSelectedJob, setUserSelectedJob] = useState<string | null>(null);
    const activeJob = userSelectedJob ?? initialJob;

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        } else {
            setSelectedFile(null);
        }
    };

    return (
        <div>
            {state.success ? (
                <div
                    style={{
                        padding: '40px 30px',
                        background: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                        borderRadius: '16px',
                        textAlign: 'center',
                    }}
                    className="mb-30"
                >
                    <div
                        style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: '#22c55e',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 20px',
                        }}
                    >
                        <CheckIcon />
                    </div>
                    <h3 style={{ color: '#15803d', fontSize: '24px', fontWeight: 700, marginBottom: '10px' }}>
                        Application Submitted!
                    </h3>
                    <p style={{ color: '#166534', fontSize: '16px', maxWidth: '500px', margin: '0 auto 25px' }}>
                        {state.message}
                    </p>
                    <button
                        type="button"
                        onClick={onReset}
                        className="tp-btn-yellow-green green-solid btn-60"
                        style={{ padding: '0 30px', height: '50px', fontSize: '15px' }}
                    >
                        <span>
                            <span className="text-1">Submit Another Application</span>
                            <span className="text-2">Submit Another Application</span>
                        </span>
                    </button>
                </div>
            ) : (
                <form action={formAction} id="contact-form">
                    <p className="sr-only">
                        You are currently viewing the job application form for the {activeJob} position at NOMINA.
                    </p>
                    {state.message && !state.success && (
                        <div
                            style={{
                                padding: '16px 20px',
                                background: '#fef2f2',
                                border: '1px solid #fecaca',
                                borderRadius: '10px',
                                color: '#b91c1c',
                                marginBottom: '25px',
                                fontSize: '15px',
                            }}
                        >
                            {state.message}
                        </div>
                    )}

                    <div className="row">
                        {/* Position / Job Applying For */}
                        <div className="col-lg-12">
                            <div className="tp-contact-form-input mb-20">
                                <label>Position Applying For*</label>
                                <select
                                    name="job_id"
                                    value={activeJob}
                                    onChange={(e) => setUserSelectedJob(e.target.value)}
                                    style={{
                                        width: '100%',
                                        background: '#f8fafc',
                                        border: '1px solid #cbd5e1',
                                        borderRadius: '10px',
                                        color: '#111111',
                                        padding: '14px 18px',
                                        fontSize: '15px',
                                        outline: 'none',
                                    }}
                                >
                                    {OPEN_POSITIONS.map((pos) => (
                                        <option key={pos.id} value={pos.id}>
                                            {pos.title}
                                        </option>
                                    ))}
                                    {!OPEN_POSITIONS.some((p) => p.id === activeJob) && (
                                        <option value={activeJob}>{activeJob}</option>
                                    )}
                                </select>
                            </div>
                        </div>

                        {/* Name */}
                        <div className="col-lg-6">
                            <div className="tp-contact-form-input mb-20">
                                <label>Your Name*</label>
                                <input name="name" type="text" placeholder="e.g. John Doe" required />
                                {state.errors?.name && (
                                    <span style={{ color: '#dc2626', fontSize: '13px', marginTop: '4px', display: 'block' }}>
                                        {state.errors.name}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-lg-6">
                            <div className="tp-contact-form-input mb-20">
                                <label>Your Email Address*</label>
                                <input name="email" type="email" placeholder="name@company.com" required />
                                {state.errors?.email && (
                                    <span style={{ color: '#dc2626', fontSize: '13px', marginTop: '4px', display: 'block' }}>
                                        {state.errors.email}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Why Apply */}
                        <div className="col-lg-12">
                            <div className="tp-contact-form-input mb-20">
                                <label>Why did you decide to apply here and why should we select you?*</label>
                                <textarea
                                    name="why_apply"
                                    placeholder="Tell us about your motivation and key strengths..."
                                    required
                                    rows={4}
                                ></textarea>
                                {state.errors?.why_apply && (
                                    <span style={{ color: '#dc2626', fontSize: '13px', marginTop: '4px', display: 'block' }}>
                                        {state.errors.why_apply}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Project Highlight */}
                        <div className="col-lg-12">
                            <div className="tp-contact-form-input mb-20">
                                <label>Tell us about a project that you worked on and felt proud of.*</label>
                                <textarea
                                    name="project_highlight"
                                    placeholder="Describe the project goal, your role, and the impact..."
                                    required
                                    rows={4}
                                ></textarea>
                                {state.errors?.project_highlight && (
                                    <span style={{ color: '#dc2626', fontSize: '13px', marginTop: '4px', display: 'block' }}>
                                        {state.errors.project_highlight}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Portfolio */}
                        <div className="col-lg-12">
                            <div className="tp-contact-form-input mb-20">
                                <label>Share your portfolio link (Behance, Dribbble, GitHub, etc.)</label>
                                <input name="portfolio" type="text" placeholder="https://behance.net/yourprofile" />
                            </div>
                        </div>

                        {/* Salary */}
                        <div className="col-lg-12">
                            <div className="tp-contact-form-input mb-20">
                                <label>Your current salary & salary expectations</label>
                                <input name="salary" type="text" placeholder="e.g. Current: $X,000 / Expected: $Y,000" />
                            </div>
                        </div>

                        {/* CV Upload */}
                        <div className="col-lg-12">
                            <div className="tp-contact-form-input mb-30">
                                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 600 }}>
                                    Upload your CV (PDF, DOC, DOCX)*
                                </label>

                                <input
                                    id="cv-upload"
                                    name="cv"
                                    type="file"
                                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    onChange={handleFileChange}
                                    required
                                    style={{ display: 'none' }}
                                />

                                <div className="d-flex flex-wrap align-items-center gap-3">
                                    <label
                                        htmlFor="cv-upload"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            padding: '12px 24px',
                                            background: '#f8fafc',
                                            border: '1.5px dashed #cbd5e1',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            color: '#1e293b',
                                            transition: 'all 0.2s ease',
                                            marginBottom: 0,
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = '#FF3203';
                                            e.currentTarget.style.backgroundColor = '#fff7ed';
                                            e.currentTarget.style.color = '#FF3203';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = '#cbd5e1';
                                            e.currentTarget.style.backgroundColor = '#f8fafc';
                                            e.currentTarget.style.color = '#1e293b';
                                        }}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="17 8 12 3 7 8" />
                                            <line x1="12" y1="3" x2="12" y2="15" />
                                        </svg>
                                        <span>{selectedFile ? 'Change CV File' : 'Choose CV File'}</span>
                                    </label>

                                    {selectedFile ? (
                                        <div
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                padding: '10px 16px',
                                                background: '#f0fdf4',
                                                border: '1px solid #bbf7d0',
                                                borderRadius: '10px',
                                                fontSize: '13px',
                                                color: '#15803d',
                                                fontWeight: 500,
                                            }}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                <polyline points="14 2 14 8 20 8" />
                                            </svg>
                                            <span style={{ maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontWeight: 600 }}>
                                                {selectedFile.name}
                                            </span>
                                            <span style={{ color: '#86efac', fontSize: '11px' }}>•</span>
                                            <span style={{ fontSize: '12px', color: '#166534' }}>
                                                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                            </span>
                                        </div>
                                    ) : (
                                        <span style={{ fontSize: '13px', color: '#94a3b8' }}>
                                            No file chosen (PDF, DOC, DOCX max 10MB)
                                        </span>
                                    )}
                                </div>

                                {state.errors?.cv && (
                                    <span style={{ color: '#dc2626', fontSize: '13px', marginTop: '6px', display: 'block' }}>
                                        {state.errors.cv}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="col-lg-12">
                            <div className="tp-application-form-btn d-flex justify-content-end mt-10">
                                <div className="tp-application-btn mb-15">
                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className="tp-btn-yellow-green green-solid btn-60"
                                        style={{ opacity: isPending ? 0.7 : 1, cursor: isPending ? 'not-allowed' : 'pointer' }}
                                    >
                                        <span>
                                            <span className="text-1">
                                                {isPending ? 'Submitting...' : 'Submit Now'}
                                            </span>
                                            <span className="text-2">
                                                {isPending ? 'Submitting...' : 'Submit Now'}
                                            </span>
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
            )}
        </div>
    );
};

const ApplicationForm = () => {
    const [formKey, setFormKey] = useState(0);
    return <ApplicationFormInner key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
};

export default ApplicationForm;