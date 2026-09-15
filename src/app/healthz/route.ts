export const dynamic = 'force-dynamic';

// ponytail: native platform Response.json for zero-dependency health check probe
export async function GET() {
  return Response.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}
