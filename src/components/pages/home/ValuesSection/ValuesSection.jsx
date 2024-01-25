import { ValuesSectionData } from "../../../../data/valuesData/ValuesSectionData";
import Section from "../../../reusable-ui/Section";
import CallToAction from "../ServicesSection/CallToAction";
import ValuesCard from "./ValuesCard";

export default function ValuesSection() {
  return (
    <Section className="my-16" variant="large">
      <h2 className="font-bold text-3xl sm:text-5xl text-center mb-20 leading-tight font-title">
        Développons ensemble <br />
        un projet web novateur
        <span className="text-secondary">.</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 text-center">
        {ValuesSectionData.map((quality, index) => (
          <ValuesCard key={index} quality={quality} />
        ))}
      </div>
      <CallToAction variant="skills" />
    </Section>
  );
}
