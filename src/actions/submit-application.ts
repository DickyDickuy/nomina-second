'use server';

import { headers } from 'next/headers';
import { getPocketBaseAdmin } from '@/lib/pocketbase';
import { rateLimit } from '@/lib/rate-limit';
import { validateCvFile } from '@/lib/cv-validation';

export type SubmitApplicationState = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string>;
};

export async function submitApplication(
  _prevState: SubmitApplicationState,
  formData: FormData
): Promise<SubmitApplicationState> {
  try {
    const headerList = await headers();
    const forwardedFor = headerList.get('x-forwarded-for');
    const realIp = headerList.get('x-real-ip');
    const forwardedIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '';
    const ip = forwardedIp || (realIp ? realIp.trim() : '') || '127.0.0.1';

    const { success: allowed } = rateLimit(`application:${ip}`);
    if (!allowed) {
      return {
        success: false,
        message: 'Too many requests. Please wait a few minutes before submitting again.',
      };
    }

    const getString = (fd: FormData, key: string) => {
      const val = fd.get(key);
      return typeof val === 'string' ? val.trim() : '';
    };

    const name = getString(formData, 'name');
    const email = getString(formData, 'email');
    const ALLOWED_JOB_IDS = new Set([
      'project-manager',
      'production-manager',
      'sales-and-account-manager',
      '3d-visualisation',
      'general',
    ]);
    const rawJobId = (getString(formData, 'job_id') || 'general').toLowerCase();
    const normalizedJobId = rawJobId === '3d-designer' ? '3d-visualisation' : rawJobId;
    const jobId = ALLOWED_JOB_IDS.has(normalizedJobId) ? normalizedJobId : 'general';
    const whyApply = getString(formData, 'why_apply');
    const projectHighlight = getString(formData, 'project_highlight');
    const portfolio = getString(formData, 'portfolio');
    const salary = getString(formData, 'salary');
    const cv = formData.get('cv') as File | null;

    // Validation
    const errors: Record<string, string> = {};
    if (!name) {
      errors.name = 'Please enter your name.';
    } else if (name.length > 100) {
      errors.name = 'Name must be 100 characters or fewer.';
    }

    if (!email) {
      errors.email = 'Please enter your email address.';
    } else if (email.length > 100) {
      errors.email = 'Email must be 100 characters or fewer.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (jobId.length > 100) {
      errors.job_id = 'Job identifier must be 100 characters or fewer.';
    }

    if (!whyApply) {
      errors.why_apply = 'Please answer why you want to apply.';
    } else if (whyApply.length > 3000) {
      errors.why_apply = 'Response must be 3000 characters or fewer.';
    }

    if (!projectHighlight) {
      errors.project_highlight = 'Please highlight a project.';
    } else if (projectHighlight.length > 3000) {
      errors.project_highlight = 'Response must be 3000 characters or fewer.';
    }

    if (portfolio && portfolio.length > 500) {
      errors.portfolio = 'Portfolio link must be 500 characters or fewer.';
    }

    if (salary && salary.length > 100) {
      errors.salary = 'Salary expectation must be 100 characters or fewer.';
    }

    const cvError = await validateCvFile(cv);
    if (cvError) {
      errors.cv = cvError;
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
        message: 'Please check the form for errors and try again.',
      };
    }

    // ponytail: forward standard FormData directly to PocketBase SDK
    const pb = await getPocketBaseAdmin();

    const pbFormData = new FormData();
    pbFormData.append('name', name as string);
    pbFormData.append('email', email as string);
    pbFormData.append('job_id', jobId);
    pbFormData.append('why_apply', whyApply as string);
    pbFormData.append('project_highlight', projectHighlight as string);
    pbFormData.append('portfolio', portfolio);
    pbFormData.append('salary', salary);
    if (cv && cv.size > 0) {
      pbFormData.append('cv', cv);
    }

    await pb.collection('job_applications').create(pbFormData);

    return {
      success: true,
      message: 'Your application has been submitted successfully! We will get back to you soon.'
    };
  } catch (error: unknown) {
    console.error('Error submitting application to PocketBase:', error);
    // ponytail: Do not expose raw internal admin error messages to the client
    return {
      success: false,
      message: 'Failed to submit application due to an internal server error. Please try again later.'
    };
  }
}
