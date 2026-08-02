import ContactUsMain from '@/pages/contacts/contact-us/ContactUsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nomina - Contact",
};

const page = () => {
    return (
        <ContactUsMain />
    );
};

export default page;
