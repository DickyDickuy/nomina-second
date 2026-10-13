import CareerProjectManagerMain from '@/pages/career-details/CareerProjectManagerMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

const TITLE = "Hiring: Project Manager (Jakarta) | NOMINA Creative";
const DESCRIPTION =
    "Join NOMINA Creative (Event Organizer & Technical Custom Production Jakarta) as a Project Manager. Lead end-to-end event execution, from briefing and budgeting to on-site delivery.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: `${SITE_URL}/career-project-manager`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/career-project-manager`,
        siteName: 'NOMINA Creative',
        title: TITLE,
        description: DESCRIPTION,
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Project Manager Role at NOMINA Creative Jakarta',
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
        <CareerProjectManagerMain />
    );
};

export default page;
