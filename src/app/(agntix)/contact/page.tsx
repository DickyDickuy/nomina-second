import ContactUsMain from '@/pages/contacts/contact-us/ContactUsMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "Hubungi NOMINA Creative — Konsultasi Gratis Event Organizer & Sewa Alat Event Jakarta",
    description:
        "Hubungi NOMINA Creative — event organizer Jakarta terdekat di Kemang Utara, Duren Tiga, Jakarta Selatan (+62 819-1212-1777). Konsultasi gratis untuk kebutuhan EO Jakarta, sewa sound system, sewa kursi event, LED screen, Technical Custom Production & brand activation.",
    keywords: [
        "hubungi event organizer Jakarta",
        "kontak EO Jakarta terdekat",
        "sewa sound system Jakarta hubungi",
        "sewa kursi event Jakarta",
        "konsultasi event organizer Jakarta",
        "EO Jakarta Selatan",
        "NOMINA Creative kontak",
        "jasa event Jakarta Kemang",
    ],
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: `${SITE_URL}/contact`,
        siteName: 'NOMINA Creative',
        title: "Hubungi NOMINA Creative — Konsultasi Gratis Event Organizer & Sewa Alat Event Jakarta",
        description:
            "Hubungi NOMINA Creative — event organizer Jakarta terdekat di Kemang Utara, Duren Tiga, Jakarta Selatan (+62 819-1212-1777). Konsultasi gratis untuk EO Jakarta, sewa sound system, sewa kursi event & Technical Custom Production.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Hubungi NOMINA Creative — Event Organizer Jakarta Terdekat',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Hubungi NOMINA Creative — Konsultasi Gratis Event Organizer & Sewa Alat Event Jakarta",
        description:
            "Hubungi NOMINA Creative — event organizer Jakarta terdekat (+62 819-1212-1777). Konsultasi gratis untuk EO Jakarta, sewa sound system, sewa kursi event & Technical Custom Production.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <ContactUsMain />
    );
};

export default page;
