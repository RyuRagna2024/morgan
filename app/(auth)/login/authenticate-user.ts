"use server";

import { lucia } from "@/auth"; // Assuming auth.ts is aliased correctly
import prisma from "@/lib/prisma";
import { verify } from "@node-rs/argon2";
// Removed getRedirectError, stick with isRedirectError from redirect-error
// import { getRedirectError } from "next/dist/client/components/redirect";
import { isRedirectError } from "next/dist/client/components/redirect-error"; // Keep this one
import { cookies } from "next/headers";
import { UserRole } from "@prisma/client";
import { LoginFormValues } from "./validations"; // Assuming this path is correct

const roleRoutes: Record<UserRole, string> = {
  [UserRole.USER]: "/register-success",
  [UserRole.CUSTOMER]: "/", // Redirect logged-in CUSTOMER to home
  [UserRole.ADMIN]: "/", // Redirect logged-in ADMIN to home (or an admin dashboard)
} as const;

export async function login(credentials: LoginFormValues): Promise<{
  error?: string;
  redirectTo?: string;
  sessionCreated?: boolean; // Added this return property
}> {
  // Removed ' | void' as we always return an object or throw
  try {
    const { email, password } = credentials;

    const existingUser = await prisma.user.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });

    if (!existingUser || !existingUser.passwordHash) {
      // Generic error to prevent account enumeration
      return { error: "Invalid email or password" };
    }

    const validPassword = await verify(existingUser.passwordHash, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    if (!validPassword) {
      return { error: "Invalid email or password" };
    }

    let sessionCreated = false;

    // Always create session for valid login, role check is for redirect path
    try {
      // Use Lucia to create the session directly, it handles DB and cookie creation
      const session = await lucia.createSession(existingUser.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);

      // --- FIX: Await cookies() before setting ---
      const cookieStore = await cookies();
      cookieStore.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
      // ------------------------------------------

      sessionCreated = true;
    } catch (sessionError) {
      console.error("Session creation/setting error:", sessionError);
      // Don't necessarily expose internal errors directly to user
      return { error: "Login failed. Please try again." };
    }

    // Determine redirect path based on role
    const redirectPath = roleRoutes[existingUser.role];
    if (!redirectPath) {
      // Should ideally not happen if roles are managed correctly
      console.error(`No redirect path defined for role: ${existingUser.role}`);
      return {
        error: "Login successful, but could not determine destination.",
      };
    }

    // Return success state with redirect path
    return { redirectTo: redirectPath, sessionCreated };
  } catch (error) {
    // --- FIX: Correctly handle potential redirect errors ---
    if (isRedirectError(error)) {
      // If Lucia internally uses redirect (less common now) or you add one, re-throw it
      throw error;
    }
    // -------------------------------------------------------

    console.error("Unhandled login error:", error);
    return { error: "An unexpected error occurred. Please try again." };
  }
}
