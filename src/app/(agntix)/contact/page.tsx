import ContactUsMain from '@/pages/contacts/contact-us/ContactUsMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "Contact NOMINA Creative — Jasa Event Organizer (EO Terdekat) Jakarta Selatan",
    description:
        "Hubungi NOMINA Creative di Kemang Utara, Duren Tiga, Pancoran, Jakarta Selatan (+62 819-1212-1777). Konsultasikan kebutuhan Event Organiser, Technical Custom Production, Rental Equipment, Web Development & SaaS Management.",
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/contact`,
        siteName: 'NOMINA Creative',
        title: "Contact NOMINA Creative — Jasa Event Organizer (EO Terdekat) Jakarta Selatan",
        description:
            "Hubungi NOMINA Creative di Kemang Utara, Duren Tiga, Pancoran, Jakarta Selatan (+62 819-1212-1777). Konsultasikan kebutuhan Event Organiser, Technical Custom Production, Rental Equipment, Web Development & SaaS Management.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Contact NOMINA Creative — Event Organizer Jakarta Selatan',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Contact NOMINA Creative — Jasa Event Organizer (EO Terdekat) Jakarta Selatan",
        description:
            "Hubungi NOMINA Creative di Kemang Utara, Duren Tiga, Pancoran, Jakarta Selatan (+62 819-1212-1777). Konsultasikan kebutuhan Event Organiser, Technical Custom Production, Rental Equipment, Web Development & SaaS Management.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <ContactUsMain />
    );
};

export default page;
