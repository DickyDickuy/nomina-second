import aboutThumb from '../../../public/assets/img/event/career_banner_real.jpg';
import Image from 'next/image';

const CareerBanner = () => {
    return (
        <div className="ar-banner-area">
            <div className="ar-banner-wrap ar-about-us-4" style={{ overflow: "hidden" }}>
                <Image style={{ width: "100%", height: "auto", objectFit: "cover" }} className="w-100" src={aboutThumb} alt="Nomina Career Gallery" data-speed=".8" />
            </div>
        </div>
    );
};

export default CareerBanner;