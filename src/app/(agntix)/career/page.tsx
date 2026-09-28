import CareerMain from '@/pages/about/career/CareerMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "Careers at NOMINA Creative — Lowongan Event Organizer Jakarta Selatan",
    description:
        "Bergabung dengan NOMINA Creative di Jakarta Selatan. Posisi terbuka: Project Manager, Production Manager, Sales and Account Manager, dan 3D Visualisation di studio EO Jakarta & Custom Production.",
    alternates: {
        canonical: `${SITE_URL}/career`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/career`,
        siteName: 'NOMINA Creative',
        title: "Careers at NOMINA Creative — Lowongan Event Organizer Jakarta Selatan",
        description:
            "Bergabung dengan NOMINA Creative di Jakarta Selatan. Posisi terbuka: Project Manager, Production Manager, Sales and Account Manager, dan 3D Visualisation di studio EO Jakarta & Custom Production.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Careers at NOMINA Creative — Event Organizer Jakarta Selatan',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Careers at NOMINA Creative — Lowongan Event Organizer Jakarta Selatan",
        description:
            "Bergabung dengan NOMINA Creative di Jakarta Selatan. Posisi terbuka: Project Manager, Production Manager, Sales and Account Manager, dan 3D Visualisation di studio EO Jakarta & Custom Production.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <CareerMain />
    );
};

export default page;
