'use server';

import { headers } from 'next/headers';
import { getPocketBaseAdmin } from '@/lib/pocketbase';
import { rateLimit } from '@/lib/rate-limit';

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
    const headerList = await headers();
    const forwardedFor = headerList.get('x-forwarded-for');
    const realIp = headerList.get('x-real-ip');
    const forwardedIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '';
    const ip = forwardedIp || (realIp ? realIp.trim() : '') || '127.0.0.1';

    const { success: allowed } = rateLimit(`contact:${ip}`);
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
    const website = getString(formData, 'website');
    const message = getString(formData, 'message');

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

    if (website && website.length > 200) {
      errors.website = 'Website must be 200 characters or fewer.';
    }

    if (!message) {
      errors.message = 'Please enter your message.';
    } else if (message.length > 3000) {
      errors.message = 'Message must be 3000 characters or fewer.';
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
