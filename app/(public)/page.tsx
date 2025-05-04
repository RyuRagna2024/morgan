// app/(public)/page.tsx
import HeroSection from "@/components/layout/sections/HeroSection";
import InnovationSection from "@/components/layout/sections/InnovationSection";
import VisionarySection from "@/components/layout/sections/VisionarySection";
import FindUsSection from "@/components/layout/sections/FindUsSection";
import ServicesSection from "@/components/layout/sections/ServicesSection";
import CtaSection from "@/components/layout/sections/CtaSection";

// This page is now a Server Component by default
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InnovationSection />
      <VisionarySection />
      <FindUsSection />
      <ServicesSection />
      <CtaSection />
    </>
  );
}
