import CustomerNeedsSection from "./CustomerNeedsSection/CustomerNeedsSection";
import Hero from "./Hero/Hero";
import QualitySection from "./QualitySection/QualitySection";
import Work from "./WorkSection/Work";

import ServicesSection from "./ServicesSection/ServicesSection";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <hr />
      <QualitySection />
      <CustomerNeedsSection />
      <Work />
      <hr />
      <ServicesSection />
      <hr />
      <TestimonialsSection />
    </>
  );
}
