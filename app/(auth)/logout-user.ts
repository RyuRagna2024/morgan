"use server";

import { lucia, validateRequest } from "@/auth"; // Assuming auth is aliased correctly
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout(): Promise<never> {
  // Actions that end in redirect often return never
  const { session } = await validateRequest();

  if (!session) {
    // Handle case where there's no valid session to invalidate
    // Might redirect immediately or throw a different error depending on desired UX
    console.warn("Logout attempt without a valid session.");
    return redirect("/"); // Redirect even if session was already invalid/missing
    // Or throw new Error("Unauthorized");
  }

  // Invalidate the session in Lucia (and the database via adapter)
  await lucia.invalidateSession(session.id);

  // Create a blank session cookie to overwrite the existing one in the browser
  const sessionCookie = lucia.createBlankSessionCookie();

  // --- FIX: Await cookies() before setting ---
  const cookieStore = await cookies();
  cookieStore.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  // ------------------------------------------

  // Redirect the user to the homepage after logout
  return redirect("/");
}
