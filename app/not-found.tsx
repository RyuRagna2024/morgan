"use client";

import { useEffect, useState } from "react";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound404() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Auto-redirect countdown
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
    // We're not redirecting programmatically anymore since we're using Next.js Link
  }, [countdown]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <div className="w-full max-w-md text-center">
        {/* Animated 404 text */}
        <h1 className="text-8xl font-bold text-slate-800 mb-6 relative">
          <span className="inline-block animate-bounce">4</span>
          <span className="inline-block animate-pulse">0</span>
          <span className="inline-block animate-bounce">4</span>
        </h1>

        {/* Error message */}
        <h2 className="text-2xl font-semibold text-slate-700 mb-3">
          Page Not Found
        </h2>
        <p className="text-slate-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        {/* Countdown message */}
        {countdown > 0 && (
          <p className="text-sm text-slate-500 mb-6">
            Redirecting to home page in {countdown} second
            {countdown !== 1 ? "s" : ""}
          </p>
        )}

        {/* Button with animation */}
        <div className="space-y-4">
          <Link href="/" className="block w-full">
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg w-full transition-all duration-300 transform hover:scale-105 active:scale-95">
              <Home size={20} />
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
