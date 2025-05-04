// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils"; // This import is needed again

// Configure font
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" }); // This variable is needed again

export const metadata: Metadata = {
  title: "Carlton Hair Clone",
  description: "Landing page clone of the Carlton Hair website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      {/* --- RESTORED BODY CLASSES --- */}
      <body
        className={cn(
          // Use cn again
          "min-h-screen bg-background font-sans antialiased", // Base classes including bg-background
          inter.variable, // Apply font variable class again
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      {/* --- END RESTORED BODY --- */}
    </html>
  );
}
