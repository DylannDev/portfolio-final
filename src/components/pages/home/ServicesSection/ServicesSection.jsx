/* eslint-disable react/no-unescaped-entities */
import { PiSealCheckFill } from "react-icons/pi";
import Card from "../../../reusable-ui/Card";
import Section from "../../../reusable-ui/Section";
import { qualitySectionData } from "../../../../data/QualityData/qualitySectionData";

export default function ServicesSection() {
  return (
    <Section className="my-16">
      <div className="">
        <h2 className="font-extrabold text-4xl text-center mb-20 leading-tight">
          Ce que nous pourrions réaliser ensemble
          <span className="text-secondary ">.</span>
        </h2>
      </div>
      <div className="flex justify-between gap-6 text-center mb-12">
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
      <p className="text-xl">
        Fort d'une expérience en programmation informatique orienté web de plus
        de 15 ans, mon domaine de compétence s'étend de la réalisation de
        l'identité à l'optimisation de performance (référencement /
        positionnement / vitesse d'affichage).
      </p>
    </Section>
  );
}
