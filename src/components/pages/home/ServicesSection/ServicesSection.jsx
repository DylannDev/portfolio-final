/* eslint-disable react/no-unescaped-entities */
import Section from "../../../reusable-ui/Section";
import { servicesSectionData } from "../../../../data/servicesData/servicesData";
import Title from "../../../reusable-ui/Title";
import CallToAction from "./CallToAction";
import ServicesCard from "./ServicesCard";

export default function ServicesSection() {
  return (
    <Section className="my-16" variant="large">
      <h2 className="font-bold text-6xl text-center mb-24 leading-tight font-title">
        Ce que nous pourrions <br /> réaliser ensemble
        <span className="text-secondary ">.</span>
      </h2>
      <Title
        label="Vous avez une vision, je suis là pour la
        concrétiser"
        description="En tant que développeur front-end, ma mission est de transformer des
        concepts de design en interfaces interactives et performantes. Voici
        comment je peux contribuer à votre projet :"
        className="text-left text-2xl mb-16"
        variant="hidden"
      />
      <div className="grid grid-cols-3 gap-6 text-center">
        <ServicesCard services={servicesSectionData} />
      </div>
      <CallToAction />
    </Section>
  );
}
