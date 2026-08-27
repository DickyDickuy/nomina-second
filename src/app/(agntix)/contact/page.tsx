import ContactUsMain from '@/pages/contacts/contact-us/ContactUsMain';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

export const metadata: Metadata = {
    title: "Contact NOMINA — Start a Conversation",
    description:
        "Get in touch with NOMINA. Reach out for new project inquiries, brand collaborations, creative production partnerships, or studio visits in Milan and Jakarta.",
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: `${SITE_URL}/contact`,
        siteName: 'NOMINA Communication',
        title: "Contact NOMINA — Start a Conversation",
        description:
            "Get in touch with NOMINA. Reach out for new project inquiries, brand collaborations, creative production partnerships, or studio visits in Milan and Jakarta.",
        images: [
            {
                url: `${SITE_URL}/images/nomina-logo.jpeg`,
                width: 1200,
                height: 630,
                alt: 'Contact NOMINA Communication',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Contact NOMINA — Start a Conversation",
        description:
            "Get in touch with NOMINA. Reach out for new project inquiries, brand collaborations, creative production partnerships, or studio visits in Milan and Jakarta.",
        images: [`${SITE_URL}/images/nomina-logo.jpeg`],
    },
};

const page = () => {
    return (
        <ContactUsMain />
    );
};

export default page;
