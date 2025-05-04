// middleware.ts
import { lucia } from "@/auth"; // Adjust import path if auth.ts is not in root
import { verifyRequestOrigin } from "lucia";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  // --- CSRF Protection (Standard Lucia practice) ---
  if (request.method === "GET") {
    // Allow GET requests without origin check
    return NextResponse.next();
  }
  const originHeader = request.headers.get("Origin");
  const hostHeader = request.headers.get("Host");
  if (
    !originHeader ||
    !hostHeader ||
    !verifyRequestOrigin(originHeader, [hostHeader])
  ) {
    // Invalid origin
    return new NextResponse(null, {
      status: 403,
    });
  }
  // --- End CSRF Protection ---

  // --- Session Validation & Cookie Handling ---
  const sessionId = request.cookies.get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) {
    // No session ID, just continue
    return NextResponse.next();
  }

  const { session, user } = await lucia.validateSession(sessionId);

  // Create the response object early to attach cookies
  const response = NextResponse.next();

  try {
    if (session && session.fresh) {
      // Session is valid and needs refreshing, set refreshed cookie
      const sessionCookie = lucia.createSessionCookie(session.id);
      response.cookies.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
    }

    if (!session) {
      // Session is invalid, set blank cookie to clear it
      const sessionCookie = lucia.createBlankSessionCookie();
      response.cookies.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
    }
  } catch (e) {
    console.error("Middleware failed to set session cookie:", e);
    // Decide how to handle cookie setting errors, maybe just continue
  }
  // --- End Session Validation ---

  return response; // Return response with potentially updated cookies
}

// Matcher ensures middleware runs on relevant paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
