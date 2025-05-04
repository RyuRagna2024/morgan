// components/sections/FindUsSection.tsx
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const locations = [
  { city: "Cape Town", count: 10, href: "#cape-town" },
  { city: "Johannesburg", count: 6, href: "#johannesburg" },
  { city: "Durban", count: 2, href: "#durban" },
  { city: "Pretoria", count: 2, href: "#pretoria" },
  { city: "Port Elizabeth", count: 1, href: "#port-elizabeth" },
];

const FindUsSection = () => {
  return (
    <section className="bg-black py-20 text-white md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between md:mb-24 md:flex-row md:items-end">
          <div className="mb-6 md:mb-0">
            <p className="mb-4 max-w-xs text-xs uppercase leading-relaxed text-neutral-400">
              You can find your nearest Carlton Hair via our mobile app
            </p>
            <Link
              href="#download-app"
              className="group inline-flex items-center text-xs uppercase tracking-wider text-white hover:text-neutral-300"
            >
              Download App
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          {/* Using clamp for responsive font size */}
          <h2 className="text-right text-[clamp(2rem,7vw,4rem)] font-light uppercase leading-none md:text-[clamp(2.5rem,8vw,5rem)]">
            Find Us In <br /> Your City
          </h2>
        </div>

        {/* Location List */}
        <div className="border-t border-neutral-800">
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="flex items-center justify-between border-b border-neutral-800 py-6 transition-colors hover:bg-neutral-900/50 md:py-8"
            >
              <span className="text-lg font-medium uppercase tracking-wider md:text-2xl lg:text-3xl">
                {loc.city}
              </span>
              <div className="flex items-center space-x-4 text-right md:space-x-8">
                <span className="text-sm text-neutral-400 md:text-base">
                  {loc.count.toString().padStart(2, "0")} Locations
                </span>
                <Link
                  href={loc.href}
                  className="group flex items-center text-xs uppercase tracking-wider text-white hover:text-neutral-300"
                >
                  See More
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
