"use client";

import React, { useActionState, useState } from 'react';
import { submitContact } from '@/actions/submit-contact';
import { CheckIcon } from '@/svg';
import NominaInteractiveMap from '@/components/contacts/NominaInteractiveMap';

const ContactUsFormInner = ({ onReset }: { onReset: () => void }) => {
    const [state, formAction, isPending] = useActionState(submitContact, {});

    return (
        <div id="down" className="tp-contact-us-form-ptb pt-60 pb-120">
            <div className="container container-1750">
                <div className="tp-contact-us-form-wrapper">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-contact-us-map p-relative">
                                <NominaInteractiveMap />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-contact-us-wrap">
                                <h2 className="tp-contact-us-title mb-55 tp_fade_anim">Send a Message</h2>

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
                                                    {state.errors?.website && (
                                                        <span style={{ color: '#dc2626', fontSize: '13px', marginTop: '4px', display: 'block' }}>
                                                            {state.errors.website}
                                                        </span>
                                                    )}
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