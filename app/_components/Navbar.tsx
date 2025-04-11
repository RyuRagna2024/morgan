"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layout, Menu, X } from "lucide-react";
import { useSession } from "@/app/SessionProvider";
import UserButton from "./UserButton"; // Import the UserButton component

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useSession(); // Access the session context

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Determine homepage based on user role
  const getHomeRoute = () => {
    if (!user) return "/";
    switch (user.role) {
      case "ADMIN":
        return "/admin";
      case "CUSTOMER":
        return "/customer";
      default:
        return "/";
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-gradient-to-b from-gray-50 to-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo with dynamic routing based on user role */}
            <Link
              href={getHomeRoute()}
              className="flex-shrink-0 flex items-center"
            >
              <div className="h-8 w-8 bg-blue-500 rounded-md flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800">
                MORGAN
              </span>
            </Link>

            {/* Desktop Navigation - only show if not logged in */}
            {!user && (
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive(link.href)
                        ? "border-blue-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile menu button - only show if not logged in */}
          {!user && (
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}

          {/* Right side: Dashboard button + UserButton if logged in, otherwise login/register buttons */}
          <div className="flex items-center">
            {user ? (
              <>
                {/* My Dashboard Button */}
                <Link
                  href={getHomeRoute()}
                  className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  <Layout className="mr-2 size-4" />
                  My Dashboard
                </Link>
                {/* User Button */}
                <UserButton className="ml-4" />
              </>
            ) : (
              <div className="hidden md:flex md:items-center">
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state - only render if not logged in */}
      {!user && isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive(link.href)
                    ? "border-blue-500 text-blue-700 bg-blue-50"
                    : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <Link
                href="/login"
                className="flex-1 px-4 py-2 text-sm font-medium text-center text-blue-600 hover:text-blue-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="flex-1 ml-3 px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
