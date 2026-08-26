'use server';

import { getPocketBaseAdmin } from '@/lib/pocketbase';

export type SubmitContactState = {
  success?: boolean;
  message?: string;
  errors?: Record<string, string>;
};

export async function submitContact(
  _prevState: SubmitContactState,
  formData: FormData
): Promise<SubmitContactState> {
  try {
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const website = formData.get('website')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim();

    // Validation
    const errors: Record<string, string> = {};
    if (!name) errors.name = 'Please enter your name.';
    if (!email) {
      errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!message) errors.message = 'Please enter your message.';

    if (Object.keys(errors).length > 0) {
      return { success: false, errors };
    }

    // ponytail: forward standard FormData directly to PocketBase SDK
    const pb = await getPocketBaseAdmin();

    const pbFormData = new FormData();
    pbFormData.append('name', name as string);
    pbFormData.append('email', email as string);
    if (website) {
      pbFormData.append('website', website);
    }
    pbFormData.append('message', message as string);

    await pb.collection('contact_submissions').create(pbFormData);

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully. We will get back to you shortly.'
    };
  } catch (error: unknown) {
    console.error('Error submitting contact form to PocketBase:', error);
    // ponytail: Do not expose raw internal admin error messages to the client
    return {
      success: false,
      message: 'Failed to send your message due to an internal server error. Please try again later.'
    };
  }
}
