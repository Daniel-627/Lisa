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
      <section className="mt-4 mb-5">
        <QuickActions />
      </section>

      <section className="my-5">
        <AboutSection />
      </section>

      <section className="my-5">
        <ServicesSection />
      </section>

      <section className="my-5">
        <WhyChooseUs />
      </section>

      <section className="my-5">
        <DoctorsSpotlight />
      </section>

      <section className="my-5">
        <Testimonials />
      </section>

      <section className="my-5">
        <NewsSection />
      </section>

      <section className="my-5">
        <InsurancePartners />
      </section>
{/*
      <section className="my-5">
        <CTASection />
      </section>
*/}
    </div>
  );
}
