import AccountExecutiveMain from '@/pages/career-details/AccountExecutiveMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Account Executive Role — Careers at NOMINA",
    description:
        "Join NOMINA as an Account Executive in Jakarta (Hybrid). Lead client relationships, partnership pitches, and strategic event proposals for brand activations.",
};

const page = () => {
    return (
        <AccountExecutiveMain />
    );
};

export default page;
