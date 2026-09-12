import CareerMain from '@/pages/about/career/CareerMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "Careers at NOMINA Creative — Open Roles in South Jakarta",
    description:
        "Join NOMINA Creative in South Jakarta. Explore open positions in 3D design, account management, and brand execution at Indonesia's creative event & branding agency.",
    alternates: {
        canonical: `${SITE_URL}/career`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/career`,
        siteName: 'NOMINA Creative',
        title: "Careers at NOMINA Creative — Open Roles in South Jakarta",
        description:
            "Join NOMINA Creative in South Jakarta. Explore open positions in 3D design, account management, and brand execution at Indonesia's creative event & branding agency.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Careers at NOMINA Creative — South Jakarta',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Careers at NOMINA Creative — Open Roles in South Jakarta",
        description:
            "Join NOMINA Creative in South Jakarta. Explore open positions in 3D design, account management, and brand execution at Indonesia's creative event & branding agency.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <CareerMain />
    );
};

export default page;
