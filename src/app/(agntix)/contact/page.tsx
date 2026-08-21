import ContactUsMain from '@/pages/contacts/contact-us/ContactUsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact NOMINA — Start a Conversation",
    description:
        "Get in touch with NOMINA. Reach out for new project inquiries, brand collaborations, creative production partnerships, or studio visits in Milan and Jakarta.",
};

const page = () => {
    return (
        <ContactUsMain />
    );
};

export default page;
