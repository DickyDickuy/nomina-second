import AccountExecutiveMain from '@/pages/career-details/AccountExecutiveMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "Account Executive Role — Careers at NOMINA",
    description:
        "Join NOMINA as an Account Executive in Jakarta (Hybrid). Lead client relationships, partnership pitches, and strategic event proposals for brand activations.",
    alternates: {
        canonical: `${SITE_URL}/career-account-executive`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/career-account-executive`,
        siteName: 'NOMINA Communication',
        title: "Account Executive Role — Careers at NOMINA",
        description:
            "Join NOMINA as an Account Executive in Jakarta (Hybrid). Lead client relationships, partnership pitches, and strategic event proposals for brand activations.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Account Executive Role at NOMINA Communication',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Account Executive Role — Careers at NOMINA",
        description:
            "Join NOMINA as an Account Executive in Jakarta (Hybrid). Lead client relationships, partnership pitches, and strategic event proposals for brand activations.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <AccountExecutiveMain />
    );
};

export default page;
