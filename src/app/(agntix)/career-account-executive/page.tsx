import AccountExecutiveMain from '@/pages/career-details/AccountExecutiveMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nomina - Account Executive Career",
};

const page = () => {
    return (
        <AccountExecutiveMain />
    );
};

export default page;
