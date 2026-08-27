import JobApplicationForm from '@/pages/job-application-form/JobApplicationForm';
import { Metadata } from 'next';

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://nomina-creative.com';

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
            alternates: {
                canonical: `${SITE_URL}/job-application?jobId=3d-designer`,
            },
            openGraph: {
                type: 'website',
                locale: 'en_US',
                url: `${SITE_URL}/job-application?jobId=3d-designer`,
                siteName: 'NOMINA Communication',
                title: "Apply for 3D Designer — NOMINA Careers",
                description:
                    "Submit your application and portfolio for the 3D Designer role at NOMINA. Create immersive stage environments, motion graphics, and spatial visuals.",
                images: [
                    {
                        url: `${SITE_URL}/images/nomina-logo.jpeg`,
                        width: 1200,
                        height: 630,
                        alt: 'Apply for 3D Designer at NOMINA',
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: "Apply for 3D Designer — NOMINA Careers",
                description:
                    "Submit your application and portfolio for the 3D Designer role at NOMINA. Create immersive stage environments, motion graphics, and spatial visuals.",
                images: [`${SITE_URL}/images/nomina-logo.jpeg`],
            },
        };
    }

    if (jobId === 'account-executive') {
        return {
            title: "Apply for Account Executive — NOMINA Careers",
            description:
                "Submit your application for the Account Executive position at NOMINA. Manage client relationships, corporate pitches, and creative event campaigns.",
            alternates: {
                canonical: `${SITE_URL}/job-application?jobId=account-executive`,
            },
            openGraph: {
                type: 'website',
                locale: 'en_US',
                url: `${SITE_URL}/job-application?jobId=account-executive`,
                siteName: 'NOMINA Communication',
                title: "Apply for Account Executive — NOMINA Careers",
                description:
                    "Submit your application for the Account Executive position at NOMINA. Manage client relationships, corporate pitches, and creative event campaigns.",
                images: [
                    {
                        url: `${SITE_URL}/images/nomina-logo.jpeg`,
                        width: 1200,
                        height: 630,
                        alt: 'Apply for Account Executive at NOMINA',
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: "Apply for Account Executive — NOMINA Careers",
                description:
                    "Submit your application for the Account Executive position at NOMINA. Manage client relationships, corporate pitches, and creative event campaigns.",
                images: [`${SITE_URL}/images/nomina-logo.jpeg`],
            },
        };
    }

    return {
        title: "Job Application — Join the NOMINA Team",
        description:
            "Submit your CV, portfolio, and application to join the NOMINA creative studio. Explore opportunities in design, event production, and account management.",
        alternates: {
            canonical: `${SITE_URL}/job-application`,
        },
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: `${SITE_URL}/job-application`,
            siteName: 'NOMINA Communication',
            title: "Job Application — Join the NOMINA Team",
            description:
                "Submit your CV, portfolio, and application to join the NOMINA creative studio. Explore opportunities in design, event production, and account management.",
            images: [
                {
                    url: `${SITE_URL}/images/nomina-logo.jpeg`,
                    width: 1200,
                    height: 630,
                    alt: 'Join the NOMINA Team',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Job Application — Join the NOMINA Team",
            description:
                "Submit your CV, portfolio, and application to join the NOMINA creative studio. Explore opportunities in design, event production, and account management.",
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
