// app/(public)/layout.tsx

import { validateRequest } from "@/auth"; // Assuming auth.ts is correctly aliased or in root
import Footer from "@/components/layout/Footer"; // Using alias
import Navbar from "@/components/layout/Header"; // Using alias
import SessionProvider from "@/app/SessionProvider"; // Using alias assuming it's in app/
import React from "react"; // Import React explicitly

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Await the async function call
  const { user, session } = await validateRequest();

  return (
    <SessionProvider value={{ user, session }}>
      <div className="flex min-h-screen flex-col">
        {/* You might pass the user prop to Navbar if needed */}
        <Navbar /* user={user} */ />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </SessionProvider>
  );
}
