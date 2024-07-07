import { NextResponse } from 'next/server'
import { jwtDecode } from 'jwt-decode';

export async function middleware(request) {

    const path = request.nextUrl.pathname

    const uid = process.env.FB_ADMIN_USER_ID
    const uemail = process.env.FB_ADMIN_USER_EMAIL

    const token = request.cookies.get('adminToken')?.value || ''

    try {
        if (path == '/admin/auth/login' && token) {
            return NextResponse.redirect(new URL('/admin/dashboard', request.url))
        }
        if (path == '/admin/dashboard' && !token) {
            return NextResponse.redirect(new URL('/admin/auth/login', request.url))
        }

        // Verify JWT token
        if (token) {
            const decodedToken = jwtDecode(token)
            if (decodedToken.user_id == uid && decodedToken.firebase.identities.email == uemail) {
                return NextResponse.next();
            } else {
                console.log("Token galat hai bhai................")
                return NextResponse.rewrite(new URL('/admin/auth/logout', request.url))
            }
        }
    } catch (error) {
        console.error("Error in middleware", error);
        return NextResponse.rewrite(new URL('/admin/auth/login', request.url))
    }
}

export const config = {
    matcher: ['/admin/:path*'],
}