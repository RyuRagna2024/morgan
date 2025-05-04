// components/sections/InnovationSection.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// --- Reverted to local image paths ---
const innovationImage1Url = "/images/innovation-1.jpg";
const innovationImage2Url = "/images/innovation-2.jpg";
const innovationImage3Url = "/images/innovation-3.jpg";
// ------------------------------------

const InnovationSection = () => {
  return (
    <section className="bg-[hsl(var(--muted))] py-20 text-black md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between md:mb-24 md:flex-row md:items-end">
          <p className="mb-4 text-xs uppercase tracking-wider text-neutral-500 md:mb-0">
            Highest Standards <br /> of Hairdressing
          </p>
          <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-light uppercase leading-none text-black">
            Constant <br /> Innovation
          </h2>
        </div>

        {/* Image Grid & Text */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-end md:gap-12">
          {/* Image 1 */}
          <div className="relative aspect-[3/4] w-full">
            <span className="absolute -left-4 -top-4 z-10 text-xs text-neutral-400">
              00-1
            </span>
            <Image
              src={innovationImage1Url} // Use local path variable
              alt="Model with curly hair 1"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Text & Image 2 */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="mb-8 max-w-sm text-xs uppercase leading-relaxed text-neutral-600">
              We pride ourselves in being in touch with the latest trends in
              beauty, fashion, equipment and technology. Carlton Hair is the
              official hair partner for South African Fashion Week.
            </p>
            <Link
              href="#locations"
              className="group mb-8 inline-flex items-center text-xs uppercase tracking-wider text-black hover:text-neutral-700"
            >
              See Locations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="relative aspect-[3/4] w-full max-w-md">
              <span className="absolute -left-4 -top-4 z-10 text-xs text-neutral-400">
                00-2
              </span>
              <Image
                src={innovationImage2Url} // Use local path variable
                alt="Model with curly hair 2"
                layout="fill"
                objectFit="cover"
                className="md:translate-y-1/4"
              />
            </div>
          </div>

          {/* Image 3 & Text */}
          <div className="flex flex-col items-end">
            <p className="mb-8 text-right text-xs uppercase leading-relaxed text-neutral-600">
              We have 21 Salons <br /> Across South Africa
            </p>
            <div className="relative aspect-[3/4] w-full">
              <span className="absolute -left-4 -top-4 z-10 text-xs text-neutral-400">
                00-3
              </span>
              <Image
                src={innovationImage3Url} // Use local path variable
                alt="Model with curly hair 3"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
