/* eslint-disable react/no-unescaped-entities */
import Section from "../../../reusable-ui/Section";
import { servicesSectionData } from "../../../../data/servicesData/servicesData";
import CallToAction from "./CallToAction";
import ServicesCard from "./ServicesCard";

export default function ServicesSection() {
  return (
    <Section className="my-16" variant="large">
      <h2 className="font-bold text-3xl sm:text-5xl text-center mb-24 leading-tight font-title">
        Ce que nous pourrions <br /> réaliser ensemble
        <span className="text-secondary ">.</span>
      </h2>
      <div className="mb-16 flex flex-col gap-1">
        <h3 className="text-left text-xl sm:text-2xl font-bold">
          Vous avez une vision, je suis là pour la concrétiser.
        </h3>
        <p className="sm:text-xl text-justify">
          En tant que développeur front-end, ma mission est de transformer des
          concepts de design en interfaces interactives et performantes. Voici
          comment je peux contribuer à votre projet :
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 xl:gap-6 text-center">
        <ServicesCard services={servicesSectionData} />
      </div>
      <CallToAction />
    </Section>
  );
}
