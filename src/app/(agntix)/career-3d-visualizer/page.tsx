import Career3dDesignerMain from '@/pages/career-details/Career3dDesignerMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "3D Visualisation Role — Careers at NOMINA EO Jakarta",
    description:
        "Join NOMINA Creative (Event Organizer & Technical Custom Production Jakarta) as a 3D Visualisation specialist. Design immersive stage environments, booths, and spatial visuals.",
    alternates: {
        canonical: `${SITE_URL}/career-3d-visualisation`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/career-3d-visualisation`,
        siteName: 'NOMINA Creative',
        title: "3D Visualisation Role — Careers at NOMINA EO Jakarta",
        description:
            "Join NOMINA Creative (Event Organizer & Technical Custom Production Jakarta) as a 3D Visualisation specialist. Design immersive stage environments, booths, and spatial visuals.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: '3D Visualisation Role at NOMINA Creative Jakarta',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "3D Visualisation Role — Careers at NOMINA EO Jakarta",
        description:
            "Join NOMINA Creative (Event Organizer & Technical Custom Production Jakarta) as a 3D Visualisation specialist. Design immersive stage environments, booths, and spatial visuals.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <Career3dDesignerMain />
    );
};

export default page;
