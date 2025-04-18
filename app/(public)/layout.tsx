// app/(public)/layout.tsx

import { validateRequest } from "@/auth";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import SessionProvider from "../SessionProvider";

export default async function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, session } = await validateRequest();
  return (
    <SessionProvider value={{ user, session }}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </SessionProvider>
  );
}
