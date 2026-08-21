import JobApplicationForm from '@/pages/job-application-form/JobApplicationForm';
import { Metadata } from 'next';

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const resolvedParams = await searchParams;
    const rawJobId = resolvedParams?.jobId;
    const jobId = typeof rawJobId === 'string' ? rawJobId.toLowerCase() : Array.isArray(rawJobId) ? rawJobId[0]?.toLowerCase() : '';

    if (jobId === '3d-designer') {
        return {
            title: "Apply for 3D Designer — NOMINA Careers",
            description:
                "Submit your application and portfolio for the 3D Designer role at NOMINA. Create immersive stage environments, motion graphics, and spatial visuals.",
        };
    }

    if (jobId === 'account-executive') {
        return {
            title: "Apply for Account Executive — NOMINA Careers",
            description:
                "Submit your application for the Account Executive position at NOMINA. Manage client relationships, corporate pitches, and creative event campaigns.",
        };
    }

    return {
        title: "Job Application — Join the NOMINA Team",
        description:
            "Submit your CV, portfolio, and application to join the NOMINA creative studio. Explore opportunities in design, event production, and account management.",
    };
}

const page = () => {
    return (
        <JobApplicationForm />
    );
};

export default page;
