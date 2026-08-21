"use client";

import CreativeAgencyCopyright from './subComponents/CreativeAgencyCopyright';
import { FooterSocialIcons } from './subComponents/FooterSocialIcons';
import Link from 'next/link';
import React from 'react';

interface FooterProps {
    bgColor?: string;
    className?: string;
    Zindex?: string;
}

const CreativeAgencyFooter: React.FC<FooterProps> = ({ bgColor = "#121315", className = "", Zindex = "" }) => {
    return (
        <>
            <div className={`tp-footer-area tp-footer-style-6 ${className} ${Zindex} pt-120 pb-120`} style={{ backgroundColor: bgColor }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="tp-footer-widget tp-footer-col-1 pb-40">
                                <h4 className="tp-footer-widget-title">Making<br /> your imagination come true</h4>
                                <div className="tp-footer-widget-social">
                                    {/* footer social icons */}
                                    <FooterSocialIcons className="tp-footer-widget-social" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-4 col-md-6">
                            <div className="tp-footer-widget tp-footer-col-2 pb-40 footer-main">
                                <h4 className="tp-footer-widget-title-sm pre mb-25">Quick links</h4>
                                <div className="tp-footer-widget-menu">
                                    <ul>
                                        <li><Link href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>Home</Link></li>{" "}
                                        <li><Link href="/about" onClick={(e) => { e.preventDefault(); window.location.href = '/about'; }}>About Us</Link></li>{" "}
                                        <li><Link href="/portfolio" onClick={(e) => { e.preventDefault(); window.location.href = '/portfolio'; }}>Portfolio</Link></li>{" "}
                                        <li><Link href="/career" onClick={(e) => { e.preventDefault(); window.location.href = '/career'; }}>Career</Link></li>{" "}
                                        <li><Link href="/job-application" onClick={(e) => { e.preventDefault(); window.location.href = '/job-application'; }}>Career Application</Link></li>{" "}
                                        <li><Link href="/contact" onClick={(e) => { e.preventDefault(); window.location.href = '/contact'; }}>Contact Us</Link></li>
                                    </ul>
                                </div>
                                <h4 className="tp-footer-widget-title-sm pre mb-25 mt-30">Open Roles</h4>
                                <div className="tp-footer-widget-menu">
                                    <ul>
                                        <li><Link href="/career-3d-designer" onClick={(e) => { e.preventDefault(); window.location.href = '/career-3d-designer'; }}>3D Designer</Link></li>{" "}
                                        <li><Link href="/career-account-executive" onClick={(e) => { e.preventDefault(); window.location.href = '/career-account-executive'; }}>Account Executive</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="tp-footer-widget tp-footer-col-3 pb-40 mb-30">
                                <h4 className="tp-footer-widget-title-sm pre mb-20">Contact</h4>
                                <div className="tp-footer-widget-info">
                                    <a href="mailto:hello@nomina-creative.com">hello@nomina-creative.com</a>
                                    <a href="tel:+6281912121777">+62 819-1212-1777</a>
                                </div>
                                <div className="tp-footer-widget-info">
                                    <a href="https://maps.google.com/?q=Jl.+Kemang+Utara+X+Jl.+Melati+No.2C,+RT.2/RW.1,+Duren+Tiga,+Kec.+Pancoran,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12760" target="_blank" rel="noopener noreferrer">
                                        Jl. Kemang Utara X Jl. Melati No.2C, RT.2/RW.1, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, DKI Jakarta 12760
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer copyright */}
            <CreativeAgencyCopyright bgColor={bgColor} Zindex={Zindex} />
        </>
    );
};

export default CreativeAgencyFooter;