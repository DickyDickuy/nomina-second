import about1 from '../../../public/assets/img/event/Esmod Jakarta Creative Show 2023 2.jpg';
import about2 from '../../../public/assets/img/event/Grand Opening Premium Guest House OCBC 2024 C.jpg';
import bgShape from '../../../public/assets/img/home-08/hero/hero-bg-shape-2.png';
import { ArrowTwenty } from '@/svg/ArrowIcons';
import Image from 'next/image';
import Link from 'next/link';

const CreativeAboutTwo = () => {
    return (
        <div className="studio-about-area pt-200 pb-140">
            <div className="container container-1830">
                <div className="studio-about-wrap">
                    <div className="row align-items-start">
                        <div className="col-xl-10">
                            <div className="studio-about-title-box mb-80">
                                <span className="tp-section-subtitle-clash clash-subtitle-pos about-us-2">
                                    About <br />
                                    our Studio
                                    <i><ArrowTwenty /></i>
                                </span>
                                <h3 className="tp-section-title-clash tp-text-revel-anim"><span className="clash-subtitle-space-1">{`We're`}</span><br /> an event & creative brand Organizer.</h3>
                            </div>
                        </div>
                        <div className="col-xl-2 d-none d-xl-block">
                            <div className="studio-about-thumb" style={{ borderRadius: "12px", overflow: "hidden" }}>
                                <Image style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "12px" }} data-speed=".8" src={about1} alt="Nomina Creative Event" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="studio-about-thumb thumb-1" style={{ borderRadius: "16px", overflow: "hidden" }}>
                                <Image style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "16px" }} data-speed=".8" src={about2} alt="Nomina Event Showcase" />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="studio-about-content about-us-2 tp_text_anim">
                                <p className="mb-30">
                                    We have been organizing
                                    events & providing design support
                                    to ambitious brand and enterprise
                                    since 2016.
                                </p>
                                <p className="mb-40">
                                    As an experienced event & creative brand organizer,
                                    Nomina® transcends aesthetics, crafting your vision &
                                    make your creativity into reality.
                                </p>
                                <div className="tp_fade_anim" data-fade-from="top" data-delay=".7" data-ease="bounce">
                                    <Link className="tp-btn-red-border about-us-2" href="/contact">Get in Touch</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 d-none d-xl-block">
                            <div data-speed="1.1" className="ar-about-exp-wrap d-flex justify-content-xxl-start justify-content-end">
                                <div className="ar-about-exp-box" style={{ backgroundImage: `url(${bgShape.src})` }}>
                                    <span>Years of <br /> Experience</span>
                                    <h4>10</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreativeAboutTwo;