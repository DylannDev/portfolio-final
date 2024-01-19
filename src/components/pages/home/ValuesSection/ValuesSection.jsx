import { ValuesSectionData } from "../../../../data/valuesData/ValuesSectionData";
import Card from "../../../reusable-ui/Card";
import Section from "../../../reusable-ui/Section";
import CallToAction from "../ServicesSection/CallToAction";

export default function ValuesSection() {
  return (
    <Section className="my-16" variant="large">
      <h2 className="font-bold text-6xl text-center mb-20 leading-tight font-title">
        Développons ensemble <br />
        un projet web novateur
        <span className="text-secondary">.</span>
      </h2>
      <div className="grid grid-cols-4 gap-6 text-center">
        {ValuesSectionData.map((quality, index) => (
          <Card key={index} className="p-8 flex flex-col gap-3">
            <div className="flex justify-center text-4xl mb-4">
              <span className="p-4 bg-primary rounded-full text-white">
                {quality.icon}
              </span>
            </div>
            <h3 className="font-bold uppercase font-title">
              {quality.quality}
            </h3>
            <p>{quality.description}</p>
          </Card>
        ))}
      </div>
      <CallToAction variant="skills" />
    </Section>
  );
}
