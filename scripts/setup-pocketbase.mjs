import PocketBase from 'pocketbase';

const pbUrl = process.env.POCKETBASE_URL || 'https://db.nominanetwork.tech';
const adminEmail = process.env.POCKETBASE_ADMIN_EMAIL || 'taylor19@gmail.com';
const adminPassword = process.env.POCKETBASE_ADMIN_PASSWORD || 'j1dwrm5bqd1ewcaw8pbl0sdqzg16kh3h';

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

  // Check if job_applications collection already exists
  try {
    const existing = await pb.collections.getOne('job_applications');
    console.log('Collection "job_applications" already exists with ID:', existing.id);
    return;
  } catch (_err) {
    console.log('Collection "job_applications" does not exist yet. Creating...');
  }

  // Create job_applications collection
  // Support both new PB schema format (fields) and legacy (schema)
  try {
    const collectionData = {
      name: 'job_applications',
      type: 'base',
      listRule: null, // private (admin only)
      viewRule: null, // private
      createRule: null, // private (submitted via Server Action with Admin auth)
      updateRule: null, // private
      deleteRule: null, // private
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
        },
        {
          name: 'job_id',
          type: 'text',
          required: true,
        },
        {
          name: 'why_apply',
          type: 'text',
          required: true,
        },
        {
          name: 'project_highlight',
          type: 'text',
          required: true,
        },
        {
          name: 'portfolio',
          type: 'text',
          required: false,
        },
        {
          name: 'salary',
          type: 'text',
          required: false,
        },
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
    console.error('Error creating collection:', createErr);
    // If fields didn't work, try legacy schema format
    try {
      console.log('Trying legacy schema format...');
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
      console.error('Failed to create collection with legacy schema too:', legacyErr);
      process.exit(1);
    }
  }
}

setup();
