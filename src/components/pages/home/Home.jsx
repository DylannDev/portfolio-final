import CustomerNeedsSection from "./CustomerNeedsSection/CustomerNeedsSection";
import Hero from "./Hero/Hero";
import ValuesSection from "./ValuesSection/ValuesSection";
import ServicesSection from "./ServicesSection/ServicesSection";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
import MainSkills from "./MainSkills/MainSkills";
import ProjectAhead from "./ProjectAhead/ProjectAhead";

export default function Home() {
  return (
    <div className="fade-in lg:pt-60 pt-44">
      <Hero />
      <ValuesSection />
      <MainSkills />
      <CustomerNeedsSection />
      <hr />
      <ProjectAhead />
      <hr />
      <ServicesSection />
      <hr />
      <TestimonialsSection />
    </div>
  );
}
