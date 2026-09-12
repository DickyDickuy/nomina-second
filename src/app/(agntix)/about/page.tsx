import AboutCreativeMain from '@/pages/about/about-creative/AboutCreativeMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "About NOMINA Creative — Creative Event & Brand Organizer South Jakarta",
    description:
        "Discover NOMINA Creative: a South Jakarta-based creative event organizer and brand studio delivering high-impact brand experiences, design, and dynamic productions since 2016.",
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/about`,
        siteName: 'NOMINA Creative',
        title: "About NOMINA Creative — Creative Event & Brand Organizer South Jakarta",
        description:
            "Discover NOMINA Creative: a South Jakarta-based creative event organizer and brand studio delivering high-impact brand experiences, design, and dynamic productions since 2016.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'About NOMINA Creative — South Jakarta',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "About NOMINA Creative — Creative Event & Brand Organizer South Jakarta",
        description:
            "Discover NOMINA Creative: a South Jakarta-based creative event organizer and brand studio delivering high-impact brand experiences, design, and dynamic productions since 2016.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <AboutCreativeMain />
    );
};

export default page;
