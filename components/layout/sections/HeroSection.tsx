// components/sections/HeroSection.tsx
import Image from "next/image";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  // --- Reverted to local image path ---
  const heroImageUrl = "/images/hero-main.jpg";
  // ------------------------------------

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden bg-black px-4 py-20 md:px-6">
      <div className="container mx-auto text-white">
        {/* Title */}
        <h1 className="text-[clamp(3rem,10vw,7rem)] font-light uppercase leading-none">
          Welcome <br /> To Carlton
        </h1>

        {/* Image */}
        <div className="mt-8 flex justify-center md:absolute md:bottom-10 md:right-10 md:mt-0 lg:right-20 xl:right-40">
          <div className="relative aspect-[3/4] w-full max-w-[300px] shadow-lg md:max-w-[350px] lg:max-w-[400px]">
            <Image
              src={heroImageUrl} // Use local path variable
              alt="Model with blonde hair"
              layout="fill"
              objectFit="cover"
              priority
              className="opacity-90"
            />
            <span className="absolute bottom-4 right-[-20px] -rotate-90 text-xs uppercase tracking-widest text-neutral-400 md:right-[-30px]">
              VIS
            </span>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-16 flex flex-col items-start md:mt-24 md:flex-row md:items-end md:justify-between">
          <p className="mb-8 max-w-xs text-xs uppercase leading-relaxed text-neutral-400 md:mb-0">
            We realise that our success will be determined primarily by the
            experience each client has with our company.
          </p>
          <div className="hidden items-center space-x-8 md:flex">
            <button className="group">
              <ArrowDown className="h-8 w-8 text-neutral-500 transition-transform group-hover:translate-y-1" />
            </button>
            <span className="font-light text-white text-[clamp(4rem,10vw,8rem)] leading-none">
              01<span className="text-neutral-500">.</span>
            </span>
          </div>
        </div>
        <div className="mt-8 flex w-full justify-end md:hidden">
          <span className="text-6xl font-light text-white">
            01<span className="text-neutral-500">.</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
