import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Basic Auth for /admin and /api/admin routes
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith('/admin') && !pathname.startsWith('/api/admin')) {
    return NextResponse.next();
  }

  const auth = req.headers.get('authorization');
  const BASIC_USER = process.env.ADMIN_USER || 'admin';
  const BASIC_PASS = process.env.ADMIN_PASS || 'password123';

  if (auth && auth.startsWith('Basic ')) {
    try {
      const base64 = auth.split(' ')[1];
      const [user, pass] = Buffer.from(base64, 'base64').toString().split(':');
      if (user === BASIC_USER && pass === BASIC_PASS) {
        return NextResponse.next();
      }
    } catch {}
  }

  const res = new NextResponse('Unauthorized', { status: 401 });
  res.headers.set('WWW-Authenticate', 'Basic realm="Admin Area"');
  return res;
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};

