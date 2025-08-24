import HeroCarousel from "./HeroCarousel";
import QuickActions from "./QuickActions";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import WhyChooseUs from "./WhyChooseUs";
import DoctorsSpotlight from "./DoctorsSpotlight";
import Testimonials from "./Testimonials";
import NewsSection from "./NewsSection";
import InsurancePartners from "./InsurancePartners";
import CTASection from "./CTASection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section - Full width */}
      <HeroCarousel />

      {/* Vertically stacked sections */}
      <section className="mt-12 mb-16">
        <QuickActions />
      </section>

      <section className="my-16">
        <AboutSection />
      </section>

      <section className="my-16">
        <ServicesSection />
      </section>

      <section className="my-16">
        <WhyChooseUs />
      </section>

      <section className="my-16">
        <DoctorsSpotlight />
      </section>

      <section className="my-16">
        <Testimonials />
      </section>

      <section className="my-16">
        <NewsSection />
      </section>

      <section className="my-16">
        <InsurancePartners />
      </section>

      <section className="my-16">
        <CTASection />
      </section>

    </div>
  );
}
