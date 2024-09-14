import { NextRequest, NextResponse } from 'next/server';

import {
    API_AUTH_PREFIX,
    AUTH_ROUTES,
    PROTECTED_ROUTES,
} from '@/protected-routes';

export async function middleware(request: NextRequest) {
    const sessionToken =
        request.cookies.get('next-auth.session-token') ||
        request.cookies.get('__Secure-next-auth.session-token');

    // manage route protection
    const isAuth = sessionToken;
    const pathname = request.nextUrl.pathname;

    const isAccessingApiAuthRoute = pathname.startsWith(API_AUTH_PREFIX);
    const isAccessingAuthRoute = AUTH_ROUTES.some((route) =>
        pathname.startsWith(route),
    );
    const isAccessingProtectedRoute = PROTECTED_ROUTES.some((route) =>
        pathname.startsWith(route),
    );

    if (isAccessingApiAuthRoute) {
        console.log('give access');
        return NextResponse.next();
    }

    if (isAccessingAuthRoute) {
        if (isAuth) {
            console.log('redirct to dashboard');
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
        console.log('do not redirect to dashboard');
        return NextResponse.next();
    }

    if (!isAuth && isAccessingProtectedRoute) {
        console.log('redirect to login');
        return NextResponse.redirect(new URL('/login', request.url));
    }
}
