import { createClient } from '@/utils/supabase/server';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    const supabase = createClient();

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
