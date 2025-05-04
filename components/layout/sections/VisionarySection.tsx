// components/sections/VisionarySection.tsx
import Image from "next/image";

// --- Reverted to local image path ---
const visionaryImageUrl = "/images/visionary.jpg";
// ------------------------------------

const VisionarySection = () => {
  return (
    <section className="bg-black py-20 text-white md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between md:mb-24 md:flex-row md:items-end">
          <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-light uppercase leading-none">
            Visionary <br /> Since 68
          </h2>
          <p className="mt-4 max-w-xs text-right text-xs uppercase leading-relaxed text-neutral-400 md:mt-0">
            Our ambitious management team is continually building a high-end
            company.
          </p>
        </div>

        {/* Image */}
        <div className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
          <Image
            src={visionaryImageUrl} // Use local path variable
            alt="Woman sitting relaxed"
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionarySection;
