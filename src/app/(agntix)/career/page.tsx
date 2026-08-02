import CareerMain from '@/pages/about/career/CareerMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nomina - Career",
};

const page = () => {
    return (
        <CareerMain />
    );
};

export default page;
