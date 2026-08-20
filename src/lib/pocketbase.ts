import PocketBase from 'pocketbase';

// ponytail: minimal server-side PocketBase admin client helper
export async function getPocketBaseAdmin() {
  const pbUrl = process.env.POCKETBASE_URL || 'https://db.nominanetwork.tech';
  const adminEmail = process.env.POCKETBASE_ADMIN_EMAIL || 'taylor19@gmail.com';
  const adminPassword = process.env.POCKETBASE_ADMIN_PASSWORD || 'j1dwrm5bqd1ewcaw8pbl0sdqzg16kh3h';

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
