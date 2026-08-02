import bannerImg from "../../../public/assets/img/event/motogp_mandalika.jpeg";
import Image from 'next/image';

const HomeMainBanner = ({ ColorStyleCls }: { ColorStyleCls?: string }) => {
    return (
        <div className="tp-banner-area">
            <div className={`tp-banner-img ${ColorStyleCls}`} style={{ overflow: "hidden" }}>
                <Image style={{ width: "100%", height: "auto", objectFit: "cover" }} className="w-100" data-speed=".7" src={bannerImg} alt="Nomina Event MotoGP Banner" />
            </div>
        </div>
    );
};

export default HomeMainBanner;