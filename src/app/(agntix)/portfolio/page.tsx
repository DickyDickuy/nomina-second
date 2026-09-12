import PortfolioShowcaseMain from '@/pages/portfolios/portfolio-showcase/PortfolioShowcaseMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "Portfolio & Showcase — NOMINA Creative Projects",
    description:
        "Explore NOMINA's portfolio of curated creative projects, immersive brand experiences, corporate celebrations, and experiential event productions.",
    alternates: {
        canonical: `${SITE_URL}/portfolio`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/portfolio`,
        siteName: 'NOMINA Creative',
        title: "Portfolio & Showcase — NOMINA Creative Projects",
        description:
            "Explore NOMINA Creative's portfolio of curated creative projects, immersive brand experiences, corporate celebrations, and experiential event productions in Jakarta.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'NOMINA Creative Portfolio — South Jakarta',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Portfolio & Showcase — NOMINA Creative Projects",
        description:
            "Explore NOMINA's portfolio of curated creative projects, immersive brand experiences, corporate celebrations, and experiential event productions.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <PortfolioShowcaseMain />
    );
};

export default page;
