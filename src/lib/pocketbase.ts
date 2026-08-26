import PocketBase from 'pocketbase';

// ponytail: minimal server-side PocketBase admin client helper
export async function getPocketBaseAdmin() {
  const pbUrl = process.env.POCKETBASE_URL;
  const adminEmail = process.env.POCKETBASE_ADMIN_EMAIL;
  const adminPassword = process.env.POCKETBASE_ADMIN_PASSWORD;

  if (!pbUrl || !adminEmail || !adminPassword) {
    throw new Error('Missing PocketBase environment variables (POCKETBASE_URL, POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD).');
  }

  const pb = new PocketBase(pbUrl);

  try {
    // PocketBase v0.23+ superuser authentication
    await pb.collection('_superusers').authWithPassword(adminEmail, adminPassword);
  } catch {
    // Fallback to legacy pb.admins for older versions if needed
    if (pb.admins) {
      await pb.admins.authWithPassword(adminEmail, adminPassword);
    }
  }

  return pb;
}
