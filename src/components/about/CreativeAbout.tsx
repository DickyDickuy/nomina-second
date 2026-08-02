import aboutLine from '../../../public/assets/img/about-us/about-us/about-us-line.png';
import eventHeroImg from '../../../public/assets/img/event/Esmod Jakarta Creative Show 2023.jpg';
import aboutShape from '../../../public/assets/img/about-us/about-us/about-us-shape.png';
import aboutShape2 from '../../../public/assets/img/about-us/about-us/about-us-shape-2.png';
import Image from 'next/image';
import Link from 'next/link';

const CreativeAbout = () => {
    return (
        <section className="tp-about-us-2-area tp-about-us-2-ptb pt-60 p-relative">
            <div className="container container-1800 gx-0">
                {/* Meta Header Bar */}
                <div className="tp-about-us-2-top pb-25 p-relative">
                    <div className="tp-about-us-2-line mb-20">
                        <Image style={{ width: "100%", height: "2px" }} src={aboutLine} alt="divider line" />
                    </div>
                    <div className="row gx-0 align-items-center">
                        <div className="col-lg-4 col-md-4">
                            <div className="tp-about-us-2-text d-flex align-items-center gap-3">
                                <span style={{
                                    display: "inline-block",
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    backgroundColor: "#FF3203",
                                    boxShadow: "0 0 10px #FF3203"
                                }} />
                                <p style={{ margin: 0, fontWeight: 600, letterSpacing: "0.05em" }}>
                                    @nomina.creative
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 text-center d-none d-md-block">
                            <div className="tp-about-us-2-text">
                                <p style={{ margin: 0, opacity: 0.7, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                                    [ Creative Event & Brand Organizer ]
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6 text-end">
                            <div className="tp-about-us-2-text">
                                <p style={{ margin: 0, fontWeight: 500, opacity: 0.8 }}>
                                    JAKARTA & GARUT • EST. 2016
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Main Content */}
                <div className="tp-about-us-2-wrap pt-30">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tp-about-us-2-thumb anim-zoomin-wrap p-relative text-center">
                                <div className="anim-zoomin" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
                                    <Image
                                        style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "16px" }}
                                        priority
                                        src={eventHeroImg}
                                        alt="Nomina Creative Studio"
                                    />
                                </div>
                                <div className="tp-about-us-2-thumb-shape">
                                    <div className="shape-1">
                                        <Image
                                            src={aboutShape}
                                            alt="decorative shape"
                                        />
                                    </div>
                                    <div className="shape-2">
                                        <Image
                                            src={aboutShape}
                                            alt="decorative shape"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-about-us-2-right p-relative ps-lg-4">
                                <div className="tp-about-us-2-btn d-flex gap-3 pb-80">
                                    <Link href="/#services" className="hover-underline">Event Organizer</Link>
                                    <Link href="/about" className="hover-underline">Creative Agency</Link>
                                </div>
                                <div className="tp-about-us-2-heading">
                                    <span className="tp-about-us-2-subtitle">ABOUT NOMINA</span>
                                    <h3 className="tp-about-us-2-title tp-text-revel-anim">
                                        OUR <br />STUDIO
                                    </h3>
                                </div>
                                <div className="tp-about-us-2-right-shape">
                                    <Image
                                        src={aboutShape2}
                                        alt="decorative shape"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreativeAbout;