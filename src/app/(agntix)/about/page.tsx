import AboutCreativeMain from '@/pages/about/about-creative/AboutCreativeMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nomina - About",
};

const page = () => {
    return (
        <AboutCreativeMain />
    );
};

export default page;
