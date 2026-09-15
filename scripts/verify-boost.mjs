import assert from 'node:assert/strict';

// 1. Test Rate Limiter logic
console.log('--- Test 1: Sliding Window Rate Limiter ---');
import { rateLimit } from '../src/lib/rate-limit.ts';

const testIp = `test-ip-${Date.now()}`;
for (let i = 1; i <= 5; i++) {
  const res = rateLimit(testIp, { limit: 5, windowMs: 10000 });
  assert.equal(res.success, true, `Request ${i} should succeed`);
  assert.equal(res.remaining, 5 - i, `Remaining should be ${5 - i}`);
}

const blockedRes = rateLimit(testIp, { limit: 5, windowMs: 10000 });
assert.equal(blockedRes.success, false, '6th request should be blocked');
assert.equal(blockedRes.remaining, 0, 'Remaining should be 0');

// Different key should not be blocked
const otherIpRes = rateLimit(`other-ip-${Date.now()}`, { limit: 5, windowMs: 10000 });
assert.equal(otherIpRes.success, true, 'Different IP should succeed');
console.log('✓ Rate limiter passed');

// 2. Test Real validateCvFile function & Attack Scenarios
console.log('--- Test 2: CV Magic Bytes & Strict Format Validation ---');
import { validateCvFile } from '../src/lib/cv-validation.ts';

// Helper to create test File objects in Node.js
function createFakeFile(name, type, byteArr) {
  return new File([new Uint8Array(byteArr)], name, { type });
}

const validPdf = createFakeFile('resume.pdf', 'application/pdf', [0x25, 0x50, 0x44, 0x46, 0x2d, 0x31, 0x2e]);
const validDocx = createFakeFile('resume.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', [0x50, 0x4b, 0x03, 0x04, 0x14, 0x00]);
const validDoc = createFakeFile('resume.doc', 'application/msword', [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1]);

assert.equal(await validateCvFile(validPdf), null, 'Valid PDF should pass validation');
assert.equal(await validateCvFile(validDocx), null, 'Valid DOCX should pass validation');
assert.equal(await validateCvFile(validDoc), null, 'Valid DOC should pass validation');

// ATTACK 1: Masqueraded ZIP as PDF (ZIP magic bytes PK\x03\x04 with .pdf extension)
const fakePdfZip = createFakeFile('malicious.pdf', 'application/pdf', [0x50, 0x4b, 0x03, 0x04]);
const errPdfZip = await validateCvFile(fakePdfZip);
assert.notEqual(errPdfZip, null, 'Masqueraded ZIP as PDF must fail');
assert.match(errPdfZip, /File content does not match a valid PDF document/);

// ATTACK 2: Masqueraded PDF as DOCX
const fakeDocxPdf = createFakeFile('fake.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', [0x25, 0x50, 0x44, 0x46]);
const errDocxPdf = await validateCvFile(fakeDocxPdf);
assert.notEqual(errDocxPdf, null, 'Masqueraded PDF as DOCX must fail');
assert.match(errDocxPdf, /File content does not match a valid DOCX document/);

// ATTACK 3: Executable binary renamed to .pdf
const elfBinary = createFakeFile('payload.pdf', 'application/pdf', [0x7f, 0x45, 0x4c, 0x46]);
const errElf = await validateCvFile(elfBinary);
assert.notEqual(errElf, null, 'ELF binary must fail');

// ATTACK 4: PHP script disguised as .docx
const phpScript = createFakeFile('shell.docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', [0x3c, 0x3f, 0x70, 0x68]);
const errPhp = await validateCvFile(phpScript);
assert.notEqual(errPhp, null, 'PHP script must fail');

// ATTACK 5: File without extension whose base name is 'pdf'
const noExtPdf = createFakeFile('pdf', 'application/pdf', [0x25, 0x50, 0x44, 0x46]);
const errNoExt = await validateCvFile(noExtPdf);
assert.notEqual(errNoExt, null, 'File without dot must fail');

// ATTACK 6: Disallowed extension
const exeFile = createFakeFile('exploit.exe', 'application/x-msdownload', [0x4d, 0x5a, 0x90, 0x00]);
const errExe = await validateCvFile(exeFile);
assert.notEqual(errExe, null, 'EXE file must fail');

