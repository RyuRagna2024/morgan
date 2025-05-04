// components/sections/CtaSection.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// --- Reverted to local image path ---
const ctaImageUrl = "/images/cta-cards.jpg";
// ------------------------------------

const CtaSection = () => {
  return (
    <section className="bg-black py-20 text-white md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between md:mb-24 md:flex-row md:items-end">
          <div className="mb-6 md:mb-0">
            <p className="mb-4 max-w-xs text-xs uppercase leading-relaxed text-neutral-400">
              For bookings, careers, queries and marketing, please click below.
            </p>
            <Link
              href="mailto:info@carltonhair.com"
              className="group inline-flex items-center text-xs uppercase tracking-wider text-white hover:text-neutral-300"
            >
              Send us an email
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <h2 className="text-right text-[clamp(2rem,7vw,4rem)] font-light uppercase leading-none md:text-[clamp(2.5rem,8vw,5rem)]">
            Let&apos;s Cut To <br /> The Chase
          </h2>
        </div>

        {/* Image */}
        <div className="relative h-[50vh] w-full overflow-hidden md:h-[70vh]">
          <Image
            src={ctaImageUrl} // Use local path variable
            alt="People playing cards and laughing"
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
