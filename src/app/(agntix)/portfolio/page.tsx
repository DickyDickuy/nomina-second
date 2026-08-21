import PortfolioShowcaseMain from '@/pages/portfolios/portfolio-showcase/PortfolioShowcaseMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Portfolio & Showcase — NOMINA Creative Projects",
    description:
        "Explore NOMINA's portfolio of curated creative projects, immersive brand experiences, corporate celebrations, and experiential event productions.",
};

const page = () => {
    return (
        <PortfolioShowcaseMain />
    );
};

export default page;