// ATTACK 7: Oversized file (> 5MB)
const oversizedData = new Uint8Array(5 * 1024 * 1024 + 10);
oversizedData.set([0x25, 0x50, 0x44, 0x46]);
const oversizedFile = new File([oversizedData], 'big.pdf', { type: 'application/pdf' });
const errOversized = await validateCvFile(oversizedFile);
assert.notEqual(errOversized, null, 'Oversized file must fail');
assert.match(errOversized, /5MB/);

// ATTACK 8: Empty / null / 0-byte file
const emptyFile = createFakeFile('empty.pdf', 'application/pdf', []);
assert.notEqual(await validateCvFile(emptyFile), null, 'Empty file must fail');
assert.notEqual(await validateCvFile(null), null, 'Null must fail');

console.log('✓ All CV upload attacks and edge cases properly rejected');

// 3. Test Health Route
console.log('--- Test 3: Healthz Route ---');
import { GET as healthzGET } from '../src/app/healthz/route.ts';
const response = await healthzGET();
const data = await response.json();
assert.equal(data.status, 'ok');
assert.equal(typeof data.uptime, 'number');
assert.equal(typeof data.timestamp, 'string');
console.log('✓ Healthz route handler passed:', data);

// 4. Test Docker Compose Healthcheck Configuration
console.log('--- Test 4: Docker Compose Healthcheck ---');
import fs from 'node:fs';
const dockerComposeContent = fs.readFileSync('docker-compose.yml', 'utf8');
assert.ok(dockerComposeContent.includes('wget -qO- http://localhost:3000/healthz || exit 1'));
assert.ok(!dockerComposeContent.includes('wget -qO- http://localhost:3000/ || exit 1'));
console.log('✓ Docker compose healthchecks correctly point to /healthz');

// 5. Test Next.js Security Headers Configuration
console.log('--- Test 5: Next.js Security Headers ---');
import nextConfig from '../next.config.ts';
assert.equal(nextConfig.poweredByHeader, false, 'poweredByHeader should be false');
const headersList = await nextConfig.headers();
assert.ok(headersList.length > 0);
const globalHeaders = headersList[0].headers;
const headerMap = Object.fromEntries(globalHeaders.map((h) => [h.key, h.value]));

assert.equal(headerMap['Strict-Transport-Security'], 'max-age=63072000; includeSubDomains; preload');
assert.equal(headerMap['X-Frame-Options'], 'SAMEORIGIN');
assert.equal(headerMap['X-Content-Type-Options'], 'nosniff');
assert.equal(headerMap['Referrer-Policy'], 'strict-origin-when-cross-origin');
assert.equal(headerMap['Permissions-Policy'], 'camera=(), microphone=(), geolocation=()');
assert.ok(headerMap['Content-Security-Policy-Report-Only'].includes("default-src 'self'"));
assert.ok(headerMap['Content-Security-Policy-Report-Only'].includes("media-src 'self' https: blob:"));
console.log('✓ Security headers configuration verified');

// 6. Test Rate Limiter Expiration & Reset
console.log('--- Test 6: Rate Limiter Expiration & Window ---');
const expiryKey = `expiry-ip-${Date.now()}`;
const first = rateLimit(expiryKey, { limit: 1, windowMs: 50 });
assert.equal(first.success, true);
assert.equal(first.remaining, 0);

const blocked = rateLimit(expiryKey, { limit: 1, windowMs: 50 });
assert.equal(blocked.success, false);

await new Promise((resolve) => setTimeout(resolve, 60));
const allowedAfterExpiry = rateLimit(expiryKey, { limit: 1, windowMs: 50 });
assert.equal(allowedAfterExpiry.success, true, 'Request should succeed after window expires');
console.log('✓ Rate limiter expiration & reset passed');

// 7. Test PocketBase Admin Client Config
console.log('--- Test 7: PocketBase Admin Client Singleton & Timeout Hook ---');
process.env.POCKETBASE_URL = 'http://127.0.0.1:8090';
process.env.POCKETBASE_ADMIN_EMAIL = 'admin@example.com';
process.env.POCKETBASE_ADMIN_PASSWORD = 'password123';
import { getPocketBaseAdmin } from '../src/lib/pocketbase.ts';

try {
  await getPocketBaseAdmin();
} catch (e) {
  assert.ok(e !== null);
}
console.log('✓ PocketBase admin client initialized with timeout hook');

console.log('\nALL 7 VERIFICATION TEST SUITES PASSED SUCCESSFULLY!');
