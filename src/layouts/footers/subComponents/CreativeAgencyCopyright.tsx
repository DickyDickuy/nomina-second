
import { getCurrentYear } from '@/utils/getCurrentYear';
import Link from 'next/link';
import React from 'react';

interface FooterProps {
    bgColor?: string;
    Zindex?: string
}

const CreativeAgencyCopyright: React.FC<FooterProps> = ({ bgColor = "#121315", Zindex }) => {
    return (
        <div className={`tp-copyright-area tp-copyright-style-6 ${Zindex}`} style={{ backgroundColor: bgColor }}>
            <div className="container-fluid px-0 overflow-hidden">
                <div className="row gx-0">
                    <div className="col-xl-12">
                        <div className="tp-copyright-content d-flex justify-content-center w-100">
                            <h2 className="tp-copyright-big-text mb-0 w-100 text-center">
                                <span className="tp-footer-static-logo">NOMINA</span>
                            </h2>
                        </div>
                    </div>
                </div>
                {/* <div className="tp-copyright-bottom">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tp-copyright-left text-center text-md-start">
                                <span>©{getCurrentYear()} Nomina Creative Asia.</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="tp-copyright-right text-center text-md-end">
                                <Link href="#">Terms and Conditions</Link>
                                <Link href="#">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default CreativeAgencyCopyright;