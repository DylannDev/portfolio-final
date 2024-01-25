/* eslint-disable react/no-unescaped-entities */
import { testimonialsData } from "../../../../data/testimonialsData/testimonialsData";
import Section from "../../../reusable-ui/Section";
import Title from "../../../reusable-ui/Title";
import TestimonialsInfos from "./TestimonialsInfos";

export default function TestimonialsSection() {
  return (
    <Section className="mt-16">
      <Title
        label="Avis"
        description="Ce que mes clients pensent de mon travail."
      />
      {testimonialsData.map((testimonial, index) => (
        <TestimonialsInfos key={index} testimonial={testimonial} />
      ))}
    </Section>
  );
}
