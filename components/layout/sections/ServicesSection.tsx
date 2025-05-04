// components/sections/ServicesSection.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// --- Reverted to local image paths ---
const serviceHairUrl = "/images/service-hair.jpg";
const serviceBarberUrl = "/images/service-barber.jpg";
const serviceBlowdryUrl = "/images/service-blowdry.jpg";
// ------------------------------------

const services = [
  { id: "01", title: "Hair", image: serviceHairUrl, href: "#hair-services" },
  {
    id: "02",
    title: "Barber",
    image: serviceBarberUrl,
    href: "#barber-services",
  },
  {
    id: "03",
    title: "Blowdry Bar",
    image: serviceBlowdryUrl,
    href: "#blowdry-services",
  },
];

// ServiceCard component remains the same
const ServiceCard = ({ id, title, image, href }: (typeof services)[0]) => (
  <div className="group relative flex flex-col">
    <span className="absolute left-0 top-0 z-10 p-2 text-xs text-neutral-500">
      {id}
    </span>
    <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden">
      <Image
        src={image} // Will receive the local path
        alt={title}
        layout="fill"
        objectFit="cover"
        className={`transition-transform duration-300 ease-in-out group-hover:scale-105 ${id === "02" ? "grayscale group-hover:grayscale-0" : ""}`}
      />
    </div>
    <h3 className="mb-2 text-lg font-medium uppercase tracking-wider text-black md:text-xl">
      {title}
    </h3>
    <Link
      href={href}
      className="mt-auto inline-flex items-center text-xs uppercase tracking-wider text-black hover:text-neutral-700"
    >
      View More
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="bg-[hsl(var(--muted))] py-20 text-black md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between md:mb-24 md:flex-row md:items-end">
          <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-light uppercase leading-none text-black">
            Our <br /> Services
          </h2>
          <p className="mt-4 text-right text-xs uppercase tracking-wider text-neutral-500 md:mt-0">
            Hair + Beauty For <br /> Men + Women
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
