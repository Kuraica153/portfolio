import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect admin routes (except login)
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    // Check for better-auth session cookie
    const sessionCookie = request.cookies.get("better-auth.session_token");
    
    if (!sessionCookie) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // If logged in and on login page, redirect to dashboard
  if (pathname === "/admin/login") {
    const sessionCookie = request.cookies.get("better-auth.session_token");
    
    if (sessionCookie) {
      const dashboardUrl = new URL("/admin", request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
