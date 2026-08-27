import Career3dDesignerMain from '@/pages/career-details/Career3dDesignerMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "3D Designer Role — Careers at NOMINA",
    description:
        "Join NOMINA as a 3D Designer in Jakarta. Design immersive stage environments, booths, 3D motion graphics, and spatial visuals for brand activations.",
    alternates: {
        canonical: `${SITE_URL}/career-3d-designer`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/career-3d-designer`,
        siteName: 'NOMINA Communication',
        title: "3D Designer Role — Careers at NOMINA",
        description:
            "Join NOMINA as a 3D Designer in Jakarta. Design immersive stage environments, booths, 3D motion graphics, and spatial visuals for brand activations.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: '3D Designer Role at NOMINA Communication',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "3D Designer Role — Careers at NOMINA",
        description:
            "Join NOMINA as a 3D Designer in Jakarta. Design immersive stage environments, booths, 3D motion graphics, and spatial visuals for brand activations.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <Career3dDesignerMain />
    );
};

export default page;
