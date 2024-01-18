import { qualitySectionData } from "../../../../data/QualityData/qualitySectionData";
import Card from "../../../reusable-ui/Card";
import Section from "../../../reusable-ui/Section";
import { PiSealCheckFill } from "react-icons/pi";

export default function QualitySection() {
  return (
    <Section className="mt-16">
      <h2 className="font-extrabold text-6xl text-center mb-20 leading-tight">
        Développons ensemble <br />
        un projet web novateur
        <span className="text-secondary ">.</span>
      </h2>
      <div className="flex justify-between gap-6 text-center">
        {qualitySectionData.map((quality, index) => (
          <Card
            key={index}
            className="hover:scale-105 transition-all p-8 flex flex-col gap-3"
          >
            <div>
              <div className="flex justify-center ">
                <PiSealCheckFill className="text-5xl text-primary" />
              </div>
            </div>
            <h3 className="font-extrabold text-xl capitalize">
              {quality.quality}
            </h3>
            <p>{quality.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
