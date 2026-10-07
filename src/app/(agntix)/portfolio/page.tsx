import PortfolioShowcaseMain from '@/pages/portfolios/portfolio-showcase/PortfolioShowcaseMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "Portofolio Event Organizer Jakarta — NOMINA Creative | Corporate Event, Brand Activation & Exhibition",
    description:
        "Lihat portofolio proyek NOMINA Creative — event organizer Jakarta terdekat: corporate event, brand activation, exhibition, product launch, roadshow, technical custom production, dan rental equipment di Indonesia.",
    keywords: [
        "portofolio event organizer Jakarta",
        "portfolio EO Jakarta",
        "portfolio corporate event Jakarta",
        "portfolio brand activation Jakarta",
        "portfolio exhibition Jakarta",
        "hasil kerja event organizer Jakarta",
        "NOMINA Creative portfolio",
        "referensi EO Jakarta",
    ],
    alternates: {
        canonical: `${SITE_URL}/portfolio`,
    },
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: `${SITE_URL}/portfolio`,
        siteName: 'NOMINA Creative',
        title: "Portofolio Event Organizer Jakarta — NOMINA Creative | Corporate Event, Brand Activation & Exhibition",
        description:
            "Lihat portofolio proyek NOMINA Creative — event organizer Jakarta terdekat: corporate event, brand activation, exhibition, technical custom production, dan rental equipment di Indonesia.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Portofolio NOMINA Creative — Event Organizer Jakarta Terdekat',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Portofolio Event Organizer Jakarta — NOMINA Creative | Corporate Event, Brand Activation & Exhibition",
        description:
            "Lihat portofolio proyek NOMINA Creative — event organizer Jakarta terdekat: corporate event, brand activation, exhibition & technical custom production.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <PortfolioShowcaseMain />
    );
};

export default page;
