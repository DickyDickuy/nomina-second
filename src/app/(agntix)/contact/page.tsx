import ContactUsMain from '@/pages/contacts/contact-us/ContactUsMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "Contact NOMINA Creative — Start a Project in South Jakarta",
    description:
        "Get in touch with NOMINA Creative. Reach out for project inquiries, brand collaborations, creative productions, or studio visits at our South Jakarta office.",
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/contact`,
        siteName: 'NOMINA Creative',
        title: "Contact NOMINA Creative — Start a Project in South Jakarta",
        description:
            "Get in touch with NOMINA Creative. Reach out for project inquiries, brand collaborations, creative productions, or studio visits at our South Jakarta office.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Contact NOMINA Creative',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Contact NOMINA Creative — Start a Project in South Jakarta",
        description:
            "Get in touch with NOMINA Creative. Reach out for project inquiries, brand collaborations, creative productions, or studio visits at our South Jakarta office.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <ContactUsMain />
    );
};

export default page;
