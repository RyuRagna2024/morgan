// components/layout/Footer.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-400">
      <div className="container mx-auto px-4 pb-8 pt-16 md:px-6 md:pt-24">
        {/* Top Section: Download App & Links */}
        <div className="mb-16 grid grid-cols-1 gap-12 border-b border-neutral-800 pb-16 md:grid-cols-5">
          {/* Download App */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-medium uppercase tracking-wider text-white md:text-3xl">
              Download The <br /> Carlton App
            </h3>
            <Link
              href="#download-app"
              className="group inline-flex items-center text-xs uppercase tracking-wider text-white hover:text-neutral-300"
            >
              Download Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            <div>
              <h4 className="mb-4 font-semibold uppercase tracking-wider text-white">
                Services
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#hair-services" className="hover:text-white">
                    Salon
                  </Link>
                </li>
                <li>
                  <Link href="#blowdry-services" className="hover:text-white">
                    Blow Dry Bar
                  </Link>
                </li>
                <li>
                  <Link href="#barber-services" className="hover:text-white">
                    Barber
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold uppercase tracking-wider text-white">
                Carlton
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#locations" className="hover:text-white">
                    Locations
                  </Link>
                </li>
                <li>
                  <Link href="#academy" className="hover:text-white">
                    Academy
                  </Link>
                </li>
                <li>
                  <Link href="#shop" className="hover:text-white">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold uppercase tracking-wider text-white">
                Contact
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#queries" className="hover:text-white">
                    Queries
                  </Link>
                </li>
                <li>
                  <Link href="#marketing" className="hover:text-white">
                    Marketing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Social */}
        <div className="flex flex-col items-center justify-between text-xs md:flex-row">
          <p className="mb-4 text-center md:mb-0 md:text-left">
            © {new Date().getFullYear()} Carlton Hair. All rights reserved.{" "}
            {/* Maintained & Hosted by ExampleDevs */}
          </p>
          {/* Add Social Links if needed */}
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase hover:text-white"
            >
              Instagram
            </Link>
            {/* Add other social links */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
