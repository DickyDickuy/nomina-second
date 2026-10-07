import AboutCreativeMain from '@/pages/about/about-creative/AboutCreativeMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "Tentang NOMINA Creative — Event Organizer Jakarta Terdekat Sejak 2016 | Kemang, Jakarta Selatan",
    description:
        "Kenali NOMINA Creative — event organizer Jakarta terdekat (EO Jakarta Selatan) sejak 2016. Spesialis corporate event, brand activation, exhibition, sewa sound system, sewa kursi event, Technical Custom Production, dan Rental Equipment di Kemang, Jakarta Selatan.",
    keywords: [
        "tentang event organizer Jakarta",
        "profil EO Jakarta terdekat",
        "NOMINA Creative Jakarta Selatan",
        "event organizer Jakarta sejak 2016",
        "jasa EO terpercaya Jakarta",
        "Kemang event organizer",
        "event organizer berpengalaman Jakarta",
    ],
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: `${SITE_URL}/about`,
        siteName: 'NOMINA Creative',
        title: "Tentang NOMINA Creative — Event Organizer Jakarta Terdekat Sejak 2016 | Kemang, Jakarta Selatan",
        description:
            "Kenali NOMINA Creative — event organizer Jakarta terdekat (EO Jakarta Selatan) sejak 2016. Spesialis corporate event, brand activation, exhibition, sewa sound system, Technical Custom Production & Rental Equipment.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Tentang NOMINA Creative — Event Organizer Jakarta Terdekat',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Tentang NOMINA Creative — Event Organizer Jakarta Terdekat Sejak 2016 | Kemang, Jakarta Selatan",
        description:
            "Kenali NOMINA Creative — event organizer Jakarta terdekat sejak 2016. Corporate event, brand activation, exhibition, sewa sound system & Technical Custom Production.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <AboutCreativeMain />
    );
};

export default page;
