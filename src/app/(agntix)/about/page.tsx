import AboutCreativeMain from '@/pages/about/about-creative/AboutCreativeMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About NOMINA — Creative Event & Brand Studio",
    description:
        "Discover NOMINA: an experienced creative brand and event organizer delivering high-impact brand experiences, design support, and dynamic productions since 2016.",
};

const page = () => {
    return (
        <AboutCreativeMain />
    );
};

export default page;
