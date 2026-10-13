import CareerSalesAccountManagerMain from '@/pages/career-details/CareerSalesAccountManagerMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

const TITLE = "Sales and Account Manager Role: Careers at NOMINA EO Jakarta";
const DESCRIPTION =
    "Join NOMINA Creative (Event Organizer & Technical Custom Production Jakarta) as a Sales and Account Manager. Drive business growth and nurture long-term corporate client partnerships.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: `${SITE_URL}/career-sales-account-manager`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/career-sales-account-manager`,
        siteName: 'NOMINA Creative',
        title: TITLE,
        description: DESCRIPTION,
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Sales and Account Manager Role at NOMINA Creative Jakarta',
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
        <CareerSalesAccountManagerMain />
    );
};

export default page;
