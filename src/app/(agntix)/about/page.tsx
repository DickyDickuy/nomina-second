import AboutCreativeMain from '@/pages/about/about-creative/AboutCreativeMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "About NOMINA Creative — Jasa Event Organizer Jakarta (EO Jakarta Selatan)",
    description:
        "Kenali NOMINA Creative, jasa Event Organizer Jakarta (EO terdekat di Jakarta Selatan) yang menyediakan Event Organiser, Technical Custom Production, Rental Equipment, Web Development & SaaS Management sejak 2016.",
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/about`,
        siteName: 'NOMINA Creative',
        title: "About NOMINA Creative — Jasa Event Organizer Jakarta (EO Jakarta Selatan)",
        description:
            "Kenali NOMINA Creative, jasa Event Organizer Jakarta (EO terdekat di Jakarta Selatan) yang menyediakan Event Organiser, Technical Custom Production, Rental Equipment, Web Development & SaaS Management sejak 2016.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'About NOMINA Creative — Event Organizer Jakarta Selatan',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "About NOMINA Creative — Jasa Event Organizer Jakarta (EO Jakarta Selatan)",
        description:
            "Kenali NOMINA Creative, jasa Event Organizer Jakarta (EO terdekat di Jakarta Selatan) yang menyediakan Event Organiser, Technical Custom Production, Rental Equipment, Web Development & SaaS Management sejak 2016.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <AboutCreativeMain />
    );
};

export default page;
