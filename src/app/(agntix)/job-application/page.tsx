import JobApplicationForm from '@/pages/job-application-form/JobApplicationForm';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const JOB_META_MAP: Record<string, { title: string; description: string }> = {
    '3d-visualisation': {
        title: "Apply for 3D Visualisation — NOMINA Careers Jakarta",
        description:
            "Submit your application and portfolio for the 3D Visualisation role at NOMINA Creative (Event Organizer Jakarta). Create immersive stage environments, motion graphics, and spatial visuals.",
    },
    'project-manager': {
        title: "Apply for Project Manager — NOMINA Careers Jakarta",
        description:
            "Submit your application for the Project Manager position at NOMINA Creative, South Jakarta's Event Organiser and Technical Custom Production studio.",
    },
    'production-manager': {
        title: "Apply for Production Manager — NOMINA Careers Jakarta",
        description:
            "Submit your application for the Production Manager position at NOMINA Creative Jakarta. Lead technical custom production, stage builds, and rental equipment operations.",
    },
    'sales-and-account-manager': {
        title: "Apply for Sales and Account Manager — NOMINA Careers Jakarta",
        description:
            "Submit your application for the Sales and Account Manager role at NOMINA Creative Jakarta. Drive client partnerships for corporate events, custom production, and digital platforms.",
    },
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const resolvedParams = await searchParams;
    const rawJobId = resolvedParams?.jobId;
    const rawKey = typeof rawJobId === 'string' ? rawJobId.toLowerCase() : Array.isArray(rawJobId) ? rawJobId[0]?.toLowerCase() : '';
    const jobId = rawKey === '3d-designer' ? '3d-visualisation' : (rawKey || '');

    const matched = JOB_META_MAP[jobId];
    if (matched) {
        const canonicalUrl = `${SITE_URL}/job-application?jobId=${jobId}`;
        return {
            title: matched.title,
            description: matched.description,
            alternates: {
                canonical: canonicalUrl,
            },
            openGraph: {
                type: 'website',
                locale: 'en_US',
                url: canonicalUrl,
                siteName: 'NOMINA Creative',
                title: matched.title,
                description: matched.description,
                images: [
                    {
                        url: `${SITE_URL}/images/nomina-logo.jpeg`,
                        width: 1200,
                        height: 630,
                        alt: matched.title,
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: matched.title,
                description: matched.description,
                images: [`${SITE_URL}/images/nomina-logo.jpeg`],
            },
        };
    }

    return {
        title: "Job Application — Join NOMINA Event Organizer Jakarta",
        description:
            "Submit your CV, portfolio, and application to join NOMINA Creative in South Jakarta. Open roles in Project Management, Production Management, Sales & Account Management, and 3D Visualisation.",
        alternates: {
            canonical: `${SITE_URL}/job-application`,
        },
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: `${SITE_URL}/job-application`,
            siteName: 'NOMINA Creative',
            title: "Job Application — Join NOMINA Event Organizer Jakarta",
            description:
                "Submit your CV, portfolio, and application to join NOMINA Creative in South Jakarta. Open roles in Project Management, Production Management, Sales & Account Management, and 3D Visualisation.",
            images: [
                {
                    url: `${SITE_URL}/images/nomina-logo.jpeg`,
                    width: 1200,
                    height: 630,
                    alt: 'Join the NOMINA Team in South Jakarta',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Job Application — Join NOMINA Event Organizer Jakarta",
            description:
                "Submit your CV, portfolio, and application to join NOMINA Creative in South Jakarta. Open roles in Project Management, Production Management, Sales & Account Management, and 3D Visualisation.",
            images: [`${SITE_URL}/images/nomina-logo.jpeg`],
        },
    };
}

const page = () => {
    return (
        <JobApplicationForm />
    );
};

export default page;
