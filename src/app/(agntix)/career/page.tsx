import CareerMain from '@/pages/about/career/CareerMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Careers at NOMINA — Open Roles & Opportunities",
    description:
        "Join the creative minds at NOMINA. Explore open full-time positions, studio culture, and career opportunities in 3D design, account management, and brand execution.",
};

const page = () => {
    return (
        <CareerMain />
    );
};

export default page;
