import JobApplicationForm from '@/pages/job-application-form/JobApplicationForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nomina - Job Application",
};

const page = () => {
    return (
        <JobApplicationForm />
    );
};

export default page;
