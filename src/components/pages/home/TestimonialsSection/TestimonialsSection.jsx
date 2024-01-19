/* eslint-disable react/no-unescaped-entities */
import Section from "../../../reusable-ui/Section";
import Title from "../../../reusable-ui/Title";

export default function TestimonialsSection() {
  return (
    <Section className="mt-16">
      <Title
        label="Avis"
        description="Ce que mes clients pensent de mon travail."
      />
      <div className="flex flex-col items-center gap-16">
        <img
          src="/images/mrkicks-fond-noir.jpg"
          alt="logo mr kicks"
          className="w-[100px] rounded-full"
        />
        <p className="text-xl max-w-[700px] text-center">
          “Dylann a intervenu sur toute une section du site et dans la refonte
          du logo de l'entreprise. Il a mené à bien les différentes missions
          confiées en toute autonomie, je recommande !”
        </p>
        <div className="flex flex-col items-center gap-1 text-lg">
          <span className="font-extrabold">Youri Petit</span>
          <span>CEO, Mrkicks.fr</span>
        </div>
      </div>
    </Section>
  );
}
