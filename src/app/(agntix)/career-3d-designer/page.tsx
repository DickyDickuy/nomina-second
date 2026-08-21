import Career3dDesignerMain from '@/pages/career-details/Career3dDesignerMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "3D Designer Role — Careers at NOMINA",
    description:
        "Join NOMINA as a 3D Designer in Jakarta. Design immersive stage environments, booths, 3D motion graphics, and spatial visuals for brand activations.",
};

const page = () => {
    return (
        <Career3dDesignerMain />
    );
};

export default page;
