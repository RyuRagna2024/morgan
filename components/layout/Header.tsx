// components/layout/Header.tsx
"use client"; // Needed for potential future state (mobile menu)

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu } from "lucide-react";
import React from "react";
// Import Sheet components if you plan to implement the mobile menu later
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "#services", label: "SERVICES" },
  { href: "#salons", label: "SALONS" },
  { href: "#shop", label: "SHOP" },
  { href: "#academy", label: "ACADEMY" },
  { href: "#book", label: "BOOK NOW" },
];

const Header = () => {
  // Add state and handlers for mobile menu if using Sheet
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold uppercase tracking-tighter text-white"
        >
          carlton hair
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-neutral-300 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon - Placeholder */}
          <button className="relative p-2 text-neutral-300 transition-colors hover:text-white">
            <ShoppingBag size={20} />
            {/* Simple cart count/price display */}
            <span className="absolute right-0 top-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-600 text-[10px] text-white">
              0
            </span>
            <span className="ml-1 hidden text-sm lg:inline">$0.00</span>
          </button>

          <Button
            variant="outline"
            className="hidden rounded-full border-neutral-500 px-6 py-2 text-sm uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black md:inline-flex"
          >
            Contact
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-neutral-300 hover:text-white md:hidden"
            // onClick={() => setIsMobileMenuOpen(true)} // Add for Sheet Trigger
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>
      {/* Mobile Menu Sheet (Optional Implementation) */}
      {/* <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
         <SheetContent side="right" className="w-[300px] bg-black text-white border-neutral-800 p-6">
           <SheetHeader className="mb-6 text-left">
             <SheetTitle className="text-lg font-medium text-white">Menu</SheetTitle>
           </SheetHeader>
           <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base uppercase tracking-wider text-neutral-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
             <Button variant="outline" className="mt-4 rounded-full border-neutral-500 px-6 py-2 text-sm uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
             </Button>
           </nav>
         </SheetContent>
       </Sheet> */}
    </header>
  );
};

export default Header;
