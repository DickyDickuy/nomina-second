import PortfolioShowcaseMain from '@/pages/portfolios/portfolio-showcase/PortfolioShowcaseMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "Portfolio Event Organizer Jakarta — NOMINA Creative & Custom Production",
    description:
        "Lihat portofolio proyek NOMINA Creative: jasa Event Organizer Jakarta (EO Jakarta), Technical Custom Production, Rental Equipment, corporate celebration, dan brand activation di Indonesia.",
    alternates: {
        canonical: `${SITE_URL}/portfolio`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/portfolio`,
        siteName: 'NOMINA Creative',
        title: "Portfolio Event Organizer Jakarta — NOMINA Creative & Custom Production",
        description:
            "Lihat portofolio proyek NOMINA Creative: jasa Event Organizer Jakarta (EO Jakarta), Technical Custom Production, Rental Equipment, corporate celebration, dan brand activation di Indonesia.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'NOMINA Creative Portfolio — Event Organizer Jakarta',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Portfolio Event Organizer Jakarta — NOMINA Creative & Custom Production",
        description:
            "Lihat portofolio proyek NOMINA Creative: jasa Event Organizer Jakarta (EO Jakarta), Technical Custom Production, Rental Equipment, corporate celebration, dan brand activation di Indonesia.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <PortfolioShowcaseMain />
    );
};

export default page;
