import PortfolioShowcaseMain from '@/pages/portfolios/portfolio-showcase/PortfolioShowcaseMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nomina - Portfolio",
};

const page = () => {
    return (
        <PortfolioShowcaseMain />
    );
};

export default page;
