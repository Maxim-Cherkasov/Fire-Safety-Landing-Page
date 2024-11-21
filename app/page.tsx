import { HeroCarousel } from "@/components/hero-carousel";
import { GalleryGrid } from "@/components/gallery-grid";
import { PriceTable } from "@/components/price-table";
import { ContactForm } from "@/components/contact-form";
import { Hero } from "@/components/hero";
import { STOSection } from "@/components/sto-section";
import { FireRiskSection } from "@/components/fire-risk-section";
import { Testimonials } from "@/components/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <STOSection />
      <FireRiskSection />
      <Testimonials />
      <ContactForm />
    </>
  );
}