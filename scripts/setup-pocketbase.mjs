import PocketBase from 'pocketbase';

const pbUrl = process.env.POCKETBASE_URL;
const adminEmail = process.env.POCKETBASE_ADMIN_EMAIL;
const adminPassword = process.env.POCKETBASE_ADMIN_PASSWORD;

if (!pbUrl || !adminEmail || !adminPassword) {
  console.error('Error: Missing required environment variables (POCKETBASE_URL, POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD).');
  process.exit(1);
}

async function setup() {
  console.log(`Connecting to PocketBase at ${pbUrl}...`);
  const pb = new PocketBase(pbUrl);

  // Authenticate as admin/superuser
  let authSuccess = false;
  try {
    if (pb.collection('_superusers')) {
      console.log('Attempting auth via _superusers collection (PocketBase v0.23+)...');
      await pb.collection('_superusers').authWithPassword(adminEmail, adminPassword);
      authSuccess = true;
      console.log('Successfully authenticated as superuser!');
    }
  } catch (_e) {
    console.log('Superuser collection auth failed, trying admins service...');
  }

  if (!authSuccess && pb.admins) {
    try {
      await pb.admins.authWithPassword(adminEmail, adminPassword);
      authSuccess = true;
      console.log('Successfully authenticated as admin via legacy pb.admins!');
    } catch (e) {
      console.error('Admin auth failed:', e.message);
      process.exit(1);
    }
  }

  // Helper to ensure collections
  async function ensureJobApplications() {
    try {
      const existing = await pb.collections.getOne('job_applications');
      console.log('Collection "job_applications" already exists with ID:', existing.id);
      return;
    } catch (_err) {
      console.log('Collection "job_applications" does not exist yet. Creating...');
    }

    try {
      const collectionData = {
        name: 'job_applications',
        type: 'base',
        listRule: null,
        viewRule: null,
        createRule: null,
        updateRule: null,
        deleteRule: null,
        fields: [
          { name: 'name', type: 'text', required: true },
          { name: 'email', type: 'email', required: true },
          { name: 'job_id', type: 'text', required: true },
          { name: 'why_apply', type: 'text', required: true },
          { name: 'project_highlight', type: 'text', required: true },
          { name: 'portfolio', type: 'text', required: false },
          { name: 'salary', type: 'text', required: false },
          {
            name: 'cv',
            type: 'file',
            required: true,
            maxSelect: 1,
            maxSize: 10485760, // 10MB
            mimeTypes: [
              'application/pdf',
              'application/msword',
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ],
          }
        ]
      };
      const record = await pb.collections.create(collectionData);
      console.log('Successfully created "job_applications" collection:', record.id);
    } catch (createErr) {
      console.error('Error creating job_applications collection (fields format):', createErr);
      try {
        console.log('Trying legacy schema format for job_applications...');
        const legacyData = {
          name: 'job_applications',
          type: 'base',
          schema: [
            { name: 'name', type: 'text', required: true },
            { name: 'email', type: 'email', required: true },
            { name: 'job_id', type: 'text', required: true },
            { name: 'why_apply', type: 'text', required: true },
            { name: 'project_highlight', type: 'text', required: true },
            { name: 'portfolio', type: 'text', required: false },
            { name: 'salary', type: 'text', required: false },
            {
              name: 'cv',
              type: 'file',
              required: true,
              options: {
                maxSelect: 1,
                maxSize: 10485760,
                mimeTypes: [
                  'application/pdf',
                  'application/msword',
                  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                ]
              }
            }
          ]
        };
        const record = await pb.collections.create(legacyData);
        console.log('Successfully created "job_applications" collection with legacy schema:', record.id);
      } catch (legacyErr) {
        console.error('Failed to create job_applications collection with legacy schema:', legacyErr);
      }
    }
  }

  async function ensureContactSubmissions() {
    try {
      const existing = await pb.collections.getOne('contact_submissions');
      console.log('Collection "contact_submissions" already exists with ID:', existing.id);
      return;
    } catch (_err) {
      console.log('Collection "contact_submissions" does not exist yet. Creating...');
    }

    try {
      const collectionData = {
        name: 'contact_submissions',
        type: 'base',
        listRule: null,
        viewRule: null,
        createRule: null,
        updateRule: null,
        deleteRule: null,
        fields: [
          { name: 'name', type: 'text', required: true },
          { name: 'email', type: 'email', required: true },
          { name: 'website', type: 'text', required: false },
          { name: 'message', type: 'text', required: true }
        ]
      };
      const record = await pb.collections.create(collectionData);
      console.log('Successfully created "contact_submissions" collection:', record.id);
    } catch (createErr) {
      console.error('Error creating contact_submissions collection (fields format):', createErr);
      try {
        console.log('Trying legacy schema format for contact_submissions...');
        const legacyData = {
          name: 'contact_submissions',
          type: 'base',
          schema: [
            { name: 'name', type: 'text', required: true },
            { name: 'email', type: 'email', required: true },
            { name: 'website', type: 'text', required: false },
            { name: 'message', type: 'text', required: true }
          ]
        };
        const record = await pb.collections.create(legacyData);
        console.log('Successfully created "contact_submissions" collection with legacy schema:', record.id);
      } catch (legacyErr) {
        console.error('Failed to create contact_submissions collection with legacy schema:', legacyErr);
      }
    }
  }

  await ensureJobApplications();
  await ensureContactSubmissions();
}

setup();
