import PocketBase from 'pocketbase';

let pbSingleton: PocketBase | null = null;
let authPromise: Promise<PocketBase> | null = null;

// ponytail: reuse singleton superuser auth with 10s request timeout to prevent redundant login roundtrips and hanging calls
export async function getPocketBaseAdmin(): Promise<PocketBase> {
  const pbUrl = process.env.POCKETBASE_URL;
  const adminEmail = process.env.POCKETBASE_ADMIN_EMAIL;
  const adminPassword = process.env.POCKETBASE_ADMIN_PASSWORD;

  if (!pbUrl || !adminEmail || !adminPassword) {
    throw new Error('Missing PocketBase environment variables (POCKETBASE_URL, POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD).');
  }

  if (!pbSingleton || pbSingleton.baseUrl !== pbUrl) {
    pbSingleton = new PocketBase(pbUrl);
    // ponytail: enforce 10s timeout on all pocketbase network requests to prevent hanging server actions
    pbSingleton.beforeSend = (_url, options) => {
      const timeoutSignal = AbortSignal.timeout(10000);
      options.signal = options.signal ? AbortSignal.any([options.signal, timeoutSignal]) : timeoutSignal;
      return { url: _url, options };
    };
  }

  if (pbSingleton.authStore.isValid) {
    return pbSingleton;
  }

  // Prevent concurrent auth requests stampede
  if (authPromise) {
    return authPromise;
  }

  authPromise = (async () => {
    try {
      const client = pbSingleton!;
      try {
        // PocketBase v0.23+ superuser authentication
        await client.collection('_superusers').authWithPassword(adminEmail, adminPassword);
      } catch (err) {
        // Fallback to legacy pb.admins for older versions if needed
        if (
          typeof (client as unknown as { admins?: { authWithPassword?: (...args: unknown[]) => Promise<unknown> } }).admins?.authWithPassword === 'function' &&
          (client as unknown as { admins: unknown }).admins !== client.collection('_superusers')
        ) {
          await (client as unknown as { admins: { authWithPassword: (...args: unknown[]) => Promise<unknown> } }).admins.authWithPassword(adminEmail, adminPassword);
        } else {
          throw err;
        }
      }
      return client;
    } finally {
      authPromise = null;
    }
  })();

  return authPromise;
}
