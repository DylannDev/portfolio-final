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
        <img src="/images/avatar.png" alt="" className="w-[100px] " />
        <p className="text-xl max-w-[700px] text-center">
          “Matt was a real pleasure to work with and we look forward to working
          with him again. He’s definitely the kind of designer you can trust
          with a project from start to finish.”
        </p>
        <div className="flex flex-col items-center gap-1 text-lg">
          <span className="font-extrabold">Youri Petit</span>
          <span>CEO, Mrkicks.fr</span>
        </div>
      </div>
    </Section>
  );
}
