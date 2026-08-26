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
    const getString = (fd: FormData, key: string) => {
      const val = fd.get(key);
      return typeof val === 'string' ? val.trim() : '';
    };

    const name = getString(formData, 'name');
    const email = getString(formData, 'email');
    const jobId = getString(formData, 'job_id') || 'general';
    const whyApply = getString(formData, 'why_apply');
    const projectHighlight = getString(formData, 'project_highlight');
    const portfolio = getString(formData, 'portfolio');
    const salary = getString(formData, 'salary');
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
    // ponytail: Do not expose raw internal admin error messages to the client
    return {
      success: false,
      message: 'Failed to submit application due to an internal server error. Please try again later.'
    };
  }
}
