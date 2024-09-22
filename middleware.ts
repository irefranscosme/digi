import { NextResponse, type NextRequest } from 'next/server';
import { createSupabaseReqResClient } from './app/lib/supabase/server-client';

export async function middleware(request: NextRequest) {
    const response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    const supabase = createSupabaseReqResClient(request, response);

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (user && request.nextUrl.pathname === '/login') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (!user && request.nextUrl.pathname === '/dashboard') {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return response;
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
