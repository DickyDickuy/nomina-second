'use server';

import { getPocketBaseAdmin } from '@/lib/pocketbase';

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
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const jobId = formData.get('job_id')?.toString().trim() || 'general';
    const whyApply = formData.get('why_apply')?.toString().trim();
    const projectHighlight = formData.get('project_highlight')?.toString().trim();
    const portfolio = formData.get('portfolio')?.toString().trim() || '';
    const salary = formData.get('salary')?.toString().trim() || '';
    const cv = formData.get('cv') as File | null;

    // Validation
    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Please enter your name.';
    if (!email) {
      errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!whyApply) errors.why_apply = 'Please answer why you want to apply.';
    if (!projectHighlight) errors.project_highlight = 'Please highlight a project.';
    if (!cv || cv.size === 0) errors.cv = 'Please upload your CV (PDF or DOC/DOCX).';

    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
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
    const errorMessage = error instanceof Error ? error.message : 'Failed to submit application. Please try again.';
    return {
      success: false,
      message: errorMessage
    };
  }
}
