"use client";

import mapIcon from '../../../public/assets/img/contact/map-icon.svg';
import Image from 'next/image';
import React, { useActionState, useState } from 'react';
import { submitContact } from '@/actions/submit-contact';
import { CheckIcon } from '@/svg';

const ContactUsFormInner = ({ onReset }: { onReset: () => void }) => {
    const [state, formAction, isPending] = useActionState(submitContact, {});

    return (
        <div id="down" className="tp-contact-us-form-ptb pt-60 pb-120">
            <div className="container container-1750">
                <div className="tp-contact-us-form-wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-contact-us-map p-relative">
                                <div className="tp-contact-map-icon-box">
                                    <div className="tp-contact-map-icon">
                                        <span><Image src={mapIcon} alt="map icon" /></span>
                                    </div>
                                </div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.0285172741008!2d106.8246733564787!3d-6.256217098426548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1c6a31a96e1%3A0x28c9cd8b8e265b95!2sNomina%20Indonesia%20Creative!5e0!3m2!1sen!2sus!4v1785636687010!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-contact-us-wrap">
                                <h4 className="tp-contact-us-title mb-55">Send a Message</h4>

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
                                            Message Sent!
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
                                                <span className="text-1">Send Another Message</span>
                                                <span className="text-2">Send Another Message</span>
                                            </span>
                                        </button>
                                    </div>
                                ) : (
                                    <form id="contact-form" action={formAction}>
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
                                            <div className="col-lg-6">
                                                <div className="tp-contact-form-input mb-20">
                                                    <label>Full Name*</label>
                                                    <input name="name" type="text" placeholder="e.g. John Doe" required />
                                                    {state.errors?.name && (
                                                        <span style={{ color: '#dc2626', fontSize: '13px', marginTop: '4px', display: 'block' }}>
                                                            {state.errors.name}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="tp-contact-form-input mb-20">
                                                    <label>Email Address*</label>
                                                    <input name="email" type="email" placeholder="name@company.com" required />
                                                    {state.errors?.email && (
                                                        <span style={{ color: '#dc2626', fontSize: '13px', marginTop: '4px', display: 'block' }}>
                                                            {state.errors.email}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="tp-contact-form-input mb-20">
                                                    <label>Website Link</label>
                                                    <input name="website" type="url" placeholder="https://yourcompany.com" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="tp-contact-form-input mb-20">
                                                    <label>How Can We Help You?*</label>
                                                    <textarea name="message" placeholder="Briefly describe your project or inquiry..." required></textarea>
                                                    {state.errors?.message && (
                                                        <span style={{ color: '#dc2626', fontSize: '13px', marginTop: '4px', display: 'block' }}>
                                                            {state.errors.message}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="tp-contact-form-btn">
                                                    <button
                                                        className="w-100"
                                                        type="submit"
                                                        disabled={isPending}
                                                        style={{ opacity: isPending ? 0.7 : 1, cursor: isPending ? 'not-allowed' : 'pointer' }}
                                                    >
                                                        <span>
                                                            <span className="text-1">{isPending ? 'Sending...' : 'Send Message'}</span>
                                                            <span className="text-2">{isPending ? 'Sending...' : 'Send Message'}</span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactUsForm = () => {
    const [formKey, setFormKey] = useState(0);
    return <ContactUsFormInner key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
};

export default ContactUsForm;