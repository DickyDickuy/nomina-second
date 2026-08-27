import CareerMain from '@/pages/about/career/CareerMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "Careers at NOMINA — Open Roles & Opportunities",
    description:
        "Join the creative minds at NOMINA. Explore open full-time positions, studio culture, and career opportunities in 3D design, account management, and brand execution.",
    alternates: {
        canonical: `${SITE_URL}/career`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/career`,
        siteName: 'NOMINA Communication',
        title: "Careers at NOMINA — Open Roles & Opportunities",
        description:
            "Join the creative minds at NOMINA. Explore open full-time positions, studio culture, and career opportunities in 3D design, account management, and brand execution.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Careers at NOMINA Communication',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Careers at NOMINA — Open Roles & Opportunities",
        description:
            "Join the creative minds at NOMINA. Explore open full-time positions, studio culture, and career opportunities in 3D design, account management, and brand execution.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <CareerMain />
    );
};

export default page;
