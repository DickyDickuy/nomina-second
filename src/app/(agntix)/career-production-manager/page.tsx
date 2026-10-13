import CareerProductionManagerMain from '@/pages/career-details/CareerProductionManagerMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

const TITLE = "Production Manager Role: Careers at NOMINA EO Jakarta";
const DESCRIPTION =
    "Join NOMINA Creative (Event Organizer & Technical Custom Production Jakarta) as a Production Manager. Oversee stage builds, audio-visual setups, vendors, and on-site logistics.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: `${SITE_URL}/career-production-manager`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/career-production-manager`,
        siteName: 'NOMINA Creative',
        title: TITLE,
        description: DESCRIPTION,
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Production Manager Role at NOMINA Creative Jakarta',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <CareerProductionManagerMain />
    );
};

export default page;
